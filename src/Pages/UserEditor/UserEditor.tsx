import * as React from "react"
import Container from "@material-ui/core/Container"
import { RouteComponentProps } from "@reach/router"
import FormRenderer from "@data-driven-forms/react-form-renderer/form-renderer"
import FormTemplate from "@data-driven-forms/mui-component-mapper/form-template"
import ComponentMapper from "@data-driven-forms/mui-component-mapper/component-mapper"
import schema from "./Schema"
import "../../Components/TableField"

type FilterValue = {
  // eslint-disable-next-line
  [name: string]: any
}

const UserEditor = (_: RouteComponentProps): React.ReactElement => {
  const submitHandler = (value: FilterValue) => {
    console.log(value)
  }

  const value: FilterValue = {
    name: "张三",
    learning: [
      {
        id: 1,
        name: "英语",
        monday: "自习",
        tuesday: "自习",
        wednesday: "自习",
        thursday: "自习",
        friday: "自习",
        saturday: "自习",
        sunday: "自习",
      }
    ],
    happy: [
      {
        id: 1,
        name: "运动",
        monday: "散步",
        tuesday: "散步",
        wednesday: "跑步",
        thursday: "散步",
        friday: "跑步",
        saturday: "散步",
        sunday: "游泳",
      }
    ]
  }

  return (
    <Container>
      <h1>编辑用户</h1>
      <FormRenderer
        schema={schema}
        onSubmit={submitHandler}
        initialValues={value}
        FormTemplate={(props) => (
          <FormTemplate
            submitLabel="搜索"
            canReset
            resetLabel="重置"
            buttonOrder={["reset", "submit", "cancel"]}
            {...props}
          />
        )}
        componentMapper={ComponentMapper}
      />
    </Container>
  )
}

export default UserEditor
