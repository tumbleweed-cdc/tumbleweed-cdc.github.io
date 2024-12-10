import Member from "./Member";
const Team = () => {
  return (
    <section className="sectionB" id="team">
      <article className="max-w-6xl mx-auto flex flex-col justify-center gap-8 py-20 px-6">
        <h2 className="lp-para text-center text-3xl tracking-wide font-semibold text-gray-600mb-2">Team Tumbleweed</h2>
        <div className="flex flex-col md:flex-row gap-2 md:gap-8 mx-auto">
          <Member
            name="Cruz Hernandez"
            image="/img/team/cruzbw.png"
            location="Reno, NV"
            personalWebsite=""
            github="https://github.com/archzedzenrun"
            linkedin="https://www.linkedin.com/in/cruz-hernandez-968778314/"
            email="archzedzenrun@gmail.com"
          />
          <Member
            name="Nick Perry"
            image="/img/team/nick_headshot.jpg"
            location="Abbotsford, BC"
            personalWebsite=""
            github="https://github.com/nickperry12"
            linkedin="https://www.linkedin.com/in/nick-perry-9b86b2318/"
            email="nick.perry604@gmail.com"
          />
          <Member
            name="Paco Michelson"
            image="/img/team/paco.jpg"
            location="Fort Wayne, IN"
            personalWebsite=""
            github="https://github.com/jeffbbz"
            linkedin="https://www.linkedin.com/in/paco-michelson-29702b1b5/"
            email="tfpaco@gmail.com"
          />
          <Member
            name="Esther Kim"
            image="/img/team/esther_headshot.jpg"
            location="Queens, NY"
            personalWebsite=""
            github="https://github.com/ekim1009"
            linkedin="https://www.linkedin.com/in/esther-kim-189787b0/"
            email="ekim1009@gmail.com"
          />
        </div>
      </article>
    </section>
  );
};

export default Team;