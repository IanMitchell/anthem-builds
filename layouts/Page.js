import React from 'react';
import { Pane } from 'evergreen-ui';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
      <Footer />
    </Pane>
  </React.Fragment>
);
