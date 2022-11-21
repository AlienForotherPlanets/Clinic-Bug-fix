import React, { useState, useEffect, useRef } from 'react'
import ServiceForm from "./ServiceForm";
// import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
// import { Paper, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@mui/material';
import { Paper, Table, TableCell, TableBody, TableContainer, TableHead, TablePagination, TableRow, TableSortLabel } from '@mui/material'
import useTable from "./useTable";
import * as employeeService from "./services/employeeService";
import Controls from "./controls/Controls";
import { Search } from "@material-ui/icons";
import AddIcon from '@material-ui/icons/Add';
import Popup from "./controls/Popup";
import { makeStyles } from '@mui/styles';
import ReactToPrint from "react-to-print";
import { Button } from "@mui/material";


const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    searchInput: {
        width: '75%'
    },
    newButton: {
        position: 'absolute',
        right: '10px'
    }
}))


const headCells = [
    { id: 'fullName', label: 'Service Name' },
    { id: 'email', label: 'Service Description' },
    { id: 'mobile', label: 'Service Price' },
    { id: 'department', label: 'Service Duration' },
    { id: 'actions', label: 'Assigned Doctors' }
]
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

export default function Services() {

    const classes = useStyles();
    const [recordForEdit, setRecordForEdit] = useState(null)
    const [records, setRecords] = useState(employeeService.getAllEmployees())
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    const [openPopup, setOpenPopup] = useState(false)

    const {
        TbleContainer,
        TblHead,
        TblPaging,
        recordsAfterPagingAndSorting
    } = useTable(records, headCells, filterFn);

    const handleSearch = e => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value == "")
                    return items;
                else
                    return items.filter(x => x.fullName.toLowerCase().includes(target.value))
            }
        })
    }

    const addOrEdit = (employee, resetForm) => {
        if (employee.id == 0)
            employeeService.insertEmployee(employee)
        else
            employeeService.updateEmployee(employee)
        resetForm()
        setRecordForEdit(null)
        setOpenPopup(false)
        setRecords(employeeService.getAllEmployees())
    }

    const openInPopup = item => {
        setRecordForEdit(item)
        setOpenPopup(true)
    }
    const onDelete = id => {

        employeeService.deleteEmployee(id);
        setRecords(employeeService.getAllEmployees())

    }
    const [users, setUsers] = useState([])
    const fetchData = () => {
        fetch("http://65.1.110.101:3036/Services/FetchAllService")
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
    let componentRef = useRef()

    return (
        users &&
        <>

            <Paper className={classes.pageContent}>

                {/* <Toolbar>
                    <Controls.Input
                        label="Search service"
                        className={classes.searchInput}
                        InputProps={{
                            startAdornment: (<InputAdornment position="start">
                                <Search />
                            </InputAdornment>)
                        }}
                        onChange={handleSearch}
                    />
                    <Controls.Buttons
                        text="Add New"
                        variant="outlined"
                        startIcon={<AddIcon />}
                        className={classes.newButton}
                        onClick={() => { setOpenPopup(true); setRecordForEdit(null); }}
                    />
                </Toolbar> */}
                <div ref={el => (componentRef = el)}>
                    <TbleContainer sx={{ maxHeight: 440 }}>
                        <Table stickyHeader aria-label="sticky table" sx={{
                            '& thead th': { backgroundColor: "#ece6f5", fontWeight: "600" }, '& tbody td': {
                                fontWeight: '300',
                            },
                            '& tbody tr:hover': {
                                backgroundColor: '#e3f2fd',
                                cursor: 'pointer',
                            },
                        }}>
                            <TblHead />
                            <TableBody>
                                {
                                    users.map(item => (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={item._id}>
                                            <TableCell align='center'>{item.ServiceSortName}</TableCell>
                                            <TableCell align='center'>{item.ServiceFullName}</TableCell>
                                            <TableCell align='center'>"---"</TableCell>
                                            <TableCell align='center'>15-30</TableCell>
                                            <TableCell align='center'>all</TableCell>
                                        </TableRow>

                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TbleContainer>
                </div>
                <TblPaging />
                <ReactToPrint
                    trigger={() => {
                        return <Button variant="outlined"> Print</Button>
                    }}
                    content={() => componentRef}
                    documentTitle='Snehi Clinic'
                />
            </Paper>
            <Popup
                title="Employee Form"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <ServiceForm
                    recordForEdit={recordForEdit}
                    addOrEdit={addOrEdit} />
            </Popup>
        </>
    )
}
