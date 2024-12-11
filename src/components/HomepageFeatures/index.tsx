import Team from './Team';
import FadeInSection from './FadeInSection';

const Section0 = () => {
  return (
    <div className="max-w-full mx-auto flex flex-wrap md:flex-nowrap justify-center gap-5 py-8 2xl:px-48 lg:py-20 px-8 bg-gray-100 sectionA place-items-center">
      <div className="w-full sm:w-[100%] md:w-[90%] 2xl:w-[85%] block">
        <img
          src="/img/outbox_pattern.svg"
          alt="Producer Consumer Image"
        // className="align-top object-contain rounded shadow-[0_0_10px_grey] dark:shadow-none"
        />
      </div>
      <div className="text-center md:w-[60%]">
        <h1 className="text-[#331e14] text-4xl md:text-[44px] font-medium tracking-tight leading-tight md:leading-[52px] mt-0 text-right">
          Change Data Capture
        </h1>
        <p className="text-[#331e14] text-2xl tracking-wide mt-6 mb-2 text-right font-normal pl-[150px]">
          Efficient data synchronization between microservices using log-based CDC and the outbox pattern.
        </p>
      </div>
    </div>
  );
}

const Section1 = () => {
  return (
    <div className="max-w-full mx-auto flex flex-wrap md:flex-nowrap justify-start py-8 gap-5 2xl:px-48 lg:py-20 px-8 items-center">
      <div className="text-center py-0">
        <h1 className="text-[#331e14] text-left text-4xl md:text-[44px] font-medium tracking-tight leading-tight md:leading-[52px] mt-0">
          Automated Deployment
        </h1>
        <p className="text-[#331e14] text-2xl tracking-wide mt-6 mb-2 text-left font-normal max-w-[1200px] pr-[200px]">
          A simple CLI application automatically deploys self-hosted Tumbleweed pipelines to Amazon Web Services (AWS).
        </p>
      </div>
      <div className="w-full sm:w-[80%] md:w-[60%] block">
        <img
          src="/img/tumbleweed_roll_v3.gif"
          alt="Tumbleweed Roll Clip"
          className="align-top object-contain border-2 rounded shadow-[0_0_20px_#AA8976] border-[#E5E7EB]"
        />
      </div>
    </div>
  );
}

const Section2 = () => {
  return (
    <div className="max-w-full mx-auto flex flex-wrap md:flex-nowrap justify-center gap-5 py-8 2xl:px-48 lg:py-20 px-8 bg-gray-100 sectionA place-items-center">
      <div className="w-full sm:w-[100%] md:w-[90%] 2xl:w-[85%] block">
        <img
          src="/img/tumbleweed_simplified_architecture.png"
          alt="Producer Consumer Image"
        // className="align-top object-contain rounded shadow-[0_0_10px_grey] dark:shadow-none"
        />
      </div>
      <div className="text-center md:w-[60%]">
        <h1 className="text-[#331e14] text-4xl md:text-[44px] font-medium tracking-tight leading-tight md:leading-[52px] mt-0 text-right">
          End-to-end pipeline
        </h1>
        <p className="text-[#331e14] text-2xl tracking-wide mt-6 mb-2 text-right font-normal pl-[50px]">
          Powered by open-source CDC tools, Tumbleweed facilitates seamless event-driven communication while abstracting away the complexities of setup and configuration.
        </p>
      </div>
    </div>
  );
}

const Section3 = () => {
  return (
    <div className="max-w-full mx-auto flex flex-wrap md:flex-nowrap justify-start py-8 gap-5 2xl:px-48 lg:py-20 px-8 items-center">
      <div className="text-center py-0">
        <h1 className="text-[#331e14] text-left text-4xl md:text-[44px] font-medium tracking-tight leading-tight md:leading-[52px] mt-0">
          Intuitive UI
        </h1>
        <p className="text-[#331e14] text-2xl tracking-wide mt-6 mb-2 text-left font-normal">
          Simplifies the setup and management of source connectors, consumers, and topics.
        </p>
      </div>
      <div className="w-full sm:w-[90%] md:w-[80%] 2xl:w-[70%] block">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="align-top object-contain border-2 rounded shadow-[0_0_20px_#AA8976] border-[#70AF85]"
          src='/img/ui_demo_4.mp4'
        />
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <div className="flex flex-col homePage_main">
      <FadeInSection fadeDistance={350}>
        <Section0 />
      </FadeInSection>
      <FadeInSection fadeDistance={350}>
        <Section1 />
      </FadeInSection>
      <FadeInSection fadeDistance={350}>
        <Section2 />
      </FadeInSection>
      <FadeInSection fadeDistance={350}>
        <Section3 />
      </FadeInSection>
      <FadeInSection fadeDistance={350}>
        <Team />
      </FadeInSection>
    </div>
  );
}