import React, { ReactElement } from "react"
import { Router } from "@reach/router"
import FormList from "./Pages/Form/List/List"
import Layout from "./Components/Layout"
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { ConfirmProvider } from 'material-ui-confirm';
import { zhCN } from '@material-ui/core/locale';
import base from "./base"
import Dashboard from "./Pages/Dashboard";

const theme = createMuiTheme({
}, zhCN);

console.log(base("dashboard"))

const App = (): ReactElement => {
  return (
    <ThemeProvider theme={theme}>
      <ConfirmProvider>
        <Router>
          <Layout path="/">
            <>
              <Dashboard path={base()} />
              <FormList path={base('form/list')} />
            </>
          </Layout>
        </Router>
      </ConfirmProvider>
    </ThemeProvider>
  )
}

export default App
