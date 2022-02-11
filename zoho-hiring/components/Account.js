import * as React from "react";
import { Link } from "@mui/material";
import {useState} from "react";
import Box from '@mui/material/Box';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Button from '@mui/material/Button';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import { isAutheticated } from "./Auth/auth";
import axios from "axios";
import useSWR from "swr";
import { URLS } from "./Auth/const";
const { accessToken,username,email}=isAutheticated();


// const id = JSON.parse(localStorage.getItem("Cid"));;

const fetcher = async()=>{
    const id = JSON.parse(localStorage.getItem("Cid"));;
    const response = await axios.get(`${URLS}/api/company/${id}`,{ headers: {"Authorization" : `Bearer ${accessToken}`}});
    console.log(response)
    return response.data;
}

export default function Account(){
   const {data,error} = useSWR('surshhshhe',fetcher)
   console.log(data)
//   const [value, setValue] = useState('1');
//   const [values, setValues] = useState({
    
//     project_name:"",
//     description:"",
//     customer_name:"",
//     billing_method:"",
//   });

//   const {project_name, description,customer_name,billing_method}=values
//   console.log(values)

//   const handleChange = name => event => {
//     setValues({ ...values,[name]:event.target.value});
//   };
//   const handleChanges = (event, newValue) => {
//     setValue(newValue);
//   };


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setValues({...values,isclick:true})
//     const timesheet={
        
//     project_name:project_name,
//     description:description,
//     customer_name:customer_name,
//     billing_method:billing_method,
   
//           }
//         console.log(timesheet)
//         postParRec(timesheet).then((data)=>{
//         if(data.error){
//           console.log("error")
//         }
//         else{
//           alert("Saved Succesfully")
//         }
//       }
//         )

//       }




    return(



        <div>
             <div className="column content-column" style={{ overflowY:"scroll", marginLeft: "-47px", marginTop:"8px", background:"#d9d9d9"}}>
                 <div style={{ width:"100%",padding:"40px 60px" }}>
                    <p style={{fontSize:'25px'}}>Profile</p>
                     <div style={{width:"100%"}}>
                     <Box
                        sx={{
                            backgroundColor: '#ffffff',
                            borderRadius:'6px',
                            padding:'40px',
                        }}
                        >
                        <Box
                            sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            }}
                        >
                            <div>
                                <ListItem>
                                    <ListItemIcon>
                                    {/* {user && <img style={{borderRadius:'50%',width:"80px",height:"80px"}} src={user.picture}/>} */}
                                    </ListItemIcon>&nbsp;
                                    {/* <ListItemText primary={user&&user.name} secondary={user && user.email} /> */}
                                </ListItem>
                            </div>
                            <div style={{alignItems:'center'}}>
                                <ListItem>
                                    {/* <Button href="/accountedit" variant="contained" style={{background:'#339933',textTransform:'none',fontSize:'18px',padding:'6px 40px'}}>Edit</Button> */}
                                </ListItem>
                            </div>
                        </Box>
                        <Box
                            sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            }}
                        >
                            <ListItem>
                                <ListItemText primary={"Full Name"}  secondary={username}/>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={"Nick Name"} secondary={username} />
                            </ListItem>
                        </Box>
                        <Box
                            sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            }}
                        >
                            <ListItem>
                                <ListItemText primary={"Gender"} secondary={"I'd prefer not to say"} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={"Company Name"} secondary={data&&data.companyname} />
                            </ListItem>
                        </Box>
                        <Box
                            sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            }}
                        >
                            <ListItem>
                                <ListItemText primary={"State"} secondary={data&&data.phoneno} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={"Website"} secondary={data&&data.website}  />
                            </ListItem>
                        </Box>
                        <Box
                            sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            }}
                        >
                            <ListItem>
                                <ListItemText primary={"Time zone"} secondary={data&&data.timeZone}/>
                            </ListItem>
                            
                        </Box>
                    </Box>
                    <br />
                    <Box
                        sx={{
                            backgroundColor: '#ffffff',
                            borderRadius:'6px',
                            padding:'40px',
                        }}
                        >
                        <Box
                            sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            }}
                        >
                            <ListItem>
                                <ListItemText primary={"My Email Addresses"} secondary={"View and manage all of the email addresses associated with your account."} />
                            </ListItem>
                            
                        </Box>
                        <hr/ >
                        <br />
                        <Box
                            sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            }} 
                        >
                            <ListItem style={{width:'60px',height:'60px', background:'#ff3399',borderRadius:'50%'}}>
                                <ListItemIcon>
                                    <MailOutlineIcon style={{fontSize:'30px',color:'#ffffff'}}/>
                                </ListItemIcon>&nbsp;
                                <ListItemText primary={email} />
                            </ListItem>            
                        </Box>
                        <br />
                        <Box
                            sx={{
                            display: 'flex',
                            }}
                        >
                            <ListItem style={{justifyContent:'center'}}>
                                <Button variant="text" style={{textTransform:'none'}}><b>+ Add Email Address</b></Button>
                            </ListItem>            
                        </Box>
                    </Box>
                    <br />
                    <Box
                        sx={{
                            backgroundColor: '#ffffff',
                            borderRadius:'6px',
                            padding:'40px',
                        }}
                        >
                        <Box
                            sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            }}
                        >
                            <ListItem>
                                <ListItemText primary={"My Mobile Numbers"} secondary={data&&data.phoneno} />
                            </ListItem>
                            
                        </Box>
                        <hr/ >
                        <br />
                        <Box
                            sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            }}
                        >
                            <ListItem style={{width:'60px',height:'60px', background:'#ffcc00',borderRadius:'50%'}}>
                                <ListItemIcon>
                                    <PhoneIcon style={{fontSize:'30px',color:'#ffffff'}}/>
                                </ListItemIcon>&nbsp;
                                <ListItemText primary={"phone_no"} />
                            </ListItem>            
                        </Box>
                        <br />
                        <Box
                            sx={{
                            display: 'flex',
                            }}
                        >
                            <ListItem style={{justifyContent:'center'}}>
                                <Button variant="text" style={{textTransform:'none'}}><b>+ Add Mobile Number</b></Button>
                            </ListItem>            
                        </Box>
                    </Box>
                    </div>
                 
                 
                 </div>
                 
             </div>
        </div>
    )
};