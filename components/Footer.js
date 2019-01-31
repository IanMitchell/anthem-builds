import React from 'react';
import { Pane, Text, Paragraph, Link } from 'evergreen-ui';
import GitHub from './icons/GitHub';
import Twitter from './icons/Twitter';
import YouTube from './icons/YouTube';
import Discord from './icons/Discord';

export default () => (
  <Pane marginTop={48} marginBottom={24} paddingLeft={16} paddingRight={16}>
    <Pane>
      <Paragraph
        size={300}
        marginBottom={8}
        display="flex"
        alignItems="center"
        flexWrap="wrap"
      >
        Created by Ian Mitchell
      </Paragraph>
      <Pane
        display="flex"
        flexDirecton="row"
        flexWrap="wrap"
        alignItems="center"
      >
        <Pane marginBottom={16}>
          <Link
            href="https://twitter.com/IanMitchel1"
            display="flex"
            alignItems="center"
            marginRight={16}
          >
            <Twitter width={16} height={16} />
            <Text paddingLeft={8} size={300}>
              @IanMitchel1
            </Text>
          </Link>
        </Pane>

        <Pane marginBottom={16}>
          <Link
            href="https://github.com/ianmitchell/anthem-builds"
            display="flex"
            alignItems="center"
            marginRight={16}
          >
            <GitHub width={16} height={16} />
            <Text paddingLeft={8} size={300}>
              ianmitchell/anthem-builds
            </Text>
          </Link>
        </Pane>

        <Pane marginBottom={16}>
          <Discord width={16} height={16} />
          <Text size={300} paddingLeft={8}>
            Desch#3091
          </Text>
        </Pane>
      </Pane>
    </Pane>

    <Pane>
      <Paragraph
        marginBottom={8}
        size={300}
        display="flex"
        alignItems="center"
        flexWrap="wrap"
      >
        Anthem Icons by FireDragon04
      </Paragraph>
      <Pane display="flex" flexDirecton="row" flexWrap="wrap">
        <Pane marginBottom={16}>
          <Link
            href="https://twitter.com/FireDragon04"
            display="flex"
            alignItems="center"
            marginRight={16}
          >
            <Twitter width={16} height={16} />
            <Text paddingLeft={8} size={300}>
              @FireDragon04
            </Text>
          </Link>
        </Pane>

        <Pane marginBottom={16}>
          <Link
            href="https://youtube.com/FireDragon04"
            display="flex"
            alignItems="center"
            marginRight={16}
          >
            <YouTube width={16} height={16} />
            <Text paddingLeft={8} size={300}>
              FireDragon04
            </Text>
          </Link>
        </Pane>

        <Pane marginBottom={16}>
          <Discord width={16} height={16} />
          <Text size={300} paddingLeft={8}>
            FireDragon04#6633
          </Text>
        </Pane>
      </Pane>
    </Pane>
  </Pane>
);
