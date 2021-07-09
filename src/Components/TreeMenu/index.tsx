import React from "react"
import { createStyles, makeStyles } from "@material-ui/core/styles"
import { navigate, useLocation } from "@reach/router"
import ListSubheader from "@material-ui/core/ListSubheader"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import Collapse from "@material-ui/core/Collapse"
import ExpandLess from "@material-ui/icons/ExpandLess"
import ExpandMore from "@material-ui/icons/ExpandMore"
import Icon from "@material-ui/core/Icon"
import { ReactElement } from "react"
import base from "../../base"

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 360,
    },
  })
)

type MenuProps = {
  title?: string
  items: Array<MenuItemProps>
}

type MenuItemProps = {
  title: string
  icon?: string
  url?: string
  children?: Array<MenuItemProps>
}

type TreeMenuData = Array<MenuProps>

const MenuItem = ({ title, url, children, icon }: MenuItemProps) => {
  const [open, setOpen] = React.useState(true)
  const loaction = useLocation()

  const handleClick = () => {
    if (children) {
      setOpen(!open)
    } else if (url !== undefined) {
      navigate(base(url))
    }
  }

  return (
    <>
      <ListItem
        button
        onClick={handleClick}
        selected={url === loaction.pathname}
      >
        <ListItemIcon>
          <Icon>{icon}</Icon>
        </ListItemIcon>
        <ListItemText primary={title} />
        {children && (open ? <ExpandLess /> : <ExpandMore />)}
      </ListItem>
      {children && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          {<Menu items={children} />}
        </Collapse>
      )}
    </>
  )
}

const Menu = ({ title, items }: MenuProps) => {
  const classes = useStyles()
  const Subheader: ReactElement | undefined = title ? (
    <ListSubheader component="div">{title}</ListSubheader>
  ) : undefined

  return (
    <List component="nav" subheader={Subheader} className={classes.root}>
      <>
        {items.map((item: MenuItemProps, key) => (
          <MenuItem {...item} key={key} />
        ))}
      </>
    </List>
  )
}

const navs: TreeMenuData = [
  {
    items: [
      {
        title: "Dashboard",
        icon: "home",
        url: "",
      },
      {
        title: "用户管理",
        icon: "person",
        url: "user",
      },
      {
        title: "动态表单",
        icon: "listalt",
        children: [{ title: "列表字段", url: "form/list" }],
      },
    ],
  },
]

export default function TreeMenu(): ReactElement {
  return (
    <>
      {navs.map((menu: MenuProps, key) => (
        <Menu {...menu} key={key} />
      ))}
    </>
  )
}
