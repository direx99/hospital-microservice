import { Stack } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import './homecontent.css'
import hospital_image from './hospital_image.png'

export default function HomeContent({appointmentClicked}) {

  
  return (
    <div>
        <Stack direction='row' className="front" spacing={2}>
          <div className="front-left">
            <Stack direction='column'>
            <Stack className='subheadstack' direction='row' spacing={1}>
            <div className="subbutton"></div>
            <div className="subheading">A Range of Programs for HealthCare</div>
            </Stack>
            <div className="headingtouch">Special Touch</div>
            <div className="headingpara">Translation and professional proofreading for busy researchers. Learn how you can save time and get published faster. View Services. Check Free Resources. Get Started Online. Highlights: Chat Support Available, Online Registration Option Available.Translation and professional proofreading for busy researchers.</div>
            <Link to="/Appointment" className="link"><div className="apoimentbtn" onClick={() => appointmentClicked()}>
            Make an Appointment
              </div></Link>
            
            </Stack>
           
          </div>
          <div className="front-right">
          <img src={hospital_image} alt="Logo" className='frontimage' />
         
          </div>
        </Stack>
        
    </div>
  )
}
