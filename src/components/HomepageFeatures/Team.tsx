
import Tumbleweed from "../Tumbleweed";
import Member from "./Member";
const Team = () => {
  return (
    <>
    <section className="sectionB bg-gradient-to-t from-[#fec459] to-[#fce197]" id="team">
      <article className="max-w-6xl mx-auto flex flex-col justify-center gap-8 py-20 px-6">
        <h2 className="lp-para text-center text-5xl tracking-wide font-bold text-[#331e14] mb-6">Team Tumbleweed</h2>
        <div className="flex flex-col md:flex-row gap-2 md:gap-8 mx-auto">
          <Member
            name="Cruz Hernandez"
            title="Software Engineer"
            image="/img/team/cruzdusty.png"
            location="Sparks, NV"
            personalWebsite=""
            github="https://github.com/archzedzenrun"
            linkedin="https://www.linkedin.com/in/cruz-hernandez-968778314/"
            email="cmhernandezdev@gmail.com"
          />
          <Member
            name="Nick Perry"
            title="Software Engineer"
            image="/img/team/nick_headshot_dusty.png"
            location="Vancouver, BC"
            personalWebsite=""
            github="https://github.com/nickperry12"
            linkedin="https://www.linkedin.com/in/nick-perry-9b86b2318/"
            email="nick.perry604@gmail.com"
          />
          <Member
            name="Paco Michelson"
            title="Software Engineer"
            image="/img/team/paco_dusty.png"
            location="Fort Wayne, IN"
            personalWebsite=""
            github="https://github.com/jeffbbz"
            linkedin="https://www.linkedin.com/in/paco-michelson-29702b1b5/"
            email="paco.michelson@gmail.com"
          />
          <Member
            name="Esther Kim"
            title="Software Engineer"
            image="/img/team/esther_headshot_dusty.png"
            location="New York, NY"
            personalWebsite=""
            github="https://github.com/ekim1009"
            linkedin="https://www.linkedin.com/in/esther-kim-189787b0/"
            email="esther.kim0910@gmail.com"
          />
        </div>
        {/* <img className="cactus" src="../../img/cactus_cursor2.png"/> */}
      </article>
   
        <Tumbleweed />
   
    </section>
    
    </>
  );
};

export default Team;