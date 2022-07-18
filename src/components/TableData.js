import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'sno', headerName: 'Sr.No' },
    { field: 'author', headerName: 'Author Name' },
    { field: 'datasource', headerName: 'DataSource Name' },
    { field: 'created', headerName: 'Created' },
    { field: 'modified', headerName: 'Modified' },

];

const rows = [
    { id: 1, sno: 1, author: 'Srinivas', datasource: 'Amazon', created: "DD/MM/YYYY", modified: "DD/MM/YYYY" },
    { id: 2, sno: 2, author: 'siva', datasource: 'Amazon', created: "DD/MM/YYYY", modified: "DD/MM/YYYY" },
    { id: 3, sno: 3, author: 'Ram', datasource: 'Amazon', created: "DD/MM/YYYY", modified: "DD/MM/YYYY" },
    { id: 4, sno: 4, author: 'Anvesh', datasource: 'Amazon', created: "DD/MM/YYYY", modified: "DD/MM/YYYY" },
    { id: 5, sno: 5, author: 'Srinivas', datasource: 'Amazon', created: "DD/MM/YYYY", modified: "DD/MM/YYYY" },
    { id: 6, sno: 6, author: 'Harish', datasource: 'Amazon', created: "DD/MM/YYYY", modified: "DD/MM/YYYY" },
    // { id: 7, sno: 7, author: 'Gopi', datasource: 'Amazon', created: "DD/MM/YYYY", modified: "DD/MM/YYYY" },
    // { id: 8, sno: 8, author: 'Srinivasa Rao', datasource: 'Amazon', created: "DD/MM/YYYY", modified: "DD/MM/YYYY" },
];

export default function DataTable() {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[8]}
                checkboxSelection
            />
        </div>
    );
}
