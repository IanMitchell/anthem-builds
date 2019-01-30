/* global window */
import React from 'react';
import App, { Container } from 'next/app';
import {
  CornerDialog,
  UnorderedList,
  ListItem,
  Paragraph,
  Link,
  Text,
} from 'evergreen-ui';
import Twitter from '../components/icons/Twitter';
import Discord from '../components/icons/Discord';
import GitHub from '../components/icons/GitHub';
import '../node_modules/normalize.css/normalize.css';
import '../static/styles/styles.css';

export default class MyApp extends App {
  state = {
    showDisclaimer: false,
  };

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount() {
    const disclaimer = window.localStorage.getItem('disclaimer');

    if (!disclaimer || disclaimer < Date.now()) {
      this.setState({ showDisclaimer: true });
    }
  }

  hideDisclaimer = () => {
    this.setState({ showDisclaimer: false });
    window.localStorage.setItem('disclaimer', Date.now() + 1000 * 60 * 60 * 24);
  };

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />

        <CornerDialog
          title="Welcome to Anthem Builds!"
          isShown={this.state.showDisclaimer}
          onCloseComplete={this.hideDisclaimer}
          hasCancel={false}
          confirmLabel="Okay"
        >
          <Paragraph size={400}>
            This tool is currently in Beta - Inscriptions and Components are not
            yet implemented. If you enjoy the tool and would like to see
            development continue, please reach out!
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
        </CornerDialog>
      </Container>
    );
  }
}
