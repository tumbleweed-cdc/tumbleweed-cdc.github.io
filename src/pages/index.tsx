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
      <div className="container">
        <Heading as="h1" className="hero__title">
          Tumbleweed
        </Heading>
        <p className="hero__subtitle">
          An open-source framework designed for fast and consistent data propagation between microservices.
        </p>
        <div className={styles.buttons}>
        <a
          href="/docs/introduction"
          className="text-white font-normal px-5 text-lg py-3 rounded-full bg-twGreen-600 antialiased inline-block mt-6 hover:no-underline hover:text-white hover:bg-twGreenLight transition"
        >
          Read Case Study
        </a>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
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
