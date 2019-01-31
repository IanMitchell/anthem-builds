import React from 'react';
import {
  Heading,
  Paragraph,
  UnorderedList,
  ListItem,
  Link,
  Text,
} from 'evergreen-ui';
import Twitter from '../components/icons/Twitter';
import Discord from '../components/icons/Discord';
import GitHub from '../components/icons/GitHub';
import Page from '../layouts/Page';

export default () => (
  <Page>
    <Heading size={900} marginTop={48} marginBottom={36} width="auto">
      About
    </Heading>

    <Paragraph size={400}>
      This tool is currently in Beta - Inscriptions and Components are not yet
      implemented. If you enjoy the tool and would like to see development
      continue, please reach out!
    </Paragraph>
  </Page>
);
