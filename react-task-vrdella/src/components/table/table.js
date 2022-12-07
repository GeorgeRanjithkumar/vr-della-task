import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { DataGrid } from '@mui/x-data-grid';
import CreateIcon from '@mui/icons-material/Create';
import Edittable from './Edittable';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'studenname', headerName: 'Student Name', width: 130 },
    { field: 'emailid', headerName: 'Email Id', width: 130 },
    {
        field: 'phno',
        headerName: 'Ph NO',
        type: 'number',
        width: 130,
    },
    {
        field: 'Comments',
        headerName: 'Comments ',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
    },
    { field: 'Status', headerName: 'Status', width: 130 },
];

const rows = [
    { id: 1, emailid: 'test@gmail.com', studenname: 'Jon', phno: 9646538547, Status: "pass", Comments: "HI Testing purpose" },
    { id: 2, emailid: 'test@gmail.com', studenname: 'Cersei', phno: 9646538547, Status: "fail", Comments: "HI Testing purpose" },
    { id: 3, emailid: 'test@gmail.com', studenname: 'Jaime', phno: 9646538547, Status: "fail", Comments: "HI Testimg purpose" },
    { id: 4, emailid: 'test@gmail.com', studenname: 'Arya', phno: 9646538547, Status: "onhold", Comments: "HI Testimg purpose" },
    { id: 5, emailid: 'test@gmail.com', studenname: 'Daenerys', phno: 9646538547, Status: "pass", Comments: "HI Testimg purpose" },
    { id: 6, emailid: 'test@gmail.com', studenname: 'Rihana', phno: 9646538547, Status: "pass", Comments: "HI Testimg purpose" },
    { id: 7, emailid: 'test@gmail.com', studenname: 'Ferrara', phno: 9646538547, Status: "fail", Comments: "HI Testimg purpose" },
    { id: 8, emailid: 'test@gmail.com', studenname: 'Rossini', phno: 9646538547, Status: "pass", Comments: "HI Testimg purpose" },
    { id: 9, emailid: 'test@gmail.com', studenname: 'Harvey', phno: 9646538547, Status: "pass", Comments: "HI Testimg purpose",},
];

export default function DataTable() {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <div style={{marginRight:"86%" }}> <Edittable /></div>
            
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
           

        </div>
    );
}