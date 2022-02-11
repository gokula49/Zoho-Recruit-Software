import axios from "axios"
import useSWR from "swr";
// import withAuth from "../../auth/protectedroute"
import "bootstrap/dist/css/bootstrap.css";
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import React,{useContext,useState} from 'react'; 
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useRouter } from "next/router";
import {
  
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import WorkIcon from '@mui/icons-material/Work';
import Header from "../../components/Header";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HistoryIcon from '@mui/icons-material/History';
import { Link } from '@mui/material';
import { isAutheticated } from "../../components/Auth/auth";
import { borderRadius } from "@mui/system";
import Router from "next/router";
import { URLS } from "../../components/Auth/const";


const InterviewView=({itmid})=> {
    const router = useRouter()

    const { query } = useRouter();
    console.log(query.value1)
        const {accessToken} = isAutheticated();
    const fetcher=async()=>{
        const response = await axios.get(`${URLS}/api/interview/${itmid}`,
        { headers: { Authorization: `Bearer ${accessToken}` } })
        console.log(response.data)
        return response.data

    }

    function passedFunction(){
     const updateInterview = {
      interviewstatus:"Selected"
     }

     axios.put(`${URLS}/api/inetrview/status/${itmid}`,updateInterview,
     { headers: { Authorization: `Bearer ${accessToken}` } }
     ).then(()=>{
      
       Router.push('/displayinterview')
    
       axios.get(`${URLS}/api/candidate/${query.value1}`,
       { headers: {"Authorization" : `Bearer ${accessToken}`}}).then(
         (res)=>{
              
        
       
         const email = 
       {
         "to":res.data.email,
         "body":` Dear ${res.data.firstName},

         We are inviting for our company!
    `,
         "sub":"Invitation for the Offer"
     }
     

     axios.post(`${URLS}/email`,email,{ headers: {"Authorization" : `Bearer ${accessToken}`}})
     .then(()=>{
       alert("email sent Succesfully");
     })
     .catch(()=>{
       alert("Failed to send");
     })
      
       
     })

    })
      
        
    }


    function rejectedFunction(){


      const updateInterview = {
        interviewstatus:"Rejected"
       }
  
       axios.put(`${URLS}/api/inetrview/status/${itmid}`,updateInterview,
       { headers: { Authorization: `Bearer ${accessToken}` } }
       ).then(()=>{


        Router.push('/displayinterview')

        axios.get(`${URLS}/api/candidate/${query.value1}`,
        { headers: {"Authorization" : `Bearer ${accessToken}`}}).then(
          (res)=>{
               
         
        
          const email = 
        {
          "to":res.data.email,
          "body":` Dear ${res.data.firstName},
 
          Thanks for Attending, We will connect with you later!
     `,
          "sub":"Sorry, Better luck next Time!"
      }
      
 
      axios.post(`${URLS}/email`,email,{ headers: {"Authorization" : `Bearer ${accessToken}`}})
      .then(()=>{
        alert("email sent Succesfully");
      })
      .catch(()=>{
        alert("Failed to send");
      })
       
        
      })



        
         Router.push('/displayinterview')
         
       })

    }

   const {data,error} = useSWR("itmview",fetcher)
   console.log(data)
   

  //  const [value, setValue] = React.useState('1');


    // const [values, setValues] = useState({
    //     email:"",
    //     body:"",  
    //   });

    //   const {email,body}=values
    //   console.log(values)

    // const handleChanges = (event, newValue) => {
    //   setValue(newValue);
    // };

    const Item = styled(Paper)(({ theme }) => ({
      ...theme.typography.body2,
      padding: theme.spacing(1),
      // textAlign: 'center',
      borderRadius:'0px',
      color: theme.palette.text.secondary,
    }));

    const [open,setOpen]= useState(false)
    const handleOpen =(e)=>{
      setOpen(true)

    }
    const handleClose = () => {
      setOpen(false);
    };

    const handleDelete = () =>{
      axios.delete(`https://codingmart-invoice.herokuapp.com/items/${data._id}`).
      then((data)=>{alert("Deleted Succesfully")
      router.push('/items')
    }
      )
      .catch(console.log('Not deleted'));
    }

   
  return (
  
       <>
      
        <div>
             <Header />
        <div style={{ marginTop: "3rem" }}>
          <div
            style={{
              width: "100%",
              overflowX: "hidden",
              padding: "18px 25px",
              backgroundColor: "#ffffff",
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
                <ListItem>
                    <Link href='/displayinterview' style={{textDecoration:'none'}}>
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}
                    style={{
                        "&:hover":{
                        padding: "4px 4px",
                        borderRadius: "50%",
                        border: "1px solid #404040"
                        }
                    }}
                    >
                        <KeyboardBackspaceIcon style={{fontSize:'2rem',color:'#404040'}} />
                    </IconButton>
                    </Link>
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}
                    style={{
                        padding: "12px",
                        borderRadius: "35%",
                        backgroundColor:"#39ac39"
                    }}
                    >
                        <AccountBoxIcon style={{fontSize:'2rem',color:'#ffffff'}} />
                    </IconButton>
                    <ListItemText primary="Interview" secondary={data&&data.candidatename} />
                </ListItem>
                
              </div>

              
              <div>
              <Button style={{backgroundColor:"#009900",color:"white",padding:"2px 10px",textTransform:'capitalize'}} onClick={passedFunction}>Select</Button>
              &nbsp;
              <Button style={{backgroundColor:"#ff704d",color:"white",padding:"2px 10px",textTransform:'capitalize',marginRight:'2rem'}} onClick={rejectedFunction}>Reject</Button>

                
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2.5 }}
                style={{
                    padding: "4px 4px",
                    borderRadius: "50%",
                    border: "1px solid #404040",
                  }}
                >
                    <HistoryIcon style={{color:'#404040'}} />
                </IconButton>
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 3 }}
                style={{
                    "&:hover":{
                    padding: "4px 4px",
                    borderRadius: "50%",
                    border: "1px solid #404040"
                    }
                  }}
                >
                    <MoreHorizIcon style={{color:'#404040'}} />
                </IconButton>
                {/* <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 1 }}
                style={{
                    "&:hover":{
                    padding: "4px 4px",
                    borderRadius: "50%",
                    border: "1px solid #404040"
                    }
                  }}
                >
                    <KeyboardArrowLeftIcon style={{color:'#404040'}} />
                </IconButton>
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 0 }}
                style={{
                    "&:hover":{
                    padding: "4px 4px",
                    borderRadius: "50%",
                    border: "1px solid #404040"
                    }
                  }}
                >
                    <KeyboardArrowRightIcon style={{color:'#404040'}} />
                </IconButton> */}
              </div>
            </div>
          </div>
        </div>


        
        {/* <div
          style={{ marginLeft: "2rem", marginRight: "2rem", marginTop: "3rem" }}
        >
          <div className="row zb-txn-form">
            <div className="col-lg-8">
              <div style={{ marginTop: "5rem" }}>
                <Typography style={{ fontSize: "1rem" }}>
                  <b>Job Opening Information</b>
                </Typography>
                <br />

                <div className="zb-txn-form item-new">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="row form-group">
                        <label className="col-form-label col-lg-4">
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
                              
                            />
                          </div>
                        </div>
                      </div>
                      
                    </div>

                    <div className="col-lg-6">
                      
                      <div className="row form-group">
                        <label className="col-form-label col-lg-4">
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
                              
                            />
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
              <br />

              

              
              <br />
              <br />
              <br />
            </div>
          </div>
        </div> */}
























        <div>
        <div className="row zb-txn-form">
            <div className="col-lg-12">
              <div style={{ marginTop: "6.8rem",backgroundColor:'#cccccc',height:'95%' }}>
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
                        className="ember-text-field text-left ember-view form-control"
                    >
                        <div
                        style={{ display: "flex" }}
                        className="d-flex justify-content-between"
                        >
                        <div>
                            <Typography style={{ fontSize: "1.3rem" }}>
                            <b>Overview</b>
                            </Typography>
                        </div>
                        </div>
                    </div>
                </div>
                <br/><br/><br/>

                <div style={{margin:'2rem'}}>
                <div
                  className="ember-text-field text-left ember-view form-control"
                  style={{
                    padding: "20px",
                    width: "100%",
                    borderRadius: "0.4rem"
                  }}
                >
                  <div style={{ borderWidth: "1px" }}>
                    <div className="zb-txn-form item-new">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label><b>Business Card</b></label>
                            <Divider />
                          </div>
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>

                <div className="zb-txn-form item-new">
                  <div className="row">
                    <div className="col-lg-6">
                      {/* <div className="row form-group">
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required" style={{color:'#737373'}}>
                            Client Name
                            </span>
                          </span>
                        </label>
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required">
                            {data&&data.mobile}
                            </span>
                          </span>
                        </label>
                      </div> */}
                      <div className="row form-group">
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required" style={{color:'#737373'}}>
                            Posting Title
                            </span>
                          </span>
                        </label>
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required">
                            {data&&data.postingnitle}
                            </span>
                          </span>
                        </label>
                      </div>
                      <div className="row form-group">
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required" style={{color:'#737373'}}>
                            Interviewer(s)
                            </span>
                          </span>
                        </label>
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required">
                            {data&&data.interviewer}
                            </span>
                          </span>
                        </label>
                      </div>
                      <div className="row form-group">
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required" style={{color:'#737373'}}>
                            From
                            </span>
                          </span>
                        </label>
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required">
                            {data&&data.from}
                            </span>
                          </span>
                        </label>
                      </div>
                      <div className="row form-group">
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required" style={{color:'#737373'}}>
                            To
                            </span>
                          </span>
                        </label>
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required">
                            {data&&data.to}
                            </span>
                          </span>
                        </label>
                      </div>
                      <div className="row form-group">
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required" style={{color:'#737373'}}>
                            Location
                            </span>
                          </span>
                        </label>
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required">
                            {data&&data.location}
                            </span>
                          </span>
                        </label>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
              
                </div>
                </div>

                <div style={{margin:'2rem'}}>
                <div
                  className="ember-text-field text-left ember-view form-control"
                  style={{
                    padding: "20px",
                    width: "100%",
                    borderRadius: "0.4rem",
                  }}
                >
                  <div style={{ borderWidth: "1px" }}>
                    <div className="zb-txn-form item-new">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label><b>Interview Information</b></label>
                          </div>
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>

                <div className="zb-txn-form item-new">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="row form-group">
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required" style={{color:'#737373'}}>
                            Interview Name
                            </span>
                          </span>
                        </label>
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required">
                            {data&&data.interviewer}
                            </span>
                          </span>
                        </label>
                      </div>
                      <div className="row form-group">
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required" style={{color:'#737373'}}>
                            From
                            </span>
                          </span>
                        </label>
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required">
                            {data&&data.from}
                            </span>
                          </span>
                        </label>
                      </div>
                      <div className="row form-group">
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required" style={{color:'#737373'}}>
                            Interviewer(s)
                            </span>
                          </span>
                        </label>
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required">
                            {data&&data.interviewer}
                            </span>
                          </span>
                        </label>
                      </div>
                      <div className="row form-group">
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required" style={{color:'#737373'}}>
                            Location
                            </span>
                          </span>
                        </label>
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required">
                            {data&&data.location}
                            </span>
                          </span>
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="row form-group">
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required" style={{color:'#737373'}}>
                            Candidate Name
                            </span>
                          </span>
                        </label>
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required">
                            {data&&data.candidatename} 
                            </span>
                          </span>
                        </label>
                      </div>
                      <div className="row form-group">
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required" style={{color:'#737373'}}>
                            Posting Title
                            </span>
                          </span>
                        </label>
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required">
                            {data&&data.postingnitle}
                            </span>
                          </span>
                        </label>
                      </div>
                      <div className="row form-group">
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required" style={{color:'#737373'}}>
                            To
                            </span>
                          </span>
                        </label>
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required">
                            {data&&data.to}
                            </span>
                          </span>
                        </label>
                      </div>
                      <div className="row form-group">
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required" style={{color:'#737373'}}>
                            Schedule Comments
                            </span>
                          </span>
                        </label>
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required">
                            {data&&data.schedulecomments}
                            </span>
                          </span>
                        </label>
                      </div>
                      <div className="row form-group">
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required" style={{color:'#737373'}}>
                            Assessment Name
                            </span>
                          </span>
                        </label>
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required">
                            {data&&data.assessmentname}
                            </span>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  
                </div>
                <br/>

                <div style={{ borderWidth: "1px" }}>
                    <div className="zb-txn-form item-new">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label><b>Evaluation Information</b></label>
                          </div>
                          <br />
                        </div>
                      </div>
                    </div>
                </div>
                <div className="zb-txn-form item-new">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="row form-group">
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required" style={{color:'#737373'}}>
                            Interview Status
                            </span>
                          </span>
                        </label>
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required">
                            {data&&data.interviewstatus}
                            </span>
                          </span>
                        </label>
                      </div>
                      
                    </div>
                  </div>
                </div>
                <br/>

                

            
              </div>
              
                </div>
                </div>
                <div style={{margin:'2rem'}}>
                <div
                  className="ember-text-field text-left ember-view form-control"
                  style={{
                    padding: "20px",
                    width: "100%",
                    borderRadius: "0.4rem"
                  }}
                >
                  <div style={{ borderWidth: "1px" }}>
                    <div className="zb-txn-form item-new">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label><b>Notes</b></label>
                            <Divider />
                          </div>
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>

                <div className="zb-txn-form item-new">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="row form-group">
                        <label className="col-form-label">
                            <input
                              id="ember1436"
                              className="ember-text-field text-left ember-view form-control"
                              type="text"
                              name="actual_revenue"
                              placeholder="@mention to notify users"
                            />
                        </label>
                        
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              
                </div>
                </div>

                <div style={{margin:'2rem'}}>
                <div
                  className="ember-text-field text-left ember-view form-control"
                  style={{
                    padding: "20px",
                    width: "100%",
                    borderRadius: "0.4rem"
                  }}
                >
                  <div style={{ borderWidth: "1px" }}>
                    <div className="zb-txn-form item-new">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label><b>Attachments</b></label>
                            <Divider />
                          </div>
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>

                <div className="zb-txn-form item-new">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="row form-group">
                      <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required">
                            No Attachments
                            </span>
                          </span>
                        </label>
                        
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              
                </div>
                </div>


              </div>
              
            </div>
          </div>
        </div>
        

    </div>
    

    </>
   
  );
}
export default InterviewView

export const getServerSideProps = async (context) => {
    return { props: { itmid: context.params.id } };
  };
