import React from 'react'
import UserCard from '../Widgets/UserCard/UserCard'
import Login from './Login'

export default function UserProfile({login,loginStatus,telephone,password,setTelephone,setPassword,checkData,setLoginStatus}) {
  return (
    <div>
        {loginStatus?( <UserCard login={login}    loginStatus={loginStatus} setLoginStatus={setLoginStatus}/>):(<Login
                telephone={telephone}
                setTelephone={setTelephone}
                password={password}
                setPassword={setPassword}
                checkData={checkData}
                login={login}
             
                
                
              />)}

       
        
    </div>
  )
}
