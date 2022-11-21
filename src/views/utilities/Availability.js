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
import {
  Table,
  TableBody,
  TableContainer,
  TableRow,
  TableCell,
  TableHead

} from '@mui/material';
import { useEffect } from 'react'
import AvailabilityDoctorForm from './AvailabilityDoctorForm'
const Availability = ({ trigger }) => {

  const [checked, setChecked] = useState(true)
  const [start, setStart] = useState('9:00 am')
  const [sundayrows, setSundayrows] = React.useState([{}])
  const [mondayrows, setMondayrows] = React.useState([{}])
  const [tuesdayrows, setTuesdayrows] = React.useState([{}])
  const [wednesdayrows, setWednesdayrows] = React.useState([{}])
  const [thursdayrows, setThursdayrows] = React.useState([{}])
  const [fridayrows, setFridayrows] = React.useState([{}])
  const [saturdayrows, setSaturdayrows] = React.useState([{}])

  const [selectAvailability, setSelectAvailability] = React.useState(1);
  let available = [
    { date: 'Nov 3 2022', starttime: '12:08pm', endtime: '1:10pm', reason: 'Holiday' }, { date: 'Nov 3 2022', starttime: '12:08pm', endtime: '1:10pm', reason: 'Holiday' },

    { date: 'Nov 3 2022', starttime: '12:08pm', endtime: '1:10pm', reason: 'Holiday' }, { date: 'Nov 3 2022', starttime: '12:08pm', endtime: '1:10pm', reason: 'Holiday' },
    { date: 'Nov 3 2022', starttime: '12:08pm', endtime: '1:10pm', reason: 'Holiday' }, { date: 'Nov 3 2022', starttime: '12:08pm', endtime: '1:10pm', reason: 'Holiday' },
    { date: 'Nov 3 2022', starttime: '12:08pm', endtime: '1:10pm', reason: 'Holiday' }, { date: 'Nov 3 2022', starttime: '12:08pm', endtime: '1:10pm', reason: 'Holiday' },
    { date: 'Nov 3 2022', starttime: '12:08pm', endtime: '1:10pm', reason: 'Holiday' }, { date: 'Nov 3 2022', starttime: '12:08pm', endtime: '1:10pm', reason: 'Holiday' },
    { date: 'Nov 3 2022', starttime: '12:08pm', endtime: '1:10pm', reason: 'Holiday' }, { date: 'Nov 3 2022', starttime: '12:08pm', endtime: '1:10pm', reason: 'Holiday' },
    { date: 'Nov 3 2022', starttime: '12:08pm', endtime: '1:10pm', reason: 'Holiday' }, { date: 'Nov 3 2022', starttime: '12:08pm', endtime: '1:10pm', reason: 'Holiday' },
    { date: 'Nov 3 2022', starttime: '12:08pm', endtime: '1:10pm', reason: 'Holiday' }, { date: 'Nov 3 2022', starttime: '12:08pm', endtime: '1:10pm', reason: 'Holiday' },
    { date: 'Nov 3 2022', starttime: '12:08pm', endtime: '1:10pm', reason: 'Holiday' }, { date: 'Nov 3 2022', starttime: '12:08pm', endtime: '1:10pm', reason: 'Holiday' },


  ]

  const handleDelete = () => {

  };

  const [notavailable, setNotAvailable] = useState(false)
  const [isAv, setIsAv] = useState(false)

  const validate = (fieldValues = values) => {
    let temp = { ...errors }


    if (fieldValues == values)
      return Object.values(temp).every(x => x == "")
  }
  let initialFValues = {
    id: 0,
    starttime: '',
    endtime: '',
    ScheduleDate: '',
    reason: '',
    userno: '1',
  }
  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm
  } = useForm(initialFValues, validate);
  const [starttime, setStarttime] = useState('')
  const [endtime, setEndtime] = useState('')
  const handleChange = (event) => {
    console.log(event.target.value);
    setSelectAvailability(event.target.value);
    setStarttime('')
    setEndtime('')
  };
  useEffect(() => {

    setValues(initialFValues)
    values.userno = selectAvailability

    console.log(selectAvailability);

  }, [selectAvailability, trigger])
  console.log(values)

  useEffect(() => {
    setValues({ ...values, ['starttime']: starttime })
  }, [starttime])
  useEffect(() => {
    setValues({ ...values, ['endtime']: endtime })
  }, [endtime])
  //  console.log(values)
  const handleSubmit = e => {
    e.preventDefault()
    // if (validate()) {
    console.log(values)
    setValues(initialFValues)
    setStarttime('')
    setEndtime('')
    // addOrEdit(values, resetForm);
    // }
  }


  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small"></InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={selectAvailability}
          onChange={handleChange}
        >

          <MenuItem value={1}>Clinic</MenuItem>
          <MenuItem value={2}>Dr. Rakesh</MenuItem>
          <MenuItem value={3}>Dr. snehal</MenuItem>
        </Select>
      </FormControl>
      {
        selectAvailability == 1 ? <AvailabilityDoctorForm userno={1} available={available} /> : null

      }
      {
        selectAvailability == 2 ? <AvailabilityDoctorForm userno={2} available={available} /> : null
      }
      {
        selectAvailability == 3 ? <AvailabilityDoctorForm userno={3} available={available} /> : null

      }

    </>
  )
}

export default Availability


// import { Divider, Grid, Switch, Typography } from '@mui/material'
// import React from 'react'
// import { useState } from 'react'
// import MainCard from 'ui-component/cards/MainCard'
// import AvailableTable from './AvailableTable'
// import { Paper } from '@mui/material'
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import AvailableForm from './AvailableForm'
// import { Button } from '@mui/material'
// import {
//   Table,
//   TableBody,
//   TableContainer,
//   TableRow,
//   TableCell,
//   TableHead

// } from '@mui/material';
// const Availability = () => {
//   const [sundayrows, setSundayrows] = React.useState([{}])
//   const [mondayrows, setMondayrows] = React.useState([{}])
//   const [tuesdayrows, setTuesdayrows] = React.useState([{}])
//   const [wednesdayrows, setWednesdayrows] = React.useState([{}])
//   const [thursdayrows, setThursdayrows] = React.useState([{}])
//   const [fridayrows, setFridayrows] = React.useState([{}])
//   const [saturdayrows, setSaturdayrows] = React.useState([{}])

//   // select for perticular dr for override
//   const [selectAvailability, setSelectAvailability] = React.useState(1);

//   //api for unavailale base on use effect of select activity
//   let unavailable = [
//     { date: 'Nov 3 2022', starttime: '12:08pm', endtime: '1:10pm', key: 10 },
//     { date: 'Nov 3 2022', starttime: '12:08pm', endtime: '1:10pm', key: 20 },
//     { date: 'Nov 3 2022', starttime: '12:08pm', endtime: '1:10pm', key: 30 },
//     { date: 'Nov 3 2022', starttime: '12:08pm', endtime: '1:10pm', key: 40 },
//     { date: 'Nov 3 2022', starttime: '12:08pm', endtime: '1:10pm', key: 50 },
//     { date: 'Nov 3 2022', starttime: '12:08pm', endtime: '1:10pm', key: 60 },
//     { date: 'Nov 3 2022', starttime: '12:08pm', endtime: '1:10pm', key: 70 },
//     { date: 'Nov 3 2022', starttime: '12:08pm', endtime: '1:10pm', key: 80 },
//     { date: 'Nov 3 2022', starttime: '12:08pm', endtime: '1:10pm', key: 90 },


//   ]
//   const handleChange = (event) => {
//     setSelectAvailability(event.target.value);
//   };
//   //api for del override 
//   const handleDelete = (key) => {
//     console.log(key);
//   };

//   return (
//     <>
//       <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
//         <InputLabel id="demo-select-small"></InputLabel>
//         <Select
//           labelId="demo-select-small"
//           id="demo-select-small"
//           value={selectAvailability}
//           onChange={handleChange}
//         >

//           <MenuItem value={1}>Clinic</MenuItem>
//           <MenuItem value={2}>Dr. Rakesh</MenuItem>
//           <MenuItem value={3}>Dr. snehal</MenuItem>
//         </Select>
//       </FormControl>
//       <Grid container spacing={2}>

//         <Grid item xs={12} sm={7}>
//           <MainCard title="Schedule Override" sx={{ minHeight: '300px' }}  >
//             <AvailableForm />

//           </MainCard>
//         </Grid>
//         <Grid item xs={12} sm={5}>
//           <MainCard sx={{ height: '300px' }}>

//             <TableContainer sx={{ maxHeight: 280 }} component={Paper} >
//               <Table stickyHeader aria-label="sticky table">

//                 <TableBody>
//                   {
//                     unavailable.map((data, keyid) => (
//                       <TableRow sx={{
//                         '& .css-1uhymze-MuiTableCell-root': {
//                           padding: '10px'
//                         },
//                         '& .css-hhoizy-MuiTypography-root': {
//                           fontSize: '14px'
//                         },
//                         '& .css-102lq7w-MuiTypography-root': {
//                           fontSize: '16px'
//                         },
//                         '& .css-j8cz80-MuiTypography-root': {
//                           color: 'red',
//                           fontSize: '14px'
//                         }
//                         //key = db _id
//                       }} key={data.key}>
//                         <TableCell>
//                           <Typography >{data.date}</Typography>

//                         </TableCell>
//                         <TableCell>

//                           <Typography >{data.starttime} - {data.endtime}</Typography>


//                         </TableCell>

//                         <TableCell>
//                           <Typography color="textSecondary" variant="body2"><Button variant="outlined" onClick={() => handleDelete(keyid)}>delete</Button></Typography>

//                         </TableCell>
//                       </TableRow>))}
//                 </TableBody>

//               </Table>
//             </TableContainer>



//           </MainCard>
//         </Grid>
//       </Grid>
//       <MainCard title="Default Hours" sx={{ marginTop: '10px' }}>
//         <TableContainer component={Paper}>
//           <Table sx={{ minWidth: 640 }} aria-label="simple table">

//             <TableBody>
//               <AvailableTable title="Sunday" rows={sundayrows} />
//               <Divider />
//               <AvailableTable title="Monday" rows={mondayrows} />
//               <Divider />
//               <AvailableTable title="Tuesdat" rows={tuesdayrows} />
//               <Divider />
//               <AvailableTable title="Wednesday" rows={wednesdayrows} />
//               <Divider />
//               <AvailableTable title="Thursday" rows={thursdayrows} />
//               <Divider />
//               <AvailableTable title="Friday" rows={fridayrows} />
//               <Divider />
//               <AvailableTable title="Saturday" rows={saturdayrows} />

//             </TableBody>
//           </Table>
//         </TableContainer>
//       </MainCard>
//     </>
//   )
// }

// export default Availability