import React, { useEffect, useState, useRef, component } from "react"
import MainCard from 'ui-component/cards/MainCard'
import SearchSection from './SearchSection';
import { Table, TableCell, TableBody, TableContainer, TableHead, TablePagination, TableRow, TableSortLabel } from '@mui/material'
import Paper from '@mui/material/Paper';
import { Button } from "@mui/material";
import { useNavigate } from 'react-router';
import ReactToPrint from "react-to-print";

const headCells = [
    { id: 'PatientName', label: 'Name', minWidth: 170, },
    { id: 'ContactNumber', label: 'Mobile No.', minWidth: 170, },
    { id: 'Email1', label: 'Email 1', minWidth: 170, },
    { id: 'Gender', label: 'Gender', minWidth: 80, },
    { id: 'Action', label: 'Action', minWidth: 170, },
    { id: 'Address', label: 'Address', minWidth: 120, },
    { id: 'State', label: 'State', minWidth: 120, },
    { id: 'Nationality', label: 'Nationality', minWidth: 80, },
    { id: 'Age', label: 'Age', minWidth: 50, },
    { id: 'DOB', label: 'DOB', minWidth: 110, },
    { id: 'Email2', label: 'Email 2', minWidth: 170, },
    { id: 'ReferredBy', label: 'Referred by', minWidth: 170, },



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

// const Patient = () => {
const Patient = React.forwardRef((props, ref) => {

    const [users, setUsers] = useState([])
    let i = 1;
    const history = useNavigate();

    const clickMe = (data) => {
        history("/module/module-scheduleAppointment/#redirected", {
            state:
                data
        });
        // console.log(data);
    }
    const fetchData = () => {
        fetch("http://65.1.110.101:3036/Patient/FindAllPatient")
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
                        || x.ContactNumber?.toString().includes(target.value)
                        || x.AppoitmentDate?.toString().includes(target.value)
                        || x.DOB?.toString().includes(target.value)
                        || x.CaseNumber?.toString().includes(target.value?.toString())
                        || x.Email1?.toLowerCase().includes(target.value?.toLowerCase())
                        || x.Email2?.toLowerCase().includes(target.value?.toLowerCase())
                        || x.ReferredBy?.toLowerCase().includes(target.value?.toLowerCase())

                    )
            }
        })
    }
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [order, setOrder] = useState()
    const [orderBy, setOrderBy] = useState()





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
    if (getCookie("validate")) {
        return (
            <>
                {users && <MainCard title="Appointments" secondary={<SearchSection onChange={handleSearch} />}>

                    <Paper sx={{ width: '100%' }}>

                        <TableContainer sx={{ maxHeight: 3000 }} >
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
                                                console.log(item),
                                                <TableRow hover role="checkbox" tabIndex={-1} key={item._id}>
                                                    {/* <TableCell align='center' >{item._id}</TableCell> */}
                                                    <TableCell align='center'>{item.PatientName}</TableCell>
                                                    <TableCell align='center'>{item.ContactNumber}</TableCell>
                                                    <TableCell align='center'>{item.Email1}</TableCell>
                                                    <TableCell align='center'>{item.Gender}</TableCell>
                                                    <TableCell align='center'><Button onClick={() => clickMe(item)}>Appoinemnt/Edit</Button></TableCell>
                                                    <TableCell align='center'>{(!item.Flate ? "" : item.Flate + ",") + (!item.Street ? "" : item.Street + ",") + (!item.Village ? "" : item.Village + ",") + " " + item.City}</TableCell>
                                                    <TableCell align='center'>{item.State}</TableCell>
                                                    <TableCell align='center'>{item.Nationality}</TableCell>
                                                    <TableCell align='center'>{item.Age}</TableCell>
                                                    <TableCell align='center'>{item.DOB}</TableCell>
                                                    <TableCell align='center'>{item.Email2}</TableCell>
                                                    <TableCell align='center'>{item.ReferredBy}</TableCell>
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
                    {/* <Button variant="outlined" onClick={() => { console.log("printing"); window.print(); }}>Print</Button> */}
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
    } else {
        return (<h1>Hello error</h1>)
        // return (window.location.href = "/Login")
    }
})

export default Patient