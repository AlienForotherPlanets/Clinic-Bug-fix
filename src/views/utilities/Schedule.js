import * as React from 'react';
import { useEffect, useState } from "react"
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Toolbar,
  DayView,
  DateNavigator,
  Appointments,
  TodayButton,
  ViewSwitcher,
} from '@devexpress/dx-react-scheduler-material-ui';
import Status from './Status'
import MenuItem from '@mui/material/MenuItem';
import MainCard from 'ui-component/cards/MainCard'
import { Grid } from '@mui/material'
import { getDoctorCollection } from './services/employeeService'
import Select, { SelectChangeEvent } from '@mui/material/Select';
const m = (new Date().getMonth() + 1) <= 9 ? '0' + (new Date().getMonth() + 1) : (new Date().getMonth() + 1);
const d = (new Date().getDate()) <= 9 ? '0' + (new Date().getDate()) : (new Date().getDate());
const y = new Date().getFullYear();
const todayDate = y + '-' + m + '-' + d;
const drName = getDoctorCollection()


function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export default function Demo() {
  const [DrName, setDrName] = useState('');
  const [currentDate, setCurrentDate] = useState(todayDate);
  let appointments;
  const [data, setData] = useState();

  const fetchData = async (DrName) => {
    await fetch("http://65.1.110.101:3036/Appointment/FindAppointmentByDrName?DrName=" + DrName)
      .then(response => {
        const resp = response.json();
        return resp;
      })
      .then(users => {
        appointments = [
          users.map(data => (
            {
              title: data.Service + " | " + data.CaseNumber + " | " + data.PatientName,
              startDate: new Date(data.AppoitmentDate.slice(0, 4), data.AppoitmentDate.slice(5, 7) - 1, data.AppoitmentDate.slice(8, 10), (data.Timeampm == 1 ? data.Timehour : "" + (parseInt(data.Timehour) + 12)), data.TimeMin),
              endtDate: new Date(data.AppoitmentDate.slice(0, 4), data.AppoitmentDate.slice(5, 7) - 1, data.AppoitmentDate.slice(8, 10), (data.Timeampm == 1 ? "" + (parseInt(data.Timehour) + 1) : "" + (parseInt(data.Timehour) + 13)), data.TimeMin),
              // endtDate: new Date(data.AppoitmentDate.slice(0, 4), data.AppoitmentDate.slice(5, 7) - 1, data.AppoitmentDate.slice(8, 10), (parseInt(data.TimeMin) + 30 >= 60 ? (data.Timeampm == 1 ? "" + (parseInt(data.Timehour) + 1) : "" + (parseInt(data.Timehour) + 13)) : (data.Timeampm == 1 ? data.Timehour : "" + (parseInt(data.Timehour) + 12))), "" + ((parseInt(data.TimeMin) + 30) % 60)),
              id: data._id,
              location: data.DoctorName,
            }
          ))]
        setData(appointments[0])
      })
  }
  const handleChange = (event) => {
    setDrName(event.target.value);
  };
  useEffect(() => {
    fetchData(DrName)
  }, [DrName]);
  const setDateToToday = () => {
    // setCurrentDate(todayDate)

  }
  if (getCookie("validate")) {
    return (
      data &&
      <Grid container spacing={1}>
        <Grid item xs={14} sm={8.5}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={DrName}
            label="DrName"
            onChange={handleChange}
            sx={{ marginTop: '10px', marginLeft: '10px' }}
          >
            <MenuItem value={0} >AllAppointments</MenuItem>
            {
              drName.map(
                item => (<MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>)
              )
            }
          </Select>
          <MainCard title="Appointments" sx={{ "& .MuiCardContent-root": { padding: '2px' } }} >
            <Scheduler
              data={data}
              height={'100vh'}
              sx={{ paddingTop: '3px' }}

            >
              <ViewState
                currentDate={currentDate}
                onCurrentDateChange={setCurrentDate}
                sx={{ height: '60px' }}
              />
              <DayView
                startDayHour={9}
                endDayHour={18}
              />
              <WeekView
                startDayHour={9}
                endDayHour={19}
              />
              <Toolbar />
              <DateNavigator />
              <TodayButton />
              <ViewSwitcher />
              <Appointments />
            </Scheduler>
          </MainCard>
        </Grid>
        <Grid item xs={14} sm={3.5}>
          <MainCard sx={{ height: '156vh', marginTop: '3px', padding: '0px', "& .MuiCardContent-root": { padding: '5px' } }}>
            <Status />
          </MainCard>
        </Grid>
      </Grid >
    );

  } else {
    return (<h1>Hello error</h1>)
    // return (window.location.href = "/Login")
  }
}