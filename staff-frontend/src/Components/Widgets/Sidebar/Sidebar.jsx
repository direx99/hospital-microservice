import React from "react";
import "./sidebar.css";
import {Link} from 'react-router-dom'
import Stack from "@mui/material/Stack";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { useState } from "react";
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import Diversity1OutlinedIcon from '@mui/icons-material/Diversity1Outlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
export default function Sidebar({doctorLogin,

  homeclick,
  patientClick,
  appointmentClick,
  homeClicked,
  appointmentClicked,
  patientClicked


}) {
  

  return (
    <div className="sidebar">
     <Stack>
     <Link to='/' className="link">
      <Stack direction='row' onClick={homeClicked} style={{ color: homeclick == true ? "#494783" : "#858CAD",backgroundColor: homeclick == true ? "#F6F1FE" : "#fff" }}
 className='sidebarobject'>
        <HomeOutlinedIcon  className="homeicon" style={{ color: homeclick == true ? "#494783" : "#858CAD"}}/>
        <div  className="sidebartitle">Home</div>
      </Stack>
      </Link>
      <Link to='/appointments' className="link">
      <Stack direction='row' onClick={appointmentClicked} style={{ color: appointmentClick == true ? "#494783" : "#858CAD" }} className='sidebarobject'>
        <EventOutlinedIcon className="homeicon" style={{ color: appointmentClick == true ? "#494783" : "#858CAD"}}/>
        <div  className="sidebartitle">Appointments</div>
      </Stack>
      </Link>
      <Link to='/ap' className="link">
      <Stack direction='row' onClick={patientClicked} style={{ color: patientClick == true ? "#494783" : "#858CAD" }} className='sidebarobject'>
        <Diversity1OutlinedIcon className="homeicon" style={{ color: patientClick == true ? "#494783" : "#858CAD"}}/>
        <div  className="sidebartitle">My Patients</div>
      </Stack>
      </Link>
      <Stack direction='row' onClick={homeClicked} style={{ color: homeclick == true ? "#494783" : "#858CAD" }} className='sidebarobject'>
        <CalendarMonthOutlinedIcon className="homeicon"/>
        <div  className="sidebartitle">Calendar</div>
      </Stack>
     </Stack>
    </div>
  );
}

