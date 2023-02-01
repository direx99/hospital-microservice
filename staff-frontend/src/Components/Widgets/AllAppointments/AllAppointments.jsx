import React, { useState, useEffect } from "react";
import axios from "axios";
import Stack from "@mui/material/Stack";
import Chip from '@mui/material/Chip'
import "./allappointments.css";
import { Link, NavLink } from "react-router-dom";
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import moment from "moment";
import dateFormat from "dateformat";
import ModeEditRoundedIcon from '@mui/icons-material/ModeEditRounded';
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import ManageSearchOutlinedIcon from "@mui/icons-material/ManageSearchOutlined";
export default function AllAppointments({
  doctorLogin,
  patientClick,
  homeclick,
  appointmentClick,
  homeClicked,
  appointmentClicked,
  patientClicked,
  login
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

  
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let currentDate = `${year}-${month}-${day}`;

  useEffect(() => {
    axios.get(`http://localhost:8011/appointments/doctorId${doctorLogin.id}`).then((res) => {
      setAppointments(res.data);
    });
  }, [apointments]);

  const [filterAppointments, setFilterAppointments] = useState([]);
  const [searchh, setSearch] = useState("");

  useEffect(() => {
    setFilterAppointments(
      apointments.filter(
        (ko) =>
          ko.id.toString().toLowerCase().includes(searchh.toLowerCase()) ||
          ko.patientName
            .toString()
            .toLowerCase()
            .includes(searchh.toLowerCase())
      )
    );
  }, [searchh, apointments]);

  return (
    <div >
      <Stack>
        <Stack direction="row">
         
          <div >
            
            <div className="allapoinmentscontainer">
              <Stack>
                <Stack direction="row" className="allaponttopbar">
                  <div className="allapointtitle">Appointment List</div>{" "}
                  <Stack direction="row" className="allapointserachbar">
                    <input
                      value={searchh}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="serach..."
                      className="searchbarinput"
                    ></input>
                    <ManageSearchOutlinedIcon className="allaponysearchicon" />
                  </Stack>
                </Stack>
                <table className="tbjhj">
                  <tr>
                    <td className="tblehead">#ID</td>
                    <td className="tblehead">PATIENT</td>                    
                    <td className="tblehead">TIME</td>  
                    <td className="tblehead">DATE</td>                   
                    <td className="tblehead">STATUS</td>                   
                 
 <td className="tblehead"></td>
                  </tr>
                  
                  {filterAppointments.map((p, i) => (
                    <tr className="kllk">
                      <td className="tddata">{p.id}</td>
                      <td className="tddata">{p.patientName}</td>
                      <td className="tddata">{p.time}</td>
                      <td className="tddata">{dateFormat(p.appointmentDate, "yyyy - mm - dd")}</td>

                      <td className="tddata">{p.status}</td>
                      <td>
                        <Stack sx={{justifyContent:'flex-end'}} direction='row'>
                        <NavLink className="link" to={`/appointment/${p.id}`}>

                        <Chip label="View" style={{backgroundColor:'#2392FF',color:'#fff',width:'70px'}} size="small" className="jhj"/>
                        </NavLink>
                        <Chip label="Edit" style={{backgroundColor:'#FFB207',color:'#fff',width:'70px'}} size="small" className="jhj"/>

                        </Stack>
                        </td>



                    </tr>
                  ))}
                </table>
              </Stack>
            </div>
          </div>
        </Stack>
      </Stack>
    </div>
  );
}
