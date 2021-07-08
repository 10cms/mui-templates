import React from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
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

const useStyles = makeStyles((theme: Theme) =>
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
    } else if (url) {
      navigate(url)
    }
  }

  return (
    <>
      <ListItem
        button
        onClick={handleClick}
        selected={url === loaction.pathname}
      >
        <ListItemIcon><Icon>{icon}</Icon></ListItemIcon>
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
  const Subheader: any = title
    ? () => <ListSubheader component="div">{title}</ListSubheader>
    : undefined

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
      { title: "管理中心", url: "/dashboard", icon: "home" },
    ],
  },
]

export default function TreeMenu() {
  return (
    <>
      {navs.map((menu: MenuProps, key) => (
        <Menu {...menu} key={key} />
      ))}
    </>
  )
}
