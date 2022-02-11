import Typography from '@mui/material/Typography';
import "bootstrap/dist/css/bootstrap.css";
import React,{useState} from "react";
import IconButton from '@mui/material/IconButton';
import CalculateIcon from '@mui/icons-material/Calculate';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Button from '@mui/material/Button';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { useRouter } from "next/router";
import axios,{post} from 'axios';
import { isAutheticated } from './Auth/auth';
import { URLS } from './Auth/const';


export default function AddCandidates({ids}) {
  console.log(ids)
   const { accessToken}=isAutheticated();
   const [imgid,setImgid] = useState();

  const router = useRouter();
  const [value, setValue] = useState({
    email:"",
    phone:"",
    website:"",
    secondary_email:"",
    first_name:"",
    last_name:"",
    mobile:"",
    fax:"",
    street:"",
    city:"",
    country:"",
    zip_postal_code:"",
    state_province:"",
    experience_in_years:"",
    current_job_title:"",
    expected_salary:"",
    skill_set:"",
    skype_id:"",
    highest_qualification_held:"",
    current_employer:"",
    current_salary:"",
    additional_info:"",
    twitter:"",
    candidate_status:"",
    candidate_owner:"",
    source:""
  });

  const {email,phone,website,secondary_email,first_name,last_name,mobile,fax,street,city,country,zip_postal_code,state_province,experience_in_years,current_job_title,expected_salary,skill_set,skype_id,highest_qualification_held,current_employer,current_salary,additional_info,twitter,candidate_status,candidate_owner,source}=value
  console.log(value)

  const handleChange = name => event => {
    setValue({ ...value,[name]:event.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setValues({...values,isclick:true})
    const candidatess={
     
      firstName:first_name,
      email:email,
      phone:mobile,
      website:website,
      secondaryEmail:secondary_email,
      lastName:last_name,
      mobile:phone,
      fax:fax,
  
      street:street,
      state:state_province,
      country:country,
      city:city,
      zip:zip_postal_code,
   
      expInYrs:experience_in_years,
      cJobTitle:current_job_title,
      expectedSalary:expected_salary,
      skillSet:skill_set,
      skypeId:skype_id,
      hQualification:highest_qualification_held,
      currentEmployer:current_employer,
      currentSalary:current_salary,
      additionalInfo:additional_info,
      twitter:twitter,
      candidateStatus:candidate_status,
      source:source
          
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
  console.log(resp)
          const email = 
          {
            "to":candidatess.email,
            "body":` Dear ${candidatess.firstName} ${candidatess.lastName}
  
            Thank You for your Registrartion,
            Complete the Assessment to attend the next Round
              
          Link for the assessment : https://zoho-hiring-beige.vercel.app/assessmentsignin?asi=${resp.data.id}&csi=${res.data.id}

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
      router.push('/thanku')
          
        })


      
      }).catch(()=>{
        alert("Registered Failed");
  
      })
       
    }




  const [file, setFile] = useState({});

  function onFormSubmit(e) {
    e.preventDefault(); // Stop form submit
    fileUpload(file).then((response) => {
      // console.log(response.data.id);
      setImgid(response.data.id);
      console.log(imgid);
    });
  }

  function onChange(e) {
    setFile(e.target.files[0]);
  }
  
  function fileUpload(file) {
    const { accessToken } = isAutheticated();

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

    



  return (
    <div>
            <head>
                <title>Apply Candidate - Hiring Software</title>
            </head>
      <form onSubmit={handleSubmit} style={{width:"150%"}}>
        <div>
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
                  <b>Apply Candidate</b>
                </Typography>
              </div>
              <div>
                <Button style={{textTransform:'capitalize',backgroundColor:'#f2f2f2',color:'#000000',padding:'2px 20px',borderRadius:'6px',border:'1px solid #cccccc'}}  onClick={() => { router.push('/displaycandidates') }} >Cancel</Button>
                &nbsp;&nbsp;
                <Button style={{textTransform:'capitalize',backgroundColor:'#3399ff',color:'#ffffff',padding:'2px 20px',borderRadius:'6px'}} type='submit'>Apply</Button>
              </div>
            </div>
          </div>
        </div>
      <div style={{marginLeft:'2rem', marginRight:'2rem', marginTop:'3rem' }}>
        <div className="row zb-txn-form">
          <div className="col-lg-8">
              <div>
                <Typography style={{fontSize:'1rem'}}>
                  <b>Basic Info</b>
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
                          <span className="required">Phone</span>
                        </span>
                      </label>
                      <div className="col-lg-8">
                        <div className="input-group">
                          <input
                            id="ember1436"
                            className="ember-text-field text-left ember-view form-control"
                            type="text"
                            name="phone"
                            onChange={handleChange("phone")}
                            value={value.phone}
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
                          <span className="required">Website</span>
                        </span>
                      </label>
                      <div className="col-lg-8">
                        <div className="input-group">
                          <input
                            id="ember1436"
                            className="ember-text-field text-left ember-view form-control"
                            type="text"
                            name="website"
                            onChange={handleChange("website")}
                            value={value.website}
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
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            <br/>

            <div style={{ marginTop: "2rem" }}>
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
                          <span className="required">Street</span>
                        </span>
                      </label>
                      <div className="col-lg-8">
                        <div className="input-group">
                          <input
                            id="ember1436"
                            className="ember-text-field text-left ember-view form-control"
                            type="text"
                            name="street"
                            onChange={handleChange("street")}
                            value={value.street}
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
                          <span className="required">City</span>
                        </span>
                      </label>
                      <div className="col-lg-8">
                        <div className="input-group">
                          <input
                            id="ember1436"
                            className="ember-text-field text-left ember-view form-control"
                            type="text"
                            name="city"
                            onChange={handleChange("city")}
                            value={value.city}
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
                          <span className="required">Country</span>
                        </span>
                      </label>
                      <div className="col-lg-8">
                        <div className="input-group">
                          <input
                            id="ember1436"
                            className="ember-text-field text-left ember-view form-control"
                            type="text"
                            name="country"
                            onChange={handleChange("country")}
                            value={value.country}
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
                          <span className="required">Zip/Postal Code</span>
                        </span>
                      </label>
                      <div className="col-lg-8">
                        <div className="input-group">
                          <input
                            id="ember1436"
                            className="ember-text-field text-left ember-view form-control"
                            type="text"
                            name="zip_postal_code"
                            onChange={handleChange("zip_postal_code")}
                            value={value.zip_postal_code}
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
                          <span className="required">State/Province</span>
                        </span>
                      </label>
                      <div className="col-lg-8">
                        <div className="input-group">
                          <input
                            id="ember1436"
                            className="ember-text-field text-left ember-view form-control"
                            type="text"
                            name="state_province"
                            onChange={handleChange("state_province")}
                            value={value.state_province}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br/>

            <div style={{ marginTop: "2rem" }}>
                <Typography style={{fontSize:'1rem'}}>
                  <b>Professional Details</b>
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
                          <span className="required">Experience in Years</span>
                        </span>
                      </label>
                      <div className="col-lg-8">
                        <div className="input-group">
                          <input
                            id="ember1436"
                            className="ember-text-field text-left ember-view form-control"
                            type="text"
                            name="experience_in_years"
                            onChange={handleChange("experience_in_years")}
                            value={value.experience_in_years}
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
                          <span className="required">Current Job Title</span>
                        </span>
                      </label>
                      <div className="col-lg-8">
                        <div className="input-group">
                          <select className="form-select" aria-label="Default select example"
                          onChange={handleChange("current_job_title")}
                          value={value.current_job_title}
                          >
                            <option selected>None</option>
                            <option>Fresher</option>
                            <option>Project-Lead</option>
                            <option>Project-Manager</option>
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
                          <span className="required">Expected Salary</span>
                        </span>
                      </label>
                      <div className="col-lg-8">
                        <div className="input-group">
                          <input
                            id="ember1436"
                            className="ember-text-field text-left ember-view form-control"
                            type="text"
                            name="expected_salary"
                            onChange={handleChange("expected_salary")}
                            value={value.expected_salary}
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
                          <span className="required">Skill Set</span>
                        </span>
                      </label>
                      <div className="col-lg-8">
                        <div className="input-group">
                          <input
                            id="ember1436"
                            className="ember-text-field text-left ember-view form-control"
                            placeholder="Add Skills"
                            type="text"
                            name="skill_set"
                            onChange={handleChange("skill_set")}
                            value={value.skill_set}
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
                  </div>

                  <div className="col-lg-6">
                  <div className="row form-group" style={{marginTop:'1rem'}}>
                      <label className="col-form-label col-lg-4" style={{textAlign:'right'}}>
                        <span
                          id="ember1435"
                          className="tooltip-container text-dashed-underline ember-view"
                        >
                          <span className="required">Highest Qualification Held</span>
                        </span>
                      </label>
                      <div className="col-lg-8">
                        <div className="input-group">
                          <select className="form-select" aria-label="Default select example"
                          onChange={handleChange("highest_qualification_held")}
                          value={value.highest_qualification_held}
                          >
                            <option selected>None</option>
                            <option>M.C.A.</option>
                            <option>B.E</option>
                            <option>B.SC.</option>
                            <option>M.S.</option>
                            <option>B.Tech</option>
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
                          <span className="required">Current Employer</span>
                        </span>
                      </label>
                      <div className="col-lg-8">
                        <div className="input-group">
                          <input
                            id="ember1436"
                            className="ember-text-field text-left ember-view form-control"
                            type="text"
                            name="current_employer"
                            onChange={handleChange("current_employer")}
                            value={value.current_employer}
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
                          <span className="required">Current Salary</span>
                        </span>
                      </label>
                      <div className="col-lg-8">
                        <div className="input-group">
                          <div className="input-group-append">
                            <span className="input-group-text">
                              <IconButton color="inherit">
                                <AttachMoneyIcon style={{fontSize:'0.7rem'}} />
                              </IconButton>
                            </span>
                          </div>
                          <input
                            id="ember1436"
                            className="ember-text-field text-left ember-view form-control"
                            type="text"
                            name="current_salary"
                            onChange={handleChange("current_salary")}
                            value={value.current_salary}
                          />
                          <div className="input-group-append">
                            <span className="input-group-text">
                              <IconButton color="inherit">
                                <CalculateIcon style={{fontSize:'0.7rem'}} />
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
                          <span className="required">Additional Info</span>
                        </span>
                      </label>
                      <div className="col-lg-8">
                        <div className="input-group">
                            <textarea className="form-control" rows="1"
                            onChange={handleChange("additional_info")}
                            value={value.additional_info}
                            >
                            </textarea>
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
                  </div>
                </div>
              </div>
            </div>
            <br/>

            <div style={{ marginTop: "2rem" }}>
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
                          <span className="required">Candidate Status</span>
                        </span>
                      </label>
                      <div className="col-lg-8">
                        <div className="input-group">
                          <select className="form-select" aria-label="Default select example"
                          onChange={handleChange("candidate_status")}
                          value={value.candidate_status}
                          >
                            <option selected>New</option>
                            <option>In Review</option>
                            <option>Qualified</option>
                            <option>Unqualified</option>
                            <option>Junk Candidate</option>
                            <option>Contacted</option>
                            <option>Contact in Future</option>
                            <option>Not Contacted</option>
                            <option>Attempted to Contact</option>
                            <option>Reviewed</option>
                            <option>Contacted</option>
                            <option>Converted - Employee</option>
                            <option>Converted - Temp</option>
                            <option>Forward-to-Onboarding</option>
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
                          <span className="required">Candidate Owner</span>
                        </span>
                      </label>
                      <div className="col-lg-8">
                        <div className="input-group">
                          <input
                            id="ember1436"
                            className="ember-text-field text-left ember-view form-control"
                            type="text"
                            name="candidate_owner"
                            onChange={handleChange("candidate_owner")}
                            value={value.candidate_owner}
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
                          <span className="required">Email Opt Out</span>
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
                </div>
              </div>
            </div>
            <br/>
        
            
            {/* <div>
                <Typography style={{fontSize:'1rem'}}>
                  <b>Attachment Information</b>
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
                          <span className="required">Resume</span>
                        </span>
                      </label>
                      <div className="col-lg-8">
                        <div className="input-group">
                          <input
                            id="ember1436"
                            className="ember-text-field text-left ember-view form-control custom-file-input"
                            type="file"
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
                          <span className="required">Formatted Resume</span>
                        </span>
                      </label>
                      <div className="col-lg-8">
                        <div className="input-group">
                          <input
                            id="ember1436"
                            className="ember-text-field text-left ember-view form-control custom-file-input"
                            type="file"
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
                          <span className="required">Cover Letter</span>
                        </span>
                      </label>
                      <div className="col-lg-8">
                        <div className="input-group">
                          <input
                            id="ember1436"
                            className="ember-text-field text-left ember-view form-control custom-file-input"
                            type="file"
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
                          <span className="required">Others</span>
                        </span>
                      </label>
                      <div className="col-lg-8">
                        <div className="input-group">
                          <input
                            id="ember1436"
                            className="ember-text-field text-left ember-view form-control custom-file-input"
                            type="file"
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
                          <span className="required">Offer</span>
                        </span>
                      </label>
                      <div className="col-lg-8">
                        <div className="input-group">
                          <input
                            id="ember1436"
                            className="ember-text-field text-left ember-view form-control custom-file-input"
                            type="file"
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
                          <span className="required">Contracts</span>
                        </span>
                      </label>
                      <div className="col-lg-8">
                        <div className="input-group">
                          <input
                            id="ember1436"
                            className="ember-text-field text-left ember-view form-control custom-file-input"
                            type="file"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div> */}
            <br/><br/><br/><br/>

            
          </div>
        </div>
      </div>
      </form>

      <div>
        <form onSubmit={onFormSubmit}>
        <div className="zb-txn-form item-new">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="row form-group" style={{marginTop:'1rem'}}>
                      <label className="col-form-label col-lg-4" style={{textAlign:'right'}}>
                        <span
                          id="ember1435"
                          className="tooltip-container text-dashed-underline ember-view"
                        >
                          <span className="required">Job Summary</span>
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




      
    </div>
  );
}