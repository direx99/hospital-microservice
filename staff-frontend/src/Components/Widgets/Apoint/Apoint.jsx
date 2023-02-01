import React from 'react'
import Stack from '@mui/material/Stack'
import TopBar from '../TopBar/TopBar'
import Sidebar from '../Sidebar/Sidebar'
import AllAppointments from '../AllAppointments/AllAppointments'
import SingleApoint from '../SingleApoint/SingleApoint'
import './dashboard.css'
export default function Apoint({
  doctorLogin,
  patientClick,
  homeclick,
  appointmentClick,
  homeClicked,
  appointmentClicked,
  patientClicked

}) {

  



  return (
    <div className="home">
    <Stack>
      <Stack direction="row">
        <div>
          <Sidebar
            patientClick={patientClick}
            homeclick={homeclick}
            appointmentClick={appointmentClick}
            patientClicked={patientClicked}
            homeClicked={homeClicked}
            appointmentClicked={appointmentClicked}
          />
        </div>
        <div className="contentcontainer">
          <TopBar />

          <Stack direction="row">
            <Stack direction="column">
            <SingleApoint doctorLogin={doctorLogin}/>
            
            </Stack>
           
            

          </Stack>
        </div>
        
      </Stack>
      
    </Stack>
  </div>
  )
} 

