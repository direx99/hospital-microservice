import React from "react";
import "./topbar.css";
import Stack from "@mui/material/Stack";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
export default function TopBar({ doctorLogin }) {
  return (
    <div className="topbar">
      <div className="topbarcontainer">
        <Stack direction="row" className="topbartitle">
          <Stack direction="row" className="homeserachbar">
            <div className="searchtitle">search</div>
            <ManageSearchIcon className="searchicon" />
          </Stack>

          <Stack direction="row" spacing={4} className="profileicons">
            <EmailOutlinedIcon className="emailicon" />
            <NotificationsNoneOutlinedIcon className="emailicon"/>
            <SettingsOutlinedIcon className="emailicon"/>
            <div className="drname">Doctor</div>
            <AccountCircleOutlinedIcon className="drname"/>
          </Stack>
        </Stack>
      </div>
    </div>
  );
}
