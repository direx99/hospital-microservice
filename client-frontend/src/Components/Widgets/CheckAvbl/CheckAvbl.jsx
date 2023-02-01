import React, { useEffect, useState } from "react";
import "./checkavbl.css";
import { Stack } from "@mui/system";
import axios from "axios";
import DoneOutlineRoundedIcon from "@mui/icons-material/DoneOutlineRounded";
import AllDocApo from "../AllDocApo/AllDocApo";
import AppointmentReceipt from "../AppointmentReceipt/AppointmentReceipt";
export default function CheckAvbl({
  doctor,
  available,
  setDoctor,
  setAppointmentDate,
  appointmentDate,
  login,
  currentDate,
  setDoctorId,
  doctorId,
  time,
}) {
  const [doctorSelected, setDoctorSelected] = useState([]);
  const [appointmentData,setAppointmentData]=useState([]);
  const [viewReciept,setViewReciept]=useState(false);
  

  useEffect(() => {
    axios
      .get(`http://localhost:8099/doctors/${doctorId}`)
      .then((res) => {
        setDoctorSelected(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [doctorSelected]);

  function sendData(e) {
    e.preventDefault();
    const newAppointment = {
      doctorId:doctorId,
      patientId:login.id,
      appointmentDate:appointmentDate,
      doctorName:'Dr '+doctorSelected.firstName+' '+doctorSelected.lastName,
      patientName:login.title+" "+login.firstName+" "+login.lastName,
      status: "registered",
      time:time,
    };

    axios.post("http://localhost:8011/appointments", newAppointment).then(
      (res) => {
        alert(" saved");

        setAppointmentData(res.data);
        console.log(res.data);
        setViewReciept(true)

      },
      [appointmentData]
    );

  

    alert("done");
  }

  return (


    <div>
      
      {viewReciept?(<div>
      <AppointmentReceipt appointmentDate={appointmentDate} login={login} appointmentData={appointmentData}/>
      </div>):( <div>
  
  <Stack className="checkavbl">
  <Stack direction='row' className="appointment">
    <AllDocApo className="alldoccococ"/>
    <Stack>
  
    <div className="checkavblcontainer">
      <div className="chavbltitle">Check Availbility</div>
      <Stack>
        <Stack>
          <div className="titledocname">Doctor</div>
          <select
            value={doctorId}
            onChange={(e) => setDoctorId(e.target.value)}
            className="docselectclnt"
          >
            <option>Select Doctor</option>
            {doctor.map((doc, idx) => (
              <option value={doc.id}>
                Dr {doc.firstName} {doc.lastName}
              </option>
            ))}
          </select>
        </Stack>
        <Stack>
          <div className="titledocname">Date</div>
          <input
            type="date"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
            className="dateselectclnt"
          />
        </Stack>
      </Stack>
    </div>

    {available ? (
      <div>
        <div className="checkavblrescontainer">
          <div className="checkavblrescontainerhead">
            <Stack direction="row">
              Appointment is Available
              <DoneOutlineRoundedIcon
                sx={{ fontSize: "14pt" }}
                className="tickicon"
              />
            </Stack>
          </div>
          <Stack direction="row" className="checkavblrescontainerrow">
            <Stack>
              <div className="patinetnameavbltile">Doctor's Name</div>
              <div className="patinetnameavbl">
                Dr {doctorSelected.firstName} {doctorSelected.lastName}
              </div>
            </Stack>
            <Stack>
              <div className="patinetnameavbltile">Spelize in</div>
              <div className="patinetnameavbl">
                {doctorSelected.specialIn}
              </div>
            </Stack>
          </Stack>
          <Stack direction="row" className="checkavblrescontainerrow">
            <Stack>
              <div className="patinetnameavbltile">Date</div>
              <div className="patinetnameavbl">{appointmentDate}</div>
            </Stack>
            <Stack>
              <div className="patinetnameavbltile">Time</div>
              <div className="patinetnameavbl">{time}</div>
            </Stack>
          </Stack>
          <Stack direction="row" className="checkavblrescontainerrow">
            <Stack>
              <div className="patinetnameavbltile">Patinet's Name</div>
              <div className="patinetnameavbl">
                {login.title} {login.lastName} {login.firstName}
              </div>
            </Stack>
            <Stack>
              <div className="patinetnameavbltile">Telephone</div>
              <div className="patinetnameavbl">{login.telephone}</div>
            </Stack>
          </Stack>
          <Stack direction="row" className="checkavblrescontainerrow">
            <Stack>
              <div className="patinetnameavbltile">Address</div>
              <div className="patinetnameavbl">{login.address}</div>
            </Stack>
          </Stack>

          <div className="creatapobtn" onClick={sendData}>Create Appointment</div>
        </div>
      </div>
    ) : (
      <div className="cnotavblrescontainer">
         {(appointmentDate==0)||(doctorId.lenght==0)?(
        <Stack>
        <div className="cntcreatatitle">
             Select Date And Doctor
          </div>
          <div className="selectdataapo">
           
              <div>Select Date and Doctor to create an Appointment</div>
            
          </div>
        </Stack>):(
           <Stack>
           <div className="cntcreatatitle">
                Appointments are Full
             </div>
             <div className="selectdataapo">
              
                 <div>Change selected Doctor or Appointment Date</div>
               
             </div>
           </Stack>
        )}
      </div>
    )}
  </Stack>
  </Stack>
  </Stack>
  </div>)}
     </div>
  );
}
