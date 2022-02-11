import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Badge from '@mui/material/Badge';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import CampaignIcon from '@mui/icons-material/Campaign';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ListAltIcon from '@mui/icons-material/ListAlt';
import TvIcon from '@mui/icons-material/Tv';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';
import EventIcon from '@mui/icons-material/Event';
import { style } from '@mui/system';
import { Link, List, ListItemButton, ListItemText } from '@mui/material';
import {useState} from 'react';
// import { isAutheticated } from './Auth/auth';

import Button from '@mui/material/Button';
// import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
// import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { isAutheticated, signout } from './Auth/auth';

import { useRouter } from 'next/router';


function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};







export default function Header(props) {
  const router = useRouter();

    const [opens, setOpens] = useState(false);
    const {username,email} = isAutheticated();

  const handleClickOpen = () => {
    setOpens(true);
  };
  const handleCloses = () => {
    setOpens(false);
  };

function signsout(){

  signout(()=>{
    router.push('/')
    alert("Signout Successfully");
  })
  
}

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));
    return (
    <>
      <Box sx={{ flexGrow: 1 }}>
      <ElevationScroll {...props}>
        <AppBar style={{height:'3rem',backgroundColor:'#33334d'}}>
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 1 }}>
                <MenuIcon />
            </IconButton>
            <Link href='/home' style={{textDecoration:'none'}}>
            <Typography style={{fontSize:'1rem',color:'#fff'}} sx={{ mr: 2 }}>
                <b>Home</b>
            </Typography>
            </Link>
           <Link href='/displayjobopenings' style={{textDecoration:'none'}}>
            <Typography style={{fontSize:'1rem',color:'#fff'}} sx={{ mr: 2 }}>
                <b>Job Openings</b>
                {/* <IconButton edge="start" color="inherit">
                    <KeyboardArrowDownIcon />
                </IconButton> */}
            </Typography>
            </Link>

            <Link href='/displaycandidates' style={{textDecoration:'none'}}>
            <Typography style={{fontSize:'1rem',color:'#fff'}} sx={{ mr: 2 }}>
                <b>Candidates</b>
                {/* <IconButton edge="start" color="inherit">
                    <KeyboardArrowDownIcon />
                </IconButton> */}
            </Typography>
            </Link>

            <Link href='/displayinterview' style={{textDecoration:'none'}}>
            <Typography style={{fontSize:'1rem',color:'#fff'}} sx={{ mr: 2 }}>
                <b>Interviews</b>
            </Typography>
            </Link>

            <Link href='/referrals' style={{textDecoration:'none'}}>
            <Typography style={{fontSize:'1rem',color:'#fff'}} sx={{ mr: 2 }}>
                <b>Referrals</b>
            </Typography>
            </Link>
            <Link href='/addcontacts' style={{textDecoration:'none'}}>
            <Typography style={{fontSize:'1rem',color:'#fff'}} sx={{ mr: 2 }}>
                <b>Contacts</b>
            </Typography>
            </Link>
          
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                <MoreHorizIcon />
            </IconButton>

            <p style={{marginLeft:'20rem'}}></p>
            
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 1 }}>
                <SearchIcon />
            </IconButton>
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 1 }}>
                <CampaignIcon />
            </IconButton>
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 1 }}>
                <NotificationsIcon />
            </IconButton>
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 1 }}>
                <PlaylistAddOutlinedIcon />
            </IconButton>
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 1 }}>
                <EventIcon />
            </IconButton>
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 1 }}>
                <SettingsOutlinedIcon />
            </IconButton>
            <IconButton edge="start" aria-label="menu" sx={{ mr: 0 }} style={{color:'#666666'}}>
                |
            </IconButton>
            <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                // aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleClickOpen}
                color="inherit"
              >
                <AccountCircle />
                {/* {user && <img style={{borderRadius:'50%',width:"50px",height:"50px"}} src={user.picture}/>}  */}
              </IconButton>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      </Box>


      <BootstrapDialog
        onClose={handleCloses}
        aria-labelledby="customized-dialog-title"
        open={opens}
        style={{marginLeft:"65rem"}}
      >
        <Header id="customized-dialog-title" onClose={handleCloses}>
          Modal title
        </Header>

        <DialogContent dividers  style={{backgroundColor:"#ffffff"}}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <lable>Profile</lable>
            <Button className="head" onClick={handleCloses}>
              X
            </Button>
            
          </div>
          <Grid container justifyContent="center">
          <AccountCircle />
            {/* {user && <img style={{borderRadius:'50%',width:"80px",height:"80px"}} src={user.picture}/>} */}
          </Grid>
          <br />         
          <Typography variant="body2" color="text.secondary" align="center"> User Name : {username}</Typography>
          <Typography variant="body2" color="text.secondary" align="center"> User Email : {email}</Typography>
         <br/>
         <br/>
         <Grid container justifyContent="center">
          <Link  href="/account" underline="none"  color="primary" style={{ alignItems: "center",margin:"auto"}}>
          My Account
           </Link>
           <span>|</span>
           {/* onClick={signsout} */}
          <Link  onClick={signsout} underline="none"  color="#ff5722" style={{ alignItems: "center",margin:"auto"}}>
          Sign Out
          </Link>
         </Grid>
      <br/> <br/>
      <Typography variant="body2" color="text.secondary" align="center" > My Orangisations</Typography>

      <List component="nav" aria-label="secondary mailbox folder"  >
        <ListItemButton >
          <ListItemText primary="Oraganisation Name:" />
        </ListItemButton>
        {/* <ListItemButton >
          <ListItemText primary="Location:" secondary={data && data.business_location}/>
        </ListItemButton> */}

      </List>
         
        </DialogContent>
        <DialogActions  style={{backgroundColor:"#ff3333"}}>
      
          <Button autoFocus onClick={handleCloses} style={{ alignItems: "center",width: "100%",margin:"auto",color:"#ffffff", height:"20px"}} >
            Close
          </Button>
        
        </DialogActions>
      </BootstrapDialog>
    

    </>
  );
}
