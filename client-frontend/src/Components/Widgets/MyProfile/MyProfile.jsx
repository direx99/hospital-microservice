import { Stack } from "@mui/system";
import React from "react";
import "./myprofile.css";
import ApoImg from "./apo.png";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import VisibilitySensor from "react-visibility-sensor";

export default function MyProfile({ login }) {
  const [apo, setApo] = useState([]);
  const [reapo, setReApo] = useState([]);
  const [leapo, setLeApo] = useState([]);

  const [jjj, setjj] = useState(0);
  const [kkk, setkk] = useState(0);
  const [lll, setlll] = useState(0);


  useEffect(() => {
    axios
      .get(`http://localhost:8011/appointments/patient${login.id}`)
      .then((res) => {
        setApo(res.data);
        setjj(apo.length);
      });
  }, [apo]);
  useEffect(() => {
    axios
      .get(`http://localhost:8011/appointments/patients${login.id}/statusregistered`)
      .then((res) => {
        setReApo(res.data);
        setkk(reapo.length);
      });
  }, [reapo]);
  useEffect(() => {
    axios
      .get(`http://localhost:8011/appointments/patients${login.id}/statuscompleted`)
      .then((res) => {
        setLeApo(res.data);
        setlll(leapo.length);
      });
  }, [leapo]);

  return (
    <div mypkrofile>
      <Stack direction="row" className="profileconet">
        <Stack className="counts">
          <div className="welcomemm"> Welcome !</div>
          <div className="loginnanmee">
            {" "}
            {login.title} {login.firstName} {login.lastName}
          </div>
          <Stack className="jhjhhj" spacing={2}>
            <div>
              <Stack direction="row"></Stack>
              <div className="vbaggg">
                <VisibilitySensor>
                  {({ isVisible }) => {
                    const percentage = isVisible ? kkk : 0;
                    return (
                      <CircularProgressbar
                        strokeWidth={12}
                        value={100 - (kkk / jjj) * 100}
                        styles={buildStyles({
                          textColor: "#4261DE",
                          pathColor: "#7A8FE6",
                          textSize:'25pt',
                          trailColor: "#F3F5FD",
                        })}
                        text={`${jjj}`}
                      />
                    );
                  }}
                </VisibilitySensor>
              </div>
              <Stack direction="row">
                <div className="blucircle"></div>
                <div className="hhhjxe">Completed Appointments</div> 
              </Stack>
              <Stack direction="row">
              <div className="graycircle"></div>
               <div className="hhhjxe">Reamnings Appointments</div> 
              </Stack>
              
            </div>
          </Stack>
        </Stack>
        <img src={ApoImg} className="apiimg" />
      </Stack>
    </div>
  );
}
