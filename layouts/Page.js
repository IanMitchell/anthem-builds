import React from 'react';
import { Pane } from 'evergreen-ui';
import Header from '../components/Header';

export default ({ children }) => (
  <React.Fragment>
    <Header />
    <Pane
      display="flex"
      alignItems="center"
      flexDirection="column"
      maxWidth={980}
      margin="auto"
      as="main"
    >
      {children}
    </Pane>
  </React.Fragment>
);
