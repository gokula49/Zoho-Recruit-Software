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
import { Link } from '@mui/material';
import { isAutheticated } from "../../components/Auth/auth";
import { borderRadius } from "@mui/system";
import { URLS } from "../../components/Auth/const";



const CandidatesView=({itmid})=> {
    const router = useRouter()
    const {accessToken} = isAutheticated();
    const fetcher=async()=>{
        const response = await axios.get(`${URLS}/api/candidate/${itmid}`,
        { headers: { Authorization: `Bearer ${accessToken}` } })
        console.log(response.data)
        return response.data

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
                    <Link href='/displaycandidates' style={{textDecoration:'none'}}>
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
                        backgroundColor:"#4da6ff"
                    }}
                    >
                        <PersonIcon style={{fontSize:'2rem',color:'#ffffff'}} />
                    </IconButton>
                    <ListItemText primary={<label style={{textTransform:'capitalize'}}><b>{data&&data.firstName}{" "}{data&&data.lastName}</b></label>} />
                </ListItem>
                
              </div>
              <div>
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2.5 }}
                style={{
                    padding: "4px 4px",
                    borderRadius: "50%",
                    border: "1px solid #404040",
                  }}
                >
                    <EditIcon style={{color:'#404040'}} />
                </IconButton>
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2.5 }}
                style={{
                    padding: "4px 4px",
                    borderRadius: "50%",
                    border: "1px solid #404040",
                  }}
                >
                    <MailOutlineIcon style={{color:'#404040'}} />
                </IconButton>
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2.5 }}
                style={{
                    padding: "4px 4px",
                    borderRadius: "50%",
                    border: "1px solid #404040",
                  }}
                >
                    <WorkOutlineIcon style={{color:'#404040'}} />
                </IconButton>
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2.5 }}
                style={{
                    padding: "4px 4px",
                    borderRadius: "50%",
                    border: "1px solid #404040",
                  }}
                >
                    <PersonOutlineIcon style={{color:'#404040'}} />
                </IconButton>
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2.5 }}
                style={{
                    padding: "4px 4px",
                    borderRadius: "50%",
                    border: "1px solid #404040",
                  }}
                >
                    <DateRangeIcon style={{color:'#404040'}} />
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
                      <div className="row form-group">
                        <label className="col-form-label col-lg-4" style={{textAlign:'right'}}>
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required" style={{color:'#737373'}}>
                            Origin
                            </span>
                          </span>
                        </label>
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required">
                              Sourced
                            </span>
                          </span>
                        </label>
                      </div>
                      <div className="row form-group">
                        <label className="col-form-label col-lg-4" style={{textAlign:'right'}}>
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required" style={{color:'#737373'}}>
                            Mobile
                            </span>
                          </span>
                        </label>
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required">
                            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 1 }}
                            style={{
                                padding: "0px",
                                color:"#ffffff",
                                backgroundColor:"#99ff99",
                                borderRadius:"40%"
                            }}
                            >
                                <PhoneIcon style={{color:'#404040'}} />
                            </IconButton>
                            {data&&data.mobile}
                            </span>
                          </span>
                        </label>
                      </div>
                      <div className="row form-group">
                        <label className="col-form-label col-lg-4" style={{textAlign:'right'}}>
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required" style={{color:'#737373'}}>
                            Email
                            </span>
                          </span>
                        </label>
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required">
                            {data&&data.email}
                            </span>
                          </span>
                        </label>
                      </div>
                      <div className="row form-group">
                        <label className="col-form-label col-lg-4" style={{textAlign:'right'}}>
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required" style={{color:'#737373'}}>
                            Secondary Email
                            </span>
                          </span>
                        </label>
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required">
                            {data&&data.secondaryEmail}
                            </span>
                          </span>
                        </label>
                      </div>
                      <div className="row form-group">
                        <label className="col-form-label col-lg-4" style={{textAlign:'right'}}>
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required" style={{color:'#737373'}}>
                            Experience in Years
                            </span>
                          </span>
                        </label>
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required">
                            {data&&data.expInYrs}
                            </span>
                          </span>
                        </label>
                      </div>
                      <div className="row form-group">
                        <label className="col-form-label col-lg-4" style={{textAlign:'right'}}>
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required" style={{color:'#737373'}}>
                            Current Job Title
                            </span>
                          </span>
                        </label>
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required">
                            {data&&data.cJobTitle}
                            </span>
                          </span>
                        </label>
                      </div>
                      <div className="row form-group">
                        <label className="col-form-label col-lg-4" style={{textAlign:'right'}}>
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required" style={{color:'#737373'}}>
                            Current Employer
                            </span>
                          </span>
                        </label>
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required">
                            {data&&data.currentEmployer}
                            </span>
                          </span>
                        </label>
                      </div>
                      <div className="row form-group">
                        <label className="col-form-label col-lg-4" style={{textAlign:'right'}}>
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required" style={{color:'#737373'}}>
                            Skill Set
                            </span>
                          </span>
                        </label>
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required">
                            {data&&data.skillSet}
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
                            <label><b>Basic Info</b></label>
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
                        <label className="col-form-label col-lg-4" style={{textAlign:'right'}}>
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required" style={{color:'#737373'}}>
                            Candidate ID
                            </span>
                          </span>
                        </label>
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required">
                            {data&&data.id}
                            </span>
                          </span>
                        </label>
                      </div>
                      <div className="row form-group">
                        <label className="col-form-label col-lg-4" style={{textAlign:'right'}}>
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required" style={{color:'#737373'}}>
                            Email
                            </span>
                          </span>
                        </label>
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required">
                            {data&&data.email}
                            </span>
                          </span>
                        </label>
                      </div>
                      <div className="row form-group">
                        <label className="col-form-label col-lg-4" style={{textAlign:'right'}}>
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required" style={{color:'#737373'}}>
                            Phone
                            </span>
                          </span>
                        </label>
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required">
                            {data&&data.phone}
                            </span>
                          </span>
                        </label>
                      </div>
                      <div className="row form-group">
                        <label className="col-form-label col-lg-4" style={{textAlign:'right'}}>
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required" style={{color:'#737373'}}>
                            Website
                            </span>
                          </span>
                        </label>
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required">
                            {data&&data.website}
                            </span>
                          </span>
                        </label>
                      </div>
                      <div className="row form-group">
                        <label className="col-form-label col-lg-4" style={{textAlign:'right'}}>
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required" style={{color:'#737373'}}>
                            Secondary Email
                            </span>
                          </span>
                        </label>
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required">
                            {data&&data.secondaryEmail}
                            </span>
                          </span>
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="row form-group">
                        <label className="col-form-label col-lg-4" style={{textAlign:'right'}}>
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
                            {data&&data.firstName} {data&&data.lastName}
                            </span>
                          </span>
                        </label>
                      </div>
                      <div className="row form-group">
                        <label className="col-form-label col-lg-4" style={{textAlign:'right'}}>
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required" style={{color:'#737373'}}>
                            Mobile
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
                      </div>
                      <div className="row form-group">
                        <label className="col-form-label col-lg-4" style={{textAlign:'right'}}>
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required" style={{color:'#737373'}}>
                            Fax
                            </span>
                          </span>
                        </label>
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required">
                            {data&&data.fax}
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
                            <label><b>Address Information</b></label>
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
                        <label className="col-form-label col-lg-4" style={{textAlign:'right'}}>
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required" style={{color:'#737373'}}>
                            Street
                            </span>
                          </span>
                        </label>
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required">
                            {data&&data.street}
                            </span>
                          </span>
                        </label>
                      </div>
                      <div className="row form-group">
                        <label className="col-form-label col-lg-4" style={{textAlign:'right'}}>
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required" style={{color:'#737373'}}>
                            City
                            </span>
                          </span>
                        </label>
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required">
                            {data&&data.city}
                            </span>
                          </span>
                        </label>
                      </div>
                      <div className="row form-group">
                        <label className="col-form-label col-lg-4" style={{textAlign:'right'}}>
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required" style={{color:'#737373'}}>
                            Country
                            </span>
                          </span>
                        </label>
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required">
                            {data&&data.country}
                            </span>
                          </span>
                        </label>
                      </div>
                      
                      
                    </div>

                    <div className="col-lg-6">
                      <div className="row form-group">
                        <label className="col-form-label col-lg-4" style={{textAlign:'right'}}>
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required" style={{color:'#737373'}}>
                            Zip/Postal Code
                            </span>
                          </span>
                        </label>
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required">
                            {data&&data.zip}
                            </span>
                          </span>
                        </label>
                      </div>
                      <div className="row form-group">
                        <label className="col-form-label col-lg-4" style={{textAlign:'right'}}>
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required" style={{color:'#737373'}}>
                            State/Province
                            </span>
                          </span>
                        </label>
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required">
                            {data&&data.state}
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
                            <label><b>Professional Details</b></label>
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
                        <label className="col-form-label col-lg-4" style={{textAlign:'right'}}>
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required" style={{color:'#737373'}}>
                            Experience in Years
                            </span>
                          </span>
                        </label>
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required">
                            {data&&data.expInYrs}
                            </span>
                          </span>
                        </label>
                      </div>
                      <div className="row form-group">
                        <label className="col-form-label col-lg-4" style={{textAlign:'right'}}>
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required" style={{color:'#737373'}}>
                            Current Job Title
                            </span>
                          </span>
                        </label>
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required">
                            {data&&data.cJobTitle}
                            </span>
                          </span>
                        </label>
                      </div>
                      <div className="row form-group">
                        <label className="col-form-label col-lg-4" style={{textAlign:'right'}}>
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required" style={{color:'#737373'}}>
                            Expected Salary
                            </span>
                          </span>
                        </label>
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required">
                            {data&&data.expectedSalary}
                            </span>
                          </span>
                        </label>
                      </div>
                      <div className="row form-group">
                        <label className="col-form-label col-lg-4" style={{textAlign:'right'}}>
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required" style={{color:'#737373'}}>
                            Skill Set
                            </span>
                          </span>
                        </label>
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required">
                            {data&&data.skillSet}
                            </span>
                          </span>
                        </label>
                      </div>
                      <div className="row form-group">
                        <label className="col-form-label col-lg-4" style={{textAlign:'right'}}>
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required" style={{color:'#737373'}}>
                            Skype ID
                            </span>
                          </span>
                        </label>
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required">
                            {data&&data.skypeId}
                            </span>
                          </span>
                        </label>
                      </div>
                      {/* <div className="row form-group">
                        <label className="col-form-label col-lg-4" style={{textAlign:'right'}}>
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required" style={{color:'#737373'}}>
                            Created By
                            </span>
                          </span>
                        </label>
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required">
                            Rahul (time)
                            </span>
                          </span>
                        </label>
                      </div> */}
                      
                      
                    </div>

                    <div className="col-lg-6">
                      <div className="row form-group">
                        <label className="col-form-label col-lg-4" style={{textAlign:'right'}}>
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required" style={{color:'#737373'}}>
                            Highest Qualification Held
                            </span>
                          </span>
                        </label>
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required">
                            {data&&data.hQualification}
                            </span>
                          </span>
                        </label>
                      </div>
                      <div className="row form-group">
                        <label className="col-form-label col-lg-4" style={{textAlign:'right'}}>
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required" style={{color:'#737373'}}>
                            Current Employer
                            </span>
                          </span>
                        </label>
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required">
                            {data&&data.currentEmployer}
                            </span>
                          </span>
                        </label>
                      </div>
                      <div className="row form-group">
                        <label className="col-form-label col-lg-4" style={{textAlign:'right'}}>
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required" style={{color:'#737373'}}>
                            Current Salary
                            </span>
                          </span>
                        </label>
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required">
                            {data&&data.currentSalary}
                            </span>
                          </span>
                        </label>
                      </div>
                      <div className="row form-group">
                        <label className="col-form-label col-lg-4" style={{textAlign:'right'}}>
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required" style={{color:'#737373'}}>
                            Additional Info
                            </span>
                          </span>
                        </label>
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required">
                            {data&&data.additionalInfo}
                            </span>
                          </span>
                        </label>
                      </div>
                      <div className="row form-group">
                        <label className="col-form-label col-lg-4" style={{textAlign:'right'}}>
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required" style={{color:'#737373'}}>
                            Twitter
                            </span>
                          </span>
                        </label>
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required">
                            {data&&data.twitter}
                            </span>
                          </span>
                        </label>
                      </div>
                      {/* <div className="row form-group">
                        <label className="col-form-label col-lg-4" style={{textAlign:'right'}}>
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required" style={{color:'#737373'}}>
                            Modified By
                            </span>
                          </span>
                        </label>
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required">
                            Rahul (time)
                            </span>
                          </span>
                        </label>
                      </div> */}
                      
                      
                    </div>
                  </div>
                </div>
                <br/>

                <div style={{ borderWidth: "1px" }}>
                    <div className="zb-txn-form item-new">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label><b>Other Info</b></label>
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
                        <label className="col-form-label col-lg-4" style={{textAlign:'right'}}>
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required" style={{color:'#737373'}}>
                            Candidate Status
                            </span>
                          </span>
                        </label>
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required">
                            {data&&data.candidateStatus}
                            </span>
                          </span>
                        </label>
                      </div>
                      <div className="row form-group">
                        <label className="col-form-label col-lg-4" style={{textAlign:'right'}}>
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required" style={{color:'#737373'}}>
                            Candidate Owner
                            </span>
                          </span>
                        </label>
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required">
                            {data&&data.country}
                            </span>
                          </span>
                        </label>
                      </div>
                      
                      
                    </div>

                    <div className="col-lg-6">
                      <div className="row form-group">
                        <label className="col-form-label col-lg-4" style={{textAlign:'right'}}>
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required" style={{color:'#737373'}}>
                            Source
                            </span>
                          </span>
                        </label>
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required">
                            {data&&data.source}
                            </span>
                          </span>
                        </label>
                      </div>
                      <div className="row form-group">
                        <label className="col-form-label col-lg-4" style={{textAlign:'right'}}>
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required" style={{color:'#737373'}}>
                            Email Opt Out
                            </span>
                          </span>
                        </label>
                        <label className="col-form-label col-lg-4">
                          <span
                            id="ember1435"
                            className="tooltip-container text-dashed-underline ember-view"
                          >
                            <span className="required">
                            {data&&data.state}
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
                            <label><b>Educational Details -</b></label>
                          </div>
                          <br />
                        </div>
                      </div>
                    </div>
                </div>

                <div style={{ borderWidth: "1px" }}>
                    <div className="zb-txn-form item-new">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label><b>Experience Details -</b></label>
                          </div>
                          <br />
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
                            <label><b>Download Resume</b></label>
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
                              <Link href={data&&data.resumeuri}>
                              click here
                            </Link>
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
                    borderRadius: "0.4rem"
                  }}
                >
                  <div style={{ borderWidth: "1px" }}>
                    <div className="zb-txn-form item-new">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label><b>Interviews</b></label>
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
export default CandidatesView

export const getServerSideProps = async (context) => {
    return { props: { itmid: context.params.id } };
  };
