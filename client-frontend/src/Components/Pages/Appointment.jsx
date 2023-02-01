import React, { useState, useEffect } from "react";
import AppointmentOption from "../Widgets/AppointmentOption/AppointmentOption";
import DoctorSelect from "../Widgets/DoctorSelect/DoctorSelect";
import Login from "./Login";
import CheckAvbl from "../Widgets/CheckAvbl/CheckAvbl";
import axios from "axios";
import './appointment.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import AllDocApo from "../Widgets/AllDocApo/AllDocApo";
import { Stack } from "@mui/system";
export default function Appointment({ loginStatus,login}) {
  const [doctorId, setDoctorId] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [available, setAvailable] = useState(false);
  const [avbl, setAvbl] = useState([]);
  const [time, setTime] = useState("");
  const [doctor,setDoctor]=useState([])

  const date = new Date();
  let day = String(date. getDate()). padStart(2, '0');
  let month =String(date. getMonth() + 1). padStart(2, '0'); //January is 0!
  let year = date.getFullYear();





  let currentDate = `${year}-${month}-${day}`;
  

  useEffect(() => {
    axios
      .get(
        `http://localhost:8011/today-appointments/${doctorId}/${appointmentDate}`
      )
      .then(
        (res = avbl) => {
          setAvbl(res.data);

          if (appointmentDate >= currentDate) {
            if (res.data === 0) {
              setAvailable(true);
              setTime("10.00 AM");
              setDoctorId(doctorId);
            } else if (res.data === 1) {
              setAvailable(true);
              setTime("10.30 AM");
              setDoctorId(doctorId);
            } else if (res.data === 2) {
              setAvailable(true);
              setTime("11.00 AM");
              setDoctorId(doctorId);
            } else if (res.data === 3) {
              setAvailable(true);
              setTime("11.30 AM");
            } else if (res.data === 4) {
              setAvailable(true);
              setTime("12.00 PM");
            } else if (res.data === 5) {
              setAvailable(true);
              setTime("02.30 PM");
            } else if (res.data === 6) {
              setAvailable(true);
              setTime("03.00 PM");
            } else {
              setAvailable(false);
            }
          } else {
            setAvailable(false);
          }
        },
        [[avbl]]
      )
      .catch((err) => {
        setAvailable(false);
      });
  });

  useEffect(() => {
    axios
        .get("http://localhost:8099/doctors/")
        .then((res) => {
            setDoctor(res.data);
            console.log(res.data);

        })
        .catch((err) => {
            console.log(err);
        });
}, []);


  return (
    <div className="">
     
       
          <CheckAvbl
            time={time}
            appointmentDate={appointmentDate}
            doctorId={doctorId}
            setDoctorId={setDoctorId}
            currentDate={currentDate}
            doctor={doctor}
            setDoctor={setDoctor}
            setAppointmentDate={setAppointmentDate}
          available={available}
          login={login}
          />
          
       
      
    </div>
  );
}
