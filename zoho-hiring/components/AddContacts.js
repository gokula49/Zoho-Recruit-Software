import React,{useState} from "react";
import { Button } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "bootstrap/dist/css/bootstrap.css";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import IconButton from '@mui/material/IconButton';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import ApartmentIcon from "@mui/icons-material/Apartment";
import InfoIcon from "@mui/icons-material/Info";
import Typography from '@mui/material/Typography';
import styles from "../styles/addinterview.module.css";
import { useRouter } from "next/router";
import { isAutheticated } from "./Auth/auth";
import axios from "axios";
import { URLS } from "./Auth/const";


export default function AddContacts() {

    const router = useRouter();
  const [value, setValue] = useState({
    first_name:"",
    department:"",
    fax:"",
    last_name:"",
    client_name:"",
    email:"",
    job_title:"",
    work_phone:"",
    mobile:"",
    skype_id:"",
    twitter:"",
    secondary_email:"",
    mailing_street:"",
    mailing_city:"",
    mailing_state:"",
    mailing_zip:"",
    mailing_country:"",
    other_street:"",
    other_city:"",
    other_state:"",
    other_zip:"",
    other_country:"",
    source:"",
    contact_owner:"",
    description:"",
    candidate_owner:""
  });

  const {first_name,department,fax,last_name,client_name,email,job_title,work_phone,mobile,skype_id,twitter,secondary_email,mailing_street,mailing_city,mailing_state,mailing_zip,mailing_country,other_street,other_city,other_state,other_zip,other_country,source,contact_owner,description,candidate_owner}=value
  console.log(value)

  const handleChange = name => event => {
    setValue({ ...value,[name]:event.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setValues({...values,isclick:true})
    const contactss={
     
      firstName:first_name,
      email:email,
      phone:mobile,
   
      secondaryEmail:secondary_email,
      lastName:last_name,
      mobile:mobile,
      fax:fax,
          
      }

const {accessToken} = isAutheticated();

      console.log(contactss)
      console.log(accessToken);
      axios.post(`${URLS}/api/contacts`,contactss,{ headers: {"Authorization" : `Bearer ${accessToken}`}})
      .then(()=>{
        alert("Registered Successfully");
      // router.push('/displaycandidates')
      }).catch(()=>{
        alert("Registered Failed");
  
      })
       
    }


  return (
    <>
            <head>
                <title>Add Contact - Hiring Software</title>
            </head>
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
                  <b>Create Contact</b>
                </Typography>
              </div>
              <div>
                <Button style={{textTransform:'capitalize',backgroundColor:'#f2f2f2',color:'#000000',padding:'2px 20px',borderRadius:'6px',border:'1px solid #cccccc'}}  onClick={() => { router.push('/displaycandidates') }} >Cancel</Button>
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
                  <b>Contact Information</b>
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
                          <span className="required">First Name</span>
                        </span>
                      </label>
                      <div className="col-lg-8">
                        <div className="input-group">
                          <div className="input-group-append">
                            <select className="form-select">
                                <option selected>None</option>
                                <option value="1">Mr.</option>
                                <option value="2">Mrs.</option>
                                <option value="3">Ms.</option>
                            </select>
                          </div>
                          <input
                            id="ember1436"
                            className="ember-text-field text-left ember-view form-control"
                            type="text"
                            name="first_name"
                            onChange={handleChange("first_name")}
                            value={value.first_name}
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
                          <span className="required">Department</span>
                        </span>
                      </label>
                      <div className="col-lg-8">
                        <div className="input-group">
                          <input
                            id="ember1436"
                            className="ember-text-field text-left ember-view form-control"
                            type="text"
                            name="department"
                            onChange={handleChange("department")}
                            value={value.department}
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
                          <span className="required">Fax</span>
                        </span>
                      </label>
                      <div className="col-lg-8">
                        <div className="input-group">
                          <input
                            id="ember1436"
                            className="ember-text-field text-left ember-view form-control"
                            type="text"
                            name="fax"
                            onChange={handleChange("fax")}
                            value={value.fax}
                            required
                          />
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
                          <span className="required">Last Name</span>
                        </span>
                      </label>
                      <div className="col-lg-8">
                        <div className="input-group">
                          <input
                            id="ember1436"
                            className="ember-text-field text-left ember-view form-control"
                            type="text"
                            name="last_name"
                            onChange={handleChange("last_name")}
                            value={value.last_name}
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
                            <span className="required">Client Name</span>
                          </span>
                        </label>
                        <div className="col-lg-8">
                          <div className="input-group">
                            <input
                              id="ember1436"
                              className="ember-text-field text-left ember-view form-control"
                              type="text"
                              name="client_name"
                              onChange={handleChange("client_name")}
                              value={value.client_name}
                            />
                            <div className="input-group-append">
                              <span className="input-group-text">
                                <IconButton color="inherit">
                                  <ApartmentIcon
                                    style={{ fontSize: "0.7rem" }}
                                  />
                                </IconButton>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row form-group" style={{marginTop:'1rem'}}>
                      <label className="col-form-label col-lg-4" style={{textAlign:'right'}}>
                        <span
                          id="ember1435"
                          className="tooltip-container text-dashed-underline ember-view"
                        >
                          <span className="required">Email</span>
                        </span>
                      </label>
                      <div className="col-lg-8">
                        <div className="input-group">
                          <input
                            id="ember1436"
                            className="ember-text-field text-left ember-view form-control"
                            type="text"
                            name="email"
                            onChange={handleChange("email")}
                            value={value.email}
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
                          <span className="required">Job Title</span>
                        </span>
                      </label>
                      <div className="col-lg-8">
                        <div className="input-group">
                        <input
                            id="ember1436"
                            className="ember-text-field text-left ember-view form-control"
                            type="text"
                            name="job_title"
                            onChange={handleChange("job_title")}
                            value={value.job_title}
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
                          <span className="required">Work Phone</span>
                        </span>
                      </label>
                      <div className="col-lg-8">
                        <div className="input-group">
                          <input
                            id="ember1436"
                            className="ember-text-field text-left ember-view form-control"
                            type="text"
                            name="work_phone"
                            onChange={handleChange("work_phone")}
                            value={value.work_phone}
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
                          <span className="required">Mobile</span>
                        </span>
                      </label>
                      <div className="col-lg-8">
                        <div className="input-group">
                          <input
                            id="ember1436"
                            className="ember-text-field text-left ember-view form-control"
                            type="text"
                            name="mobile"
                            onChange={handleChange("mobile")}
                            value={value.mobile}
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
                          <span className="required">Skype ID</span>
                        </span>
                      </label>
                      <div className="col-lg-8">
                        <div className="input-group">
                          <input
                            id="ember1436"
                            className="ember-text-field text-left ember-view form-control"
                            type="text"
                            name="skype_id"
                            onChange={handleChange("skype_id")}
                            value={value.skype_id}
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
                          <span className="required">Twitter</span>
                        </span>
                      </label>
                      <div className="col-lg-8">
                        <div className="input-group">
                          <div className="input-group-append">
                            <span className="input-group-text">
                              <IconButton color="inherit">
                                <AlternateEmailIcon style={{fontSize:'0.7rem'}} />
                              </IconButton>
                            </span>
                          </div>
                          <input
                            id="ember1436"
                            className="ember-text-field text-left ember-view form-control"
                            type="text"
                            name="twitter"
                            onChange={handleChange("twitter")}
                            value={value.twitter}
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
                          <span className="required">Secondary Email</span>
                        </span>
                      </label>
                      <div className="col-lg-8">
                        <div className="input-group">
                          <input
                            id="ember1436"
                            className="ember-text-field text-left ember-view form-control"
                            type="text"
                            name="secondary_email"
                            onChange={handleChange("secondary_email")}
                            value={value.secondary_email}
                            required
                          />
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              </div>
            <br/>
            <div style={{ marginTop: "6rem" }}>
                <Typography style={{fontSize:'1rem'}}>
                  <b>Address Information</b>
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
                          <span className="required">Mailing Street</span>
                        </span>
                      </label>
                      <div className="col-lg-8">
                        <div className="input-group">
                          <input
                            id="ember1436"
                            className="ember-text-field text-left ember-view form-control"
                            type="text"
                            name="mailing_street"
                            onChange={handleChange("mailing_street")}
                            value={value.mailing_street}
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
                          <span className="required">Mailing City</span>
                        </span>
                      </label>
                      <div className="col-lg-8">
                        <div className="input-group">
                          <input
                            id="ember1436"
                            className="ember-text-field text-left ember-view form-control"
                            type="text"
                            name="mailing_city"
                            onChange={handleChange("mailing_city")}
                            value={value.mailing_city}
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
                          <span className="required">Mailing State</span>
                        </span>
                      </label>
                      <div className="col-lg-8">
                        <div className="input-group">
                          <input
                            id="ember1436"
                            className="ember-text-field text-left ember-view form-control"
                            type="text"
                            name="mailing_state"
                            onChange={handleChange("mailing_state")}
                            value={value.mailing_state}
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
                          <span className="required">Mailing Zip</span>
                        </span>
                      </label>
                      <div className="col-lg-8">
                        <div className="input-group">
                          <input
                            id="ember1436"
                            className="ember-text-field text-left ember-view form-control"
                            type="text"
                            name="mailing_zip"
                            onChange={handleChange("mailing_zip")}
                            value={value.mailing_zip}
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
                          <span className="required">Mailing Country</span>
                        </span>
                      </label>
                      <div className="col-lg-8">
                        <div className="input-group">
                          <input
                            id="ember1436"
                            className="ember-text-field text-left ember-view form-control"
                            type="text"
                            name="mailing_country"
                            onChange={handleChange("mailing_country")}
                            value={value.mailing_country}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-lg-6">
                    <div className="row form-group" style={{marginTop:'1rem'}}>
                      <label className="col-form-label col-lg-4" style={{textAlign:'right'}}>
                        <span
                          id="ember1435"
                          className="tooltip-container text-dashed-underline ember-view"
                        >
                          <span className="required">Other Street</span>
                        </span>
                      </label>
                      <div className="col-lg-8">
                        <div className="input-group">
                          <input
                            id="ember1436"
                            className="ember-text-field text-left ember-view form-control"
                            type="text"
                            name="other_street"
                            onChange={handleChange("other_street")}
                            value={value.other_street}
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
                          <span className="required">Other City</span>
                        </span>
                      </label>
                      <div className="col-lg-8">
                        <div className="input-group">
                          <input
                            id="ember1436"
                            className="ember-text-field text-left ember-view form-control"
                            type="text"
                            name="other_city"
                            onChange={handleChange("other_city")}
                            value={value.other_city}
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
                          <span className="required">Other State</span>
                        </span>
                      </label>
                      <div className="col-lg-8">
                        <div className="input-group">
                          <input
                            id="ember1436"
                            className="ember-text-field text-left ember-view form-control"
                            type="text"
                            name="other_state"
                            onChange={handleChange("other_state")}
                            value={value.other_state}
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
                          <span className="required">Other Zip</span>
                        </span>
                      </label>
                      <div className="col-lg-8">
                        <div className="input-group">
                          <input
                            id="ember1436"
                            className="ember-text-field text-left ember-view form-control"
                            type="text"
                            name="other_zip"
                            onChange={handleChange("other_zip")}
                            value={value.other_zip}
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
                          <span className="required">Other Country</span>
                        </span>
                      </label>
                      <div className="col-lg-8">
                        <div className="input-group">
                          <input
                            id="ember1436"
                            className="ember-text-field text-left ember-view form-control"
                            type="text"
                            name="other_country"
                            onChange={handleChange("other_country")}
                            value={value.other_country}
                          />
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
              </div>
            <br/>
            <div style={{ marginTop: "6rem" }}>
                <Typography style={{fontSize:'1rem'}}>
                  <b>Other Info</b>
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
                          <span className="required">Source</span>
                        </span>
                      </label>
                      <div className="col-lg-8">
                        <div className="input-group">
                          <select className="form-select" aria-label="Default select example"
                          onChange={handleChange("source")}
                          value={value.source}
                          >
                            <option>None</option>
                            <option selected>Added by User</option>
                            <option>Advertisement</option>
                            <option>API</option>
                            <option>CareerSite</option>
                            <option>Employee Referral</option>
                            <option>Facebook</option>
                            <option>Google import</option>
                            <option>Internal</option>
                            <option>Partner</option>
                            <option>Resume Inbox</option>
                            <option>Search Engine</option>
                            <option>Twitter</option>
                            <option>Imported from Zoho CRm</option>
                            <option>Indeed Resume</option>
                            <option>CareerSite - Chatbot</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row form-group" style={{marginTop:'1rem'}}>
                      <label className="col-form-label col-lg-4" style={{textAlign:'right'}}>
                        <span
                          id="ember1435"
                          className="tooltip-container text-dashed-underline ember-view"
                        >
                          <span className="required">Is primary contact</span>
                        </span>
                      </label>
                      <div className="col-lg-8">
                        <div className="input-group">
                          <input 
                            type="checkbox" 
                            className="form-check-input"
                            // onChange={handleChange("email_opt_out")}
                            // value={value.EmailOptOut}
                          />
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
                          <span className="required">Contact Owner</span>
                        </span>
                      </label>
                      <div className="col-lg-8">
                        <div className="input-group">
                          <input
                            id="ember1436"
                            className="ember-text-field text-left ember-view form-control"
                            type="text"
                            name="contact_owner"
                            onChange={handleChange("contact_owner")}
                            value={value.contact_owner}
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
                          <span className="required">Email Opt Out</span>
                        </span>
                      </label>
                      <div className="col-lg-8">
                        <div className="input-group">
                          <input 
                            type="checkbox" 
                            class="form-check-input"
                            // onChange={handleChange("email_opt_out")}
                            // value={value.EmailOptOut}
                          />
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
              </div>
            <br/>

            <div style={{ marginTop: "6rem" }}>
                <Typography style={{fontSize:'1rem'}}>
                  <b>Description Information</b>
                </Typography>
                <br/>
                  
                <div className="zb-txn-form item-new">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="row form-group" style={{marginTop:'1rem'}}>
                      <label className="col-form-label col-lg-3" style={{textAlign:'right'}}>
                        <span
                          id="ember1435"
                          className="tooltip-container text-dashed-underline ember-view"
                        >
                          <span className="required">Description</span>
                        </span>
                      </label>
                      <div className="col-lg-8">
                        <div className="input-group">
                            <textarea className="form-control" rows="1"
                            onChange={handleChange("description")}
                            value={value.description}
                            >
                            </textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            <br/>

            
            <br/><br/>

            
          </div>
        </div>
      </div>
      </form>
      
    </div>
    </>
  );
}
