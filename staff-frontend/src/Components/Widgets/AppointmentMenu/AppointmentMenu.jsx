import React, { useState, useEffect } from "react";
import axios from "axios";
import Stack from "@mui/material/Stack";
import "./appointmentmenu.css";
import { Link, NavLink } from "react-router-dom";
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import TopBar from "../TopBar/TopBar";
import Sidebar from "../Sidebar/Sidebar";
import Chip from '@mui/material/Chip'

export default function AppointmentMenu({
  doctorLogin,
  patientClick,
  homeclick,
  appointmentClick,
  homeClicked,
  appointmentClicked,
  patientClicked,
}) {
  const [checkDone, setCheckDone] = useState(false);
  const [docData, setDocData] = useState([]);
  const [appointmentDate, setAppointmentDate] = useState(null);
  const [doctorId, setDoctorId] = useState(null);
  const [avbl, setAvbl] = useState([]);
  const [available, setAvailable] = useState();
  const [selectedDoctor, setSelectedDoctor] = useState([]);
  const [time, setTime] = useState("");
  const [viewReciept, setViewReciept] = useState(false);
  const [appointmentData, setAppointmentData] = useState([]);
  const patientId = 109898;
  const [createdAppointment, setCreatedAppointment] = useState([]);
  const [apointments, setAppointments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [doctorData, setDoctorData] = useState([]);
  const [upcommingAppointmentsToday, setUpcommingAppointmentsToday] = useState([]);
  const [statustoday,setStatustoday]=useState("registered", "arrived")


  


  useEffect(() => {
    axios
      .get(
        `http://localhost:8011/appointmentstoday/${currentDate}` 
      )

      
      .then(
        (res) => {
          setUpcommingAppointmentsToday(res.data);

        })
      },[])


  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let currentDate = `${year}-${month}-${day}`;



  useEffect(() => {
    axios
      .get(`http://localhost:8011/appointments/${doctorLogin.id}/${currentDate}`)
      .then((res) => {
        setAppointments(res.data);
      })
      
  }, [apointments]);

  const [kk, setKK] = useState([]);
  const [singleDoc, setSingleDoc] = useState([]);

 

  const [ooo, setOoo] = useState(null);




  




  return (
    <div className="home" style={{textTransform:'capitalize'}}>
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
              
              
              <Stack className="newapointbox">
                <div className="newpaointtitle">All Appointment</div>
                <Link to="/all-appointments" className="link">
                  <div className="newpaointbtn">
                    <div className="newpaointbtntitle">View</div>
                  </div>
                </Link>
              </Stack>
              <Stack className="newapointbox">
                <div className="newpaointtitle">Check Appointments</div>
                <Link to="/qrscan" className="link">
                  <div className="newpaointbtn">
                    <div className="newpaointbtntitle">Check</div>
                  </div>
                </Link>
              </Stack>
              <Stack className="newapointstatbox">
                <div className="newpaointtitle">Statics</div>
              </Stack>
            </Stack>
            <Stack className="apointdetailsmenu">
              <Stack direction='row'>
              <div style={{marginBottom:'20px'}} className="newpaointtitle">Today Appointments</div>
              </Stack>
              <table>
                <thead className="iij">
                  <th className="jkgh">#ID</th>
                  <th className="jkgh">Patient</th>
                  <th className="jkgh">Time</th>
                  <th className="jkgh">Status</th>
                </thead>
                {apointments.map((p, i) => (
                  <tbody>
                    <td className="iij">{p.id}</td>
                    <td className="iij">{p.patientName}</td>
                    <td className="iij">{p.time}</td>
                    <td className="iij">{p.status}</td>

<td>
<Stack sx={{justifyContent:'flex-end'}} direction='row'>
  <NavLink className="link" to={`/appointment/${p.id}`}>

<Chip label="View" style={{backgroundColor:'#2392FF',color:'#fff',width:'70px'}} size="small" className="jhj"/>
</NavLink>

</Stack></td>
                  
                  </tbody>
                ))}
              </table>
              
            </Stack>
          </div>
        </Stack>
      </Stack>
    </div>
  );
}
