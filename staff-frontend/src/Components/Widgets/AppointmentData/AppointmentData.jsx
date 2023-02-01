import { Stack } from '@mui/material'
import React from 'react'
import './appointmentdata.css'

export default function AppointmentData() {
  return (
    <div className='appointmentdata'>
        <Stack direction='row' className='appointmentbar'>
            <Stack>
            <div className='totaldatabox'>Total</div>
            <div className='totaldataboxup'>Total</div>

            </Stack>
            <Stack>
            <div className='completeddatabox'>Total</div>
            <div className='completeddataboxup'>Total</div>

            </Stack>
            <Stack>
            <div className='totaldatabox'>Total</div>
            <div className='totaldataboxup'>Total</div>

            </Stack>
            
            <Stack>
            <div className='totaldatabox'>Total</div>
            <div className='totaldataboxup'>Total</div>

            </Stack>
            
        </Stack>
       
        
    </div>
  )
}
