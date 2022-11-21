import { TextField, Grid } from '@mui/material';
import React, { useState, useEffect } from 'react'
import { useForm, Form } from './useForm';
import * as employeeService from './services/employeeService';
import Controls from './controls/Controls';
import Select from './controls/Select';
import { Paper, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ImageListItem from '@mui/material/ImageListItem';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';

import Button from '@mui/material/Button'
import { useLocation } from 'react-router';
const m = (new Date().getMonth() + 1) <= 9 ? '0' + (new Date().getMonth() + 1) : (new Date().getMonth() + 1);
const d = (new Date().getDate()) <= 9 ? '0' + (new Date().getDate()) : (new Date().getDate());
const y = new Date().getFullYear();
const todayDate = y + '-' + m + '-' + d;
const initialFormValues = {
    id: 0,
    CaseNumber: '',
    AppoitmentDate: todayDate,
    PatientName: '',
    DoctorName: '',
    Gender: '',
    ContactNumber: '',
    PatientMobileNumber: '',
    time: '',
    Flat: '',
    Street: '',
    City: 'anand',
    Nationality: 'india',
    Email1: '',
    Village: '',
    area: '',
    State: 'Gujarat',
    PinCode: '388001',
    Email2: '',
    allergy: [],
    continue: 'no',
    DOB: '',
    age: '',
    Timehour: '',
    TimeMin: '',
    Timeampm: '',
    ReferredBy: '',
    Status: 0,
    Service: ''

}

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

const GenderItems = [
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Female' },
    { id: 'other', title: 'Other' },
]
const continueItems = [
    { id: 'yes', title: 'Yes' },
    { id: 'no', title: 'No' },
]
const Appointments = () => {

    const validate = (fieldValues = values) => {
        let temp = { ...errors }

        if ('ContactNumber' in fieldValues)
            temp.ContactNumber = (/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/).test(fieldValues.ContactNumber) ? '' : 'Invalid Number!'
        if ('Email1' in fieldValues)
            temp.Email1 = (/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/).test(fieldValues.Email1) && fieldValues.Email1.includes('.') || fieldValues.Email1.length == 0 ? '' : 'Invalid Email!'
        if ('DoctorName' in fieldValues)
            temp.DoctorName = fieldValues.DoctorName.length != 0 ? '' : 'Select the DoctorName!'
        if ('service' in fieldValues)
            temp.service = fieldValues.service.length != 0 ? '' : 'Select the service!'
        if ('PinCode' in fieldValues)
            temp.PinCode = fieldValues.PinCode.length == 6 || fieldValues.PinCode.length == 0 ? '' : 'length should be 6 only!'

        setErrors({
            ...temp
        })
        if (fieldValues == values)
            return Object.values(temp).every(x => x == '')
    }


    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFormValues, false, validate);

    // useEffect(() => {
    //     console.log(values);
    // }, [values.AppoitmentDate]);
    const history = useLocation();
    let h;
    if (location.hash == "#redirected") { h = history.state; }
    else { h = null }
    // console.log(location.pathname)
    useEffect(() => {
        if (h != null) { setValues(h) }
        else { setValues(initialFormValues) }
    }, [h]);

    // const items = [
    //     "12:00am", "12:00am", "12:00am", "12:15pm", "12:15pm", "12:15pm"
    // ];

    let item = [];
    let prev;
    let items;
    const fetchTime = () => {
        fetch("http://65.1.110.101:3036/Appointment/FindAppointmentByDate?Date=" + values.AppoitmentDate)
            // fetch("http://65.1.110.101:3036/Appointment/FindAppointmentByDate?Date=" + values.AppoitmentDate)
            .then(response => {
                const resp = response.json();
                return resp;
            })
            .then(users => {
                items = [
                    users.map(data => (
                        data.Timehour + ":" + data.TimeMin + (data.Timeampm == 1 ? 'am' : 'pm')
                    ))]
                items = items[0]
                prev = items[0]
                // console.log(prev)
                for (let i = 1; i < items.length; i++) {

                    if (prev === items[i + 1]) {
                        item.push(prev)
                    } else {
                        i++
                    }
                    prev = items[i]
                }
                console.log(item);
            })
    }

    useEffect(() => {
        fetchTime()
    }, [values.AppoitmentDate])


    // console.log(item)
    const itemData = [
        "09:30am", "09:45am", "10:00am", "10:15am",
        "10:30am", "10:45am", "11:00am", "11:15am",
        "11:30am", "11:45am", "12:00pm", "12:15pm",
        "12:30pm", "12:45pm", "01:00pm", "01:15pm",
        "01:30pm", "01:45pm", "02:00pm", "02:15pm",
        "02:30pm", "02:45pm", "03:00pm", "03:15pm",
        "03:30pm", "03:45pm", "04:00pm", "04:15pm",
        "04:30pm", "04:45pm", "05:00pm", "05:15pm",
    ];
    const [open, setOpen] = React.useState(false);
    const [time, setTime] = React.useState("select time");
    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    const handleClickAway = () => {
        setOpen(false);
    };
    const handleButton = (item) => {
        setTime(item);
        // console.log(item.slice(5, 7));
        setOpen(false);
    }
    const styles = {
        position: 'relative',
        top: 5,
        right: 0,
        left: 0,
        zIndex: 1,
        border: '1px solid',
        p: 0,
        width: '100%',
        overflow: 'auto',
        bgcolor: 'background.paper',
    };

    // const handleSubmit = e => {
    //     e.preventDefault()
    //     // if(validate())
    //     // {
    //     console.log(values)

    // employeeService.insertAppointment(values);
    // resetForm()
    //     window.alert('testing...')

    //     // }
    // }
    let handleSubmit = async (e) => {
        e.preventDefault();
        console.log("handleSubmit");
        // if (validate()) {
        console.log("Validating")
        try {
            console.log("Data added");
            let res = await fetch("http://65.1.110.101:3036/Appointment/BookAppointment", {
                // let res = await fetch("http://65.1.110.101:3036/Appointment/BookAppointment", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    "ContactNumber": values.ContactNumber,
                    "Gender": values.Gender,
                    "DOB": values.DOB,
                    "Age": values.age,
                    "Email1": values.Email1,
                    "Email2": values.Email2,
                    "ReferredBy": values.ReferredBy,
                    "Flat": values.Flat,
                    "Street": values.Street,
                    "City": values.City,
                    "Village": values.Village,
                    "Nationality": values.Nationality,
                    "State": values.State,
                    "PinCode": values.PinCode,
                    "CaseNumber": values.CaseNumber,
                    "Service": values.service,
                    "PatientName": values.PatientName,
                    "ContactNumber": values.ContactNumber,
                    "PatientMobileNumber": values.ContactNumber,
                    "DoctorName": values.DoctorName,
                    "AppoitmentDate": values.AppoitmentDate,
                    "Timehour": time.slice(0, 2),
                    "TimeMin": time.slice(3, 5),
                    "Timeampm": time.slice(5, 7) == 'am' ? 1 : 2,
                    "Status": values.Status
                })
            });
            let resJson = await res.json();
            console.log(resJson);
            if (res.status === 200) {
                console.log("Data enter succesfully: ");
                console.log(values);
            } else {
                console.log("Some error occured");
            }
        } catch (err) {
            console.log(err);
        }
        resetForm()
        // }
        console.log("end of handeleSubmit");
    };

    const [users, setUsers] = useState([])

    const fetchData = () => {
        fetch("http://65.1.110.101:3036/Appointment/GetLastCaseNumber")
            // fetch("http://65.1.110.101:3036/Appointment/GetLastCaseNumber")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setUsers(data)
            })
    }

    useEffect(() => {
        fetchData()
        fetchTime()
    }, [])
    initialFormValues.CaseNumber = users;
    if (getCookie("validate")) {
        return (
            <Form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Controls.Input
                            name='CaseNumber'
                            label='Case No.'
                            value={values.CaseNumber}
                            onChange={handleInputChange}

                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>

                        <Controls.Input
                            name='Service'
                            label='Service'
                            value={values.Service}
                            onChange={handleInputChange}

                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Controls.Input
                            name='PatientName'
                            label='Full Name'
                            value={values.PatientName}
                            onChange={handleInputChange}

                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Controls.Input
                            name='ContactNumber'
                            label='Mobile No'
                            value={values.PatientMobileNumber}
                            onChange={handleInputChange}

                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Select
                            name='DoctorName'
                            label='DoctorName'
                            value={values.DoctorName}
                            onChange={handleInputChange}

                            options={employeeService.getDoctorCollection()}

                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Controls.DatePicker
                            name='AppoitmentDate'
                            label='date'

                            value={values.AppoitmentDate}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <ClickAwayListener onClickAway={handleClickAway}>
                            <Box sx={{ position: 'relative' }}>
                                <TextField fullWidth disabled label={time} sx={{ "-webkit-text-fill-color": `black !important` }} onClick={handleClick}>

                                </TextField>

                                {open ? (
                                    <Grid item xs={12} sm={12}>

                                        <Box sx={styles}>

                                            <ImageList sx={{ minWidth: '80%', Width: '100%', height: 250, }} cols={6} rowHeight={10}>

                                                {itemData.map((itemd) => (
                                                    !(item.indexOf(itemd) > -1) &&
                                                    <ImageListItem key={item.itemd} sx={{ margin: '0px', height: '100%', margin: '0px' }}>
                                                        <Button onClick={() => handleButton(itemd)}>{itemd}</Button>
                                                    </ImageListItem>))}
                                            </ImageList>
                                        </Box>
                                    </Grid>

                                ) : null}

                            </Box>

                        </ClickAwayListener>

                    </Grid>

                </Grid>

                <Accordion sx={{ marginTop: '20px' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panel1a-content'
                        id='panel1a-header'
                    >
                        <Typography variant='h4'> Extra Information</Typography>
                    </AccordionSummary>
                    <AccordionDetails>



                        <Paper sx={{ marginTop: '10px', paddingTop: '10px' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <Controls.RadioGroup
                                        name='Gender'
                                        label='Gender : '
                                        value={values.Gender}
                                        onChange={handleInputChange}
                                        items={GenderItems}
                                        defaultvalue=''
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>

                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <Controls.DatePicker
                                                name='DOB'
                                                label='Date of Birth'
                                                value={values.DOB}
                                                onChange={handleInputChange}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Controls.Input
                                                name='age'
                                                value={values.age}
                                                label='Age'
                                                onChange={handleInputChange}
                                            />
                                        </Grid>
                                    </Grid>

                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Controls.Input
                                        name='Email1'
                                        value={values.Email1}
                                        label='Email1'
                                        error={errors.Email1}
                                        onChange={handleInputChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Controls.Input
                                        name='Email2'
                                        value={values.Email2}
                                        label='Email2'
                                        onChange={handleInputChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Controls.Input
                                        name='Nationality'
                                        value={values.Nationality}
                                        label='Nationality'
                                        onChange={handleInputChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Controls.Input
                                        name='ReferredBy'
                                        value={values.ReferredBy}
                                        label='Referred By'
                                        onChange={handleInputChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Controls.Input
                                        name='Flat'
                                        value={values.Flat}
                                        label='Flat/Door/Block No'
                                        onChange={handleInputChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Controls.Input
                                        name='Village'
                                        value={values.Village}
                                        label='Name of Building / Village'
                                        onChange={handleInputChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Controls.Input
                                        name='Street'
                                        value={values.Street}
                                        label='Road/Street/Lane'
                                        onChange={handleInputChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Controls.Input
                                        name='area'
                                        value={values.area}
                                        label='Area/Locality'
                                        onChange={handleInputChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Controls.Input
                                        name='City'
                                        value={values.City}
                                        label='City'
                                        onChange={handleInputChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Controls.Input
                                        name='State'
                                        value={values.State}
                                        label='State'
                                        onChange={handleInputChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Controls.Input
                                        name='PinCode'
                                        value={values.PinCode}
                                        label='Pin Code'
                                        onChange={handleInputChange}
                                        error={errors.PinCode}
                                    />
                                </Grid>
                            </Grid>
                        </Paper>
                    </AccordionDetails>

                </Accordion>
                <Grid item xs={12} sm={6}>
                    <div>
                        <Controls.Buttons
                            type='submit'
                            text='Submit'

                        />
                    </div>

                </Grid>
            </Form>
        )
    } else {
        return (<h1>Hello error</h1>)
        // return (window.location.href = "/Login")
    }
}

export default Appointments