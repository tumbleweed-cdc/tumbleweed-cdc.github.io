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
    <section
    id="hero"
    className="bg-gradient-to-r from-[#fec459] to-[#fce197] flex flex-col justify-center sm:flex-col p-0 items-center gap-8 scroll-mt-40 h-[600px]"
    >
      <header className={clsx( styles.heroBanner, "w-full h-full relative")}>
        <div className="tw-container relative z-10">
          <h1 className="hero__title">
            Tumbleweed
          </h1>
          <p className="hero__subtitle">
            An open-source framework designed for fast and consistent data propagation between microservices.
          </p>
          <div className={styles.buttons}>
            <a
              href="/docs/introduction" className="hero_button"
              // className="text-white font-normal px-5 text-lg py-3 rounded-full bg-twGreen-600 antialiased inline-block mt-6 hover:no-underline hover:text-white hover:bg-twGreenLight transition "
            >
              Read Case Study
            </a>
          </div>
        </div>
       <img
          src="/img/orange_tumbleweed.svg"
          className="opacity-20 hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2 max-h-[750px]"
          style={{ width: "auto", height: "111%", objectFit: "contain" }}
        />
       </header>
    </section>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={'Tumbleweed Case Study'}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
