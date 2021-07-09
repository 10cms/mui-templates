
const schema = {
  fields: [
    {
      name: "name",
      label: "姓名",
      component: 'text-field',
      FormFieldGridProps: {
        xs: 4
      }
    },
    {
      name: "sex",
      label: "性别",
      component: 'text-field',
      FormFieldGridProps: {
        xs: 4
      }
    },
    {
      name: "age",
      label: "年龄",
      component: 'text-field',
      FormFieldGridProps: {
        xs: 4
      }
    },
    {
      "component": "sub-form",
      "description": "详细资料",
      "name": "detail",
      "fields": [
        {
          "name": "jobs",
          "label": "工作经验",
          "component": "textarea"
        },
        {
          "name": "edu",
          "label": "学习经验",
          "component": "textarea"
        },
        {
          "name": "intresting",
          "label": "兴趣爱好",
          "component": "textarea"
        }
      ]
    },
    {
      "component": "sub-form",
      "description": "日程安排",
      "name": "schedule",
      "fields": [
        {
          "name": "learning",
          "component": "table",
          "columns": [
            { headerName: "学习安排", field: "name", width: 200, editable: false },
            { headerName: "周一", field: "monday", width: 150 , editable: true },
            { headerName: "周二", field: "tuesday", width: 150 , editable: true },
            { headerName: "周三", field: "wednesday", width: 150 , editable: true },
            { headerName: "周四", field: "thursday", width: 150 , editable: true },
            { headerName: "周五", field: "friday", width: 150 , editable: true },
            { headerName: "周六", field: "saturday", width: 150 , editable: true },
            { headerName: "周七", field: "sunday", width: 150 , editable: true },
          ]
        },
        {
          "name": "happy",
          "component": "table",
          "columns": [
            { headerName: "娱乐安排", field: "name", width: 200, editable: false },
            { headerName: "周一", field: "monday", width: 150 , editable: true },
            { headerName: "周二", field: "tuesday", width: 150 , editable: true },
            { headerName: "周三", field: "wednesday", width: 150 , editable: true },
            { headerName: "周四", field: "thursday", width: 150 , editable: true },
            { headerName: "周五", field: "friday", width: 150 , editable: true },
            { headerName: "周六", field: "saturday", width: 150 , editable: true },
            { headerName: "周七", field: "sunday", width: 150 , editable: true },
          ]
        }
      ]
    }
  ],
}

export default schema