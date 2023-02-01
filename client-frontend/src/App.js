import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Pages/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import About from "./Components/Pages/About";
import Navbar from "./Components/Widgets/Navbar/Navbar";
import Appointment from "./Components/Pages/Appointment";
import NewGuestAppointment from "./Components/Pages/NewGuestAppointment";
import SignUp from "./Components/Pages/SignUp";
import Login from "./Components/Pages/Login";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import UserProfile from "./Components/Pages/UserProfile";
import background from "./bg.jpg";
import SingleApoint from "./Components/Widgets/SingleApoint/SingleApoint";

function App() {


  


  {
    /*login funtions*/
  }
  const [userName, setUserName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState([]);
  const [loginStatus, setLoginStatus] = useState(false);


  const params = useParams();

  function checkData() {
    axios
      .get(`http://localhost:8077/patients/${userName}/${password}`)
      .then((res) => {
        if ((res.data.includes = userName)) {
          console.log("done");
          setLogin(res.data);
          console.log(login);
          setLoginStatus(true);
        } else {
          alert("sername or Password");
          setLoginStatus(false);
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Invalid Username or Password");
        setLoginStatus(false);
        setPassword("")
        setUserName("")
      }, []);
  }

  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <Router>
        <Navbar login={login} loginStatus={loginStatus} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/profile"
            element={<UserProfile login={login} loginStatus={loginStatus}
          setLoginStatus={setLoginStatus}
            />}
          />
          
          {loginStatus?(<Route path="/appointment" element={<Appointment loginStatus={loginStatus}  userName={userName}
                setUserName={setUserName}
                password={password}
                setPassword={setPassword}
                checkData={checkData}
                
                login={login}
               />} />):(
                <Route path="/appointment" element={<Login loginStatus={loginStatus}  userName={userName}
                setUserName={setUserName}
                password={password}
                setPassword={setPassword}
                checkData={checkData}

                
                login={login}
               />} />
               )}
          
          <Route
            path="/new-guest-appointment"
            element={<NewGuestAppointment />}
          />
          <Route path='/appointment/:id' element={<SingleApoint login={login}/>} />

          <Route path="/user-register" element={<SignUp />} />
          <Route
            path="/login"
            element={
              <Login
                userName={userName}
                setUserName={setUserName}
                password={password}
                setPassword={setPassword}
                checkData={checkData}
                login={login}
                loginStatus={loginStatus}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
