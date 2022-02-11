// @CrossOrigin(origins = "*", maxAge = 3600)
 import { URLS } from "./const";
export const signup = user => {
    return fetch("https://expensescodingmart.herokuapp.com/api/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };
  
  export const signin =async( user) => {
    return await fetch("https://expensescodingmart.herokuapp.com/api/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };
  
  export const authenticate = (data, next) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("jwt", JSON.stringify(data));
      next();
    }
  };
  
  export const signout = next => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("jwt");
      next();
  
    //   return fetch(`${API}/signout`, {
    //     method: "GET"
    //   })
    //     .then(response => console.log("signout success"))
    //     .catch(err => console.log(err));
     }
  };
  
  export const isAutheticated = () => {
    if (typeof window == "undefined") {
      return false;
    }
    if (localStorage.getItem("jwt")) {
      return JSON.parse(localStorage.getItem("jwt"));
    } else {
      return false;
    }
  };


  export const getId = () => {
    if (typeof window == "undefined") {
      return false;
    }
    if (localStorage.getItem("id")) {
      return JSON.parse(localStorage.getItem("id"));
    } else {
      return false;
    }
  };




  // export const signout = next => {
  //   if (typeof window !== "undefined") {
  //     localStorage.removeItem("jwt");
  //     next();
  
  //   //   return fetch(`${API}/signout`, {
  //   //     method: "GET"
  //   //   })
  //   //     .then(response => console.log("signout success"))
  //   //     .catch(err => console.log(err));
  //    }
  // };



 
 