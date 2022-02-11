// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   Link,
//   TableRow,
//   Button,
//   Toolbar,
// } from "@mui/material";
// import { Box } from "@mui/system";
// import AddIcon from "@mui/icons-material/Add";
// import DehazeIcon from "@mui/icons-material/Dehaze";
// import EmojiObjectsTwoToneIcon from "@mui/icons-material/EmojiObjectsTwoTone";
// import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
// import React, { useState, useEffect } from "react";
// import Customers from "../services/Customers";

import MUIDataTable from "mui-datatables";
import React, { useState,useEffect } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import styles from "./DisplayJobOpenings.module.css";


import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import DeleteIcon from '@mui/icons-material/Delete';
import Button from "@mui/material/Button"
import axios from "axios"
import useSWR from 'swr'
import { isAutheticated } from "./Auth/auth";
// import { useRouter } from "next/router";
const drawerWidth = 240;
const {accessToken,comapny_id} = isAutheticated();

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Box, TextField } from "@mui/material";

import { useRouter } from "next/router";

import { URLS } from "./Auth/const";
// const fetcher = async () => {
//   const response = await axios.get(`http://localhost:8080/api/candidates`,{ headers: {"Authorization" : `Bearer ${accessToken}`}})
//   console.log(response.data)  
//   return response.data
  
// } 
// http://localhost:8080/api/getcandidatebyfname/



export default function DisplayCandidates() {
 
const router = useRouter();

  const [data , setData] = useState();

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
     setData(resp.data);
     console.log(resp.data)
  
  })
  
  
  
    })
  },[])


  // setPost(data)
  const arr = []
  data && data.map((e=> arr.push({"CANDIDATE NAME":e.firstName,"EMAIL":e.email,"JOB TITLE":e.cJobTitle,"QUALIFICATION":e.hQualification,"SKILL SET":e.skillSet,"ASSESSMENT":e.assessment,"ID":e.id})))
 
if(!data) return "Loading"
//  },[])

 
  
// console.log(data)


const columns = [
  { name: "CANDIDATE NAME"},
  { name:"EMAIL"},
  { name: "JOB TITLE"  },
  { name:"QUALIFICATION"},
  { name:"SKILL SET"},
  { name:"ASSESSMENT"},
  {
    name: "ID",
    options: {
      display: false,
    }}
  
  
];
// const datas = [
//   data.map((datas)=>{[
//     datas.customer_email,
//     datas.customer_type,
//     datas.first_name,
//     datas._id

//   ]})
// ]
{/* <TableCell>NAME</TableCell> */}
//           <TableCell>COMPANY NAME</TableCell>
//           <TableCell>EMAIL</TableCell>
//           <TableCell>WORKPHONE</TableCell>
//           <TableCell>RECEIVABLES</TableCell>
//           <TableCell>Action</TableCell>
// const columns = [
//   { title: "Trip Id", field: "_id" },

//   { title: "Departure Date", field: "depart_date" },
//   { title: "Arrive At", field: "arrive_at" },
//   { title: "Status", field: "status" },
//   { title: "Approver", field: "approver" },
//   { title: "Email", field: "email" },
// ];


const options = {
  onTableChange: (action, state) => {
    console.log(action);
    console.dir(state);
  },
  print:false,
  download:false,
  onRowClick: (rowData) => {
    router.push(`/candidates/${rowData[6]}`)
            console.log("RowClicked->", rowData[6] );
        },
  responsive: 'scroll',
};

  // return (
  //   <div style={{marginTop:"7rem",  marginLeft:"13rem", marginRight:"0rem" , display:"fixed"}}>
  //     <Button variant="contained" style={{marginLeft:"65%",position:"absolute",zIndex:"1",marginTop:"1rem",backgroundColor:"green",color:"white",padding:"5px 20px"}} onClick={() => { router.push('/addcandidates') }}>+ New</Button>
  //   <ThemeProvider theme={createTheme()} >
   
  //  <MUIDataTable 
  //       title={"Customers"}
       
  //       columns={columns.map((e) => e)}
  //       data={arr}
        
  //       options={options}
  //       // style={{zIndex:'-1',position:'absolute'}}
  //     />
  //   </ThemeProvider>
  //   </div>
  // );

  const handlesubmit=(e)=>{
    e.preventDefault();
    const names = e.target.inputs.value;
    const vals = e.target.radi.value;
    console.log(names,vals)
   if(vals==="postingTitle"){
    axios.get(
      `${URLS}/api/getcandidatebyfname/${names}`,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    ).then((res)=>{
      setData(res.data);
       console.log(res.data)
    
    })

  }
    //http://localhost:8080/api/jobopeningbyarecruter/qwdkoqwk
  if(vals==="assignedRecruter"){
    axios.get(
      `${URLS}/api/getcandidatebyemail/${names}`,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    ).then((res)=>{
      setData(res.data);
       console.log(res.data)
    
    })
  }

  if(vals==="accountManager"){
    axios.get(
      `${URLS}/api/getcandidatebyphone/${names}`,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    ).then((res)=>{
      setData(res.data);
       console.log(res.data)
    
    })
  }


  }



  return (
    <>
            <head>
                <title>Candidate - Hiring Software</title>
            </head>
      <div className={styles.container}>
        <div className={styles.sidbars}>
          <form  onSubmit={handlesubmit} className={styles.forms} >
             <Box
      
              sx={{
                "& > :not(style)": { m: 1, width: "90%" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                className={styles.textfield}
                id="outlined-basic"
                label="Candidates"
                variant="outlined"
                name="inputs"
               
              />
              <FormControl component="fieldset">
                <FormLabel component="legend">Search By</FormLabel>
                <RadioGroup
                  aria-label="fields"
                  defaultValue="female"
                  name="radi"
                >
                  <FormControlLabel
                    value="postingTitle"
                    control={<Radio />}
                    label="Candidate Name"
                  />
                  <FormControlLabel
                    value="assignedRecruter"
                    control={<Radio />}
                    label="Candidate Email"
                  />
                  <FormControlLabel
                    value="accountManager"
                    control={<Radio />}
                    label="Candidate Phone"
                  />
                </RadioGroup>
              </FormControl>
              </Box>
             {/* <input type='text' name='inputs'/> */}
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
                  Search
                </Button>            
          </form>
        </div>
        <div style={{ display: "fixed" }} className={styles.tables}>
          <Button variant="contained" style={{marginLeft:"55%",position:"absolute",zIndex:"5",marginTop:"1rem",backgroundColor:"green",color:"white",padding:"2px 10px",textTransform:'capitalize'}} onClick={() => { router.push('/addcandidates') }}>+ New</Button>
          <ThemeProvider theme={createTheme()} >
   
    <MUIDataTable 
        title={"Candidates"}
       
        columns={columns.map((e) => e)}
        data={arr}
        
        options={options}
        // style={{zIndex:'-1',position:'absolute'}}
      />
    </ThemeProvider>
        </div>
      </div>
    </>
  );
}



// <div>
// <div
//   class="navba"
//   style={{ float: "right", marginTop: "100px", marginRight: "50px" }}
// >
//   <Button
//     variant="contained"
//     color="success"
//     component={Link}
//     href="/addcustomer"
//   >
//     {" "}
//     <AddIcon sx={{ color: "#DCDCDC" }} />{" "}
//     <a style={{ textDecoration: "none", color: "white" }}>New </a>
//   </Button>
//   <SettingsOutlinedIcon style={{ marginLeft: "20px" }} />
//   <DehazeIcon
//     sx={{
//       border: "1px solid #D3D3D3",
//       borderRadius: "3px",
//       padding: "3px",
//       background: "#DCDCDC",
//       marginLeft: "15px",
//     }}
//   />
//   <a
//     href="#"
//     data-ember-action=""
//     data-ember-action-2133="2133"
//     class="blubs"
//   >
//     <EmojiObjectsTwoToneIcon
//       color="primary"
//       style={{ marginLeft: "15px" }}
//     />
//   </a>
// </div>
// <hr />

// <Box
//   component="main"
//   lg={{
//     flexGrow: 10,
//     p: 3,
//     width: { lg: `calc(100% - ${drawerWidth}px)` },
//   }}
// >
//   <Toolbar />
//   <TableContainer
//     style={{ width: "75%", marginTop: "150px", marginLeft: "280px" }}
//   >
//     <Table>
//       <TableHead>
//         <TableRow>
//           <TableCell>NAME</TableCell>
//           <TableCell>COMPANY NAME</TableCell>
//           <TableCell>EMAIL</TableCell>
//           <TableCell>WORKPHONE</TableCell>
//           <TableCell>RECEIVABLES</TableCell>
//           <TableCell>Action</TableCell>
//         </TableRow>
//       </TableHead>
//       <TableBody>
//         {data &&
//           data.map((customersitem) => (
//             <TableRow row >
//               <TableCell>
//                 {customersitem.first_name} {customersitem.last_name}
//               </TableCell>
//               <TableCell> </TableCell>
//               <TableCell>{customersitem.customer_email}</TableCell>
//               <TableCell>{customersitem.work_phone}</TableCell>
//               <TableCell></TableCell>
//               <TableCell>
//                 <Button
//                   variant="contained"
//                   onClick={() => setLocalStorage(customersitem._id)}
//                   component={Link}
//                   href="/transactions"
//                 >
//                   View More
//                 </Button>
//               </TableCell>
//             </TableRow>
//           ))}
//       </TableBody>
//     </Table>
//   </TableContainer>
// </Box>
