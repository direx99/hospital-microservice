import { Stack } from '@mui/system'
import React from 'react'
import AdsBar from '../Widgets/AddsBar/AdsBar'
import RegisterForm from '../Widgets/PatientRegisterForm/RegisterForm'
import './signup.css'

export default function SignUp({registStatus,setRegStatus}) {
  return (
    <div>
        <Stack direction='row' className='jj'>
        
        <RegisterForm   registStatus={registStatus} setRegStatus={setRegStatus}
/>
        <div className="addsbar">

        </div>
        </Stack>
        
    </div>
  )
}
