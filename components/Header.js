import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Heading, Text } from 'evergreen-ui';

export default () => (
  <React.Fragment>
    <Head>
      <title>Anthem Build Tool</title>
      <meta name="theme-color" content="#ef4e22" />
      <meta
        name="description"
        content="Create and share Anthem Javelin builds"
      />
      <link rel="icon" sizes="192x192" href="/static/favicon.png" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@ianmitchel1" />
      <meta name="twitter:url" content="https://anthembuilds.app" />
      <meta name="twitter:title" content="Anthem Build Creator" />
      <meta
        name="twitter:description"
        content="Create and share Anthem Javelin builds"
      />
      <meta name="twitter:image" content="/static/social.png" />
    </Head>

    <section className="banner">
      <header>
        <Heading size={700} padding={8} is="h1">
          <Link href="/">
            <a>Anthem Builds</a>
          </Link>
        </Heading>
        <nav>
          <ul>
            <li>
              <Text size={500}>
                <Link href="/">
                  <a>Create</a>
                </Link>
              </Text>
            </li>
            {/* <li>
              <Text size={500}>
                <Link href="/party">
                  <a>Squad</a>
                </Link>
              </Text>
            </li> */}
            <li>
              <Text size={500}>
                <Link href="/about">
                  <a>About</a>
                </Link>
              </Text>
            </li>
          </ul>
        </nav>
      </header>
    </section>
  </React.Fragment>
);
