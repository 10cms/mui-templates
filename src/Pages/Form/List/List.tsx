import React, { ReactElement } from "react"
import { RouteComponentProps } from "@reach/router"
import FormRenderer from "@data-driven-forms/react-form-renderer/form-renderer"
import FormTemplate from "@data-driven-forms/mui-component-mapper/form-template"
import componentMapper from "@data-driven-forms/mui-component-mapper/component-mapper"
import Container from "@material-ui/core/Container"

import schema from "./schema"

// eslint-disable-next-line
const List = (_: RouteComponentProps): ReactElement => {
  return (
    <Container>
      <h2>动态表单 - 列表字段</h2>
      <FormRenderer
        schema={schema}
        FormTemplate={(props) => <FormTemplate submitLabel="提交保存" {...props} />}
        componentMapper={componentMapper}
        onSubmit={console.log}
      />
    </Container>
  )
}

export default List
