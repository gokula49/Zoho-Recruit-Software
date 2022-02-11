import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from '../styles/referrals.module.css';
import { isAutheticated } from './Auth/auth';
import axios,{post} from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { URLS } from './Auth/const';

//backend code for reference

// private String firstName;
// private String lastName;
// private String email;
// private String mobile;
// private String cJobTitle;
// private String currentEmployer;


const style = {
    position: 'absolute',
    left: '25%',
    height: '100%',
    overflow:'scroll',
    width: '50%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  

export default function Referrals() {


    const router = useRouter();
    const {accessToken,comapny_id}=isAutheticated();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
   const [imgid,setImgid] = useState();


    const [coname,setConame] = useState();

    axios.get(`${URLS}/api/company/${comapny_id}`,{ headers: {"Authorization" : `Bearer ${accessToken}`}})
    .then((res)=>{
      setConame(res.data.companyname);
    })

    function handleSubmit(e){
        e.preventDefault();
        const candidatess={
        firstName:e.target.firstName.value,
        lastName:e.target.lastName.value,
        email:e.target.email.value,
        mobile:e.target.mobile.value,
        cJobTitle:e.target.cJobTitle.value,
        currentEmployer:e.target.currentEmployer.value,
        companyName:coname
// private String lastName;
// private String email;
// private String mobile;
// private String cJobTitle;
// private String currentEmployer;

                
            }
            console.log(accessToken);
            axios.post(`${URLS}/api/candidate/${imgid}`,candidatess,{ headers: {"Authorization" : `Bearer ${accessToken}`}})
            .then((res)=>{
              alert("Registered Successfully");
      
      
              const status ={
                          status:"Pending"
                      }
      
              axios.post(`${URLS}/api/assessment/${res.data.id}`,status,{ headers: {"Authorization" : `Bearer ${accessToken}`}})
                          // alert("Thanks")
                      .then((resp)=>{
      
      
              const email = 
                {
                  "to":candidatess.email,
                  "body":` Dear ${candidatess.firstName} ${candidatess.lastName}
        
                  Thank you for your Registration, Soon You will receive Mail 
                  Link for the assessment : ${URLS}/assessmentsignin?asi=${resp.data.id}&csi=${res.data.id}
             All the Best
             `,
                  "sub":"Candidates Confirmation mail"
              }
              
      
              axios.post(`${URLS}/email`,email,{ headers: {"Authorization" : `Bearer ${accessToken}`}})
              .then(()=>{
                alert("email sent Succesfully");
              })
              .catch(()=>{
                alert("Failed to send");
              })
      
            })
            
            }).catch(()=>{
                router.push('/displaycandidates')
              alert("Registered Failed");
        
            })
             
          
    }





  const [file, setFile] = useState({});

  function onFormSubmit(e) {
    e.preventDefault(); // Stop form submit
    fileUpload(file).then((response) => {
      // console.log(response.data.id);
      setImgid(response.data.id);
      alert("File Uploded")
      console.log(imgid);
    });
  }

  function onChange(e) {
    setFile(e.target.files[0]);
  }
  
  function fileUpload(file) {
    // const { accessToken } = isAutheticated();

    const url = `${URLS}/upload`;
    const formData = new FormData();
    formData.append("file", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: `Bearer ${accessToken}`,
      },
    };
    return post(url, formData, config);
  }

    return(
       <div>
           <head>
                <title>Referrals - Hiring Software</title>
            </head>
           <div className={styles.title} style={{marginTop:'200px'}}>
               Referrals
           </div>
           <div className={styles.title} style={{fontSize:'.929rem', fontWeight:'200'}}>
                Track Candidates you have referred for Job Openings.
           </div><br/><br/><br/>
           <input type="button" value="Refer a Candidate" className={styles.btn} onClick={handleOpen}/>

           <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} style={{padding: '0px'}}>
                    <Typography className={styles.topic}>
                      Update Company Information
                    </Typography>
                    <div>
                        <form onSubmit={handleSubmit}  style={{padding:'30px'}}>
                            <section style={{position:'relative',borderStyle:'dashed', borderColor:'##bdc4d1', borderWidth: '1px',backgroundColor:'#f5f6fa', padding:'16px', borderRadius:'6px'}}>
                                <input type="file" name="filename" style={{float:'right'}}/>
                                <a className={styles.img2}></a>
                                <span style={{paddingLeft: '36px',position:'relative'}}>Upload Resume</span><br/>
                                <a style={{position:'relative',paddingLeft: '36px',paddingTop: '4px',color: '#828b99', fontSize: '10px'}}>Supported file types: .doc .docx .odt .html .txt, .rtf .dot and .pdf</a>
                            </section><br/><br/>
                            <div>
                                <h3>Job Recommendation</h3>
                                <div>
                                    <div style={{textAlign:'right'}}>
                                        <span style={{width: "148px",marginRight:'15px', marginBottom:'10px'}}>Reffering the Job</span>
                                        <label style={{marginRight:'15%',border: '1px solid #bdc4d1',minHeight: '35px', width:'60%',borderRadius: '5px', display:'inline-block',cursor: 'pointer'}} >
                                            <div className={styles.box}>
                                                <span className={styles.box1}></span>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div><br/><br/>
                            <div>
                                <h3>Candidate Information</h3>
                                <div>
                                    <div style={{textAlign:'right'}}>
                                        <span style={{width: "148px",marginRight:'15px'}}>First Name</span>
                                        <input type="text" name="firstName" style={{marginRight:'15%',border: '1px solid #bdc4d1',minHeight: '35px', width:'60%',borderRadius: '5px'}} required/>
                                    </div><br/>
                                    <div style={{textAlign:'right'}}>
                                        <span style={{width: "148px",marginRight:'15px'}}>Last Name</span>
                                        <input type="text" name="lastName" style={{marginRight:'15%',border: '1px solid #bdc4d1',minHeight: '35px', width:'60%',borderRadius: '5px'}} required/>
                                    </div><br/>
                                    <div style={{textAlign:'right'}}>
                                        <span style={{width: "148px",marginRight:'15px'}}>Email</span>
                                        <input type="email" name="email" style={{marginRight:'15%',border: '1px solid #bdc4d1',minHeight: '35px', width:'60%',borderRadius: '5px'}} required/>
                                    </div><br/>
                                    <div style={{textAlign:'right'}}>
                                        <span style={{width: "148px",marginRight:'15px'}}>Mobile</span>
                                        <input type="text"  name="mobile" style={{marginRight:'15%',border: '1px solid #bdc4d1',minHeight: '35px', width:'60%',borderRadius: '5px'}} required/>
                                    </div><br/>
                                    <div style={{textAlign:'right'}}>
                                        <span style={{width: "148px",marginRight:'15px'}}>Current Job Title</span>
                                        <input type="text" name="cJobTitle" style={{marginRight:'15%',border: '1px solid #bdc4d1',minHeight: '35px', width:'60%',borderRadius: '5px'}} required/>
                                    </div><br/>
                                    <div style={{textAlign:'right'}}>
                                        <span style={{width: "148px",marginRight:'15px'}}>Current Employer</span>
                                        <input type="text" name="currentEmployer" style={{marginRight:'15%',border: '1px solid #bdc4d1',minHeight: '35px', width:'60%',borderRadius: '5px'}} required/>
                                    </div><br/>
                                </div>
                            </div>
                            <div>
                                <h3>Additional Information</h3>
                                <div>
                                    <div style={{textAlign:'right'}}>
                                        <span style={{width: "148px",marginRight:'15px'}}>Relationship</span>
                                        <select type="text" style={{marginRight:'15%',border: '1px solid #bdc4d1',minHeight: '35px', width:'60%',borderRadius: '5px'}} required>
                                            <option value="none" selected>None</option><option value="Pk">Personally known</option><option value="Fc">Former Colleague</option><option value="Sc">Socially Connected</option><option value="Rc">Got the resume through a common friend</option><option value="Oth">Others</option>
                                        </select>
                                    </div><br/>
                                    <div style={{textAlign:'right'}}>
                                        <span style={{width: "148px",marginRight:'15px'}}>Known period</span>
                                        <select type="text" style={{marginRight:'15%',border: '1px solid #bdc4d1',minHeight: '35px', width:'60%',borderRadius: '5px'}} required>
                                            <option value="none" selected>None</option><option value="less">Less than a year</option><option value="one">1-3 years</option><option value="three">3-5 years</option><option value="fivePlus">5+ years</option>
                                        </select>
                                    </div><br/>
                                    <div style={{textAlign:'right'}}>
                                        <span style={{width: "148px",marginRight:'15px'}}>Notes</span>
                                        <textarea className={styles.txt}></textarea>
                                    </div>
                                </div>
                            </div><br/><br/>
                            <div style={{float:'right'}}>
                                <input type="button" value="Cancel" className={styles.btn1} onClick={handleClose}/>
                                <input type="submit" value="Submit Referral" className={styles.btn2}/>
                            </div><br/><br/>
                        </form>
                    </div>


                    <div>
        <form onSubmit={onFormSubmit}>
        <div className="zb-txn-form item-new">
                  <div className="row">
                    <div className="col-lg-6" style={{textAlign:'center'}}>
                      <div className="row form-group" style={{marginTop:'1rem'}}>
                      <label className="col-form-label col-lg-4" style={{textAlign:'right'}}>
                        <span
                          id="ember1435"
                          className="tooltip-container text-dashed-underline ember-view"
                        >
                          <span className="required">Resume</span>
                        </span>
                      </label>
                      <div className="col-lg-8">
                        <div className="input-group">
                          <input
                            id="ember1436"
                            className="ember-text-field text-left ember-view form-control custom-file-input"
                            type="file"
                            onChange={onChange}
                          />
                          <Button 
                          style={{
                            textTransform: "capitalize",
                            backgroundColor: "#009933",
                            color: "#ffffff",
                            padding: "1px 15px"
                          }}
                          type="submit">Upload</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          {/* <h1>File Upload</h1> */}
          {/* <input type="file" onChange={onChange} />
          <button type="submit">Upload</button> */}
        </form>
      </div>
                </Box>
            </Modal>
       </div>
    );
}