import { Button } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import './login.css'
import axios from 'axios'
import LoginForm, { UserRole } from '../Widgets/LoginForm/LoginForm'
import Aaa from '../Widgets/LoginForm/Aaa'
import UserProfile from './UserProfile'
import Home from './Home'
import App from '../../App'
import UserCard from '../Widgets/UserCard/UserCard'

export default function Login({ 
    userName,
  password,
  setPassword,
  setUserName,
  checkData,
  login,
  loginStatus

}) {





    return (
        <div>
            
               {loginStatus?(<div> <UserCard login={login} loginStatus={loginStatus}/></div>):(<div><LoginForm 
            userName={userName}
                setUserName={setUserName}
                password={password}
                setPassword={setPassword}
                login={login}
                checkData={checkData} />
            <Aaa /></div>)}
            
            <div>

            </div>
        </div>
    )
}
