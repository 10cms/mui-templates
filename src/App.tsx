import React, { ReactElement } from "react"
import { Redirect, Router } from "@reach/router"
import Dashboard from "./Pages/Dashboard"
import Layout from "./Components/Layout"
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { ConfirmProvider } from 'material-ui-confirm';
import { zhCN } from '@material-ui/core/locale';

const theme = createMuiTheme({
}, zhCN);

const App = (): ReactElement => {
  return (
    <ThemeProvider theme={theme}>
      <ConfirmProvider>
        <Router>
          <Redirect from="/" to="/dashboard" noThrow={true}/>
          <Layout path="/">
            <Dashboard path="/dashboard" />
          </Layout>
        </Router>
      </ConfirmProvider>
    </ThemeProvider>
  )
}

export default App
