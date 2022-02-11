import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import "bootstrap/dist/css/bootstrap.css";
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import IconButton from '@mui/material/IconButton';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import styles from '../styles/dashboard.module.css';
import TimeZone from "./timeZone";
import Country from "./Country";
import { styled } from '@mui/material/styles';
import { isAutheticated } from './Auth/auth';

const style = {
  position: 'absolute',
  top: '30%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '65%',
  height: '60%',
  bgcolor: 'background.paper',
};

const Input = styled('input')({
  display: 'none',
});

export default function Home() {
    const [open, setOpen] = React.useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const {username}=isAutheticated();
    return (
    <>
            <head>
                <title>Home - Hiring Software</title>
            </head>
        <div style={{marginTop:'3rem',backgroundColor:'#f2f2f2' }}>
          <div style={{width:'100%', padding:'7px 25px',backgroundColor:'#fff',borderRadius:'0px'}} className="ember-text-field text-left ember-view form-control">
            <div style={{display:'flex'}} className="d-flex justify-content-between">
              <div>
                {/* <Modal
                  open={open}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                  
                >
                  <Box sx={style} style={{padding: '0px'}}>
                    <Typography className={styles.title}>
                      Update Company Information
                    </Typography>
                    <div style={{padding: '30px'}}>
                      <form  style={{position: 'absolute', marginLeft: '20%',color: '#666',fontSize: '0.93rem',  marginRight:'80px'}}>
                        <div>
                          <span>Company Name</span>
                          <input type="text" name='cName' style={{marginLeft:'10px',border:'1px solid', float:'right', width:'80%'}} required/>
                        </div>
                        <div style={{marginTop:'20px'}}>
                          <span>Phone</span>
                          <input type="text" name='phone' style={{marginLeft:'10px',border:'1px solid', float:'right', width:'80%'}} required/>
                        </div>
                        <div style={{marginTop:'20px'}}>
                          <span>Website</span>
                          <input type="text" name='website' style={{marginLeft:'10px',border:'1px solid', float:'right', width:'80%'}} required/>
                        </div>
                        <div style={{marginTop:'20px'}}>
                          <span>Time Zone</span>
                          <TimeZone />
                        </div>
                        <div style={{marginTop:'20px'}}>
                          <span>Currency Locale</span>
                          <Country />
                        </div><br/><br/>
                        <button className={styles.btn1} onClick={handleClose}>Explore ZOHO Recruit</button>
                        <button className={styles.btn2} onClick={handleClose}>Explore Using Sample Data</button>
                      </form> */}
                      {/* <div>
                        <img src='https://recruit.zoho.eu/images/companylogonew.svg' alt='company logo' style={{width:'100px',height:'100px', cursor:'pointer'}}></img> <br/>
                        <label htmlFor="contained-button-file">
                          <Input accept="image/*" id="contained-button-file" multiple type="file" />
                          <Typography style={{color: '#5993c1', fontSize: '12px', marginTop: '10px', cursor:'pointer'}}>Upload Your Logo</Typography>
                        </label>
                      </div>
                    </div>
                  </Box>
                </Modal> */}

                <Typography style={{fontSize:'1.3rem'}}>
                  <b>Welcome {username}</b>
                </Typography>
              </div>
              <div>
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <PhoneIphoneIcon style={{color:'red'}}/>
                    <Typography style={{fontSize:'1rem'}}>
                        Get Mobile App
                    </Typography>
                </IconButton>
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 1 }}>
                    <RefreshIcon />
                </IconButton>
              </div>
            </div>
          </div>
          {/* <div style={{padding: '20px'}}>
            <div className={styles.box1}>
              <div>
                <div>
                  <div style={{display: 'inline-block', fontWeight:'600'}}>Hiring Pipeline</div>
                  <a className={styles.expand}></a>
                </div>
                <div style={{textAlign:'center'}}>
                  <br/><br/><br/>
                  <h6 style={{color: '#666', fontWeight:'300'}}>No Records found in this view.</h6>
                </div>
              </div>
            </div>
            <div style={{display: 'block'}}>
              <div className={styles.box2}>
                <div>
                  <div>
                    <div style={{display: 'inline-block', fontWeight:'600'}}>Time-to-fill</div>
                    <a className={styles.ibutton}></a>
                    <a className={styles.expand}></a>
                    <br/><br/>
                    <div style={{float:'left'}}>
                      <ul className={styles.ul1}>
                        <li className={styles.li1} style={{backgroundColor:'#ddd'}}><a className={styles.a1}>Job Opening</a></li>
                        <li className={styles.li1}><a className={styles.a1}>Department</a></li>
                      </ul>
                    </div>
                    <div style={{float:'right'}}>
                      <div style={{display:'inline-block'}}>
                        <select style={{padding:'5px'}}>
                          <option value="0" selected>All Users</option>   
                        </select>
                      </div>
                      <div style={{display:'inline-block', marginLeft:'10px'}}>
                        <select style={{padding:'5px'}}>
                          <option value="0" selected>Any time</option>
                          <option value="1">Today</option>
                          <option value="2">Yesterday</option>    
                          <option value="3">This Week</option>    
                          <option value="4">Last Week</option>    
                          <option value="5">Last 15 Days</option>    
                          <option value="7">Last 30 Days</option>    
                          <option value="6">This Month</option>    
                          <option value="8">Last Month</option>    
                          <option value="9">Last 90 Days</option>   
                        </select>
                      </div>
                    </div>
                  </div>
                  <div style={{textAlign:'center'}}>
                    <br/><br/><br/><br/><br/>
                    <h6 style={{color: '#666',fontWeight:'300'}}>No Records found</h6>
                  </div>
                </div>
              </div>
              <div className={styles.box2} style={{marginLeft:'25px'}}>
                <div>
                  <div>
                    <div style={{display: 'inline-block', fontWeight:'600'}}>Time-to-hire</div>
                    <a className={styles.ibutton}></a>
                    <a className={styles.expand}></a>
                    <br/><br/>
                    <div style={{float:'left'}}>
                      <ul className={styles.ul1}>
                        <li className={styles.li1} style={{backgroundColor:'#ddd'}}><a className={styles.a1}>Job Opening</a></li>
                        <li className={styles.li1}><a className={styles.a1}>Department</a></li>
                      </ul>
                    </div>
                    <div style={{float:'right'}}>
                      <div style={{display:'inline-block'}}>
                        <select style={{padding:'5px'}}>
                          <option value="0" selected>All Users</option>   
                        </select>
                      </div>
                      <div style={{display:'inline-block', marginLeft:'10px'}}>
                        <select style={{padding:'5px'}}>
                          <option value="0" selected>Any time</option>
                          <option value="1">Today</option>
                          <option value="2">Yesterday</option>    
                          <option value="3">This Week</option>    
                          <option value="4">Last Week</option>    
                          <option value="5">Last 15 Days</option>    
                          <option value="7">Last 30 Days</option>    
                          <option value="6">This Month</option>    
                          <option value="8">Last Month</option>    
                          <option value="9">Last 90 Days</option>   
                        </select>
                      </div>
                    </div>
                  </div>
                  <div style={{textAlign:'center'}}>
                    <br/><br/><br/><br/><br/>
                    <h6 style={{color: '#666', fontWeight:'300'}}>No Records found</h6>
                  </div>
                </div>
              </div>
            </div>
            <div style={{display: 'block'}}>
              <div className={styles.box2}>
                <div>
                  <div>
                    <div style={{display: 'inline-block', fontWeight:'600'}}>Age of Job</div>
                    <a className={styles.ibutton}></a>
                    <a className={styles.expand}></a>
                    <br/><br/>
                    <div style={{float:'left'}}>
                      <ul className={styles.ul1}>
                        <li className={styles.li1} style={{backgroundColor:'#ddd'}}><a className={styles.a1}>Job Opening</a></li>
                        <li className={styles.li1}><a className={styles.a1}>Department</a></li>
                      </ul>
                    </div>
                    <div style={{float:'right'}}>
                      <div style={{display:'inline-block'}}>
                        <select style={{padding:'5px'}}>
                          <option value="0" selected>All Users</option>   
                        </select>
                      </div>
                      <div style={{display:'inline-block', marginLeft:'10px'}}>
                        <select style={{padding:'5px'}}>
                          <option value="0" selected>Any time</option>
                          <option value="1">Today</option>
                          <option value="2">Yesterday</option>    
                          <option value="3">This Week</option>    
                          <option value="4">Last Week</option>    
                          <option value="5">Last 15 Days</option>    
                          <option value="7">Last 30 Days</option>    
                          <option value="6">This Month</option>    
                          <option value="8">Last Month</option>    
                          <option value="9">Last 90 Days</option>   
                        </select>
                      </div>
                    </div>
                  </div>
                  <div style={{textAlign:'center'}}>
                    <br/><br/><br/><br/><br/>
                    <h6 style={{color: '#666',fontWeight:'300'}}>No Records found</h6>
                  </div>
                </div>
              </div>
              <div className={styles.box2} style={{marginLeft:'25px'}}>
                <div>
                  <div>
                    <div style={{display: 'inline-block', fontWeight:'600'}}>Offer Acceptance Rate</div>
                    <a className={styles.ibutton}></a>
                    <a className={styles.expand}></a>
                    <br/><br/>
                    <div style={{float:'left'}}>
                      <ul className={styles.ul1}>
                        <li className={styles.li1} style={{backgroundColor:'#ddd'}}><a className={styles.a1}>Job Opening</a></li>
                        <li className={styles.li1}><a className={styles.a1}>Department</a></li>
                      </ul>
                    </div>
                    <div style={{float:'right'}}>
                      <div style={{display:'inline-block'}}>
                        <select style={{padding:'5px'}}>
                          <option value="0" selected>All Users</option>   
                        </select>
                      </div>
                      <div style={{display:'inline-block', marginLeft:'10px'}}>
                        <select style={{padding:'5px'}}>
                          <option value="0" selected>Any time</option>
                          <option value="1">Today</option>
                          <option value="2">Yesterday</option>    
                          <option value="3">This Week</option>    
                          <option value="4">Last Week</option>    
                          <option value="5">Last 15 Days</option>    
                          <option value="7">Last 30 Days</option>    
                          <option value="6">This Month</option>    
                          <option value="8">Last Month</option>    
                          <option value="9">Last 90 Days</option>   
                        </select>
                      </div>
                    </div>
                  </div>
                  <div style={{textAlign:'center'}}>
                    <br/><br/><br/><br/><br/>
                    <h6 style={{color: '#666', fontWeight:'300'}}>No Records found</h6>
                  </div>
                </div>
              </div>
            </div>
            <div style={{display: 'block'}}>
              <div className={styles.box2}>
                <div>
                  <div>
                    <div style={{display: 'inline-block', fontWeight:'600'}}>My Unattended Calls</div>
                  </div>
                  <div style={{textAlign:'center'}}>
                    <br/><br/><br/><br/>
                    <h6 style={{color: '#666',fontWeight:'300'}}>No To-Dos found</h6>
                  </div>
                </div>
              </div>
              <div className={styles.box2} style={{marginLeft:'25px'}}>
                <div>
                  <div>
                    <div style={{display: 'inline-block', fontWeight:'600'}}>Upcoming Interviews</div>
                  </div>
                  <div style={{textAlign:'center'}}>
                    <br/><br/><br/><br/>
                    <h6 style={{color: '#666', fontWeight:'300'}}>No Interviews found</h6>
                  </div>
                </div>
              </div>
            </div>
            <div style={{display: 'block'}}>
              <div className={styles.box2}>
                <div>
                  <div>
                    <div style={{display: 'inline-block', fontWeight:'600'}}>Completed Interviews</div>
                  </div>
                  <div style={{textAlign:'center'}}>
                    <br/><br/><br/><br/>
                    <h6 style={{color: '#666',fontWeight:'300'}}>No Interviews found</h6>
                  </div>
                </div>
              </div>
              <div className={styles.box2} style={{marginLeft:'25px'}}>
                <div>
                  <div>
                    <div style={{display: 'inline-block', fontWeight:'600'}}>My Actions</div>
                    <div style={{float:'right'}}>
                      <div style={{display:'inline-block', marginLeft:'10px'}}>
                          <select style={{padding:'5px'}}>
                            <option value="0">Any time</option>
                            <option value="1">Today</option>
                            <option value="2">Yesterday</option>    
                            <option value="3">This Week</option>    
                            <option value="4">Last Week</option>    
                            <option value="5">Last 15 Days</option>    
                            <option value="7">Last 30 Days</option>    
                            <option value="6" selected>This Month</option>    
                            <option value="8">Last Month</option>    
                            <option value="9">Last 90 Days</option>   
                          </select>
                        </div>
                    </div>
                  </div>
                  <div style={{textAlign:'center'}}>
                    <br/><br/><br/><br/>
                    <h6 style={{color: '#aaa', fontWeight:'300'}}>This filter does not have any data</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.box1}>
              <div>
                <div>
                  <div style={{display: 'inline-block', fontWeight:'600'}}>All Activities</div>
                  <a className={styles.pop}></a>
                  <div style={{float:'right'}}>
                    <div style={{display:'inline-block'}}>
                      <select style={{padding:'5px'}}>
                        <option value="0" selected>All Users</option>   
                      </select>
                    </div>
                    <div style={{display:'inline-block', marginLeft:'10px'}}>
                      <select style={{padding:'5px'}}>
                        <option value="0" selected>Any time</option>
                        <option value="1">Today</option>
                        <option value="2">Yesterday</option>    
                        <option value="3">This Week</option>    
                        <option value="4">Last Week</option>    
                        <option value="5">Last 15 Days</option>    
                        <option value="7">Last 30 Days</option>    
                        <option value="6">This Month</option>    
                        <option value="8">Last Month</option>    
                        <option value="9">Last 90 Days</option>   
                      </select>
                    </div>
                    <div style={{display:'inline-block', marginLeft:'10px'}}>
                      <select style={{padding:'5px', width:'200px'}}>
                        <option selected>All Activities</option> 
                        <option>Record added</option>
                        <option>Candidate Referred</option>
                        <option>Last Referred Time updated</option>
                        <option>Last Referred Time starts</option>
                        <option>Record updated</option>
                        <option>Import from Document</option>
                        <option>Import from Spreadsheet</option>
                        <option>Email</option>
                        <option>Email scheduled</option>
                        <option>Email updated</option>
                        <option>Delete</option>
                        <option>Restore</option>
                        <option>Status changed</option>
                        <option>Notes</option>
                        <option>Unassociated candidates</option>
                        <option>Associated to job opening</option>
                        <option>Owner changed</option>
                        <option>Record added via API</option>
                        <option>Record updated via API</option>
                        <option>Sms sent</option>
                        <option>Record added from Outlook</option>
                        <option>Record updated from Outlook</option>
                        <option>Record added via resume extractor</option>
                        <option>Record updated via resume extractor</option>
                        <option>Record associated with Facebook</option>
                        <option>Record associated with LinkedIn</option>
                        <option>Record associated with Twitter</option>
                        <option>Record associated with Google Plus</option>
                        <option>Record unassociated from Facebook</option>
                        <option>Record unassociated from LinkedIn</option>
                        <option>Record unassociated from Twitter</option>
                        <option>Record unassociated from Google Plus</option>
                        <option>Email opt out</option>
                        <option>Record added through CareerSite</option>
                        <option>Record updated through CareerSite</option>
                        <option>Formatted resumes</option>
                        <option>Published in job boards</option>
                        <option>Remove from job boards</option>
                        <option>Record Imported from Zoho CRM</option>
                        <option>Marked as hot</option>
                        <option>Removed from hot</option>
                        <option>Export Data</option>
                        <option>Invited candidate to careers page</option>
                        <option>Re-invited candidate to careers page</option>
                        <option>Enabled careers page login for candidate</option>
                        <option>Disabled careers page login for candidate</option>
                        <option>Interview deleted</option>
                        <option>Interview restored</option>
                        <option>Converted candidate into employee</option>
                        <option>Candidate moved to Onboarding</option>
                        <option>Change of Candidate Rating</option>
                        <option>Job Association of Assessment</option>
                        <option>Removal of Assessment Association</option>
                        <option>Associated Tags</option>
                        <option>Unassociated Tags</option>
                        <option>Checklist completed.</option>
                        <option>Attachment added in Blueprint transition</option>
                        <option>Notes added in Blueprint transition</option>
                        <option>Record added via Zoho People</option>
                        <option>Record updated via Zoho People</option>
                        <option>Record deleted via Zoho People</option>
                        <option>Interview cancelled</option>
                        <option>Profile photo deleted by candidate</option>
                        <option>Invited Custom Portal User</option>
                        <option>Reinvited Custom Portal User</option>
                        <option>Enabled Custom Portal Access</option>
                        <option>Disabled Custom Portal Access</option>
                        <option>Accepted Custom Portal Invitation</option>
                        <option>Added or updated record image through Custom Portal</option>
                        <option>Deleted record image through Custom Portal</option>
                        <option>Take Survey</option>
                        <option>Record blocked</option>
                        <option>Offer Made</option>
                        <option>Offer Withdrawn</option>
                        <option>Offer Accepted</option>
                        <option>Offer Declined</option>
                        <option>Offer Re-sent</option>
                        <option>Contract Expiry Update</option>
                        <option>Offer Withdrawn on Delete</option>
                        <option>Offer Updated</option>
                        <option>Offer withdrawn upon locking candidate</option>
                        <option>Offer withdrawn upon closing job opening</option>
                        <option>Offer withdrawn upon candidate unassociation</option>
                        <option>Offer deleted by user</option>
                        <option>Submit to Hiring Manager</option> 
                      </select>
                    </div>
                  </div>
                </div>
                <hr style={{color:'#ddd'}}/>
                <div style={{textAlign:'center'}}>
                  <br/><br/><br/>
                  <h6 style={{color: '#666', fontWeight:'300'}}>No Records found in this view.</h6>
                </div>
              </div>
            </div>
          </div> */}
          <div className={styles.flip_layout}>
                <section className={styles.flip}>
                    <div className={styles.flip_container}>
                        <div className={styles.flip_card_container}>
                            <div className={styles.flip_card_front}>
                                <div>
                                    <img className={styles.flip_img} 
                                    src="https://www.pngitem.com/pimgs/m/226-2267498_curly-hair-male-icon-free-download-png-student.png" alt="" />
                                    <h1>For Staffing Agency.</h1>
                                    <p>Up your recruitment game plan.</p>
                                </div>
                            </div>
                            <div className={styles.flip_card_back}>
                                <div>
                                    <h1>For Staffing Agency.</h1>
                                    <p>Zoho Recruit's staffing software solution provides recruitment agencies with a single platform to manage all hiring processes.</p>
                                </div>
                            </div>
                        </div>
                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div className={styles.flip_container}>
                        <div className={styles.flip_card_container}>
                            <div className={styles.flip_card_front}>
                                <div>
                                    <img className={styles.flip_img} 
                                    src="https://png.pngtree.com/element_our/20190531/ourmid/pngtree-cartoon-tie-image_1288784.jpg" alt="" />
                                    <h1>For Corporate HR's.</h1>
                                    <p>Happy hires. Happier workplaces.</p>
                                </div>
                            </div>
                            <div className={styles.flip_card_back}>
                                <div>
                                    <h1>For Corporate HR's.</h1>
                                    <p>Zoho Recruit's corporate recruiting software streamlines the hiring process for both corporations and SMBs with features that ensure shorter time-to-fill and longer employee retention.</p>
                                </div>
                            </div>
                        </div>
                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div className={styles.flip_container}>
                        <div className={styles.flip_card_container}>
                            <div className={styles.flip_card_front}>
                                <div>
                                    <img className={styles.flip_img} 
                                    src="https://previews.123rf.com/images/bryljaev/bryljaev1703/bryljaev170300043/74236519-red-alarm-clock-flat-design.jpg" alt="" />
                                    <h1>For Temporary Workforce.</h1>
                                    <p>Crafted for modern temp agencies.</p>
                                </div>
                            </div>
                            <div className={styles.flip_card_back}>
                                <div>
                                    <h1>For Temporary Workforce.</h1>
                                    <p>Zoho Workerly's temp staffing software enables agencies to schedule jobs for temps, create and generate invoices - all within a single interface.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
          <div className={styles.container1}>
            <div className={styles.container1_left}>
              <div className={styles.container1_box1}>
                <div>
                  <img className={styles.container1_left_img} 
                  src="https://st4.depositphotos.com/19795498/22092/v/1600/depositphotos_220922502-stock-illustration-business-concept-vector-illustration-in.jpg" alt="" />
                  <h3>Candidate hiring</h3>
                  <p>Make informed hiring decisions based on comprehensive view of candidate statuses.</p>
                </div>
              </div>
              <div className={styles.container1_box1}>
                <div>
                  <img className={styles.container1_left_img} 
                  src="https://image.shutterstock.com/image-vector/successful-business-team-led-by-260nw-772364485.jpg" alt="" />
                  <h3>Employee Referral</h3>
                  <p>Leverage your workforce as a sourcing extension through employee referrals.</p>
                </div>
              </div>
              <div className={styles.container1_box1}>
                <div>
                  <img className={styles.container1_left_img} 
                  src="https://bkwebdesigns.com/wp-content/uploads/2018/02/website-design-animation-1.gif" alt="" />
                  <h3>Temp Portal</h3>
                  <p>Track jobs offers and view upcoming, current and completed projects.</p>
                </div>
              </div>
            </div>
            <div className={styles.container1_right}>
              <img src='https://www.zohowebstatic.com/sites/default/files/recruit/corporate-hr-hub.png'  alt='homepage_image'
               className={styles.container1_img}
               />
            </div>
          </div>
          <div className={styles.container2}>
            <div className={styles.container1_center}>
              <div className={styles.container2_box}>
                <div>
                  <img className={styles.container1_left_img} 
                  src="https://c8.alamy.com/comp/2FYW5K2/employees-cv-candidates-resume-corporate-workers-students-id-isolate-flat-design-element-job-applications-avatars-personal-information-vector-i-2FYW5K2.jpg" alt="" />
                  <h3>Source talent. Faster.</h3>
                  <p>Instantly search candidates with our powerful Source Boosters.</p>
                </div>
              </div>
              <div className={styles.container2_box}>
                <div>
                  <img className={styles.container1_left_img} 
                  src="https://thumbs.dreamstime.com/b/job-interview-hr-manager-office-work-vector-flat-illustration-174794726.jpg" alt="" />
                  <h3>Assess first, then interview</h3>
                  <p>Create pre-screening of assessments to measure candidate skills.</p>
                </div>
              </div>
              <div className={styles.container2_box}>
                <div>
                  <img className={styles.container1_left_img} 
                  src="https://thumbs.dreamstime.com/b/gesture-agreement-handshake-contract-signed-business-partners-minimalist-style-cartoon-flat-raster-gesture-165575947.jpg" alt="" />
                  <h3>Convert hires to employees</h3>
                  <p>With Zoho People integration convert a candidate status to "employee".</p>
                </div>
              </div>
              <div className={styles.container2_box}>
                <div>
                  <img className={styles.container1_left_img} 
                  src="https://thumbs.dreamstime.com/b/job-university-acceptance-approve-letter-paper-sheets-document-job-university-acceptance-approve-letter-paper-230323642.jpg" alt="" />
                  <h3>Temp acceptance</h3>
                  <p>Temps can accept or reject the job offers through a temp portal or via email.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
