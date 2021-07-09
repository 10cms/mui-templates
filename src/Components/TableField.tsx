import * as React from 'react';
import useFieldApi, { UseFieldApiConfig } from '@data-driven-forms/react-form-renderer/use-field-api';
import { DataGrid, GridColumns, GridRowsProp, GridEditCellPropsParams } from '@material-ui/data-grid';
import ComponentMapper from "@data-driven-forms/mui-component-mapper/component-mapper"

type TableFieldType = UseFieldApiConfig & {
  columns: GridColumns
}

const TableField = (props: TableFieldType): React.ReactElement => {
  const { input, columns } = useFieldApi<GridRowsProp>(props)

  const onEditCellChangeCommitted = ({field, id, props}: GridEditCellPropsParams) => {
    const value = [...input.value]
    value.forEach(row => {
      if (row.id === id) {
        row[field] = props.value
      }
    })

    input.onChange(value)
  }
  
  console.log("input.value", input)

  return (
    <div style={{ minHeight: 200, width: '100%' }}>
      <DataGrid
        rows={input.value || []}
        columns={columns}
        disableSelectionOnClick
        onEditCellChangeCommitted={onEditCellChangeCommitted}
      />
    </div>
  )
}

ComponentMapper['table'] = TableField

export default TableField