
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MUIDataTable from "mui-datatables";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import axios from "axios";
import useSWR from "swr";
import { isAutheticated } from "./Auth/auth";
import { useRouter } from "next/router";
import styles from "./DisplayJobOpenings.module.css";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Form } from "semantic-ui-react";
import { URLS } from "./Auth/const";

const { accessToken } = isAutheticated();



export default function DisplayJobOpenings() {
  const router = useRouter();
  const [post, setPost] = useState([]);
  //  useEffect(()=>{
  // const { data, error } = useSWR("cuersss", fetcher);
  

  const [data , setData] = useState();
 useEffect(()=>{
 
  //  const [name,setName] = useState();
  axios.get(
    `${URLS}/api/interview`,
    { headers: { Authorization: `Bearer ${accessToken}` } }
  ).then((res)=>{
     setData(res.data);
     console.log(res.data);
  })
 },[])
  

   


  
 
  // setPost(data)
  const arr = [];
  data &&
    data.map((e) =>
      arr.push({
        "POSTING TITLE": e.postingnitle,
        "CANDIDATE NAME": e.candidatename,
        "INTERVIEWER": e.interviewer,
        "FROM": e.from,
        "TO": e.to,
        "ASSESSMENT NAME": e.assessmentname,
        "STATUS": e.interviewstatus,
        "STATE": e.states,
        "ID": e.id,
        "CMAIL":e.cmail
        
      })
    );
  // if (error) return "An Error has Occured";
  if (!data) return "Loading";
  //  },[])


  // console.log(data)

  const columns = [
    { name: "POSTING TITLE", wid: 1200 },
    { name: "CANDIDATE NAME"},
    { name: "INTERVIEWER"},
    { name: "FROM" },
    { name: "TO" },
    { name: "ASSESSMENT NAME" },
    { name: "STATUS" },

    
    {
      name: "ID",
      options: {
        display: false,
      },
      
    },

    {
      name: "CMAIL",
      options: {
        display: false,
      },
      
    },



    // {
    //   name: "STATE",
    // },
    // {
    //   name: "ID",
    //   options: {
    //     display: false,
    //   },
    // },
  ];

 
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
    print: false,
    download: false,
    onRowClick: (rowData) => {
      router.push(`/interviews/${rowData[7]}?value1=${rowData[8]}`);
      console.log("Inter Id->", rowData[5]);
      console.log("cust Id->", rowData[6]);

    },
    responsive: "scroll"
  };



  const handlesubmit=(e)=>{
    e.preventDefault();
    const names = e.target.inputs.value;
    const vals = e.target.radi.value;
    console.log(names,vals)
   if(vals==="postingTitle"){
    axios.get(
      `${URLS}/api/jobopeningbyptitle/${names}`,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    ).then((res)=>{
      setData(res.data);
       console.log(res.data)
    
    })
    

  }
    //http://localhost:8080/api/jobopeningbyarecruter/qwdkoqwk
  if(vals==="assignedRecruter"){
    axios.get(
      `${URLS}/api/jobopeningbyarecruter/${names}`,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    ).then((res)=>{
      setData(res.data);
       console.log(res.data)
    
    })
  }

  // http://localhost:8080/api/jobopeningbymanager/slkalksmdlssakdn
  
  if(vals==="accountManager"){
    axios.get(
      `${URLS}/api/jobopeningbymanager/${names}`,
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
                <title>Interviews - Hiring Software</title>
            </head>
      <div className={styles.container}>
        <div className={styles.sidbars}>
          <form onSubmit={handlesubmit} className={styles.forms} >
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
                label="Interviews"
                variant="outlined"
                name="inputs"
               
              />
              <FormControl component="fieldset">
                <FormLabel component="legend">Fields</FormLabel>
                <RadioGroup
                  aria-label="fields"
                  defaultValue="female"
                  name="radi"
                >
                  <FormControlLabel
                    value="postingTitle"
                    control={<Radio />}
                    label="Posting Title"
                  />
                  <FormControlLabel
                    value="assignedRecruter"
                    control={<Radio />}
                    label="Assigned Recruter"
                  />
                  <FormControlLabel
                    value="accountManager"
                    control={<Radio />}
                    label="Hiring Manager"
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
          <Button variant="contained" style={{marginLeft:"60%",position:"absolute",zIndex:"5",marginTop:"1rem",backgroundColor:"green",color:"white",padding:"2px 10px",textTransform:'capitalize'}} onClick={() => { router.push('/addinterview') }}>+ New</Button>
          <ThemeProvider theme={createTheme()}>
            <MUIDataTable
              title={"Interviews"}
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

