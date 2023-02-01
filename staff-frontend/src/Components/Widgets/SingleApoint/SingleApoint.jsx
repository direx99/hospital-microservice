import React, { useEffect } from "react";
import "./appointmentreceipt.css";
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";
import axios from "axios";
import { useState } from "react";
import { useParams } from 'react-router'
import dateFormat from "dateformat";

import { Stack } from "@mui/system";
import CallIcon from '@mui/icons-material/Call';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
export default function SingleApoint({ appointmentData,login ,appointmentDate}) {
  
  const [prescribe,setPrescribe]=useState("");

  const [prescription,setPrescription]=useState("");

  const [symptoms,setSymptoms]=useState("");


 const [post,setPost]=useState([]);
 const params=useParams()
const[patient,setPatient]=useState([]);
const[ll,setLL]=useState([]);
 useEffect(() => {
  axios
  .get(`http://localhost:8011/appointments/${params.id}`)
  .then((res) => {
    setPost(res.data);
setLL(res.data.patientId)
 });
},[post]);
useEffect(() => {
  axios
  .get(`http://localhost:8077/patients/${ll}`)
  .then((res) => {
    setPatient(res.data);

 });
},[patient]);
  
const qrn = params.id;

const result = qrn ? qrn.toString() : "";

function updateData(){
  const uiui={
    id:post.id,
    patientName:post.patientName,
    appointmentDate:post.appointmentDate,
    time:post.time,
    doctorName:post.doctorName,
    patientId:post.patientId,
    status:'completed',
    doctorId:post.doctorId,
    prescribe:prescribe,
    prescription:prescribe,
    symptoms:symptoms





  }
 
  axios
  .put(`http://localhost:8011/appointments`,uiui)
  
  .then((res) => {
    alert("Updated")

 });

}
  

  return (
    <><Stack className="rcpt" flexDirection='row'>
      <div className="aptrec">

        <Stack direction="row" className="recpthead">
          <Stack>
            <div className="titlehosrecipt">HealthCare Hospital Pvt Ltd</div>
            <div className="subthosrecipt">Appointment Reciept</div>
          </Stack>
          <Stack>
            <div className="idhosrecipt">#{post.id}</div>
          </Stack>
        </Stack>
        <Stack>
          <Stack direction='row' className="recbody">
            <div>
              <Stack sx={{ marginLeft: '20px' }}>
                <div className="apodetailsrecpy"> {post.doctorName} | {post.time} | {dateFormat(post.appointmentDate, "yyyy-mm-dd")}</div>
                <div className="ptdtsls"> Parient's Details</div>
                <Stack spacing={-0.5}>
                  <Stack direction='row'>
                    <AccountCircleOutlinedIcon className="patnamerecpticon" sx={{ fontSize: '15pt' }} />
                    <div className="patnamerecpt">{post.patientName} </div>

                  </Stack>
                  <Stack direction='row'>
                    <CallIcon className="patnamerecpticon" sx={{ fontSize: '15pt' }} />
                    <div className="patnamerecpt">{patient.telephone} </div>

                  </Stack>
                  <Stack direction='row'>
                    <BusinessOutlinedIcon className="patnamerecpticon" sx={{ fontSize: '15pt' }} />
                    <div className="patnamerecpt"> {patient.address} </div>

                  </Stack>
                </Stack>
              </Stack>
              <div className="btmdetails">
                <LanguageOutlinedIcon sx={{ fontSize: '12pt', marginTop: '-3px', marginLeft: '10px' }} /> www.healthcare.lk
                <AlternateEmailOutlinedIcon sx={{ fontSize: '12pt', marginTop: '-3px', marginLeft: '20px' }} /> healthcare@info.lk
                <HeadsetMicOutlinedIcon sx={{ fontSize: '12pt', marginTop: '-3px', marginLeft: '20px' }} /> 011 234 2345

              </div>
            </div>
            <QRCode
              className="qrcoderecipt"
              size={256}
              value={result}
              viewBox={`0 0 256 256`} />

          </Stack>

        </Stack>


        <div className="di"></div>
      </div>
      
    </Stack>
    
      {post.status==='completed'?(<div>
        <Stack direction='row' >

        <Stack  className='formmm' spacing={2} style={{fontSize:'13pt'}}>
<div style={{marginLeft:'30px',marginTop:'30px'}}>
  Sypmtoms : {post.symptoms}
</div>
<div style={{marginLeft:'30px'}}>
Prescribe   : {post.prescribe}
</div>
<div style={{marginLeft:'30px'}}>
Prescription : {post.prescription}
</div>
        
      </Stack>
</Stack>
      </div>):(<div>
        <Stack direction='row' className='formmm'>

        <textarea value={symptoms} onChange={(e)=>(setSymptoms(e.target.value))} placeholder='Symptoms' className='symptopms' />
        <textarea value={prescribe} onChange={(e)=>(setPrescribe(e.target.value))} placeholder='Prescribe' className='symptopms' />
        <textarea value={prescription} onChange={(e)=>(setPrescription(e.target.value))} placeholder='Prescription' className='symptopms' />

      </Stack>

      
      <div onClick={updateData} className='updatebtnnn'>UPDATE</div>
      </div>)}
</>
    
  );
}
