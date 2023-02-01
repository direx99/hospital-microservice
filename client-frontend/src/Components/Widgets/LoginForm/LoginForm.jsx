import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import "./loginform.css";
import axios from "axios";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function LoginForm({
  userName,
  password,
  setPassword,
  setUserName,
  checkData,
  login,
  loginStatus,
}) {
  return (
    <div>
      <Stack className="loginformcontainer">
        <div className="loginformbox">
          <Stack direction="column" spacing={2}>
            <div className="usernameinppp">UserName</div>
            <input
              className="inputnob"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            ></input>
          </Stack>
          <Stack direction="column" spacing={2}>
            <div className="usernameinppp">Password</div>
            <input
            type='password'
              className="inputnob"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
          </Stack>

         
        </div>
        {(userName== "" || password=="" )? (
            <div className="errmsggg">
             Enter User Name And Password
            
            </div>
          ) : (
            <div className="btntosubmit" onClick={checkData}>Login</div>
          )}


<div className="signuptttle">If you have not an account please sign up </div>
<Link className="link" to='/user-register'>
        <div className="btntosuppt" >Sign Up Now</div>
</Link>
      </Stack>
    </div>
  );
}
