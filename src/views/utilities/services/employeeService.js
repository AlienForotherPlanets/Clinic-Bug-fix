// import { useEffect, useState } from "react"
const KEYS = {
    appointmzzzzzzents: 'appointments',
    appointmentId: 'appointmentId',
    employees: 'employees',
    employeeId: 'employeeId'
}

export const getDoctorCollection = () => ([
    { id: '1', title: 'Dr. Rakesh' },
    { id: '2', title: 'Dr. Akshay' },
    { id: '3', title: 'Dr. Snehal' },
    { id: '4', title: 'Dr. Pooja' },
])

export const meridiem = () => ([
    { id: '1', title: 'AM' },
    { id: '2', title: 'PM' },

])

export const getTimeCollection = () => ([
    { id: '10', title: '11:15 am' },
    { id: '11', title: '11:30 am' },
    { id: '12', title: '11:45 am' },
    { id: '13', title: '12:00 pm' },
    { id: '14', title: '12:15 pm' },
    { id: '15', title: '12:30 pm' },
    { id: '16', title: '12:45 pm' },
    { id: '17', title: '1:00 pm' },
    { id: '18', title: '1:15 pm' },
    { id: '19', title: '1:30 pm' },
    { id: '20', title: '1:45 pm' },
    { id: '21', title: '2:00 pm' },
    { id: '22', title: '2:15 pm' },

])

export const getampm = () => ([
    { id: '1', title: 'am' },
    { id: '2', title: 'pm' }
])
export const getServiceCollection = () => ([
    { id: '1', title: 'Service 1', price: '₹ 500' },
    { id: '2', title: 'Service 2', price: '₹ 400' },
    { id: '3', title: 'Service 3', price: '₹ 750' },
    { id: '4', title: 'Service 4', price: '₹ 800' },
])
export const getDepartmentCollection = () => ([
    { id: '1', title: 'Development' },
    { id: '2', title: 'Marketing' },
    { id: '3', title: 'Accounting' },
    { id: '4', title: 'HR' },
])
export function insertEmployee(data) {
    let employees = getAllEmployees();
    data['id'] = generateEmployeeId()
    employees.push(data)
    localStorage.setItem(KEYS.employees, JSON.stringify(employees))
}

export function updateEmployee(data) {
    let employees = getAllEmployees();
    let recordIndex = employees.findIndex(x => x.id == data.id);
    employees[recordIndex] = { ...data }
    localStorage.setItem(KEYS.employees, JSON.stringify(employees));
}
export function deleteEmployee(id) {
    let employees = getAllEmployees();
    employees = employees.filter(x => x.id != id)
    localStorage.setItem(KEYS.employees, JSON.stringify(employees));
}

export function generateEmployeeId() {
    console.log(localStorage.getItem(KEYS.employeeId))
    if (localStorage.getItem(KEYS.employeeId) == null) {
        localStorage.setItem(KEYS.employeeId, '0')
    }
    var id = parseInt(localStorage.getItem(KEYS.employeeId))
    localStorage.setItem(KEYS.employeeId, (++id).toString())
    return id;
}

export function getAllEmployees() {
    if (localStorage.getItem(KEYS.employees) == null)
        localStorage.setItem(KEYS.employees, JSON.stringify([]))
    let employees = JSON.parse(localStorage.getItem(KEYS.employees));
    //map departmentID to department title
    let departments = getDepartmentCollection();
    return employees.map(x => ({
        ...x,
    }))
}