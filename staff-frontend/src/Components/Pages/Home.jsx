import React from "react";
import TopBar from "../Widgets/TopBar/TopBar";
import Stack from "@mui/material/Stack";
import Sidebar from "../Widgets/Sidebar/Sidebar";
import "./home.css";
import HomeConetent from "../Widgets/HomeContent/HomeConetent";
import AppointmentData from "../Widgets/AppointmentData/AppointmentData";
import HomeInfo from "../Widgets/HomeInfo/HomeInfo";
import AppointmentStatus from "../Widgets/AppointmentStatus/AppointmentStatus";
import NextPatients from "../Widgets/NextPatients/NextPatients";
import Hotline from "../Widgets/Hotline/Hotline";
export default function Home({
  doctorLogin,
  patientClick,
  homeclick,
  appointmentClick,
  homeClicked,
  appointmentClicked,
  patientClicked,
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
                <div>
                  <div className="appheading">HealthCare Hospital Pvt Ltd</div>
                  <div className="appsubheading">
                    Patient & Doctor Management System
                  </div>
                </div>
                <div className="apstatus">
                  <AppointmentStatus />
                  
                </div>
              </Stack>
             
              

            </Stack>
          </div>
        </Stack>
      </Stack>
    </div>
  );
}
