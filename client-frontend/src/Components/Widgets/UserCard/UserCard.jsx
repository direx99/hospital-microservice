import { Stack } from "@mui/system";
import React from "react";
import QRCode from "react-qr-code";
import "./usercard.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  NavLink,
  Link,
} from "react-router-dom";
import User from "./user.jpeg";
import AllAppointments from "../AllAppointments/AllAppointments";
import InsertInvitationOutlinedIcon from "@mui/icons-material/InsertInvitationOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { useState } from "react";
import MyProfile from "../MyProfile/MyProfile";
export default function UserCard({ login,loginStatus,setLoginStatus }) {


  const[profleClick,setProfileClick]=useState(true);
  const[apointClick,setApointClick]=useState(false);
  const[settingClick,setSettingClick]=useState(false);
  const[logiytClick,setLogoutClick]=useState(false);
  

  function aClick(){
    setApointClick(true);
    setProfileClick(false);

  }
  function pClick(){
    setApointClick(false);
    setProfileClick(true);

  }
  function lClick(){
    setApointClick(false);
    setProfileClick(false);
    setLoginStatus(false);

  }


  const loginId = login.id;
  return (
    <div>
      <Stack direction="row" className="usercard">
        <Stack className="rightsidebar">
          <img className="userImage" src={User}></img>
          <div className="usernameprofile">
            {login.title} {login.firstName}
          </div>
          <div className="lastusernameprofile">{login.lastName}</div>
          <Stack className="opstackk" spacing={0.4}>
            <Stack spacing={2} direction="row" onClick={pClick} className="option1stt">
              <Person2OutlinedIcon className="option1ico" />
              <div className="option1">Profile</div>
            </Stack>
            <Stack spacing={2} direction="row" onClick={aClick} className="option1stt">
              <InsertInvitationOutlinedIcon className="option1ico" />
              <div className="option1">Appointments</div>
            </Stack>
            <Stack spacing={2} direction="row" className="option1stt">
              <SettingsOutlinedIcon className="option1ico" />
              <div className="option1">Settings</div>
            </Stack>
            <Link className="link" to="/login">
            <Stack spacing={2} onClick={(e)=>(setLoginStatus(false))} direction="row"  className="option1stt">
              <ExitToAppOutlinedIcon className="option1ico" />
              <div className="option1">Logout</div>
            </Stack>
            </Link>
          </Stack>
        </Stack>
        <Stack className="leftsideba">
          {profleClick?(<div><MyProfile loginStatus={loginStatus}  login={login}/></div>):(<div>
            {apointClick?( <AllAppointments login={login} />):(<div></div>)}</div>
          )}
         
        </Stack>
      </Stack>
    </div>
  );
}
