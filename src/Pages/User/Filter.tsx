import * as React from 'react';
import FormRenderer from "@data-driven-forms/react-form-renderer/form-renderer"
import FormTemplate from "@data-driven-forms/mui-component-mapper/form-template"
import ComponentMapper from "@data-driven-forms/mui-component-mapper/component-mapper"
import { ReactElement } from 'react';

type FilterValue = {
  [name:string]: string
}

const schema = {
  fields: [
    {
      name: "name",
      label: "姓名",
      component: 'text-field',
      FormFieldGridProps: {
        xs: 6,
        sm: 4,
        md: 3,
        lg: 2,
        xl: 1,
      }
    },
  ],
}

const Filter = (): ReactElement => {
  const submitHandler = (value: FilterValue) => {
    console.log(value)
  }

  return (
    <FormRenderer
      schema={schema}
      onSubmit={submitHandler}
      FormTemplate={(props) => <FormTemplate submitLabel="搜索" canReset resetLabel="重置" buttonOrder={[ 'reset', 'submit', 'cancel' ]} {...props} />}
      componentMapper={ComponentMapper}
    />
  )
}

export default Filter