import { Stack } from '@mui/system'
import React from 'react'
import './hotline.css'
import TtyOutlinedIcon from '@mui/icons-material/TtyOutlined';

export default function Hotline() {
  return (
    <div>
        <Stack direction='column' className='contactlist' spacing={2}>
        <div className='hotline'>
            <Stack>
                <div className="opdcallhotline">OPD</div>
                <Stack direction='row' spacing={2}>
                <TtyOutlinedIcon/>
                <div className="hotlinenumber">112234234</div>

                </Stack>

            </Stack>
        
            </div>
            <div className='hotline'>
            </div>
            <div className='hotline'>
            </div>
            <div className='hotline'>
            </div>
            <div className='hotline'>
            </div>
            
         
        </Stack>
    </div>
  )
}
