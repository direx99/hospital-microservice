import React from "react";
import TopBar from "../Widgets/TopBar/TopBar";
import Stack from "@mui/material/Stack";
import Sidebar from "../Widgets/Sidebar/Sidebar";
import "./home.css";
import "./qrscanner.css";
import dateFormat from "dateformat";
import HomeConetent from "../Widgets/HomeContent/HomeConetent";
import AppointmentData from "../Widgets/AppointmentData/AppointmentData";
import HomeInfo from "../Widgets/HomeInfo/HomeInfo";
import AppointmentStatus from "../Widgets/AppointmentStatus/AppointmentStatus";
import NextPatients from "../Widgets/NextPatients/NextPatients";
import Hotline from "../Widgets/Hotline/Hotline";
import QrScan from "../Widgets/QrScan/QrScan";
import { QrReader } from "react-qr-reader";
import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Chip from '@mui/material/Chip'


export default function QrScanner({
  doctorLogin,
  patientClick,
  homeclick,
  appointmentClick,
  homeClicked,
  appointmentClicked,
  patientClicked,
}) {
  const [data, setData] = useState("");
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8011/appointments/${data}`).then((res) => {
      setPost(res.data);
    });
  }, [post]);

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
            <div>
              <div className="appheading">Scan Here</div>
              <div className="appsubheading">
                {" "}
                Scan or Enter Appointment ID here
              </div>
            </div>
            <div className="apstatus">
              <Stack className="scanner">
                <QrReader
                  onResult={(result, error) => {
                    if (!!result) {
                      setData(result?.text);
                    }

                    if (!!error) {
                      console.info(error);
                    }
                  }}
                />
              </Stack>
              <Stack className="resaulyyy">
                {data == "" ? (
                  <div className="uegdde">Not found</div>
                ) : (
                  <Stack className="jojkojo">
                    <div className="uegdde">Found</div>
                    <Stack>
                      <Stack direction="row" className="jkjkkn">
                        <div className="ijiii">ID</div>
                        <div>{post.id}</div>
                      </Stack>
                      <Stack direction="row" className="jkjkkn">
                        <div>Patient </div>
                        <div>{post.patientName}</div>
                      </Stack>
                      <Stack direction="row" className="jkjkkn">
                        <div>Doctor</div>
                        <div>{post.doctorName}</div>
                      </Stack>
                      <Stack direction="row" className="jkjkkn">
                        <div>Date</div>
                        <div>{dateFormat(post.appointmentDate, "yyyy - mm - dd")}</div>
                      </Stack>
                      <Stack direction="row" className="jkjkkn">
                        <div>Time</div>
                        <div>{post.time}</div>
                      </Stack>
                      <NavLink className="link" to={`/appointment/${post.id}`}>

                        <Chip label="View" style={{backgroundColor:'#2392FF',color:'#fff',width:'70px'}} size="small" className="jhj"/>
                        </NavLink>
                    </Stack>
                  </Stack>
                )}
              </Stack>
            </div>
          </div>
        </Stack>
      </Stack>
    </div>
  );
}
