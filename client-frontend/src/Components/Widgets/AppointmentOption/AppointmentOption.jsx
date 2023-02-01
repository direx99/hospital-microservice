import { Stack } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import './appointmentOption.css'

export default function AppointmentOption() {
    return (
        <div>
            <Stack direction='row' className='optionbox'>
                <div className="loginoptionbox">
                    <Stack direction='row' className='optionbtngrp'>
                        <div className="withloginbtn">
                            <Link to="/new-guest-appointment" className="link">
<div className='withloginbtntitile'>Continue without login</div>
                            </Link>
                        </div>

                    </Stack>
                </div>


            </Stack>

        </div>
    )
}
