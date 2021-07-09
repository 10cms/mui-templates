import React, { ReactElement } from "react"
import styled from "styled-components"
import {
  Root,
  getHeader,
  getDrawerSidebar,
  getContent,
  getSidebarContent,
  getSidebarTrigger,
} from "@mui-treasury/layout"
import { Toolbar, useTheme } from "@material-ui/core"
import LayoutBuilder from "@mui-treasury/layout/builders/LayoutBuilder"
import { RouteComponentProps } from "@reach/router"
import TreeMenu from "../TreeMenu"
import Box from "@material-ui/core/Box"

const Header = getHeader(styled)
const DrawerSidebar = getDrawerSidebar(styled)
const SidebarContent = getSidebarContent(styled)
const SidebarTrigger = getSidebarTrigger(styled)
const Content = getContent(styled)

const schema = LayoutBuilder()

schema.configureHeader((builder) => {
  builder
    .registerConfig("xs", {
      position: "relative",
      initialHeight: 56,
    })
    .registerConfig("md", {
      position: "fixed",
    })
})

schema.configureEdgeSidebar((builder) => {
  builder
    .create("primarySidebar", {
      anchor: "left",
    })
    .registerTemporaryConfig("xs", {
      width: 256,
    })
    .registerPermanentConfig("md", {
      width: 256,
      collapsible: false,
    })
})

type LayoutProps = RouteComponentProps & {
  children: ReactElement
}

const Layout = ({ children }: LayoutProps): ReactElement => {
  const theme = useTheme()

  return (
    <Root theme={theme} scheme={schema}>
      <Header>
        <Toolbar>
          <SidebarTrigger sidebarId={'primarySidebar'} />
          <Box textAlign="center" flexGrow={1}>
            <h1>Material UI Templates</h1>
          </Box>
        </Toolbar>
      </Header>
      <DrawerSidebar sidebarId={"primarySidebar"}>
        <SidebarContent>
          <TreeMenu />
        </SidebarContent>
      </DrawerSidebar>
      <Content>{children}</Content>
    </Root>
  )
}
export default Layout
