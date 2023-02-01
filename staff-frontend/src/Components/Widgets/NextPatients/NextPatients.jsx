import { Stack } from "@mui/system";
import React from "react";
import "./nextpatients.css";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
export default function Hotline() {
  return (
    <div className="nextpatients">
      <Stack>
        <div className="titlenextpatition">Reamining Appointment</div>
        <Stack direction="row" className="patientsstack">
          <div >
            <AccountCircleOutlinedIcon className="patientphoto" />
          </div>
          <Stack>
          <div className="patientname">Mr Amal Perera</div>
          <div className="apoid">566565765</div>
          </Stack>
          <Stack className='apodatime'>
          <div className="apotime">13:20 PM</div>
          <div className="apodate">25th October 2022</div>
          </Stack>
        </Stack>
        
        
      </Stack>
    </div>
  );
}
