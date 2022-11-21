import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { styled } from '@mui/system';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AppointmentStatusDetails from './AppointmentStatusDetails';
import { getDoctorCollection } from './services/employeeService'
import {
    Table,
    TableBody,
    TableContainer,

    Paper,

    Typography,

} from '@mui/material';

const drName = getDoctorCollection()
const blue = {
    50: '#F0F7FF',
    100: '#C2E0FF',
    200: '#80BFFF',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0059B2',
    800: '#004C99',
    900: '#003A75',
};

const grey = {
    50: '#f6f8fa',
    100: '#eaeef2',
    200: '#d0d7de',
    300: '#afb8c1',
    400: '#8c959f',
    500: '#6e7781',
    600: '#57606a',
    700: '#424a53',
    800: '#32383f',
    900: '#24292f',
};

const Tabd = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: #fff;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: transparent;
  flex-wrap: wrap;
  padding: 8px 10px;
  margin: 3px 3px;
  border: none;
  border-radius: 7px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${blue[400]};
  }

  &:focus {
    color: #fff;
    outline: 3px solid ${blue[200]};
  }

  &.${tabUnstyledClasses.selected} {
    background-color: #fff;
    color: ${blue[600]};
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPaneld = styled(TabPanelUnstyled)(
    ({ theme }) => `
  
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  padding: 15px 6px;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  border-radius: 12px;
  opacity: 0.8;
  `,
);
const m = (new Date().getMonth() + 1) <= 9 ? '0' + (new Date().getMonth() + 1) : (new Date().getMonth() + 1);
const d = (new Date().getDate()) <= 9 ? '0' + (new Date().getDate()) : (new Date().getDate());
const y = new Date().getFullYear();
const prevd = ((parseInt(d) - 1) < 10) ? "0" + (parseInt(d) - 1) : (parseInt(d) - 1);
const todayDate = y + '-' + m + '-' + d;
const prevDate = y + '-' + m + '-' + prevd
// api data of USERS0 appointments 
// let USERS01 = [
//     {
//         time: '3:50pm',
//         name: 'dhruvi',
//         doctor: 'Rakesh',
//         service: 'Consultation',
//         status: 20
//     },
//     {
//         time: '3:50pm',
//         name: 'dhruvis',
//         doctor: 'Rakesh',
//         service: 'Consultation',
//         status: 10
//     }
// ]
// console.log(USERS01);
const TabsListd = styled(TabsListUnstyled)(
    ({ theme }) => `
 
  background-color: ${blue[500]};
  border-radius: 5px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-between;
  box-shadow: 0px 4px 30px ${theme.palette.mode === 'dark' ? grey[900] : grey[200]};
  `,
);
export default function LabTabs() {
    const [value, setValue] = React.useState('1');
    const [value2, setValue2] = React.useState('11');
    const [USERS0, setUSERS0] = React.useState();
    const [USERS1, setUSERS1] = React.useState();
    const [USERS2, setUSERS2] = React.useState();
    const [USERS3, setUSERS3] = React.useState();
    const [USERS4, setUSERS4] = React.useState();
    let USERS;
    const fetchData = () => {
        fetch("http://65.1.110.101:3036/Appointment/FindAppointmentByDate?Date=" + prevDate + "&Status=0")
            .then(response => {
                const resp = response.json();
                return resp;
            })
            .then(users => {
                setUSERS0(users)
            })

        fetch("http://65.1.110.101:3036/Appointment/FindAppointmentByDate?Date=" + todayDate + "&Status=1")
            .then(response => {
                const resp = response.json();
                return resp;
            })
            .then(users => {
                USERS = [
                    users.map(data => (
                        {
                            time: data.Timehour + ":" + data.TimeMin + (data.Timeampm == 1 ? 'am' : 'pm'),
                            name: data.PatientName,
                            doctor: drName[data.DoctorName - 1].title,
                            service: data.Service,
                            status: 1,
                            id: data._id
                        }
                    ))]
                USERS = USERS[0]
                setUSERS1(USERS)
            })
        fetch("http://65.1.110.101:3036/Appointment/FindAppointmentByDate?Date=" + todayDate + "&Status=2")
            .then(response => {
                const resp = response.json();
                return resp;
            })
            .then(users => {
                USERS = [
                    users.map(data => (
                        {
                            time: data.Timehour + ":" + data.TimeMin + (data.Timeampm == 1 ? 'am' : 'pm'),
                            name: data.PatientName,
                            doctor: drName[data.DoctorName - 1].title,
                            service: data.Service,
                            status: 2,
                            id: data._id
                        }
                    ))]
                USERS = USERS[0]
                setUSERS2(USERS)
            })
        fetch("http://65.1.110.101:3036/Appointment/FindAppointmentByDate?Date=" + todayDate + "&Status=3")
            .then(response => {
                const resp = response.json();
                return resp;
            })
            .then(users => {
                USERS = [
                    users.map(data => (
                        {
                            time: data.Timehour + ":" + data.TimeMin + (data.Timeampm == 1 ? 'am' : 'pm'),
                            name: data.PatientName,
                            doctor: drName[data.DoctorName - 1].title,
                            service: data.Service,
                            status: 3,
                            id: data._id
                        }
                    ))]
                USERS = USERS[0]
                setUSERS3(USERS)
            })
        fetch("http://65.1.110.101:3036/Appointment/FindAppointmentByDate?Date=" + todayDate + "&Status=0")
            .then(response => {
                const resp = response.json();
                return resp;
            })
            .then(users => {
                USERS = [
                    users.map(data => (
                        {
                            time: data.Timehour + ":" + data.TimeMin + (data.Timeampm == 1 ? 'am' : 'pm'),
                            name: data.PatientName,
                            doctor: drName[data.DoctorName - 1].title,
                            service: data.Service,
                            status: 3,
                            id: data._id
                        }
                    ))]
                USERS = USERS[0]
                setUSERS4(USERS)
            })
    }
    React.useEffect(() => {
        fetchData()
    }, []);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        USERS0 && USERS1 && USERS2 && USERS3 && USERS4 &&
        < Box sx={{ width: '100%', typography: 'body1', marginBottom: '0px' }
        }>
            <TabContext value={value}>
                <Box >
                    <TabList sx={{
                        '& .MuiTabs-flexContainer': {
                            flexWrap: 'wrap',
                        },
                    }} style={{ 'flex-wrap': 'wrap' }} onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Upcoming" value="1" />
                        <Tab label="Checked in" value="2" />
                        <Tab label="Missed" value="3" />
                    </TabList>
                </Box>
                <TabPanel style={{
                    fontFamily: 'IBM Plex Sans, sans-serif',
                    fontSize: ' 0.875rem',
                    padding: '5px 0px',
                    backgroundColor: '#fff',
                    opacity: 0.8
                }} value="1">
                    {USERS4.length != 0 ?
                        <TableContainer sx={{ maxHeight: '150vh' }} component={Paper} >
                            <Table stickyHeader aria-label="sticky table">
                                <TableBody>
                                    {/*done upcomong USERS0 data  */}
                                    {USERS4.map((row) => (
                                        <AppointmentStatusDetails name={row.name} time={row.time} doctor={row.doctor} service={row.service} status={row.status} id={row.id} reload={fetchData} boxstatus="upcoming" />
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        : <Typography >No Upcoming appointments</Typography>}
                </TabPanel>
                <TabPanel value="2" sx={{
                    padding: '7px'
                }}>
                    <TabContext value={value2}>
                        <Box >
                            <TabsUnstyled defaultValue={0}>
                                <TabsListd  >
                                    <Tabd>Waiting({USERS1.length})</Tabd>
                                    <Tabd>Engaged({USERS2.length})</Tabd>
                                    <Tabd>Done({USERS3.length})</Tabd>
                                </TabsListd>
                                <TabPaneld value={0}>
                                    {USERS1.length != 0 ?
                                        <TableContainer sx={{ maxHeight: '150vh' }} component={Paper} >
                                            <Table stickyHeader aria-label="sticky table">
                                                <TableBody>
                                                    {/* done checkded USERS0 data(waiting ) */}
                                                    {USERS1.map((row) => (
                                                        <AppointmentStatusDetails name={row.name} time={row.time} doctor={row.doctor} service={row.service} status={row.status} id={row.id} reload={fetchData} boxstatus="checked" />
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                        : <Typography >No one is waiting</Typography>}
                                </TabPaneld>
                                <TabPaneld value={1}>
                                    {USERS2.length != 0 ?
                                        <TableContainer sx={{ maxHeight: '150vh' }} component={Paper} >
                                            <Table stickyHeader aria-label="sticky table">
                                                <TableBody>
                                                    {/* done engaed in checked api data */}
                                                    {USERS2.map((row) => (
                                                        <AppointmentStatusDetails name={row.name} time={row.time} doctor={row.doctor} service={row.service} status={row.status} id={row.id} reload={fetchData} boxstatus="checked" />
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                        : <Typography >No one is Engaged</Typography>}
                                </TabPaneld>
                                <TabPaneld value={2}>
                                    {USERS3.length != 0 ?
                                        <TableContainer sx={{ maxHeight: '150vh' }} component={Paper} >
                                            <Table stickyHeader aria-label="sticky table">
                                                <TableBody>
                                                    {/* done api called for checked  */}
                                                    {USERS3.map((row) => (
                                                        <AppointmentStatusDetails name={row.name} time={row.time} doctor={row.doctor} service={row.service} status={row.status} id={row.id} reload={fetchData} boxstatus="checked" />
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                        : <Typography >Nothing to show</Typography>}
                                </TabPaneld>
                            </TabsUnstyled>
                        </Box>
                    </TabContext>
                </TabPanel>
                <TabPanel style={{
                    fontFamily: 'IBM Plex Sans, sans-serif',
                    fontSize: ' 0.875rem',
                    padding: '5px 0px',
                    backgroundColor: '#fff',
                    opacity: 0.8
                }} value="3">
                    {USERS0.length != 0 ?
                        <TableContainer sx={{ maxHeight: '150vh' }} component={Paper} >
                            <Table stickyHeader aria-label="sticky table">
                                <TableBody>
                                    {USERS0.map((row) => (
                                        //done missed USERS0 data 
                                        <AppointmentStatusDetails name={row.PatientName} time={row.Timehour + ":" + row.TimeMin + (row.Timeampm == 1 ? 'am' : 'pm')} doctor={row.doctor} service={row.Service} status={row.Status} id={row._id} data={row} reload={fetchData} boxstatus="missed" />
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        : <Typography >No appointment missed yesterday</Typography>}
                </TabPanel>

            </TabContext>
        </Box >
    );
}