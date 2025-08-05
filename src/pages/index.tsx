import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={styles.heroGraph}>
      <div className={clsx('container')}>
        <Heading as="h1" className={clsx(styles.heroTitle)}>
          Beyond the Prescriptions: <br/>Rethinking ADHD for Long-Term Success
          {/* {siteConfig.title} */}
        </Heading>
        <p className={clsx(styles.heroTitle)}>Understanding ADHD beyond medication — focusing on sustainable, individualized care</p>
        {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/blog/paper-beyond-the-prescription">
            Read The Paper - 30min ⏱️
          </Link>
        </div>
      </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
