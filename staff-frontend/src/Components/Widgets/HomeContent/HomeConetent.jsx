import React from 'react'
import './homecontent.css'
import Stack from '@mui/material/Stack'

export default function HomeConetent() {
  return (
    <div>
        <div className="header">
            <Stack direction='row'className='headervontainer' spacing={2}> 
            <div>Home</div>
            <div>About</div>
            <div>logut</div>
            </Stack>

        </div>
    </div>
  )
}
