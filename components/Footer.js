import React from 'react';
import { Pane, Text } from 'evergreen-ui';
import Cash from './icons/Cash';

export default () => (
  <Pane marginTop="auto">
    <Text>Created by Ian Mitchell</Text>
    <Cash width={16} height={16} />
    <Text>Enjoy the website? Please help pay for its hosting!</Text>
  </Pane>
);
