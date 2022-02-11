import styles from "./LandingPage.module.css";
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Divider from '@mui/material/Divider';
import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Link from "next/link"

export default function LandingPage(){
    return(
        <>
            <head>
                <title>Hiring Software</title>
            </head>
            <div className={styles.header}>
                <img className={styles.zoho_logo}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiyXcAL_X3BDt0wqHNQFAjeO815LtxqtpsXOdQa_VczdylbS2beWmdABfONqPA-1YgjbA&usqp=CAU"
                    alt="zoho_logo"
                />
                <ul>
                    <li><a href="#">CRM</a></li>
                    <li><a href="#">Books</a></li>
                    <li><a href="#">Invoice</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">People</a></li>
                    <li><a href="#">Analytics</a></li>
                </ul>
                <div className={styles.icon_div}>
                    <SearchIcon />
                    {/* <Link href="/signin"><button className={styles.signin_btn}>SIGN IN</button></Link>
                    <Link href="/register"><button className={styles.signup_btn}>SIGN UP NOW</button></Link> */}
                </div>
            </div>
            <Divider/>
            <div className={styles.top}>
                <div className={styles.top_nav}>
                    <img className={styles.expense_logo} 
                    src="https://www.zohowebstatic.com/sites/default/files/styles/product-home-page/public/icon-recruit.png?itok=ORRrhnt4" alt="expense_logo"
                    />
                    <a className={styles.expense_title}>Recruit</a>
                    <div className={styles.expense_title_list}>
                        <ul>
                            <li className={styles.header_dropdown_list}>
                                <a>Solutions</a>
                                <ArrowDropDownIcon className={styles.arrow} />
                                <div className={styles.dropdown_list}>
                                <a href="#">Staffing Agency</a>
                                <a href="#">Corporate HRs</a>
                                <a href="#">Temporary Workflow</a>
                                </div>
                            </li>
                            <li className={styles.header_dropdown_list}>
                                <a>Features</a>
                                <ArrowDropDownIcon className={styles.arrow} />
                                <div className={styles.dropdown_list}>
                                <a href="#">Staffing Agency</a>
                                <a href="#">Corporate HRs</a>
                                <a href="#">Temporary Workflow</a>
                                </div>
                            </li>
                            <li className={styles.header_dropdown_list}>
                                <a>Pricing</a>
                                <ArrowDropDownIcon className={styles.arrow} />
                                <div className={styles.dropdown_list}>
                                <a href="#">Corporate HRs</a>
                                <a href="#">Staffing Agency</a>
                                <a href="#">Temporary Workflow</a>
                                </div>
                            </li>
                            <li className={styles.header_dropdown_list}>
                                <a>Customers</a>
                            </li>
                            <li className={styles.header_dropdown_list}>
                                <a>Resources</a>
                                <ArrowDropDownIcon className={styles.arrow} />
                                <div className={styles.dropdown_list}>
                                <a href="#">FAQs</a>
                                <a href="#">Help Center</a>
                                <a href="#">Integrations</a>
                                <a href="#">Blogs</a>
                                <a href="#">Video Lounge</a>
                                <a href="#">Webinars</a>
                                <a href="#">Events</a>
                                <a href="#">Forums</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.heading2}>
                    <h1>Faster hires, Better hiring.</h1>
                    <p style={{fontSize:'18px'}}>Zoho Recruit is a cloud based applicant tracking system that’s built to provide diverse, end-to-end hiring solutions for staffing agencies, corporate HRs and temporary workforce. With our intuitive remote hiring software, make hiring effortless.</p>
                    <br/>
                    <div className={styles.candbtn}>
                        <Button className={styles.access_expense}>
                            <Link href="/candidatesregister">
                            <a>Candidate Login</a>
                            </Link>
                        </Button>
                        &nbsp;
                        <Button className={styles.access_expense}>
                            <Link href="/register">
                            <a>Staffing HR</a>
                            </Link>
                        </Button>
                    </div>
                </div>
                <div className={styles.footer}>
                    <div>
                        <ul><b>Features</b>
                            <li className={styles.footer_list}>Candidate sourcing</li>
                            <li className={styles.footer_list}>Resume Management</li>
                            <li className={styles.footer_list}>Advanced Analytics</li>
                            <li className={styles.footer_list}>Workflow Management</li>
                            <li className={styles.footer_list}>Multi channel Communication</li>
                            <li className={styles.footer_list}>Easy Integrations</li>
                            <li className={styles.footer_list}>Facebook Job Postings</li>
                            <li className={styles.footer_list}>Remote Recruitment</li>
                            <li className={styles.footer_list}>Video Interview</li>
                        </ul>
                        <ul><b>Solutions</b>
                            <li className={styles.footer_list}>Manufacturing</li>
                            <li className={styles.footer_list}>Education</li>
                            <li className={styles.footer_list}>Technology</li>
                        </ul>
                    </div>
                    <div>
                        <ul><b>Explore</b>
                            <li className={styles.footer_list}>What is ATS?</li>
                            <li className={styles.footer_list}>Applicant Tracking System</li>
                            <li className={styles.footer_list}>AI Recruitment</li>
                            <li className={styles.footer_list}>Candidate Management</li>
                            <li className={styles.footer_list}>Candidate Tracking System</li>
                            <li className={styles.footer_list}>Recruiting Software</li>
                            <li className={styles.footer_list}>Recruitment Software</li>
                            <li className={styles.footer_list}>Recruitment Management System</li>
                            <li className={styles.footer_list}>Human Capital Management</li>
                            <li className={styles.footer_list}>Recruiting Strategies</li>
                            <li className={styles.footer_list}>Staffing Software</li>
                            <li className={styles.footer_list}>Recruitment CRM</li>
                            <li className={styles.footer_list}>Recruitment Analytics</li>
                            <li className={styles.footer_list}>Recruitment Marketing</li>
                            <li className={styles.footer_list}>Email Recruitment</li>
                            <li className={styles.footer_list}>Talent Acquisition System</li>
                        </ul>
                    </div>
                    <div>
                        <ul><b>Comparison</b>
                            <li className={styles.footer_list}>ATS Comparison</li>
                            <li className={styles.footer_list}>Google Hire Alternative</li>
                            <li className={styles.footer_list}>Bullhorn Alternative</li>
                            <li className={styles.footer_list}>Workable Alternative</li>
                            <li className={styles.footer_list}>Jobdiva Alternative</li>
                        </ul>
                        <ul><b>Quick Links</b>
                            <li className={styles.footer_list}>What's new</li>
                            <li className={styles.footer_list}>Blogs</li>
                            <li className={styles.footer_list}>Pricing</li>
                            <li className={styles.footer_list}>Customer Stories</li>
                            <li className={styles.footer_list}>Guide to buying ATS</li>
                            <li className={styles.footer_list}>GDPR Readiness</li>
                            <li className={styles.footer_list}>Tour</li>
                            <li className={styles.footer_list}>Zoho Recruit mobile app</li>
                            <li className={styles.footer_list}>Migration Request</li>
                        </ul>
                    </div>
                    <div>
                        <ul><b>Resources</b>
                            <li className={styles.footer_list}>E Books</li>
                            <li className={styles.footer_list}>Forums</li>
                            <li className={styles.footer_list}>Help Center</li>
                            <li className={styles.footer_list}>Events</li>
                            <li className={styles.footer_list}>Video Tutorials</li>
                            <li className={styles.footer_list}>Marketplace</li>
                            <li className={styles.footer_list}>Partnerships</li>
                        </ul>
                        <ul><b>Connect with us</b>
                            <li>
                            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 1.5 }}
                            style={{
                                padding: "4px"
                            }}
                            >
                                <TwitterIcon style={{color:'#3399ff',fontSize:'2.2rem'}} />
                            </IconButton>
                            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 1.5 }}
                            style={{
                                padding: "4px"
                            }}
                            >
                                <FacebookIcon style={{color:'#0066ff',fontSize:'2.2rem'}} />
                            </IconButton>
                            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 1.5 }}
                            style={{
                                padding: "4px"
                            }}
                            >
                                <LinkedInIcon style={{color:'#2952a3',fontSize:'2.2rem'}} />
                            </IconButton>
                            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 1.5 }}
                            style={{
                                padding: "4px"
                            }}
                            >
                                <YouTubeIcon style={{color:'#ff3300',fontSize:'2.2rem'}} />
                            </IconButton>
                            </li>
                        </ul>
                        <ul><b>Mobile App</b>
                            <li className={styles.footer_list}>
                                <img className={styles.app_logo}
                                    src="https://d37xp64nemtox5.cloudfront.net/2021/04/app-store-png.png"
                                    alt="app_store"
                                />
                            </li>
                            <li className={styles.footer_list}>
                                <img className={styles.app_logo}
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2TCfABcmzd4OFmK9_THnHSxILW3mIjgXmXx6d2Eoe3rK_8KA_mvVEX8CIhkLPZKb9Dw&usqp=CAU"
                                    alt="google_play"
                                />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.footer_end}>
                <p>Zoho Home | Contact | Security | IPR Complaints | Anti-spam Policy | Terms of Service | Privacy Policy | Cookie Policy | GDPR Compliance | Abuse Policy</p>
                <p>&copy;2021, Zoho Corportion Pvt. Ltd. All Rights Reversed.</p>
            </div>
            </div>
            
        </>
    )
}
