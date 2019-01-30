import React from 'react';
import Link from 'next/link';
import { Heading, Text } from 'evergreen-ui';

export default () => (
  <React.Fragment>
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
