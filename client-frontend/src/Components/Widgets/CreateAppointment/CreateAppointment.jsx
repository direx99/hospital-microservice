import React from "react";
import axios from "axios";
import { Stack } from "@mui/material";
import "./createappointment.css";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";
import { useState } from "react";
export default function CreateAppointment({
  appointmentDate,
  currentDate,
  appointmentData,
  setAppointmentData,
  doctorId,
  setCheckDone,
  setViewReciept,
  selectedDoctor,
  patientName,
  setPatinetName,
  sendData,
  firstName,
  lastName,
  setFirstName,
  setLastName
}) {
  const [title, setTitle] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAdress] = useState("");
  const [telephone, setTelepohone] = useState("");
  const [email, setEmail] = useState("");
  const [doctorName, setDoctorName] = useState("");


 
  return (
    <div className="createapontmentcon">
      <div>
        <Stack direction="column">
          <Stack className="formtop" direction="row">
            <div className="formtitleapo">New Appointment</div>
          </Stack>
          <Stack className="apointformcon" spacing={1}>
            <Stack direction="row" spacing={2}>
              <Stack>
                <div className="">
                  <div className="titleaponewtitle">Title</div>
                  <select className="titleaponew">
                    <option>Mr</option>
                    <option>Mrs</option>
                    <option>Ms</option>
                  </select>
                </div>
              </Stack>
              <Stack>
                <div className="">
                  <div className="fnameaponewtitle">First Name</div>
                  <input
                    className="fnameeaponew"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  ></input>
                </div>
              </Stack>
              <Stack>
                <div className="">
                  <div className="fnameaponewtitle">Last Name</div>
                  <input
                    className="fnameeaponew"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  ></input>
                </div>
              </Stack>
              <div className="validateicon">
                {firstName.length == 0 || lastName.length == 0 ? (
                  <Stack direction="row">
                    <ErrorRoundedIcon className="fstrowerr" />
                    {firstName.length == 0 ? (
                      <div className="validateerrorname">Enter First Name</div>
                    ) : (
                      <div>
                        {lastName.length == 0 ? (
                          <div className="validateerrorname">
                            Enter Last Name
                          </div>
                        ) : (
                          <div></div>
                        )}
                      </div>
                    )}
                  </Stack>
                ) : (
                  <Stack direction="row">
                    <CheckCircleRoundedIcon className="fstrowtick" />
                  </Stack>
                )}
              </div>
            </Stack>
            <Stack direction="row" spacing={2}>
              <Stack>
                <div className="">
                  <div className="titleaponewtitle">Date of Birth</div>
                  <input
                    className="dateselectapo"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    type="date"
                  ></input>
                </div>
              </Stack>
              <Stack>
                <div className="">
                  <div className="fnameaponewtitle">Address</div>
                  <textarea
                    className="adrseaponew"
                    value={address}
                    onChange={(e) => setAdress(e.target.value)}
                  ></textarea>
                </div>
              </Stack>

              <div className="validateicon">
                {dob.length == 0 || address.length == 0 ? (
                  <Stack direction="row">
                    <ErrorRoundedIcon className="fstrowerr" />
                    {dob.length == 0 ? (
                      <div className="validateerrorname">
                        Enter Date Of Birth
                      </div>
                    ) : (
                      <div>
                        {address.length == 0 ? (
                          <div className="validateerrorname">Enter Adress</div>
                        ) : (
                          <div></div>
                        )}
                      </div>
                    )}
                  </Stack>
                ) : (
                  <Stack direction="row">
                    <CheckCircleRoundedIcon className="fstrowtick" />
                  </Stack>
                )}
              </div>
            </Stack>
            <Stack direction="row" spacing={2}>
              <Stack>
                <div className="">
                  <div className="titleaponewtitle">Telephone</div>
                  <input
                    className="teleselectapo"
                    value={telephone}
                    onChange={(e) => setTelepohone(e.target.value)}
                    type="text"
                  ></input>
                </div>
              </Stack>
              <Stack>
                <div className="">
                  <div className="fnameaponewtitle">Email</div>
                  <input
                    type="email"
                    className="adrseaponew"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </div>
              </Stack>

              <div className="validateicon">
                {telephone.length == 0 || email.length == 0 ? (
                  <Stack direction="row">
                    <ErrorRoundedIcon className="fstrowerr" />
                    {telephone.length == 0 ? (
                      <div className="validateerrorname">
                        Enter Mobile Number
                      </div>
                    ) : (
                      <div>
                        {email.length == 0 ? (
                          <div className="validateerrorname">
                            Enter Email Address
                          </div>
                        ) : (
                          <div></div>
                        )}
                      </div>
                    )}
                  </Stack>
                ) : (
                  <Stack direction="row">
                    <CheckCircleRoundedIcon className="fstrowtick" />
                  </Stack>
                )}
              </div>
            </Stack>
          </Stack>
          <button onClick={sendData}>send</button>
        </Stack>
      </div>
    </div>
  );
}
