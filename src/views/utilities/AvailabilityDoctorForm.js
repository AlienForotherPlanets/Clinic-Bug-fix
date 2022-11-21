import { Divider, Grid, Switch, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import MainCard from 'ui-component/cards/MainCard'
import Controls from './controls/Controls'
import * as employeeService from "./services/employeeService";
import AvailableTable from './AvailableTable'
import { Paper } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useForm, Form } from './useForm';
import { FormControlLabel } from '@mui/material';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TextField from '@mui/material/TextField';
import AvailableDisplay from './AvailableDisplay'
import AvailableForm from './AvailableForm'
import { Button } from '@mui/material'
import FormGroup from '@mui/material/FormGroup';
import { makeStyles } from '@mui/styles'
import {
    Table,
    TableBody,
    TableContainer,
    TableRow,
    TableCell,
    TableHead

} from '@mui/material';
import { useEffect } from 'react'

const useStyles = makeStyles(theme => ({

    menuPaper: {
        maxHeight: 300
    }
}));
const AvailabilityDoctorForm = (props) => {
    const classes = useStyles();

    const [checked, setChecked] = useState(true)
    const [start, setStart] = useState('9:00 am')
    const [sundayrows, setSundayrows] = React.useState([{}])
    const [mondayrows, setMondayrows] = React.useState([{}])
    const [tuesdayrows, setTuesdayrows] = React.useState([{}])
    const [wednesdayrows, setWednesdayrows] = React.useState([{}])
    const [thursdayrows, setThursdayrows] = React.useState([{}])
    const [fridayrows, setFridayrows] = React.useState([{}])
    const [saturdayrows, setSaturdayrows] = React.useState([{}])
    const initialFValues = {
        id: 0,
        starttime: '',
        endtime: '',
        ScheduleDate: '',
        reason: '',
        userno: props.userno,

    }
    const [notavailable, setNotAvailable] = useState(false)
    const handleDelete = () => {

    };

    const VALID_NOTES = [
        "C",
        "C#",
        "D",
        "D#",
        "E",
        "F",
        "F#",
        "G",
        "G#",
        "A",
        "A#",
        "C#",
        "D",
        "D#",
        "E",
        "F",
        "F#",
        "G",
        "G#",
        "A",
        "A#",
        "C#",
        "D",
        "D#",
        "E",
        "F",
        "F#",
        "G",
        "G#",
        "A",
        "A#",
        "C#",
        "D",
        "D#",
        "E",
        "F",
        "F#",
        "G",
        "G#",
        "A",
        "A#",
        "B"
    ];

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues);
    const [starttime, setStarttime] = useState('')
    const [endtime, setEndtime] = useState('')
    const [note, setNote] = React.useState("");
    const [weeklyavailable, setWeeklyavailable] = React.useState(true)
    const handleChange = event => {
        setNote(event.target.value);
    };
    useEffect(() => {
        setValues({ ...values, ['starttime']: starttime })
    }, [starttime])
    useEffect(() => {
        setValues({ ...values, ['endtime']: endtime })
    }, [endtime])
    //    console.log(values)
    const handleSubmit = e => {
        e.preventDefault()
        //   console.log("hadnle sub",values)
        setValues(initialFValues)
        setStarttime('')
        setEndtime('')

        // console.log(values)

    }


    return (
        <>
            <Grid container spacing={2}>

                <Grid item xs={12} sm={7}>
                    <MainCard title="Schedule Override" sx={{ minHeight: '300px' }}  >
                        <Form onSubmit={handleSubmit}>
                            <Grid container spacing={2}>

                                <Grid item xs={12} sm={6}>
                                    <Controls.DatePicker
                                        name="ScheduleDate"
                                        label="Date"
                                        value={values.ScheduleDate}
                                        onChange={handleInputChange}

                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FormControlLabel
                                        control={
                                            <Switch checked={notavailable} onChange={(e) => { setNotAvailable(!notavailable) }} />
                                        }
                                        label="Mark As Unavailable"
                                    />

                                </Grid>
                                {notavailable ?
                                    <Grid item xs={12} sm={6}> </Grid>
                                    :
                                    <Grid item xs={12} sm={6}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} sm={6}>
                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                    <TimePicker

                                                        value={starttime}
                                                        onChange={setStarttime}
                                                        renderInput={(params) => <TextField {...params} />}
                                                    />
                                                </LocalizationProvider>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                    <TimePicker

                                                        value={endtime}
                                                        onChange={setEndtime}
                                                        renderInput={(params) => <TextField {...params} />}
                                                    /> </LocalizationProvider>

                                            </Grid>
                                        </Grid>
                                    </Grid>
                                }
                                <Grid item xs={12} sm={6}>

                                    <Controls.Input
                                        name='reason'
                                        label='Reason'
                                        value={values.reason}
                                        onChange={handleInputChange}

                                    />

                                </Grid>
                                <Grid item xs={12} sm={6}>

                                    <Controls.Buttons
                                        text="Submit"
                                        type="submit"
                                    />

                                </Grid>
                            </Grid>
                        </Form>

                    </MainCard>
                </Grid>
                <Grid item xs={12} sm={5}>
                    <MainCard sx={{ height: '300px' }}>

                        <TableContainer sx={{ maxHeight: 280 }} component={Paper} >
                            <Table stickyHeader aria-label="sticky table">

                                <TableBody>
                                    {
                                        props.available.map((data) => (
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
                                            }} key="4">
                                                <TableCell>
                                                    <Typography >{data.date}</Typography>

                                                </TableCell>
                                                <TableCell>

                                                    <Typography >{data.starttime} - {data.endtime}</Typography>
                                                    <Typography >{data.reason}</Typography>


                                                </TableCell>

                                                <TableCell>
                                                    <Typography color="textSecondary" variant="body2"><Button variant="outlined" onClick={handleDelete}>delete</Button></Typography>

                                                </TableCell>
                                            </TableRow>))}
                                </TableBody>

                            </Table>
                        </TableContainer>



                    </MainCard>
                </Grid>
            </Grid>
            <MainCard sx={{ marginTop: '10px' }}>
                <TableContainer sx={{ maxWidth: '90%' }} component={Paper}>
                    <Table stickyHeader aria-label="sticky table">
                        {/* <TableHead>
        <TableCell width={23}>
       <Typography ></Typography>
      
       </TableCell>
       <TableCell width={23}>
       <Typography ></Typography>
      
       </TableCell>
       <TableCell>
       <Typography >Morning</Typography>
       </TableCell>
       <TableCell>
       <Typography >AfterNoon</Typography>
      
       </TableCell>
       <TableCell>
       <Typography >Evening</Typography>
      
       </TableCell>
      
        </TableHead> */}
                        <TableBody>

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
                            }} key="4">

                                <TableCell>
                                    <Typography >Sunday</Typography>

                                </TableCell>
                                <TableCell>

                                    <Typography >  <FormGroup>
                                        <FormControlLabel control={<Switch checked={weeklyavailable} onChange={() => setWeeklyavailable(!weeklyavailable)} />} label="Available" />
                                    </FormGroup></Typography>

                                </TableCell>

                                <TableCell sx={{ paddingRight: '0px' }}>

                                    <FormControl sx={{ minWidth: "100px" }} size="small">

                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={note}
                                            disabled={!weeklyavailable}
                                            onChange={handleChange}
                                            MenuProps={{ classes: { paper: classes.menuPaper } }}
                                        >
                                            {VALID_NOTES.map(validNote => (
                                                <MenuItem value={validNote}>{validNote}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </TableCell>
                                <TableCell sx={{ paddingLeft: '3px' }}>
                                    <FormControl sx={{ minWidth: "100px" }} size="small">

                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={note}
                                            disabled={!weeklyavailable}
                                            onChange={handleChange}
                                            MenuProps={{ classes: { paper: classes.menuPaper } }}
                                        >
                                            {VALID_NOTES.map(validNote => (
                                                <MenuItem value={validNote}>{validNote}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </TableCell>
                                <TableCell sx={{ paddingRight: '0px' }}>
                                    <FormControl sx={{ minWidth: "100px" }} size="small">

                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={note}
                                            disabled={!weeklyavailable}

                                            onChange={handleChange}
                                            MenuProps={{ classes: { paper: classes.menuPaper } }}
                                        >
                                            {VALID_NOTES.map(validNote => (
                                                <MenuItem value={validNote}>{validNote}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>

                                </TableCell>
                                <TableCell sx={{ paddingLeft: '3px' }}>
                                    <FormControl sx={{ minWidth: "100px" }} size="small">
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={note}
                                            disabled={!weeklyavailable}

                                            onChange={handleChange}
                                            MenuProps={{ classes: { paper: classes.menuPaper } }}
                                        >
                                            {VALID_NOTES.map(validNote => (
                                                <MenuItem value={validNote}>{validNote}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </TableCell>
                                <TableCell sx={{ paddingRight: '0px' }}>
                                    <FormControl sx={{ minWidth: "100px" }} size="small">

                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={note}
                                            disabled={!weeklyavailable}

                                            onChange={handleChange}
                                            MenuProps={{ classes: { paper: classes.menuPaper } }}
                                        >
                                            {VALID_NOTES.map(validNote => (
                                                <MenuItem value={validNote}>{validNote}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </TableCell>
                                <TableCell sx={{ paddingLeft: '3px' }}>
                                    <FormControl sx={{ minWidth: "100px" }} size="small">

                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={note}
                                            disabled={!weeklyavailable}

                                            onChange={handleChange}
                                            MenuProps={{ classes: { paper: classes.menuPaper } }}
                                        >
                                            {VALID_NOTES.map(validNote => (
                                                <MenuItem value={validNote}>{validNote}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>

                                </TableCell>


                            </TableRow>
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
                            }} key="4">

                                <TableCell>
                                    <Typography >Monday</Typography>

                                </TableCell>
                                <TableCell>

                                    <Typography >  <FormGroup>
                                        <FormControlLabel control={<Switch checked={weeklyavailable} onChange={() => setWeeklyavailable(!weeklyavailable)} />} label="Available" />
                                    </FormGroup></Typography>

                                </TableCell>

                                <TableCell sx={{ paddingRight: '0px' }}>

                                    <FormControl sx={{ minWidth: "100px" }} size="small">

                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={note}
                                            disabled={!weeklyavailable}
                                            onChange={handleChange}
                                            MenuProps={{ classes: { paper: classes.menuPaper } }}
                                        >
                                            {VALID_NOTES.map(validNote => (
                                                <MenuItem value={validNote}>{validNote}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </TableCell>
                                <TableCell sx={{ paddingLeft: '3px' }}>
                                    <FormControl sx={{ minWidth: "100px" }} size="small">

                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={note}
                                            disabled={!weeklyavailable}
                                            onChange={handleChange}
                                            MenuProps={{ classes: { paper: classes.menuPaper } }}
                                        >
                                            {VALID_NOTES.map(validNote => (
                                                <MenuItem value={validNote}>{validNote}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </TableCell>
                                <TableCell sx={{ paddingRight: '0px' }}>
                                    <FormControl sx={{ minWidth: "100px" }} size="small">

                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={note}
                                            disabled={!weeklyavailable}

                                            onChange={handleChange}
                                            MenuProps={{ classes: { paper: classes.menuPaper } }}
                                        >
                                            {VALID_NOTES.map(validNote => (
                                                <MenuItem value={validNote}>{validNote}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>

                                </TableCell>
                                <TableCell sx={{ paddingLeft: '3px' }}>
                                    <FormControl sx={{ minWidth: "100px" }} size="small">
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={note}
                                            disabled={!weeklyavailable}

                                            onChange={handleChange}
                                            MenuProps={{ classes: { paper: classes.menuPaper } }}
                                        >
                                            {VALID_NOTES.map(validNote => (
                                                <MenuItem value={validNote}>{validNote}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </TableCell>
                                <TableCell sx={{ paddingRight: '0px' }}>
                                    <FormControl sx={{ minWidth: "100px" }} size="small">

                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={note}
                                            disabled={!weeklyavailable}

                                            onChange={handleChange}
                                            MenuProps={{ classes: { paper: classes.menuPaper } }}
                                        >
                                            {VALID_NOTES.map(validNote => (
                                                <MenuItem value={validNote}>{validNote}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </TableCell>
                                <TableCell sx={{ paddingLeft: '3px' }}>
                                    <FormControl sx={{ minWidth: "100px" }} size="small">

                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={note}
                                            disabled={!weeklyavailable}

                                            onChange={handleChange}
                                            MenuProps={{ classes: { paper: classes.menuPaper } }}
                                        >
                                            {VALID_NOTES.map(validNote => (
                                                <MenuItem value={validNote}>{validNote}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>

                                </TableCell>


                            </TableRow>
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
                            }} key="4">

                                <TableCell>
                                    <Typography >Tuesday</Typography>

                                </TableCell>
                                <TableCell>

                                    <Typography >  <FormGroup>
                                        <FormControlLabel control={<Switch checked={weeklyavailable} onChange={() => setWeeklyavailable(!weeklyavailable)} />} label="Available" />
                                    </FormGroup></Typography>

                                </TableCell>

                                <TableCell sx={{ paddingRight: '0px' }}>

                                    <FormControl sx={{ minWidth: "100px" }} size="small">

                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={note}
                                            disabled={!weeklyavailable}
                                            onChange={handleChange}
                                            MenuProps={{ classes: { paper: classes.menuPaper } }}
                                        >
                                            {VALID_NOTES.map(validNote => (
                                                <MenuItem value={validNote}>{validNote}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </TableCell>
                                <TableCell sx={{ paddingLeft: '3px' }}>
                                    <FormControl sx={{ minWidth: "100px" }} size="small">

                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={note}
                                            disabled={!weeklyavailable}
                                            onChange={handleChange}
                                            MenuProps={{ classes: { paper: classes.menuPaper } }}
                                        >
                                            {VALID_NOTES.map(validNote => (
                                                <MenuItem value={validNote}>{validNote}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </TableCell>
                                <TableCell sx={{ paddingRight: '0px' }}>
                                    <FormControl sx={{ minWidth: "100px" }} size="small">

                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={note}
                                            disabled={!weeklyavailable}

                                            onChange={handleChange}
                                            MenuProps={{ classes: { paper: classes.menuPaper } }}
                                        >
                                            {VALID_NOTES.map(validNote => (
                                                <MenuItem value={validNote}>{validNote}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>

                                </TableCell>
                                <TableCell sx={{ paddingLeft: '3px' }}>
                                    <FormControl sx={{ minWidth: "100px" }} size="small">
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={note}
                                            disabled={!weeklyavailable}

                                            onChange={handleChange}
                                            MenuProps={{ classes: { paper: classes.menuPaper } }}
                                        >
                                            {VALID_NOTES.map(validNote => (
                                                <MenuItem value={validNote}>{validNote}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </TableCell>
                                <TableCell sx={{ paddingRight: '0px' }}>
                                    <FormControl sx={{ minWidth: "100px" }} size="small">

                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={note}
                                            disabled={!weeklyavailable}

                                            onChange={handleChange}
                                            MenuProps={{ classes: { paper: classes.menuPaper } }}
                                        >
                                            {VALID_NOTES.map(validNote => (
                                                <MenuItem value={validNote}>{validNote}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </TableCell>
                                <TableCell sx={{ paddingLeft: '3px' }}>
                                    <FormControl sx={{ minWidth: "100px" }} size="small">

                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={note}
                                            disabled={!weeklyavailable}

                                            onChange={handleChange}
                                            MenuProps={{ classes: { paper: classes.menuPaper } }}
                                        >
                                            {VALID_NOTES.map(validNote => (
                                                <MenuItem value={validNote}>{validNote}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>

                                </TableCell>


                            </TableRow>
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
                            }} key="4">

                                <TableCell>
                                    <Typography >Wednesday</Typography>

                                </TableCell>
                                <TableCell>

                                    <Typography >  <FormGroup>
                                        <FormControlLabel control={<Switch checked={weeklyavailable} onChange={() => setWeeklyavailable(!weeklyavailable)} />} label="Available" />
                                    </FormGroup></Typography>

                                </TableCell>

                                <TableCell sx={{ paddingRight: '0px' }}>

                                    <FormControl sx={{ minWidth: "100px" }} size="small">

                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={note}
                                            disabled={!weeklyavailable}
                                            onChange={handleChange}
                                            MenuProps={{ classes: { paper: classes.menuPaper } }}
                                        >
                                            {VALID_NOTES.map(validNote => (
                                                <MenuItem value={validNote}>{validNote}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </TableCell>
                                <TableCell sx={{ paddingLeft: '3px' }}>
                                    <FormControl sx={{ minWidth: "100px" }} size="small">

                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={note}
                                            disabled={!weeklyavailable}
                                            onChange={handleChange}
                                            MenuProps={{ classes: { paper: classes.menuPaper } }}
                                        >
                                            {VALID_NOTES.map(validNote => (
                                                <MenuItem value={validNote}>{validNote}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </TableCell>
                                <TableCell sx={{ paddingRight: '0px' }}>
                                    <FormControl sx={{ minWidth: "100px" }} size="small">

                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={note}
                                            disabled={!weeklyavailable}

                                            onChange={handleChange}
                                            MenuProps={{ classes: { paper: classes.menuPaper } }}
                                        >
                                            {VALID_NOTES.map(validNote => (
                                                <MenuItem value={validNote}>{validNote}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>

                                </TableCell>
                                <TableCell sx={{ paddingLeft: '3px' }}>
                                    <FormControl sx={{ minWidth: "100px" }} size="small">
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={note}
                                            disabled={!weeklyavailable}

                                            onChange={handleChange}
                                            MenuProps={{ classes: { paper: classes.menuPaper } }}
                                        >
                                            {VALID_NOTES.map(validNote => (
                                                <MenuItem value={validNote}>{validNote}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </TableCell>
                                <TableCell sx={{ paddingRight: '0px' }}>
                                    <FormControl sx={{ minWidth: "100px" }} size="small">

                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={note}
                                            disabled={!weeklyavailable}

                                            onChange={handleChange}
                                            MenuProps={{ classes: { paper: classes.menuPaper } }}
                                        >
                                            {VALID_NOTES.map(validNote => (
                                                <MenuItem value={validNote}>{validNote}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </TableCell>
                                <TableCell sx={{ paddingLeft: '3px' }}>
                                    <FormControl sx={{ minWidth: "100px" }} size="small">

                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={note}
                                            disabled={!weeklyavailable}

                                            onChange={handleChange}
                                            MenuProps={{ classes: { paper: classes.menuPaper } }}
                                        >
                                            {VALID_NOTES.map(validNote => (
                                                <MenuItem value={validNote}>{validNote}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>

                                </TableCell>


                            </TableRow>
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
                            }} key="4">

                                <TableCell>
                                    <Typography >Thursday</Typography>

                                </TableCell>
                                <TableCell>

                                    <Typography >  <FormGroup>
                                        <FormControlLabel control={<Switch checked={weeklyavailable} onChange={() => setWeeklyavailable(!weeklyavailable)} />} label="Available" />
                                    </FormGroup></Typography>

                                </TableCell>

                                <TableCell sx={{ paddingRight: '0px' }}>

                                    <FormControl sx={{ minWidth: "100px" }} size="small">

                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={note}
                                            disabled={!weeklyavailable}
                                            onChange={handleChange}
                                            MenuProps={{ classes: { paper: classes.menuPaper } }}
                                        >
                                            {VALID_NOTES.map(validNote => (
                                                <MenuItem value={validNote}>{validNote}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </TableCell>
                                <TableCell sx={{ paddingLeft: '3px' }}>
                                    <FormControl sx={{ minWidth: "100px" }} size="small">

                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={note}
                                            disabled={!weeklyavailable}
                                            onChange={handleChange}
                                            MenuProps={{ classes: { paper: classes.menuPaper } }}
                                        >
                                            {VALID_NOTES.map(validNote => (
                                                <MenuItem value={validNote}>{validNote}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </TableCell>
                                <TableCell sx={{ paddingRight: '0px' }}>
                                    <FormControl sx={{ minWidth: "100px" }} size="small">

                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={note}
                                            disabled={!weeklyavailable}

                                            onChange={handleChange}
                                            MenuProps={{ classes: { paper: classes.menuPaper } }}
                                        >
                                            {VALID_NOTES.map(validNote => (
                                                <MenuItem value={validNote}>{validNote}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>

                                </TableCell>
                                <TableCell sx={{ paddingLeft: '3px' }}>
                                    <FormControl sx={{ minWidth: "100px" }} size="small">
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={note}
                                            disabled={!weeklyavailable}

                                            onChange={handleChange}
                                            MenuProps={{ classes: { paper: classes.menuPaper } }}
                                        >
                                            {VALID_NOTES.map(validNote => (
                                                <MenuItem value={validNote}>{validNote}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </TableCell>
                                <TableCell sx={{ paddingRight: '0px' }}>
                                    <FormControl sx={{ minWidth: "100px" }} size="small">

                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={note}
                                            disabled={!weeklyavailable}

                                            onChange={handleChange}
                                            MenuProps={{ classes: { paper: classes.menuPaper } }}
                                        >
                                            {VALID_NOTES.map(validNote => (
                                                <MenuItem value={validNote}>{validNote}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </TableCell>
                                <TableCell sx={{ paddingLeft: '3px' }}>
                                    <FormControl sx={{ minWidth: "100px" }} size="small">

                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={note}
                                            disabled={!weeklyavailable}

                                            onChange={handleChange}
                                            MenuProps={{ classes: { paper: classes.menuPaper } }}
                                        >
                                            {VALID_NOTES.map(validNote => (
                                                <MenuItem value={validNote}>{validNote}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>

                                </TableCell>


                            </TableRow>
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
                            }} key="4">

                                <TableCell>
                                    <Typography >Friday</Typography>

                                </TableCell>
                                <TableCell>

                                    <Typography >  <FormGroup>
                                        <FormControlLabel control={<Switch checked={weeklyavailable} onChange={() => setWeeklyavailable(!weeklyavailable)} />} label="Available" />
                                    </FormGroup></Typography>

                                </TableCell>

                                <TableCell sx={{ paddingRight: '0px' }}>

                                    <FormControl sx={{ minWidth: "100px" }} size="small">

                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={note}
                                            disabled={!weeklyavailable}
                                            onChange={handleChange}
                                            MenuProps={{ classes: { paper: classes.menuPaper } }}
                                        >
                                            {VALID_NOTES.map(validNote => (
                                                <MenuItem value={validNote}>{validNote}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </TableCell>
                                <TableCell sx={{ paddingLeft: '3px' }}>
                                    <FormControl sx={{ minWidth: "100px" }} size="small">

                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={note}
                                            disabled={!weeklyavailable}
                                            onChange={handleChange}
                                            MenuProps={{ classes: { paper: classes.menuPaper } }}
                                        >
                                            {VALID_NOTES.map(validNote => (
                                                <MenuItem value={validNote}>{validNote}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </TableCell>
                                <TableCell sx={{ paddingRight: '0px' }}>
                                    <FormControl sx={{ minWidth: "100px" }} size="small">

                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={note}
                                            disabled={!weeklyavailable}

                                            onChange={handleChange}
                                            MenuProps={{ classes: { paper: classes.menuPaper } }}
                                        >
                                            {VALID_NOTES.map(validNote => (
                                                <MenuItem value={validNote}>{validNote}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>

                                </TableCell>
                                <TableCell sx={{ paddingLeft: '3px' }}>
                                    <FormControl sx={{ minWidth: "100px" }} size="small">
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={note}
                                            disabled={!weeklyavailable}

                                            onChange={handleChange}
                                            MenuProps={{ classes: { paper: classes.menuPaper } }}
                                        >
                                            {VALID_NOTES.map(validNote => (
                                                <MenuItem value={validNote}>{validNote}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </TableCell>
                                <TableCell sx={{ paddingRight: '0px' }}>
                                    <FormControl sx={{ minWidth: "100px" }} size="small">

                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={note}
                                            disabled={!weeklyavailable}

                                            onChange={handleChange}
                                            MenuProps={{ classes: { paper: classes.menuPaper } }}
                                        >
                                            {VALID_NOTES.map(validNote => (
                                                <MenuItem value={validNote}>{validNote}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </TableCell>
                                <TableCell sx={{ paddingLeft: '3px' }}>
                                    <FormControl sx={{ minWidth: "100px" }} size="small">

                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={note}
                                            disabled={!weeklyavailable}

                                            onChange={handleChange}
                                            MenuProps={{ classes: { paper: classes.menuPaper } }}
                                        >
                                            {VALID_NOTES.map(validNote => (
                                                <MenuItem value={validNote}>{validNote}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>

                                </TableCell>


                            </TableRow>
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
                            }} key="4">

                                <TableCell>
                                    <Typography >Saturday</Typography>

                                </TableCell>
                                <TableCell>

                                    <Typography >  <FormGroup>
                                        <FormControlLabel control={<Switch checked={weeklyavailable} onChange={() => setWeeklyavailable(!weeklyavailable)} />} label="Available" />
                                    </FormGroup></Typography>

                                </TableCell>

                                <TableCell sx={{ paddingRight: '0px' }}>

                                    <FormControl sx={{ minWidth: "100px" }} size="small">

                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={note}
                                            disabled={!weeklyavailable}
                                            onChange={handleChange}
                                            MenuProps={{ classes: { paper: classes.menuPaper } }}
                                        >
                                            {VALID_NOTES.map(validNote => (
                                                <MenuItem value={validNote}>{validNote}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </TableCell>
                                <TableCell sx={{ paddingLeft: '3px' }}>
                                    <FormControl sx={{ minWidth: "100px" }} size="small">

                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={note}
                                            disabled={!weeklyavailable}
                                            onChange={handleChange}
                                            MenuProps={{ classes: { paper: classes.menuPaper } }}
                                        >
                                            {VALID_NOTES.map(validNote => (
                                                <MenuItem value={validNote}>{validNote}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </TableCell>
                                <TableCell sx={{ paddingRight: '0px' }}>
                                    <FormControl sx={{ minWidth: "100px" }} size="small">

                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={note}
                                            disabled={!weeklyavailable}

                                            onChange={handleChange}
                                            MenuProps={{ classes: { paper: classes.menuPaper } }}
                                        >
                                            {VALID_NOTES.map(validNote => (
                                                <MenuItem value={validNote}>{validNote}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>

                                </TableCell>
                                <TableCell sx={{ paddingLeft: '3px' }}>
                                    <FormControl sx={{ minWidth: "100px" }} size="small">
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={note}
                                            disabled={!weeklyavailable}

                                            onChange={handleChange}
                                            MenuProps={{ classes: { paper: classes.menuPaper } }}
                                        >
                                            {VALID_NOTES.map(validNote => (
                                                <MenuItem value={validNote}>{validNote}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </TableCell>
                                <TableCell sx={{ paddingRight: '0px' }}>
                                    <FormControl sx={{ minWidth: "100px" }} size="small">

                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={note}
                                            disabled={!weeklyavailable}

                                            onChange={handleChange}
                                            MenuProps={{ classes: { paper: classes.menuPaper } }}
                                        >
                                            {VALID_NOTES.map(validNote => (
                                                <MenuItem value={validNote}>{validNote}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </TableCell>
                                <TableCell sx={{ paddingLeft: '3px' }}>
                                    <FormControl sx={{ minWidth: "100px" }} size="small">

                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={note}
                                            disabled={!weeklyavailable}

                                            onChange={handleChange}
                                            MenuProps={{ classes: { paper: classes.menuPaper } }}
                                        >
                                            {VALID_NOTES.map(validNote => (
                                                <MenuItem value={validNote}>{validNote}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>

                                </TableCell>


                            </TableRow>

                        </TableBody>

                    </Table>
                </TableContainer>
            </MainCard>
        </>
    )
}

export default AvailabilityDoctorForm