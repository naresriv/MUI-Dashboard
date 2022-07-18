import React from 'react'
import DehazeIcon from '@mui/icons-material/Dehaze';
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple, lightBlue } from '@mui/material/colors';
import  "./Header.scss";

const Header = () => {
    return (
        <div className='header_content'>
            <DehazeIcon />
            <div className='avatar'>
                <BrightnessHighIcon />
                <Avatar x={{ bgcolor: deepOrange[2000] }}>UN</Avatar>
            </div>
        </div>
    )
}

export default Header