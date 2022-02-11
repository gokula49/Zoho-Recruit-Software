import { Button } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "bootstrap/dist/css/bootstrap.css";
import IconButton from '@mui/material/IconButton';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import InfoIcon from "@mui/icons-material/Info";
import Typography from '@mui/material/Typography';
import styles from "../styles/addinterview.module.css";
import { useRouter } from "next/router";
import { isAutheticated } from "./Auth/auth";
import { useState } from "react";
import axios from 'axios'
import { useEffect } from "react";
import useSWR from 'swr'
import {getCompany} from "../components/Auth/trip"
import Router from "next/router";
import { URLS } from "./Auth/const";



export default function Addinterview() {
  const router = useRouter();
  const [num , setNum] = useState();

  const {accessToken,comapny_id} = isAutheticated();

  // const [simple, setSimple] = useState({name:"",email:""});



  // const [candiname, setCandiname] = useState();
  // const [candiemail, setCandiemail] = useState();
  // const [simple , setSimple] = useState();
  // useEffect(()=>{
  //   simplefetch(simple)
  // },[simple])

// const fetcher = async (a) => {
//   const res = await axios.get(`http://localhost:8080/api/candidate/${a}`,{ headers: { Authorization: `Bearer ${accessToken}` } })
//   console.log(response.data)  
//   return response.data
  
// } 


  // const simplefetch =async(a)=>
  //   {
  //    const res = await axios.get(`http://localhost:8080/api/candidate/${a}`,{ headers: { Authorization: `Bearer ${accessToken}` } })
  // setCandiname(res?.data?.firstName)
  // setCandiemail(res?.data?.email)
    

  // }

  // const [jtitle,setJtitle] = useState();

  function handleSubmit(e){
    e.preventDefault();
    // const {comapny_id} = JSON.parse(localStorage.getItem("jwt"));
    // const [cmails,setCamails] = useState();
    // simplefetch(e.target.candidatename.value)
    // let newData = e.target.elements.candidatename.value;
    // getCompany(newData)
    // .then((data)=>{
    //   console.log(data),
    //   // setSimple({name:data.firstName,email:data.email})
    // })
    //   axios.get(`http://localhost:8080/api/candidate/${newData}`,{ headers: { Authorization: `Bearer ${accessToken}` } }).then((data)=>{
    //     console.log(data.data)
    //     setSimple({name:data.data.firstName,email:data.data.email})
    //   })
    //   console.log(simple)

    // setNum(e.target.interviewer.value);
    

    // console.log(num[0].substring(num[0].indexOf(',') + 1));
    // setSimple(e.target.candidatename.value)



    // axios.get(`${URLS}/api/candidate/${e.target.candidatename.value.substring(0,e.target.candidatename.value.indexOf(','))}`,
    // { headers: { Authorization: `Bearer ${accessToken}` } }
  
    // ).then((repo)=>{
    //   setCamails
    // })

    axios.get(`${URLS}/api/candidate/${e.target.candidatename.value.substring(0,e.target.candidatename.value.indexOf(','))}`,
    { headers: { Authorization: `Bearer ${accessToken}` } }
  
    ).then((respp)=>{

  
     
    const interview ={

    
    interviewname : e.target.interviewname.value,
     postingnitle : respp.data.cJobTitle,
    to : e.target.to.value,
    location : e.target.location.value,
    candidatename : e.target.candidatename.value.substring(e.target.candidatename.value.indexOf(',') + 1),
    from : e.target.from.value,
    interviewer : e.target.interviewer.value.substring(e.target.interviewer.value.indexOf(',') + 1),
    schedulecomments : e.target.schedulecomments.value,
    assessmentname : e.target.assessmentname.value,
    interviewstatus:"pending",
    cmail:e.target.candidatename.value.substring(0,e.target.candidatename.value.indexOf(','))
   

    }

  
  console.log("kannan"+ e.target.candidatename.value.substring(0,e.target.candidatename.value.indexOf(',')))
    
  
    // console.log(candiemail)
    // console.log(candiname)
    
   console.log(interview)

  axios.post(`${URLS}/api/interview`,interview,
  { headers: { Authorization: `Bearer ${accessToken}` } }

  ).then((res)=>{

    console.log(res.data)

    axios.get(`${URLS}/api/candidate/${e.target.candidatename.value.substring(0,e.target.candidatename.value.indexOf(','))}`,
    { headers: { Authorization: `Bearer ${accessToken}` } }
  
    ).then((respo)=>{
      console.log(respo);
    

       axios.get(`${URLS}/api/company/${comapny_id}`,
       { headers: { Authorization: `Bearer ${accessToken}` } }

       
       ).then((dataa)=>{

      
    // alert("Saved Successfully")

  
    const email = 
    {
      "to":`${respo.data && respo.data.email}`,
      "body":` Dear ${respo.data.firstName} ${respo.data.lastName} 
      Meet Link: https://meet.google.com/rqj-fzuv-pfo
      HR Round From Time : ${e.target.from.value}
               TO  Time : ${e.target.to.value}

      Interviewer : ${e.target.interviewer.value.substring(e.target.interviewer.value.indexOf(',') + 1)} 
      Position Title : ${respo.data.cJobTitle}

      Any Queries Contact : ${dataa.data.phoneno}

      , Soon You will receive Mail All the Best`,
      "sub":`${dataa.data.companyname} HR Round`
  }


  axios.post(`${URLS}/email`,email,{ headers: {"Authorization" : `Bearer ${accessToken}`}})
  .then(()=>{
    alert("email sent Succesfully");


    const email = 
    {
      "to":`${e.target.interviewer.value.substring(0,e.target.interviewer.value.indexOf(','))}`,
      "body":` Dear ${e.target.interviewer.value.substring(e.target.interviewer.value.indexOf(',') + 1)} 
      Meet Link: https://meet.google.com/rqj-fzuv-pfo
      HR Round From Time : ${e.target.from.value}
               TO  Time : ${e.target.to.value}
      Position Title : ${respo.data.cJobTitle}
      Candidate Name : ${e.target.candidatename.value.substring(e.target.candidatename.value.indexOf(',') + 1)}
      Candidate Number : ${respo.data.mobile && respo.data.mobile}
   
      Resume URI : ${respo.data.resumeuri && respo.data.resumeuri}
     
      , Soon You will receive Mail All the Best`,
      "sub":`${dataa.data.companyname} Interview Round`
  }



  axios.post(`${URLS}/email`,email,{ headers: {"Authorization" : `Bearer ${accessToken}`}})
  .then(()=>{
    alert("email sent Succesfully");
    Router.push('displayinterview')
  })

  })
  .catch(()=>{
    alert("Failed to send");
  })

})


})
     

 



  }).catch(()=>{
    alert("Failed")
  })


   
})


  }


  const [data, setData] = useState()
  useEffect(() => {
    axios.get(
      `${URLS}/api/jobopeningwithfiles`,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    ).then((res)=>{
     //  console.log(res.data[0])
       setData(res.data)
       console.log(data)
   
      })
  }, [])




  const [cdata , setCdata] = useState();

  // const [coname,setConame] = useState();

  useEffect(()=>{

    axios.get(`${URLS}/api/company/${comapny_id}`,{ headers: {"Authorization" : `Bearer ${accessToken}`}})
    .then((res)=>{
      // setConame(res.data.companyname);
      console.log("kannan"+res.data)
  
  //ref
  
  axios.get(
    `${URLS}/api/candidatesbyc/${res.data.companyname}`,
    { headers: { Authorization: `Bearer ${accessToken}` } }
  ).then((resp)=>{
    setCdata(resp.data.filter(employee => employee.assessment == "pass"));
     console.log(resp.data)
  
  })
  
  
  
    })
  },[])


  const [idata, setIdata] = useState()
  useEffect(() => {
    axios.get(
      `${URLS}/api/contacts`,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    ).then((res)=>{
     //  console.log(res.data[0])
     setIdata(res.data)
       console.log(idata)
   
      })
  }, [])

 
 

  // http://localhost:8080/api/candidates
  // const [cdata, setCdata] = useState()







  return (
    <>
            <head>
                <title>Add Interview - Hiring Software</title>
            </head>
      {/* <form>
        <div style={{ width: "100%", backgroundColor: "#f5f6fa" }}>
          <header
            style={{
              marginTop: "50px",
              marginLeft: "1rem",
              marginRight: "2rem",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h3>Create Interview</h3>
            </div>
            <div>
              <Button
                style={{
                  backgroundColor: "#f5f6fa",
                  color: "black",
                  marginTop: "0.5rem",
                  margin: "8px 20px",
                  border: "0.002rem solid black",
                  boxSizing: "border-box",
                }}
              >
                cancel
              </Button>
              <Button
                style={{
                  backgroundColor: "#0279ff",
                  color: "white",
                  marginTop: "0.5rem",
                  margin: "8px 20px",
                }}
              >
                save
              </Button>
            </div>
          </header>
        </div>
        <div style={{ marginLeft: "4rem", marginRight: "6rem" }}>
          <div>
            <h4>Intervie Information</h4>
          </div>

          <div className={styles.topdiv}>
            <div>
              <label>Interview Name</label>
              <select name="choice" className={styles.inputs}>
                <option value="general">General Interview</option>
                <option value="online" selected>
                  Online Interview
                </option>
              </select>
            </div>

            <div style={{position:'relative'}}>
              <label>Candidate Name</label> 
             <i> <AccountCircleIcon style={{position:'absolute',marginLeft:'330',marginTop:'16px' }}/></i><input type="text" className={styles.inputs}></input>
            </div>
          </div>

          <div className={styles.topdiv}>
            <div>
              <label>Posting Title</label>
              <input type="text" className={styles.inputs}></input>
            </div>

            <div>
              <label>From</label>
              <input type="date" style={{width:'200px',height:'35px', marginRight:'20px',marginLeft:'20px'}}></input>
              <input type="time" style={{width:'100px',height:'35px',marginRight:'50px'}}></input>
            </div>
          </div>

          <div className={styles.topdiv}>
          <div>
              <label style={{marginRight:'60px'}}>To</label>
              <input type="date" style={{width:'200px',height:'35px', marginRight:'10px',marginLeft:'20px'}}></input>
              <input type="time" style={{width:'100px',height:'35px',marginRight:'50px'}}></input>
            </div>

            <div>
              <label>Interviewer</label>
              <input type="text" className={styles.inputs}></input>
            </div>
          </div>

          <div className={styles.topdiv}>
            <div>
              <label>Location </label>
              <input type="text" className={styles.inputs}></input>
            </div>

            <div>
              <label>Accessment Name</label>
              <input type="text" className={styles.inputs}></input>
            </div>
          </div>
        </div>
      </form> */}
      <div>
      <form style={{width:"150%"}} onSubmit={handleSubmit}>
        <div style={{marginTop:'3rem' }}>
          <div 
          style={{
            width: "100%",
            overflowX: "hidden",
            padding: "18px 25px",
            backgroundColor: "#f2f2f2",
            borderRadius: "0px",
            position: "fixed",
            zIndex: "1000",
          }}
          className="ember-text-field text-left ember-view form-control">
            <div style={{display:'flex' }} className="d-flex justify-content-between">
              <div>
                <Typography style={{fontSize:'1.3rem'}}>
                  <b>Create Interview</b>
                </Typography>
              </div>
              <div>
                <Button style={{textTransform:'capitalize',backgroundColor:'#f2f2f2',color:'#000000',padding:'2px 20px',borderRadius:'6px',border:'1px solid #cccccc'}}  onClick={() => { router.push('/displayinterview') }} >Cancel</Button>
                &nbsp;&nbsp;
                <Button style={{textTransform:'capitalize',backgroundColor:'#3399ff',color:'#ffffff',padding:'2px 20px',borderRadius:'6px'}} type='submit'>Save</Button>
              </div>
            </div>
          </div>
        </div>
      <div style={{marginLeft:'2rem', marginRight:'2rem', marginTop:'3rem' }}>
        <div className="row zb-txn-form">
          <div className="col-lg-8">
              <div style={{ marginTop: "6rem" }}>
                <Typography style={{fontSize:'1rem'}}>
                  <b>Interview Information</b>
                </Typography>
                <br/>
                  
                <div className="zb-txn-form item-new">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="row form-group" style={{marginTop:'1rem'}}>
                      <label className="col-form-label col-lg-4" style={{textAlign:'right'}}>
                        <span
                          id="ember1435"
                          className="tooltip-container text-dashed-underline ember-view"
                        >
                          <span className="required">Interview Name*</span>
                        </span>
                      </label>
                      <div className="col-lg-8">
                        <div className="input-group">
                            <select className="form-select"
                            name="interviewname"
                            required
                            >
                                <option selected>None</option>
                                <option value="general">General Interview</option>
                                <option value="online">Online Interview</option>
                            </select>
                        </div>
                      </div>
                    </div>

                    <div className="row form-group" style={{marginTop:'1rem'}}>
                    {/* <label className="col-form-label col-lg-4" style={{textAlign:'right'}}>
                        <span
                          id="ember1435"
                          className="tooltip-container text-dashed-underline ember-view"
                        >
                          <span className="required">Posting Tiltle*</span>
                        </span>
                      </label> */}
                {/* <div className="col-lg-8">
                  <select  
                    id="ember557"
                    className="ember-text-field ember-view form-control"
                  
                   
                    label="Posting Title"
                    name="postingnitle"
                    required
                    // onChange={handleChange("customer_name")}
                    // value={values.customer_name}
                   
                  
                    >
                   {
                      data && data.map((option) => (
                          <option
                            key={option.id}
                            value={option.postingTitles}
                           
                    // value={values.customer_name}
                            style={{
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            {option.postingTitles}
                          </option>
                        ))}

                   
                  </select>
                </div> */}
              </div>

                    <div className="row form-group" style={{marginTop:'1rem'}}>
                      <label className="col-form-label col-lg-4" style={{textAlign:'right'}}>
                        <span
                          id="ember1435"
                          className="tooltip-container text-dashed-underline ember-view"
                        >
                          <span className="required">To*</span>
                        </span>
                      </label>
                      <div className="col-lg-8">
                        <div className="input-group">
                          <input
                            id="ember1436"
                            className="ember-text-field text-left ember-view form-control"
                            type="date"
                            name="to"
                            required
                          />
                          &nbsp;&nbsp;&nbsp;
                          <input
                            id="ember1436"
                            className="ember-text-field text-left ember-view form-control"
                            type="time"
                            name="to_time"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row form-group" style={{marginTop:'1rem'}}>
                      <label className="col-form-label col-lg-4" style={{textAlign:'right'}}>
                        <span
                          id="ember1435"
                          className="tooltip-container text-dashed-underline ember-view"
                        >
                          <span className="required">Location</span>
                        </span>
                      </label>
                      <div className="col-lg-8">
                        <div className="input-group">
                          <input
                            id="ember1436"
                            className="ember-text-field text-left ember-view form-control"
                            type="text"
                            name="location"
                            required
                          />
                          <div className="input-group-append">
                            <span className="input-group-text">
                              <IconButton color="inherit">
                                <LocationOnOutlinedIcon style={{fontSize:'0.7rem'}} />
                              </IconButton>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                  <div className="row form-group" style={{marginTop:'1rem'}}>
                  <label className="col-form-label col-lg-4" style={{textAlign:'right'}}>
                        <span
                          id="ember1435"
                          className="tooltip-container text-dashed-underline ember-view"
                        >
                          <span className="required">Candidate Name*</span>
                        </span>
                      </label>
                  <div className="col-lg-8">
                    
                  <select 
                    id="ember557"
                    className="ember-text-field ember-view form-control"
                  
                   
                    label="Candidate Name"
                    name="candidatename"
                    required
                    // onChange={handleChange("customer_name")}
                    // value={values.customer_name}
                   
                    >
            
            {/* var output =  employees.filter(employee => employee.department == "IT");
for(var i=0;i<output.length;i++){
   document.write("<h2>", output[i].name, "</h2>", "<br/>")
}; */}

            
                   {
                      cdata && cdata.map((option) => (
                          <option
                            key={option.id}
                            value={`${option.id}`+','+`${option.firstName}`}
                           
                    // value={values.customer_name}
                            style={{
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            {option.firstName}
                          </option>
                        ))}

                   
                  </select>
            
                      </div>
                    </div>
                    <div className="row form-group" style={{marginTop:'1rem'}}>
                      <label className="col-form-label col-lg-4" style={{textAlign:'right'}}>
                        <span
                          id="ember1435"
                          className="tooltip-container text-dashed-underline ember-view"
                        >
                          <span className="required">From*</span>
                        </span>
                      </label>
                      <div className="col-lg-8">
                        <div className="input-group">
                          <input
                            id="ember1436"
                            className="ember-text-field text-left ember-view form-control"
                            type="date"
                            name="from"
                            required
                          />
                          &nbsp;&nbsp;&nbsp;
                          <input
                            id="ember1436"
                            className="ember-text-field text-left ember-view form-control"
                            type="time"
                            name="from_time"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row form-group" style={{marginTop:'1rem'}}>
                    <label className="col-form-label col-lg-4" style={{textAlign:'right'}}>
                        <span
                          id="ember1435"
                          className="tooltip-container text-dashed-underline ember-view"
                        >
                          <span className="required">Interviewer</span>
                        </span>
                      </label>
                <div className="col-lg-8">
                  <select 
                    id="ember557"
                    className="ember-text-field ember-view form-control"
                  
                   
                    label="Posting Title"
                    name="interviewer"
                    required
                    // onChange={handleChange("customer_name")}
                    // value={values.customer_name}
                   
                  
                    >
                   {
                      idata && idata.map((option) => (
                          <option
                            key={option.id}
                            value={`${option.email}`+','+`${option.firstName}`}
                           
                    // value={values.customer_name}
                            style={{
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            {option.firstName}
                          </option>
                        ))}

                   
                  </select>
                </div>
              </div>
                    <div className="row form-group" style={{marginTop:'1rem'}}>
                      <label className="col-form-label col-lg-4" style={{textAlign:'right'}}>
                        <span
                          id="ember1435"
                          className="tooltip-container text-dashed-underline ember-view"
                        >
                          <span className="required">Schedule Comments</span>
                            <IconButton color="inherit">
                              <InfoIcon style={{ fontSize: "1rem" }} />
                            </IconButton>
                        </span>
                      </label>
                      <div className="col-lg-8">
                        <div className="input-group">
                            <textarea
                              className="form-control" name="schedulecomments"
                              rows="1"
                              required
                            ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="row form-group" style={{marginTop:'1rem'}}>
                      <label className="col-form-label col-lg-4" style={{textAlign:'right'}}>
                        <span
                          id="ember1435"
                          className="tooltip-container text-dashed-underline ember-view"
                        >
                          <span className="required">Assessment Name</span>
                        </span>
                      </label>
                      <div className="col-lg-8">
                        <div className="input-group">
                          <input
                            id="ember1436"
                            className="ember-text-field text-left ember-view form-control"
                            type="text"
                            name="assessmentname"
                            required
                          />
                          <div className="input-group-append">
                            <span className="input-group-text">
                              <IconButton color="inherit">
                                <ListAltOutlinedIcon style={{fontSize:'0.7rem'}} />
                              </IconButton>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            <br/>
            <br/>

            
          </div>
        </div>
      </div>
      </form>
      
    </div>
    </>
  );
}
