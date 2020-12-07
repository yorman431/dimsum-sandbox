import { v4 as uuidv4 } from "uuid"

const getDefaults = (name) => ({
  id: uuidv4(),
  name,
  type: "ticket",
  children: [],
})

export default [
  {
    ...getDefaults("DataGrid"),
    type: 'group',
    children: [
      {
        ...getDefaults("Overview"),
        path: "DataGrid/Overview",
      },
      {
        ...getDefaults("PUI-2089"),
        path: "DataGrid/PUI-2089",
      },
      {
        ...getDefaults("PUI-2090"),
        path: "DataGrid/PUI-2090",
      },
      {
        ...getDefaults("PUI-2098"),
        path: "DataGrid/PUI-2098",
      },
      {
        ...getDefaults("PUI-2512"),
        path: "DataGrid/PUI-2512",
      },
      {
        ...getDefaults("PUI-2604"),
        path: "DataGrid/PUI-2604",
      },
      {
        ...getDefaults("ToolbarIssues"),
        path: "DataGrid/ToolbarIssues",
      }
    ]
  },
  {
    ...getDefaults("FormItemLayout"),
    type: 'group',
    children: [
      {
        ...getDefaults("LargeInputText"),
        path: "FormItemLayout/LargeInputText",
      },
    ]
  },
  {
    ...getDefaults("TooltipTextProvider"),
    type: 'group',
    children: [
      {
        ...getDefaults("PUI-2468"),
        path: "TooltipTextProvider/PUI-2468",
      },
    ]
  },
  {
    ...getDefaults("TreeView"),
    type: 'group',
    children: [
      {
        ...getDefaults("Overview"),
        path: "TreeView/Overview",
      },
      {
        ...getDefaults("PUI-2579"),
        path: "TreeView/PUI-2579",
      },
      {
        ...getDefaults("PUI-2690-B"),
        path: "TreeView/PUI-2690-B",
      },
      {
        ...getDefaults("PUI-2690"),
        path: "TreeView/PUI-2690",
      }
    ]
  },
  {
    ...getDefaults("ZipCodeSearch"),
    type: 'group',
    children: [
      {
        ...getDefaults("PUI-5265"),
        path: "ZipCodeSearch/PUI-5265",
      }
    ]
  }
];
