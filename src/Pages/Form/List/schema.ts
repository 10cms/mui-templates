// https://data-driven-forms.org/provided-mappers/field-array?mapper=mui

export default {
  fields: [
    {
      component: "field-array",
      name: "categories",
      label: "大分类",
      defaultItem: {
        name: "分类名称",
        items: [
          {
            content: "项目内容"
          }
        ],
      },
      validate: [
        {
          type: "min-items",
          threshold: 1,
        },
      ],
      noItemsMessage: "请添加分类",
      buttonLabels: {
        add: "添加分类",
        remove: "删除分类",
      },
      fields: [
        {
          component: "text-field",
          label: "分类名称",
          name: "name"
        },
        {
          component: "field-array",
          name: "items",
          label: "项目",
          noItemsMessage: "请添加项目",
          FieldContainerProps: {
            container: true,
            style: {
              paddingLeft: "5%",
              paddingRight: "5%",
            }
          },
          defaultItem: {
            content: "项目内容"
          },
          validate: [
            {
              type: "min-items",
              threshold: 1,
            },
          ],
          fields: [
            {
              component: "textarea",
              label: "Item",
              name: "content"
            },
          ],
          buttonLabels: {
            add: "添加项目",
            remove: "删除项目",
          }
        },
      ],
    },
  ],
}
