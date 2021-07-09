import * as React from 'react';
import { DataGrid, GridCellParams, GridColDef } from '@material-ui/data-grid';
import { ReactNode } from 'react';
import Button from '@material-ui/core/Button';

const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: '姓名',
    width: 150,
    editable: true,
  },
  {
    field: 'sex',
    headerName: '性别',
    width: 150,
    editable: false,
  },
  {
    field: 'age',
    headerName: '年龄',
    type: 'number',
    width: 150,
    editable: true,
  },
  {
    field: 'created_at',
    headerName: '创建时间',
    type: 'dateTime',
    width: 150,
    editable: true,
  },
  {
    field: 'action',
    headerName: '操作',
    width: 160,
    renderCell: (_: GridCellParams): ReactNode => {
      return <Button>编辑</Button>
    }
  },
];

const rows = [
  { id: 1, name: 'Snow', sex:"男", created_at: '2021-10-10', age: 35 },
  { id: 2, name: 'Lannister', sex:"男", created_at: '2021-10-10', age: 42 },
  { id: 3, name: 'Lannister', sex:"男", created_at: '2021-10-10', age: 45 },
  { id: 4, name: 'Stark', sex:"男", created_at: '2021-10-10', age: 16 },
  { id: 5, name: 'Targaryen', sex:"男", created_at: '2021-10-10', age: 32 },
  { id: 6, name: 'Melisandre', sex:"男", created_at: '20021-10-10', age: 50 },
  { id: 7, name: 'Clifford', sex:"男", created_at: '2021-10-10', age: 44 },
  { id: 8, name: 'Frances', sex:"男", created_at: '2021-10-10', age: 36 },
  { id: 9, name: 'Roxie', sex:"男", created_at: '2021-10-10', age: 65 },
];

export default function DataGridDemo() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
