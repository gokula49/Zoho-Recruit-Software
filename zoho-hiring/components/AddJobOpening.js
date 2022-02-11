import Typography from "@mui/material/Typography";
import "bootstrap/dist/css/bootstrap.css";
import IconButton from "@mui/material/IconButton";
import ApartmentIcon from "@mui/icons-material/Apartment";
import ContactsIcon from "@mui/icons-material/Contacts";
import CalculateIcon from "@mui/icons-material/Calculate";
import LockIcon from "@mui/icons-material/Lock";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import InfoIcon from "@mui/icons-material/Info";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import React, { useState } from "react";
import axios, { post } from "axios";
import { isAutheticated } from "./Auth/auth";
import { URLS } from "./Auth/const";

import { trips } from "./Auth/trip";

export default function AddJobOpening() {

  const [imgid,setImgid] = useState();
  // const data = isAutheticated;
  const router = useRouter();
  const [value, setValue] = useState({
    posting_title: "",
    contact_name: "",
    assigned_recruiter: "",
    target_date: "",
    job_opening_status: "",
    industry: "",
    salary: "",
    client_name: "",
    account_manager: "",
    date_opened: "",
    job_type: "",
    work_experience: "",
    skillset: "",
    city: "",
    country: "",
    state_province: "",
    zip_postal_code: "",
    number_of_positions: "",
    expected_revenue: "",
    missed_revenue: "",
    revenue_per_position: "",
    actual_revenue: "",
    job_description: "",
    requirements: "",
    benefits: "",
  });

  const {
    posting_title,
    contact_name,
    assigned_recruiter,
    target_date,
    job_opening_status,
    industry,
    salary,
    client_name,
    account_manager,
    date_opened,
    job_type,
    work_experience,
    skillset,
    city,
    country,
    state_province,
    zip_postal_code,
    number_of_positions,
    expected_revenue,
    missed_revenue,
    revenue_per_position,
    actual_revenue,
    job_description,
    requirements,
    benefits,
  } = value;
  console.log(value);

  const handleChange = (name) => (event) => {
    setValue({ ...value, [name]: event.target.value });
  };

  const { accessToken,comapny_id}=isAutheticated();
  const [coname,setConame] = useState();

  axios.get(`${URLS}/api/company/${comapny_id}`,{ headers: {"Authorization" : `Bearer ${accessToken}`}})
  .then((res)=>{
    setConame(res.data.companyname);
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    // setValues({...values,isclick:true})
    const job = {
      // this.postingTitle = postingTitle;
      // this.contactName = contactName;
      // this.assignedRecruter = assignedRecruter;
      // this.targetDate = targetDate;
      // this.status = status;
      // this.industry = industry;
      // this.salary = salary;
      // this.clientName = clientName;
      // this.accountManager = accountManager;
      // this.dateOpened = dateOpened;
      // this.jobType = jobType;
      // this.workExperience = workExperience;
      // this.skillset = skillset;
      // this.city = city;
      // this.country = country;
      // this.state = state;
      // this.zip = zip;
      // this.jobDesc = jobDesc;
      // this.requirement = requirement;
      // this.benefits = benefits;

      postingTitle: posting_title,
      contactName: contact_name,
      assignedRecruter: assigned_recruiter,
      targetDate: target_date,
      status: job_opening_status,
      industry: industry,
      salary: salary,
      clientName: client_name,
      accountManager: account_manager,
      dateOpened: date_opened,
      jobType: job_type,
      workExperience: work_experience,
      skillset: skillset,
      city: city,
      country: country,
      state: state_province,
      zip: zip_postal_code,
      jobDesc: job_description,
      requirement: requirements,
      benefits: benefits,
      companyName : coname
    };

    // const token = localStorage.getItem("jwt");

    // console.log(data.accessToken);

    //   //ref { headers: {"Authorization" : `Bearer ${token}`} }
    //   axios.post('http://localhost:8080/api/jobopening',
    //   { headers: {"Authorization" : `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJmb29sZGxzZCIsImlhdCI6MTY0MDM1Njg4NywiZXhwIjoxNjQwNDQzMjg3fQ.dEtbvse9AyEOH8bV-p5iTt762ZxvyztJKy_MWwrqS4Yyl4omS2kxGzRqEuYw3fYXToh9SSJS-rX8bRnHsY6GFA`,

    // } },job)
    //     console.log(job);

    trips(job,imgid)
      .then(() => {
        alert("Registered Successfully");
        router.push("/displayjobopenings");
      })
      .catch(() => {
        alert("Registered Failed");
      });
  };

  //ref
  const [file, setFile] = useState({});
  const [imgStatus,setImgStatus] = useState(false);

  function onFormSubmit(e) {
    e.preventDefault(); // Stop form submit
    fileUpload(file).then((response) => {
      // console.log(response.data.id);
      setImgid(response.data.id);
      
      console.log(imgid);
    })
  }

  function onChange(e) {
    setFile(e.target.files[0]);
  }
  
  function fileUpload(file) {

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
                <title>Add Job Opening - Hiring Software</title>
            </head>
      <form
        onSubmit={handleSubmit}
        style={{ width: "150%", overflowY: "auto" }}
      >
        <div style={{ marginTop: "3rem" }}>
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
            className="ember-text-field text-left ember-view form-control"
          >
            <div
              style={{ display: "flex" }}
              className="d-flex justify-content-between"
            >
              <div>
                <Typography style={{ fontSize: "1.3rem" }}>
                  <b>Create Job Opening</b>
                </Typography>
              </div>
              <div>
                <Button
                  style={{
                    textTransform: "capitalize",
                    backgroundColor: "#f2f2f2",
                    color: "#000000",
                    padding: "2px 20px",
                    borderRadius: "6px",
                    border: "1px solid #cccccc",
                  }}
                  onClick={() => { router.push('/displayjobopenings') }}
                >
                  Cancel
                </Button>
                &nbsp;&nbsp;
                <Button
                  style={{
                    textTransform: "capitalize",
                    backgroundColor: "#3399ff",
                    color: "#ffffff",
                    padding: "2px 20px",
                    borderRadius: "6px",
                  }}
                  type="submit"
                >
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ marginLeft: "2rem", marginRight: "2rem", marginTop: "3rem" }}
        >
          <div className="row zb-txn-form">
            <div className="col-lg-8">
              <div style={{ marginTop: "6rem" }}>
                <Typography style={{ fontSize: "1rem" }}>
                  <b>Job Opening Information</b>
                </Typography>
                <br />

                <div className="zb-txn-form item-new">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="row form-group" style={{marginTop:'1rem'}}>
                        <label className="col-form-label col-lg-4" style={{textAlign:'right'}}>
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required">Posting Title</span>
                          </span>
                        </label>
                        <div className="col-lg-8">
                          <div className="input-group">
                            <input
                              id="ember1436"
                              className="ember-text-field text-left ember-view form-control"
                              type="text"
                              name="posting_title"
                              onChange={handleChange("posting_title")}
                              value={value.posting_title}
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
                            <span className="required">Contact Name</span>
                          </span>
                        </label>
                        <div className="col-lg-8">
                          <div className="input-group">
                            <input
                              id="ember1436"
                              className="ember-text-field text-left ember-view form-control"
                              type="text"
                              name="contact_name"
                              onChange={handleChange("contact_name")}
                              value={value.contact_name}
                              required
                            />
                            <div className="input-group-append">
                              <span className="input-group-text">
                                <IconButton color="inherit">
                                  <ContactsIcon
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
                            <span className="required">
                              Assigned Recruiter(s)
                            </span>
                          </span>
                        </label>
                        <div className="col-lg-8">
                          <div className="input-group">
                            <input
                              id="ember1436"
                              className="ember-text-field text-left ember-view form-control"
                              type="text"
                              name="assigned_recruiter"
                              onChange={handleChange("assigned_recruiter")}
                              value={value.assigned_recruiter}
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
                            <span className="required">Target Date</span>
                          </span>
                        </label>
                        <div className="col-lg-8">
                          <div className="input-group">
                            <input
                              id="ember1436"
                              className="ember-text-field text-left ember-view form-control"
                              type="date"
                              name="target_date"
                              onChange={handleChange("target_date")}
                              value={value.target_date}
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
                            <span className="required">Job Opening Status</span>
                          </span>
                        </label>
                        <div className="col-lg-8">
                          <div className="input-group">
                            <select
                              className="form-select"
                              aria-label="Default select example"
                              onChange={handleChange("job_opening_status")}
                              value={value.job_opening_status}
                              required
                            >
                              <option selected>In-progress</option>
                              <option>Waiting for approval</option>
                              <option>On Hold</option>
                              <option>Filled</option>
                              <option>Cancelled</option>
                              <option>Declined</option>
                              <option>Inactive</option>
                              <option>Submitted by client</option>
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
                            <span className="required">Industry</span>
                          </span>
                        </label>
                        <div className="col-lg-8">
                          <div className="input-group">
                            <select
                              className="form-select"
                              aria-label="Default select example"
                              onChange={handleChange("industry")}
                              value={value.industry}
                              required
                            >
                              <option selected>None</option>
                              <option>Communications</option>
                              <option>Technology</option>
                              <option>Government/Military</option>
                              <option>Manufacturing</option>
                              <option>Financial Services</option>
                              <option>Education</option>
                              <option>Pharma</option>
                              <option>Real Estate</option>
                              <option>Consulting</option>
                              <option>Health Care</option>
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
                            <span className="required">Salary</span>
                          </span>
                        </label>
                        <div className="col-lg-8">
                          <div className="input-group">
                            <input
                              id="ember1436"
                              className="ember-text-field text-left ember-view form-control"
                              type="text"
                              name="salary"
                              onChange={handleChange("salary")}
                              value={value.salary}
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      {/* <div className="row form-group" style={{marginTop:'1rem'}}>
                      <label className="col-form-label col-lg-4 required">
                        <span
                          id="ember1441"
                          className="tooltip-container text-dashed-underline ember-view"
                        >
                          Cost Price
                        </span>
                      </label>
                      <div className="col-lg-8">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">INR</span>
                          </div>
                          <input
                            id="ember1442"
                            className="ember-text-field text-left ember-view form-control"
                            type="text"
                            name="purchase_price"
                          />
                        </div>
                      </div>
                    </div> */}
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
                              required
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
                            <span className="required">Account Manager</span>
                          </span>
                        </label>
                        <div className="col-lg-8">
                          <div className="input-group">
                            <input
                              id="ember1436"
                              className="ember-text-field text-left ember-view form-control"
                              type="text"
                              name="account_manager"
                              onChange={handleChange("account_manager")}
                              value={value.account_manager}
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
                            <span className="required">Date Opened</span>
                          </span>
                        </label>
                        <div className="col-lg-8">
                          <div className="input-group">
                            <input
                              id="ember1436"
                              className="ember-text-field text-left ember-view form-control"
                              type="date"
                              name="date_opened"
                              onChange={handleChange("date_opened")}
                              value={value.date_opened}
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
                            <span className="required">Job Type</span>
                          </span>
                        </label>
                        <div className="col-lg-8">
                          <div className="input-group">
                            <select
                              className="form-select"
                              aria-label="Default select example"
                              onChange={handleChange("job_type")}
                              value={value.job_type}
                              required
                            >
                              <option selected>None</option>
                              <option>Full time</option>
                              <option>Part time</option>
                              <option>Temporary</option>
                              <option>Contract</option>
                              <option>Permanent</option>
                              <option>Any</option>
                              <option>Training</option>
                              <option>Volunteer</option>
                              <option>Seasonal</option>
                              <option>Freelance</option>
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
                            <span className="required">Work Experience</span>
                          </span>
                        </label>
                        <div className="col-lg-8">
                          <div className="input-group">
                            <select
                              className="form-select"
                              aria-label="Default select example"
                              onChange={handleChange("work_experience")}
                              value={value.work_experience}
                              required
                            >
                              <option selected>None</option>
                              <option>Fresher</option>
                              <option>0-1 year</option>
                              <option>1-3 year</option>
                              <option>4-5 year</option>
                              <option>5+ year</option>
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
                            <span className="required">Skillset</span>
                          </span>
                        </label>
                        <div className="col-lg-8">
                          <div className="input-group">
                            <select
                              className="form-select"
                              aria-label="Default select example"
                              onChange={handleChange("skillset")}
                              value={value.skillset}
                              required
                            >
                              <option selected>None</option>
                              <option>Accounting</option>
                              <option>Nursing</option>
                              <option>Child Care</option>
                              <option>Sales Execution</option>
                              <option>Marketing</option>
                              <option>Software Development</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />

              <div style={{ marginTop: "2rem" }}>
                <Typography style={{ fontSize: "1rem" }}>
                  <b>Address Information</b>
                </Typography>
                <br />

                <div className="zb-txn-form item-new">
                  <div className="row">
                    <div className="col-lg-6">
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
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />

              {/* <div style={{ marginTop: "2rem" }}>
                <Typography style={{ fontSize: "1rem" }}>
                  <b>Forecast Details</b>
                </Typography>
                <br />

                <div className="zb-txn-form item-new">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="row form-group" style={{marginTop:'1rem'}}>
                        <label className="col-form-label col-lg-4" style={{textAlign:'right'}}>
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required">
                              Number of Positions
                            </span>
                          </span>
                        </label>
                        <div className="col-lg-8">
                          <div className="input-group">
                            <input
                              id="ember1436"
                              className="ember-text-field text-left ember-view form-control"
                              type="text"
                              name="number_of_positions"
                              onChange={handleChange("number_of_positions")}
                              value={value.number_of_positions}
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
                            <span className="required">Expected Revenue</span>
                          </span>
                        </label>
                        <div className="col-lg-8">
                          <div className="input-group">
                            <div className="input-group-append">
                              <span className="input-group-text">
                                <IconButton color="inherit">
                                  <AttachMoneyIcon
                                    style={{ fontSize: "0.7rem" }}
                                  />
                                </IconButton>
                              </span>
                            </div>
                            <input
                              id="ember1436"
                              className="ember-text-field text-left ember-view form-control"
                              type="text"
                              name="expected_revenue"
                              onChange={handleChange("expected_revenue")}
                              value={value.expected_revenue}
                              disabled
                            />
                            <div className="input-group-append">
                              <span className="input-group-text">
                                <IconButton color="inherit">
                                  <LockIcon style={{ fontSize: "0.7rem" }} />
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
                            <span className="required">Missed Revenue</span>
                          </span>
                        </label>
                        <div className="col-lg-8">
                          <div className="input-group">
                            <div className="input-group-append">
                              <span className="input-group-text">
                                <IconButton color="inherit">
                                  <AttachMoneyIcon
                                    style={{ fontSize: "0.7rem" }}
                                  />
                                </IconButton>
                              </span>
                            </div>
                            <input
                              id="ember1436"
                              className="ember-text-field text-left ember-view form-control"
                              type="text"
                              name="missed_revenue"
                              onChange={handleChange("missed_revenue")}
                              value={value.missed_revenue}
                              disabled
                            />
                            <div className="input-group-append">
                              <span className="input-group-text">
                                <IconButton color="inherit">
                                  <LockIcon style={{ fontSize: "0.7rem" }} />
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
                            <span className="required">
                              Revenue per Position
                            </span>
                          </span>
                        </label>
                        <div className="col-lg-8">
                          <div className="input-group">
                            <input
                              id="ember1436"
                              className="ember-text-field text-left ember-view form-control"
                              type="text"
                              name="revenue_per_position"
                              onChange={handleChange("revenue_per_position")}
                              value={value.revenue_per_position}
                            />
                            <div className="input-group-append">
                              <span className="input-group-text">
                                <IconButton color="inherit">
                                  <CalculateIcon
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
                            <span className="required">Actual Revenue</span>
                          </span>
                        </label>
                        <div className="col-lg-8">
                          <div className="input-group">
                            <div className="input-group-append">
                              <span className="input-group-text">
                                <IconButton color="inherit">
                                  <AttachMoneyIcon
                                    style={{ fontSize: "0.7rem" }}
                                  />
                                </IconButton>
                              </span>
                            </div>
                            <input
                              id="ember1436"
                              className="ember-text-field text-left ember-view form-control"
                              type="text"
                              name="actual_revenue"
                              onChange={handleChange("actual_revenue")}
                              value={value.actual_revenue}
                              disabled
                            />
                            <div className="input-group-append">
                              <span className="input-group-text">
                                <IconButton color="inherit">
                                  <LockIcon style={{ fontSize: "0.7rem" }} />
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
              <br /> */}

              <div style={{ marginTop: "2rem" }}>
                <Typography style={{ fontSize: "1rem" }}>
                  <b>Description Information </b>
                </Typography>
                <br />
                <div
                  className="ember-text-field text-left ember-view form-control"
                  style={{
                    padding: "20px",
                    width: "70%",
                    borderRadius: "0.8rem",
                  }}
                >
                  <div style={{ borderWidth: "1px" }}>
                    <div className="zb-txn-form item-new">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label>Job Description</label>
                            <IconButton color="inherit">
                              <InfoIcon style={{ fontSize: "1.2rem" }} />
                            </IconButton>
                            <textarea
                              className="form-control"
                              rows="8"
                              onChange={handleChange("job_description")}
                              value={value.job_description}
                              required
                            ></textarea>
                          </div>
                          <br />
                          <div className="form-group">
                            <label>Requirements</label>
                            <IconButton color="inherit">
                              <InfoIcon style={{ fontSize: "1.2rem" }} />
                            </IconButton>
                            <textarea
                              className="form-control"
                              rows="8"
                              onChange={handleChange("requirements")}
                              value={value.requirements}
                              required
                            ></textarea>
                          </div>
                          <br />
                          <div className="form-group">
                            <label>Benefits</label>
                            <IconButton color="inherit">
                              <InfoIcon style={{ fontSize: "1.2rem" }} />
                            </IconButton>
                            <textarea
                              className="form-control"
                              rows="8"
                              onChange={handleChange("benefits")}
                              value={value.benefits}
                              required
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />

              <div style={{ marginTop: "2rem" }}>
                <Typography style={{ fontSize: "1rem" }}>
                  <b>Attachment Information</b>
                </Typography>
                <br />

                {/* <div className="zb-txn-form item-new">
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
                          />
                        </div>
                      </div>
                    </div> */}
                      {/* <div className="row form-group" style={{marginTop:'1rem'}}>
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
                          <input */}
                      {/* //         id="ember1436"
                    //         className="ember-text-field text-left ember-view form-control custom-file-input"
                    //         type="file"
                    //       />  
                    //     </div>
                    //   </div>
                    // </div> */}
                    {/* </div>
                  </div>
                </div> */}
              </div>

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
                            required
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
                        <small>upload Image Less than 1mb</small>
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
      <br/><br/>
    </div>
  );
}
