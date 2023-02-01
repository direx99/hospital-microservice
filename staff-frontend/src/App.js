import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./Components/Pages/Home";
import Login from "./Components/Pages/Login";
import Dashboard from "./Components/Widgets/Dashboard/Dashboard";
import SingleApoint from "./Components/Widgets/SingleApoint/SingleApoint";
import Apoint from "./Components/Widgets/Apoint/Apoint";
import AppointmentMenu from "./Components/Widgets/AppointmentMenu/AppointmentMenu";
import QrScan from "./Components/Widgets/QrScan/QrScan";
import QrScanner from "./Components/Pages/QrScanner";
import AllAppointments from "./Components/Widgets/AllAppointments/AllAppointments";

function App() {
  const [loginStatus, setLoginStatus] = useState(false);
  const [doctorLogin, setDoctorLogin] = useState(false);
  const [adminLogin, setAdminLogi] = useState(false);
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [userType, setUserType] = useState("");
  const [homeclick, setHomeClick] = useState(true);
  const [appointmentClick, setAppointmentClick] = useState(false);
  const [patientClick, setPatientClick] = useState(false);
  function homeClicked() {
    setHomeClick(true);
    setAppointmentClick(false);
    setPatientClick(false);
  }
  function appointmentClicked() {
    setHomeClick(false);
    setAppointmentClick(true);
    setPatientClick(false);
  }
  function patientClicked() {
    setHomeClick(false);
    setAppointmentClick(false);
    setPatientClick(true);
  }



  function sendLogin() {
    console.log("sending...");
    if (userType === "admin") {
      console.log("userType : "+userType+ "userName :" + userName+" password :" + password);

    } else if (userType === "doctor") {
      axios
      .get(`http://localhost:8099/doctors/${userName}/${password}`,doctorLogin)
      .then((res) => {
        if ((res.data.includes = userName)) {
          console.log("done");
          console.log((res.data));
          setDoctorLogin(res.data);
          console.log(doctorLogin);
          setLoginStatus(true);
        } else {
          console.log("error");
          setLoginStatus(false);
        }
      })
      .catch((err) => {
        console.log(err);
        console.log("error");
        setLoginStatus(false);
      }, []);
      
    } else {
      console.log("userType : error");
    }
  }

  return (
    <div className="App">
     
          {loginStatus ? (
             <Router>
             <Routes>
            <><Route path="/home" element={<Home 

              />} />
                        <Route path='/appointment/:id' element={<Apoint/>} />
                        <Route path="/qrscan" element={<QrScanner />} />

            <Route path="/" element={<Home 
            doctorLogin={doctorLogin}
            patientClick={patientClick}
            appointmentClick={appointmentClick}
            homeclick={homeclick}
            appointmentClicked={appointmentClicked}
            homeClicked={homeClicked}
            patientClicked={patientClicked}

            />} />
                        <Route path="/all-appointments" element={<AllAppointments doctorLogin={doctorLogin}/>}/> 


            <Route path="/appointments" element={<AppointmentMenu 
            doctorLogin={doctorLogin}
            patientClick={patientClick}
            appointmentClick={appointmentClick}
            homeclick={homeclick}
            appointmentClicked={appointmentClicked}
            homeClicked={homeClicked}
            patientClicked={patientClicked}

            />} /></>
            </Routes>
            
      </Router>
          ) : (
         
             
                  <Login
                    sendLogin={sendLogin}
                    userType={userType}
                    setUserType={setUserType}
                    userName={userName}
                    setUserName={setUserName}
                    password={password}
                    setPassword={setPassword}
                    doctorLogin={doctorLogin}

                  />
                
                
             
           
          )}
       
    </div>
  );
}

export default App;
