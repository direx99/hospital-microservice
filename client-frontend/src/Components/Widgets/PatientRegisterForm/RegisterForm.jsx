import { Stack } from "@mui/system";
import React from "react";
import "./registerform.css";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Alert } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Login from "../../Pages/Login";

export default function RegisterForm() {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [nic, setNic] = useState("");
  const [regDate, setRegdate] = useState(Date.now);
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [checkTelephone, setCheckTelephone] = useState("");
  const [userName, setUserName] = useState("");
  const [registStatus,setRegStatus]=useState(false);



  
    


  function sendData(e) {

    

    const newPatient = {
      title,
      userName,
      firstName,
      lastName,
      address,
      city,
      email,
      telephone,
      nic,
      regDate,
      password,
      dob,
    };

    
    
      e.preventDefault();
    
      axios
      .get(`http://localhost:8077/patients/usernames/${userName}`)
        .then((res) => {
            e.preventDefault();

          setCheckTelephone(res.data);
          console.log(res.data);
          if(res.data.includes = userName){
            alert("User Name Already Taken !");
          }
          else{
            e.preventDefault();

            axios.post("http://localhost:8077/patients", newPatient).then(() => {
                console.log("patient saved");
               console.log(newPatient);
        
              setOpen(true);
              setRegStatus(true);
             });
          }
          
        })
        .catch((err) => {
            axios.post("http://localhost:8077/patients", newPatient).then(() => {
                console.log("patient saved");
               console.log(newPatient);
               setRegStatus(true);

              setOpen(true);
             });
        });
    
   
    
  }

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
<div>
    {registStatus?(<div><Login/></div>):( <div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Note archived"
        action={action}
      >
        <Alert
          severity="success"
          variant="filled"
          onClose={handleClose}
          sx={{ width: "300px" }}
        >
          Register sucess
        </Alert>
      </Snackbar>

      <Stack className="maincontaner">
        <Stack className="regiterform">
          <div className="formtitile">Patient Register</div>
          <Stack className="inputcolumn">
            <Stack direction="row" spacing={2} className="inputrow">
              <Stack className="inputset">
                <div className="fnametitle">Select</div>
                <select
                  placeholder="Malith"
                  className="genderselect"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                >
                  <option>Mr</option>
                  <option>Mrs</option>
                  <option>Ms</option>
                </select>
              </Stack>
              <Stack className="inputset">
                <div className="fnametitle">First Name</div>
                <input
                  type="text"
                  placeholder="Malith"
                  className="fnameinput"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
              </Stack>
              <Stack className="inputset">
                <div className="fnametitle">Last Name</div>
                <input
                  type="text"
                  placeholder="Perera"
                  className="fnameinput"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
              </Stack>
            </Stack>
            <Stack direction="row" spacing={2} className="inputrow">
              <Stack className="inputset">
                <div className="fnametitle">NIC</div>
                <input
                  type="text"
                  placeholder="200105502320"
                  className="nicinput"
                  value={nic}
                  onChange={(e) => {
                    setNic(e.target.value);
                  }}
                />
              </Stack>
              <Stack className="inputset">
                <div className="fnametitle">Telephone</div>
                <input
                  type="text"
                  placeholder="077777777"
                  className="telephoneinput"
                  value={telephone}
                  onChange={(e) => {
                    setTelephone(e.target.value);
                  }}
                />
              </Stack>
              <Stack className="inputset">
                <div className="fnametitle">Email</div>
                <input
                  type="text"
                  placeholder="user@mail.com"
                  className="emailinput"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Stack>
            </Stack>
            <Stack direction="row" className="inputrow">
              <Stack className="inputset">
                <div className="fnametitle">Address</div>
                <textarea
                  type="text"
                  cols="3"
                  placeholder="No 10 ,  Mendis Rd , Wadduwa"
                  className="addressinput"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
              </Stack>
            </Stack>
            <Stack direction="row" spacing={2} className="inputrow">
              <Stack className="inputset">
                <div className="fnametitle">Sri Lankan</div>
                <select className="regionselect">
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </Stack>
              <Stack className="inputset">
                <div className="fnametitle">Living City</div>
                <select
                  className="cityselect"
                  value={setCity}
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                >
                  <option>Colombo</option>
                  <option>Kalutara</option>
                  <option>Gampaha</option>
                </select>
              </Stack>
              <Stack className="inputset">
                <div className="fnametitle">Date Of Birth</div>
                <input
                  type="date"
                  placeholder=""
                  className="dobinput"
                  value={dob}
                  onChange={(e) => {
                    setDob(e.target.value);
                  }}
                />
              </Stack>
            </Stack>
            <Stack direction="row" spacing={2} className="inputrow">
            <Stack className="inputset">
                <div className="fnametitle"> User Name</div>
                <input
                  type="text"
                  placeholder=""
                  className="passwordinput"
                  value={userName}
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                />
              </Stack>
              <Stack className="inputset">
                <div className="fnametitle">Password</div>
                <input
                  type="password"
                  placeholder=""
                  className="passwordinput"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Stack>
              <Stack className="inputset">
                <div className="fnametitle"> Re-Enter Password</div>
                <input
                  type="password"
                  placeholder=""
                  className="passwordinput"
                  value={cpassword}
                  onChange={(e) => {
                    setCPassword(e.target.value);
                  }}
                />
              </Stack>

            </Stack>
            <Stack direction="row" spacing={2} className="buttonrow">
              <div className="formclearbutton" onClick={handleClick}>
                Clear
              </div>
              <div className="formsubmitbutton" onClick={sendData}>
                Register
              </div>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </div>)}
    </div>
   
  );
}
