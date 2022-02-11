import { isAutheticated } from '../Auth/auth'
import { URLS } from './const';

export const trips = async(job,imgid) => {
    const { accessToken } = isAutheticated();
    return await fetch(`${URLS}/api/jobopening/${imgid}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Authorization":`Bearer ${accessToken}`
        
      },
      body: JSON.stringify(job)
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };



  export const getCompany = async(newData) => {
    const { accessToken } = isAutheticated();
    // let email = user.email;
    // console.log(token)
    return await fetch(`${URLS}/api/candidate/${newData}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization : `Bearer ${accessToken}`
      
      },
      
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };





