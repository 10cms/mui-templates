import * as React from 'react';
import { ReactElement } from 'react';
import { RouteComponentProps } from '@reach/router';
import Container from '@material-ui/core/Container';

// eslint-disable-next-line
const Dashboard = (_: RouteComponentProps): ReactElement => {
  return (
    <Container>
      <h2>
        Dashboard
      </h2>
    </Container>
  )
}

export default Dashboard