import React from 'react'
import LoginForm from '../Widgets/LoginForm/LoginForm'

export default function Login({
  sendLogin,
  userType,
  setUserType,
  userName,
  setUserName,
  setPassword,
  password,
  doctorLogin
}) {
  return (
    <div>
      <LoginForm sendLogin={sendLogin}
         userType={sendLogin} 
         userName={userName}
         setUserType={setUserType}
         setUserName={setUserName}
         password={password}
         setPassword={setPassword}
         doctorLogin={doctorLogin}

         />
         
    </div>
  )
}
