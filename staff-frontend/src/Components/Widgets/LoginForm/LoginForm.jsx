import React from "react";
import Stack from "@mui/material/Stack";
import "./loginform.css";

export default function LoginForm({
  loginStatus,
  password,
  userName,
  setPassword,
  setUserName,
  setDocotorLogin,
  setAdminLogin,
  setLoginData,
  sendLogin,
  userType,
  setUserType,
  doctorLogin
}) {
  setUserType('doctor')
  return (
    <div>
      <Stack spacing={2} className="loginformcontainer">
        
        <input type="text" 
        className="inpouuxux"
        placeholder="USERNAME"
        value={userName}
       
       
        onChange={(e) => setUserName(e.target.value)}
        ></input>
        <input type="password" 
                className="inpouuxux"

        placeholder="PASSWORD"
        value={password}

        onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button onClick={sendLogin}> Login</button>
      </Stack>
    </div>
  );
}
