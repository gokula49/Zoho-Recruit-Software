import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import "bootstrap/dist/css/bootstrap.css";
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import IconButton from '@mui/material/IconButton';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';

export default function JobOpening() {
    return (
    <>
        <div style={{marginTop:'3rem' }}>
          <div style={{width:'100%', padding:'7px 25px',backgroundColor:'#f2f2f2',borderRadius:'0px'}} className="ember-text-field text-left ember-view form-control">
            <div style={{display:'flex'}} className="d-flex justify-content-between">
              <div>
                <Typography style={{fontSize:'1.3rem'}}>
                  <b>Create Job Opening</b>
                </Typography>
              </div>
              <div>
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <PhoneIphoneIcon />
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
        </div>
    </>
  );
}
