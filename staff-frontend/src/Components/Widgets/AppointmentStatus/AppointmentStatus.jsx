import { Stack } from "@mui/system";
import React from "react";
import "./appointmentstatus.css";
import { CircularProgressbar,buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import VisibilitySensor from "react-visibility-sensor";

export default function AppointmentStatus() {
  const jjj = 66;

  return (
    <div className="appointmentstatus">
      <Stack direction="row" spacing={1}>
        <Stack direction="column">
          <div className="todaytitle">Appointments Status</div>
          <Stack direction="row">
            <Stack>
              <div className="bluedot"></div>
              <div className="graydot"></div>
            </Stack>
            <Stack>
              <div className="bluedottitle">Completed Appointment</div>
              <div className="graydottitle">Reamining Appointment</div>
            </Stack>
          </Stack>
          <div className="totalapo">Today have 12 total appointments and 1 appointment was cancelled</div>
        </Stack>

        <div className="progressbar">
        <VisibilitySensor>
            {({ isVisible }) => {
              const percentage = isVisible ? jjj : 0;
              return (
                <CircularProgressbar
                  strokeWidth={13}
                  value={percentage}
                  
                  styles={buildStyles({
                    textColor: "#4261DE",
                    pathColor: "#7A8FE6",
                    trailColor: "#F3F5FD"
                  })}
                  text={`${percentage}`}
                />
              );
            }}
          </VisibilitySensor>
        </div>
      </Stack>
    </div>
  );
}
