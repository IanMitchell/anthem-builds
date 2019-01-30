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
    <UnorderedList marginTop={24} width="100%" icon={null}>
      <ListItem display="flex" alignItems="center">
        <Twitter width={16} height={16} />
        <Link paddingLeft={8} href="https://twitter.com/ianmitchel1">
          @IanMitchel1
        </Link>
      </ListItem>
      <ListItem display="flex" alignItems="center">
        <Discord width={16} height={16} />
        <Text paddingLeft={8}>Desch#3091</Text>
      </ListItem>
      <ListItem display="flex" alignItems="center">
        <GitHub width={16} height={16} />{' '}
        <Link
          paddingLeft={8}
          href="https://github.com/ianmitchell/anthem-builds"
        >
          ianmitchell/anthem-builds
        </Link>
      </ListItem>
    </UnorderedList>
  </Page>
);
