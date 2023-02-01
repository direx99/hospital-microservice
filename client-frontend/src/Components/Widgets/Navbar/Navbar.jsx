import React from "react";
import "../Navbar/navbar.css";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ login, loginStatus }) {
  const [homeClick, setHomeClick] = useState(true);
  const [aboutClick, setAboutClick] = useState(false);
  const [serviceClick, setServiceClick] = useState(false);
  const [communityClick, setCommunityClick] = useState(false);
  const [appointmentClick, setAppointmentClick] = useState(false);
  const [userClick, setUserClick] = useState(false);

  const [value, setValue] = React.useState(0);

  function homeClicked() {
    setHomeClick(true);
    setAboutClick(false);
    setCommunityClick(false);
    setServiceClick(false);
    setAppointmentClick(false);
    setUserClick(false);
  }
  function aboutClicked() {
    setHomeClick(false);
    setAboutClick(true);
    setCommunityClick(false);
    setServiceClick(false);
    setAppointmentClick(false);
    setUserClick(false);
  }
  function serviceClicked() {
    setHomeClick(false);
    setAboutClick(false);
    setCommunityClick(false);
    setServiceClick(true);
    setAppointmentClick(false);
    setUserClick(false);
  }
  function communityClicked() {
    setHomeClick(false);
    setAboutClick(false);
    setCommunityClick(true);
    setServiceClick(false);
    setAppointmentClick(false);
    setUserClick(false);
  }
  function appointmentClicked() {
    setHomeClick(false);
    setAboutClick(false);
    setCommunityClick(false);
    setServiceClick(false);
    setAppointmentClick(true);
    setUserClick(false);
  }
  function userClicked() {
    setHomeClick(false);
    setAboutClick(false);
    setCommunityClick(false);
    setServiceClick(false);
    setAppointmentClick(false);
    setUserClick(true);
  }

  return (
    <div>
      <div className="topbar">
        <Stack direction="row" className="topbarstack" spacing={2}>
          {/* Title*/}
          <div className="titlename">HealthCare</div>
          {/* tab bar*/}
          <div className="middle">
            <Stack direction="row" className="stack" spacing={4}>
              <Stack direction="column">
                <Link to="/" className="link">
                  <div
                    className="homebutton"
                    onClick={homeClicked}
                    style={{ opacity: homeClick == true ? "1" : "0.6" }}
                  >
                    Home
                  </div>
                </Link>
                <div
                  className="homeicon"
                  style={{ opacity: homeClick == true ? "1" : "0" }}
                ></div>
              </Stack>
              <Stack direction="column">
                <Link to="/about" className="link">
                  <div
                    className="aboutbutton"
                    onClick={aboutClicked}
                    style={{ opacity: aboutClick == true ? "1" : "0.6" }}
                  >
                    About us
                  </div>
                </Link>
                <div
                  className="abouticon"
                  style={{ opacity: aboutClick == true ? "1" : "0" }}
                ></div>
              </Stack>
              <Stack direction="column">
                <div
                  className="servicebutton"
                  onClick={serviceClicked}
                  style={{ opacity: serviceClick == true ? "1" : "0.6" }}
                >
                  Services
                </div>
                <div
                  className="serviceicon"
                  style={{ opacity: serviceClick == true ? "1" : "0" }}
                ></div>
              </Stack>
              <Stack direction="column">
                <div
                  className="communitybutton"
                  onClick={communityClicked}
                  style={{ opacity: communityClick == true ? "1" : "0.6" }}
                >
                  Community
                </div>
                <div
                  className="communityicon"
                  style={{ opacity: communityClick == true ? "1" : "0" }}
                ></div>
              </Stack>
              <Link to="/appointment" className="link">
                <Stack direction="column">
                  <div
                    className="communitybutton"
                    onClick={appointmentClicked}
                    style={{ opacity: appointmentClick == true ? "1" : "0.6" }}
                  >
                    Channeling
                  </div>
                  <div
                    className="communityicon"
                    style={{ opacity: appointmentClick == true ? "1" : "0" }}
                  ></div>
                </Stack>
              </Link>
            </Stack>
          </div>
          {loginStatus ? (
            <Link to="/profile" className="link">
              <Stack direction="column">
                <div className="userbutton" autoCapitalize='on'  onClick={userClicked} style={{ opacity: userClick == true ? "1" : "0.6" }} >{login.title}. {login.firstName} {login.lastName}</div>
                <div
                    className="usericon"
                    style={{ opacity: userClick == true ? "1" : "0" }}
                  ></div>
                  </Stack>
            </Link>
          ) : (
            <Link to="/login" className="link">
            <Stack direction="column">
              <div className="userbutton" autoCapitalize='on'  onClick={userClicked} style={{ opacity: userClick == true ? "1" : "0.6" }} >Login</div>
              <div
                  className="usericon"
                  style={{ opacity: userClick == true ? "1" : "0" }}
                ></div>
                </Stack>
          </Link>
          )}
        </Stack>
      </div>
    </div>
  );
}
