import * as React from 'react';
import { RouteComponentProps } from '@reach/router';
import Container from '@material-ui/core/Container';
import Filter from './Filter';
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';
import Table from './Table';

const User = (_: RouteComponentProps): React.ReactElement => {
  return <>
    <Container>
      <h1>用户管理</h1>
      <Filter />
      <Box display="flex" mt={5} mb={5}>
        <Box flexGrow={1} />
        <Box mr={2}>
          <Button variant="contained" color="primary">
            导出评定记录
          </Button>
        </Box>
        <Box>
          <Button variant="contained" color="primary">
            添加评定记录
          </Button>
        </Box>
      </Box>
      <Table />
    </Container>
  </>
}

export default User