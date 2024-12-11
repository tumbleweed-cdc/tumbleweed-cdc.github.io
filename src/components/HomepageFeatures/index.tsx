import Team from './Team';
import FadeInSection from './FadeInSection';

const Section1 = () => {
  return (
    <div className="max-w-full mx-auto flex flex-wrap md:flex-nowrap justify-start py-8 gap-5 2xl:px-48 lg:py-20 px-8 items-center">
      <div className="text-center py-0">
        <h1 className="text-[#331e14] text-left text-4xl md:text-[44px] font-medium tracking-tight leading-tight md:leading-[52px] mt-0">
          Easy to setup and teardown
        </h1>
        <p className="text-[#331e14] text-2xl tracking-wide mt-6 mb-2 text-left font-normal max-w-[1200px]">
          Without requiring in-depth technical knowledge, pipelines, sources, and topics can be
          created or deleted using Tumbleweed's intuitive UI
        </p>
      </div>
      <div className="w-full sm:w-[80%] md:w-[60%] block">
        <img
          src="/img/tumbleweed_roll_v3.gif"
          alt="Tumbleweed Roll Clip"
          className="align-top object-contain border-2 rounded shadow-[0_0_30px_#FEC459] border-[#E5E7EB]"
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
          src="/img/tumbleweed_simplified.png"
          alt="Producer Consumer Image"
          className="align-top object-contain rounded shadow-[0_0_10px_grey] dark:shadow-none"
        />
      </div>
      <div className="text-center md:w-[60%]">
        <h1 className="text-[#331e14] text-4xl md:text-[44px] font-medium tracking-tight leading-tight md:leading-[52px] mt-0 text-right">
          Tumbleweed's Architecture
        </h1>
        <p className="text-[#331e14] text-2xl tracking-wide mt-6 mb-2 text-right font-normal">
          Tumblweed uses Apache Kafka and Debezium to capture changes in your PostgresSQL database and propagate them to your microservices
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
          Tumbleweed UI
        </h1>
        <p className="text-[#331e14] text-2xl tracking-wide mt-6 mb-2 text-left font-normal">
          Tumbleweed's clean and simple UI allows users to create sources, consumers, and topics
        </p>
      </div>
      <div className="w-full sm:w-[90%] md:w-[80%] 2xl:w-[70%] block">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="align-top object-contain border-2 rounded shadow-[0_0_30px_#AA8976] border-[#E5E7EB]"
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