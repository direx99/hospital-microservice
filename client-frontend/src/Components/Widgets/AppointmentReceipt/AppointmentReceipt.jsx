import React, { useEffect } from "react";
import "./appointmentreceipt.css";
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";
import axios from "axios";
import { useState } from "react";
import { Stack } from "@mui/system";
import CallIcon from '@mui/icons-material/Call';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
export default function AppointmentReceipt({ appointmentData,login ,appointmentDate}) {
  const qrn = appointmentData.id;

  const result = qrn ? qrn.toString() : "";

  return (
    <Stack className="rcpt" flexDirection='row'>
      <div className="aptrec">

      <Stack direction="row" className="recpthead">
        <Stack>
          <div className="titlehosrecipt">HealthCare Hospital Pvt Ltd</div>
          <div className="subthosrecipt">Appointment Reciept</div>
        </Stack>
        <Stack>
          <div className="idhosrecipt">#{appointmentData.id}</div>
          <div className="subthosrecipt"></div>
        </Stack>
        </Stack>
<Stack>
  <Stack direction='row' className="recbody">
    <div>
      <Stack spacing={-1.5} sx={{marginLeft:'20px'}}>
        <div className="apodetailsrecpy"> {appointmentData.doctorName} | {appointmentData.time} | {appointmentDate}</div>
      <div className="ptdtsls"> Parient's Details</div>

        <Stack direction='row' >
          <AccountCircleOutlinedIcon className="patnamerecpticon" sx={{fontSize:'15pt'}}/>
          <div className="patnamerecpt"> {appointmentData.patientName} #{appointmentData.patientId}</div>

          </Stack>
          <Stack direction='row'>
          <CallIcon className="patnamerecpticon" sx={{fontSize:'15pt'}}/>
          <div className="patnamerecpt"> {login.telephone}</div>

          </Stack>
          <Stack direction='row'>
          <BusinessOutlinedIcon className="patnamerecpticon" sx={{fontSize:'15pt'}}/>
          <div className="patnamerecpt"> {login.address}</div>

          </Stack>

      </Stack>
      <div className="btmdetails">
        <LanguageOutlinedIcon sx={{fontSize:'12pt', marginTop:'-3px', marginLeft:'10px'}}/> www.healthcare.lk 
        <AlternateEmailOutlinedIcon sx={{fontSize:'12pt', marginTop:'-3px', marginLeft:'20px'}}/> healthcare@info.lk
        <HeadsetMicOutlinedIcon sx={{fontSize:'12pt', marginTop:'-3px', marginLeft:'20px'}}/> 011 234 2345

          </div>
    </div>
  <QRCode
          className="qrcoderecipt"
          size={256}
          value={result}
          viewBox={`0 0 256 256`}
        />
  </Stack>
  
</Stack>
       

        <div className="di"></div>
      </div>
      </Stack>
  );
}
