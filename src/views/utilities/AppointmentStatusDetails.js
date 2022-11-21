import React from 'react'
import { useNavigate } from 'react-router';
import {
  TableCell,
  TableRow,
  Typography
} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormControlLabel from '@mui/material/FormControlLabel';

const AppointmentStatusDetails = (props) => {
  const [appointmentStatus, setAppointmentStatus] = React.useState(props.status);
  const [status, setStatus] = React.useState(null);
  const [id, setiid] = React.useState(props.id);
  // console.log(id);
  // let status = null;

  // React.useEffect(() => {
  //   if (status != null)
  //     console.log(appointmentStatus1);
  // }, [status])

  // React.useEffect(() => {
  //   console.log(appointmentStatus1);
  // }, [appointmentStatus1])
  const history = useNavigate();

  const clickMe = (data) => {
    history("/module/module-scheduleAppointment/#redirected", {
      state:
        props.data
    });
    console.log(props.data);
  }
  const [checked, setChecked] = React.useState(false);
  const handleChangeStatus = (event) => {
    setAppointmentStatus(event.target.value);
    // setAppointmentStatus(1)
    setStatus(appointmentStatus)

  };
  const updateData = () => {
    fetch("http://65.1.110.101:3036/Appointment/updateStatus?id=" + id + "&Status=" + appointmentStatus.toString(), { method: "POST" })
      // fetch("http://65.1.110.101:3036/Appointment/updateStatus?id=" + id + "&Status=" + appointmentStatus.toString(), { method: "POST" })
      .then(response => {
        return response.json()
      })
      .then(data => {
        window.location.reload();
        // console.log(status);
        // props.reload()
        // console.log(data);
      })
  }

  React.useEffect(() => {
    // console.log(status);
    if (status != null)
      updateData()
  }, [status])

  const handleChangeChecked = (event) => {
    // setChecked(event.target.checked);
    setAppointmentStatus(1)
    setStatus(appointmentStatus)
    // status = appointmentStatus
  };
  return (

    <TableRow sx={{
      '& .css-1uhymze-MuiTableCell-root': {
        padding: '10px'
      },
      '& .css-hhoizy-MuiTypography-root': {
        fontSize: '14px'
      },
      '& .css-102lq7w-MuiTypography-root': {
        fontSize: '16px'
      },
      '& .css-j8cz80-MuiTypography-root': {
        color: 'red',
        fontSize: '14px'
      }
    }} key={props.id}>
      <TableCell>
        <Typography >{props.time}</Typography>
        <Typography color="primary" variant="subtitle2">{props.service}</Typography>
      </TableCell>
      <TableCell>

        <Typography >{props.name}</Typography>
        <Typography color="textSecondary" variant="body2">{props.doctor}</Typography>


      </TableCell>

      <TableCell>
        <Typography>
          {props.boxstatus == "checked" && <FormControl variant="standard" sx={{ minWidth: 80 }}>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={appointmentStatus}
              onChange={handleChangeStatus}

            >
              <MenuItem value={1}>Waiting</MenuItem>
              <MenuItem value={2}>Engaged</MenuItem>
              <MenuItem value={3}>Done</MenuItem>
            </Select>
          </FormControl>}
          {
            props.boxstatus == "missed" && <Button variant="outlined" onClick={() => clickMe()}>Reschedule</Button>
          }
          {
            props.boxstatus == "upcoming" && <FormControlLabel control={<Checkbox
              checked={checked}

              onChange={handleChangeChecked}

            />} label="Checked In" sx={{ fontSize: '12px' }} />
          }
        </Typography>
      </TableCell>
    </TableRow>

  )
}

export default AppointmentStatusDetails