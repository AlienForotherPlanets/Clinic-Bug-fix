import React, { useEffect, useState, useRef } from "react"
import MainCard from 'ui-component/cards/MainCard'
import { TableBody } from '@mui/material';
import * as employeeService from "./services/employeeService";
import Paper from '@mui/material/Paper';
import Controls from './controls/Controls';
import SearchSection from './SearchSection';
import { Table, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableSortLabel } from '@mui/material'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid } from '@mui/material';
import { useForm, Form } from './useForm';
import Select from './controls/Select';
import FormHelperText from '@mui/material/FormHelperText';
import ReactToPrint from "react-to-print";

const headCells = [
    { id: 'sr', label: 'Sr No.', minWidth: 40, disableSorting: true },
    { id: 'CaseNumber', label: 'Case No.', minWidth: 120, },
    { id: 'PatientName', label: 'Full Name', minWidth: 170, },
    { id: 'PatientMobileNumber', label: 'Mobile No.', minWidth: 70, },
    { id: 'Service', label: 'Service', minWidth: 120, },
    { id: 'doctor', label: 'Doctor Name', minWidth: 170, disableSorting: true },
    { id: 'AppoitmentDate', label: 'Date', minWidth: 120, },
    { id: 'time', label: 'Time', minWidth: 70, disableSorting: true },
    { id: 'action', label: 'Action', minWidth: 70, disableSorting: true },

]

const ViewAppointment = () => {
    const items = [
        "12:00am", "12:00am", "12:00am", "12:15pm", "12:15pm", "12:15pm"
    ];
    let item = []
    let prev = items[0]
    console.log(prev)
    for (let i = 1; i < items.length; i++) {

        if (prev === items[i + 1]) {
            item.push(prev)
        } else {
            i++
        }
        prev = items[i]
    }
    console.log(item)
    const itemData = [
        "8:00am", "8:15am", "8:30am", "8:45am",
        "9:00am", "9:15am", "9:30am", "9:45am",
        "10:00am", "10:15am", "10:30am", "10:45am",
        "11:00am", "11:15am", "11:30am", "11:45am",
        "12:00pm", "12:15pm", "12:30pm", "12:45pm",
        "1:00pm", "1:15pm", "1:30pm", "1:45pm",
        "2:00pm", "2:15pm", "2:30pm", "2:45pm",
        "3:00pm", "3:15pm", "3:30pm", "3:45pm",
        "4:00pm", "4:15pm", "4:30pm", "4:45pm",
        "5:00pm", "5:15pm", "5:30pm", "5:45pm",
        "6:00pm", "6:15pm", "6:30pm", "6:45pm",




    ];
    const [open, setOpen] = React.useState(false);
    const [clickaway, setClickaway] = React.useState(false);

    const handleClickOpen = (item) => {
        setOpen(true);
        setValues({ ...item, ['time']: item.Timehour + ":" + item.TimeMin + (item.Timeampm == 1 ? "am" : "pm") });
    };
    const handleClick = () => {
        setOpen((prev) => !prev);
    };
    let handleSubmit = async (e) => {
        console.log(values);
        setValues(initialFormValues)
    }
    const handleClose = () => {
        setOpen(false);
    };
    const handleClickAway = () => {
        setClickaway(false);
    };
    const drName = [
        { id: '1', title: 'Dr. Rakesh' },
        { id: '2', title: 'Dr. Akshay' },
        { id: '3', title: 'Dr. Snehal' },
        { id: '4', title: 'Dr. Pooja' },
    ];
    const [users, setUsers] = useState([])
    let i = 1;
    const fetchData = () => {
        fetch("http://65.1.110.101:3036/Appointment/FindAllAppointment")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setUsers(data)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])
    const [records, setRecords] = useState()

    useEffect(() => {
        setRecords(users)
    }, [users])
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    const [total, setTotal] = useState(0)
    const handleSearch = e => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value == "")
                    return items;
                else
                    return items.filter(x => x.PatientName?.toLowerCase().includes(target.value?.toLowerCase())
                        || x.PatientMobileNumber?.toString().includes(target.value)
                        || x.Service?.toLowerCase().includes(target.value?.toLowerCase())
                        || x.AppoitmentDate?.toString().includes(target.value)
                        || x.CaseNumber?.toString().includes(target.value?.toString())

                    )
            }
        })
    }
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [order, setOrder] = useState()
    const [orderBy, setOrderBy] = useState()
    const [time, setTime] = React.useState("select time");

    const initialFormValues = {
        _id: '',
        CaseNumber: '',
        AppoitmentDate: '',
        PatientName: '',
        Service: '',
        DoctorName: '',
        time: '',
        PatientMobileNumber: ''
    }
    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFormValues, false);



    const handleSortRequest = cellId => {
        const isAsc = orderBy === cellId && order === "asc";
        setOrder(isAsc ? 'desc' : 'asc');

        setOrderBy(cellId)
    }
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    function stableSort(array, comparator) {
        const stabilizedThis = array.map((el, index) => [el, index]);
        stabilizedThis.sort((a, b) => {
            const order = comparator(a[0], b[0]);

            if (order !== 0) return order;
            return a[1] - b[1];
        });

        return stabilizedThis.map((el) => el[0]);
    }

    function getComparator(order, orderBy) {

        return order === 'desc'
            ? (a, b) => descendingComparator(a, b, orderBy)
            : (a, b) => -descendingComparator(a, b, orderBy);

    }

    function descendingComparator(a, b, orderBy) {

        if (b[orderBy] < a[orderBy]) {
            return -1;
        }
        if (b[orderBy] > a[orderBy]) {
            return 1;
        }
        return 0;
    }
    const recordsAfterPagingAndSorting = () => {
        if (users)
            return stableSort(filterFn.fn(users), getComparator(order, orderBy)).slice(page * rowsPerPage, (page + 1) * rowsPerPage)
    }
    let componentRef = useRef()
    return (
        <>
            {users && <MainCard title="Appointments" secondary={<SearchSection onChange={handleSearch} />}>
                <Paper sx={{ width: '100%' }}>
                    <TableContainer sx={{ maxHeight: 600 }}>
                        <div ref={el => (componentRef = el)}>
                            <Table stickyHeader aria-label="sticky table" sx={{
                                '& thead th': { backgroundColor: "#ece6f5", fontWeight: "600" }, '& tbody td': {
                                    fontWeight: '300',
                                },
                                '& tbody tr:hover': {
                                    backgroundColor: '#e3f2fd',
                                    cursor: 'pointer',
                                },
                            }}>
                                <TableHead>
                                    <TableRow>
                                        {
                                            headCells.map(headCell => (
                                                <TableCell key={headCell.id} sortDirection={orderBy === headCell.id ? order : false} align='center' style={{ minWidth: headCell.minWidth }}>
                                                    {headCell.disableSorting ? headCell.label :
                                                        <TableSortLabel
                                                            active={orderBy === headCell.id}
                                                            direction={orderBy === headCell.id ? order : 'asc'}
                                                            onClick={() => { handleSortRequest(headCell.id) }}>
                                                            {headCell.label.toUpperCase()}
                                                        </TableSortLabel>
                                                    }</TableCell>
                                            ))
                                        }
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        recordsAfterPagingAndSorting().map(item => (

                                            <TableRow hover role="checkbox" tabIndex={-1} key={item._id}>
                                                <TableCell align='center' >{i++}</TableCell>
                                                <TableCell align='center'>{item.CaseNumber}</TableCell>
                                                <TableCell align='center'>{item.PatientName}</TableCell>
                                                <TableCell align='center'>{item.PatientMobileNumber}</TableCell>
                                                <TableCell align='center'>{item.Service}</TableCell>
                                                <TableCell align='center'>{drName[item.DoctorName - 1].title}</TableCell>
                                                <TableCell align='center'>{item.AppoitmentDate}</TableCell>
                                                <TableCell align='center'>{item.Timehour + ":" + item.TimeMin + " " + (item.Timeampm == 1 ? "am" : "pm")}</TableCell>
                                                <TableCell align='center'>  <Button onClick={() => handleClickOpen(item)}>Edit </Button> </TableCell>
                                                <Dialog
                                                    open={open}
                                                    onClose={handleClose}
                                                    aria-labelledby="alert-dialog-title"
                                                    aria-describedby="alert-dialog-description"
                                                    sx={{ opacity: '0.4', "& .MuiDialog-paper": { boxShadow: 'none' } }}
                                                >
                                                    <DialogTitle id="alert-dialog-title">
                                                        Edit Appointment
                                                    </DialogTitle>
                                                    <DialogContent>

                                                        <Form onSubmit={handleSubmit}>
                                                            <Grid container spacing={2}>
                                                                <Grid item xs={12} sm={6} sx={{ marginTop: '5px' }}>
                                                                    <Controls.Input
                                                                        name='CaseNumber'
                                                                        label='Case No.'
                                                                        value={values.CaseNumber}
                                                                        onChange={handleInputChange}

                                                                    />
                                                                </Grid>
                                                                <Grid item xs={12} sm={6} sx={{ marginTop: '5px' }}>

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
                                                                        name='PatientMobileNumber'
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
                                                                    <Controls.Input
                                                                        name='time'
                                                                        label='time'
                                                                        value={values.time}
                                                                        onChange={handleInputChange}

                                                                    />
                                                                    <FormHelperText sx={{ color: 'black', fontSize: '12px' }}>example: 11:11am</FormHelperText>




                                                                </Grid>
                                                            </Grid>
                                                        </Form>
                                                    </DialogContent>
                                                    <DialogActions>
                                                        <Button onClick={handleClose} >
                                                            Update
                                                        </Button>
                                                    </DialogActions>
                                                </Dialog>
                                            </TableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                        </div>
                    </TableContainer>

                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={users.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
                <ReactToPrint
                    trigger={() => {
                        return <Button variant="outlined"> Print</Button>
                    }}
                    content={() => componentRef}
                    documentTitle='Snehi Clinic'
                />
            </MainCard>}
        </>
    )

}

export default ViewAppointment