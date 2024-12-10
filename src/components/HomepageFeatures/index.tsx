import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Team from './Team';
import FadeInSection from './FadeInSection';

function Component1() {
  return (
    <div className="max-w-full mx-auto flex justify-start py-8 gap-5 2xl:px-48 lg:py-20 px-8 items-center">
      <div className="text-center py-0">
        <h1 className="text-gray-600 text-left text-4xl md:text-[44px] font-medium tracking-tight leading-tight md:leading-[52px] mt-0">
          Easy to setup and teardown
        </h1>
        <p className="text-gray-600 text-2xl tracking-wide mt-6 mb-2 text-left font-normal">
          Without requiring in-depth technical knowledge, pipelines, sources, and topics can be
          created or deleted using Tumbleweed's intuitive UI
        </p>
      </div>
      <div className="w-[100%] lg:w-[60%] hidden md:block">
        <img
          src="/img/tumbleweed_roll_v3.gif"
          alt="Tumbleweed Roll Clip"
          className="align-top object-fill border-2 rounded shadow-[0_0_30px_grey] border-[#E5E7EB]"
        />
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="max-w-full mx-auto flex justify-center gap-5 py-8 2xl:px-48 lg:py-20 px-8 bg-gray-100 sectionA place-items-center">
      <div className="w-[100%] lg:w-[80%] 2xl:w-70%] hidden md:block">
        <img
          src="/img/tumbleweed_simplified.png"
          alt="Producer Consumer Image"
          className="align-top object-fill rounded shadow-[0_0_10px_grey] dark:shadow-none"
        />
      </div>
      <div className="text-center">
        <h1 className="text-gray-600 text-4xl md:text-[44px] font-medium tracking-tight leading-tight md:leading-[52px] mt-0 text-right">
          Tumbleweed's Architecture
        </h1>
        <p className="text-gray-600 text-2xl tracking-wide mt-6 mb-2 text-right font-normal">
          Tumblweed uses Apache Kafka and Debezium to capture changes in your PostgresSQL database and propagate them to your microservices
        </p>
        <img
          src="/img/home-page-diy.png"
          alt="Producer Consumer"
          className="max-w-[450px] md:hidden w-[90%] mx-auto border-2 rounded block shadow-[0_0_10px_grey]"
        />
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="max-w-full mx-auto flex justify-start py-8 gap-5 2xl:px-48 lg:py-20 px-8 items-center">
      <div className="text-center py-0">
        <h1 className="text-gray-600 text-left text-4xl md:text-[44px] font-medium tracking-tight leading-tight md:leading-[52px] mt-0">
          Tumbleweed UI
        </h1>
        <p className="text-gray-600 text-2xl tracking-wide mt-6 mb-2 text-left font-normal">
          Tumbleweed's clean and simple UI allows users to create sources, consumers, and topics
        </p>
      </div>
      <div className="w-[100%] lg:w-[60%] hidden md:block">
        <img
          src="/img/using_tumbleweed_1.png"
          alt="Tumbleweed UI"
          className="align-top object-fill border-2 rounded shadow-[0_0_30px_grey] border-[#E5E7EB]"
        />
      </div>
    </div>
  );
}


// import clsx from 'clsx';
// import Heading from '@theme/Heading';
// import styles from './styles.module.css';
// import Team from './Team';

// type FeatureItem = {
//   title: string;
//   Svg: React.ComponentType<React.ComponentProps<'svg'>>;
//   description: JSX.Element;
// };

// const FeatureList: FeatureItem[] = [
//   {
//     title: 'Easy to Use',
//     Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
//     description: (
//       <>
//         Docusaurus was designed from the ground up to be easily installed and
//         used to get your website up and running quickly.
//       </>
//     ),
//   },
//   {
//     title: 'Focus on What Matters',
//     Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
//     description: (
//       <>
//         Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
//         ahead and move your docs into the <code>docs</code> directory.
//       </>
//     ),
//   },
//   {
//     title: 'Powered by React',
//     Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
//     description: (
//       <>
//         Extend or customize your website layout by reusing React. Docusaurus can
//         be extended while reusing the same header and footer.
//       </>
//     ),
//   },
// ];

// function Feature({title, Svg, description}: FeatureItem) {
//   return (
//     <div className={clsx('col col--4')}>
//       <div className="text--center">
//         <Svg className={styles.featureSvg} role="img" />
//       </div>
//       <div className="text--center padding-horiz--md">
//         <div className={styles.featureContent}>
//           <Heading as="h3">{title}</Heading>
//           <p>{description}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function HomepageFeatures(): JSX.Element {
//   return (
//     <section className={styles.features}>
//       <div className="container">
//         <div className="row">
//           {FeatureList.map((props, idx) => (
//             <Feature key={idx} {...props} />
//           ))}
//         </div>
//         <Team/>
//       </div>
//     </section>
//   );
// }


export default function HomepageFeatures(): JSX.Element {
  return (
    <div className="flex flex-col homePage_main">
      <FadeInSection fadeDistance={350}> 
        <Component1 />
      </FadeInSection>
      <FadeInSection fadeDistance={350}>
        <Component2 />
      </FadeInSection>
      <FadeInSection fadeDistance={350}> 
        <Component3 />
      </FadeInSection>
      <FadeInSection fadeDistance={350}>
        <Team />
      </FadeInSection>
    </div>
  );
}