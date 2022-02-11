import React, { useState } from 'react'
import axios, { post } from 'axios';
import { isAutheticated } from './Auth/auth';
import { URLS } from './Auth/const';

// class SimpleReactFileUpload extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state ={
//       file:null
//     }
//     this.onFormSubmit = this.onFormSubmit.bind(this)
//     this.onChange = this.onChange.bind(this)
//     this.fileUpload = this.fileUpload.bind(this)
//   }

//   onFormSubmit(e){
//     e.preventDefault() // Stop form submit
//     this.fileUpload(this.state.file).then((response)=>{
//       console.log(response.data);
//     })
//   }

//   onChange(e) {
//     this.setState({file:e.target.files[0]})
//   }

//   fileUpload(file){
//     const { accessToken } = isAutheticated();

// 	const url = 'http://localhost:8080/upload';
//     const formData = new FormData();
//     formData.append('file',file)
//     const config = {
//         headers: {
//             'content-type': 'multipart/form-data',
// 			'Authorization':`Bearer ${accessToken}`
//         }
//     }
//     return  post(url, formData,config)
//   }

//   render() {
//     return (
//       <form onSubmit={this.onFormSubmit}>
//         <h1>File Upload</h1>
//         <input type="file" onChange={this.onChange} />
//         <button type="submit">Upload</button>
//       </form>
//    )
//   }
// }

// export default SimpleReactFileUpload


function Addimg(props) {
const [file,setFile] = useState({});



  function onFormSubmit(e){
    e.preventDefault() // Stop form submit
    fileUpload(file).then((response)=>{
      console.log(response.data);
    })
  }

  function onChange(e){
    setFile(e.target.files[0])
  }

  function fileUpload(file){
    const { accessToken } = isAutheticated();

	const url = `${URLS}/upload`;
    const formData = new FormData();
    formData.append('file',file)
    const config = {
        headers: {
            'content-type': 'multipart/form-data',
			'Authorization':`Bearer ${accessToken}`
        }
    }
    return  post(url, formData,config)
  }


	return (
		<div>
			<form onSubmit={onFormSubmit}>
              {/* <h1>File Upload</h1> */}
             <input type="file" onChange={onChange} />
             <button type="submit">Upload</button>
           </form>
		</div>
	)
}

export default Addimg;

