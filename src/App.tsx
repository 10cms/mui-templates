import React, { ReactElement } from "react"
import { Redirect, Router } from "@reach/router"
import FormList from "./Pages/Form/List/List"
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
          <Redirect from="/" to="/form/list" noThrow={true}/>
          <Layout path="/">
            <FormList path="/form/list" />
          </Layout>
        </Router>
      </ConfirmProvider>
    </ThemeProvider>
  )
}

export default App
