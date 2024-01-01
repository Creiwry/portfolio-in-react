import { useContext } from "react";
import LocalizationContext from "../LocalizationContext";

const About = () => {
  const [locale] = useContext(LocalizationContext);

  return(locale === "FR" ?
	<section
		id="about"
		className="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
	>
		<div
			className="flex flex-col py-4 gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-rose-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-rose-700"
		>
			<h6 className="text-lg sm:text-xl md:text-2xl">Envie d&apos;en savoir plus ?</h6>
			<h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl">
				Un peu <span className="poppins text-rose-400">à propos</span> de moi
			</h3>
		</div>
		<p className="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">Je suis . . .</p>
		<div className="flex md:px-20 flex-col gap-20 w-full mx-auto max-2-[800px]">
      <div className="flex gap-6 am:gap-8">
        <p className="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">
          1
        </p>
        <div className="flex flex-col gap-6 sm:gap-8">
          <h3 className="text-2xl sm:text-3xl md:text-5xl">
            Pensée à l'échelle globale
          </h3>
          <p className="md:text-lg text-justify">
              Je garde toujours à l'esprit le contexte de ce que je fais. Je reste consciente des délais, 
              des contraintes de performance et d'utilisation, des exigences de sécurité, de la disponibilité
              des ressources, de la maintenabilité du code, etc. Je m'assure que ma concentration et mon 
              énergie sont dirigées vers les aspects du projet qui doivent être mis en avant dans ce contexte. 
              Un travail supplémentaire peut éventuellement être réalisé plus tard ; ce qui est important, c'est 
              de fournir un produit complet et bien fonctionnel dans les délais. 
          </p>
        </div>
      </div>
		</div>
		<div className="flex flex-col md:px-20 gap-20 w-full mx-auto max-2-[800px]">
      <div className="flex gap-6 am:gap-8">
        <p className="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">
          2
        </p>
        <div className="flex flex-col gap-6 sm:gap-8">
          <h3 className="text-2xl sm:text-3xl md:text-5xl">
            À jour avec les technologies actuelles
          </h3>
          <p className="md:text-lg text-justify">
              Je reste informée des frameworks avec lesquels je travaille, afin de toujours maintenir mon travail aussi pertinent et efficace 
              que possible. Cependant, j'aime aussi me tenir au courant des nouvelles technologies en général, 
              même celles qui ne relèvent pas de ma spécialisation. Être au courant des percées 
              technologiques et des tendances m'aide à rester consciente de l'ensemble dans le monde de la technologie.
            </p>
        </div>
      </div>
		</div>
		<div className="flex md:px-20 flex-col gap-20 w-full mx-auto max-2-[800px]">
      <div className="flex gap-6 am:gap-8">
        <p className="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">
          3
        </p>
        <div className="flex flex-col gap-6 sm:gap-8">
          <h3 className="text-2xl sm:text-3xl md:text-5xl">
            Consciente des conventions
          </h3>
          <p className="md:text-lg text-justify">
              Que ce soient les conventions linguistiques et de framework, ou les conventions de l'équipe sur laquelle je 
              travaille, je les suis pour assurer la cohérence et la fluidité du travail. J'apprécie la structure et la lisibilité 
              que les conventions facilitent. J'estime également la maintenabilité qui peut être obtenue grâce à elles. Lorsqu'il 
              est nécessaire de négliger les conventions, je crois qu'une documentation bien écrite peut être un bon complément.
            </p>
        </div>
      </div>
		</div>
		<div className="flex md:px-20 flex-col gap-20 w-full mx-auto max-2-[800px]">
      <div className="flex gap-6 am:gap-8">
        <p className="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">
          4
        </p>
        <div className="flex flex-col gap-6 sm:gap-8">
          <h3 className="text-2xl sm:text-3xl md:text-5xl">
            Une adepte des bons tests
          </h3>
          <p className="md:text-lg text-justify">
              Je suis une grande fan du TDD. Lorsqu'il y a suffisamment de temps et d'informations sur le projet,
              je préfère développer en utilisant le TDD. Cependant, le TDD complet n'est pas toujours réalisable, 
              car le projet peut déjà être en cours lorsque j'arrive, ou il n'y a pas suffisamment de temps pour 
              coder en testant en premier. Dans ces cas, je m'assure quand même que mon code est bien testé. 
              Très important, les tests ne servent pas seulement de documentation et garantissent la fonctionnalité du code futur, 
              ils sont également l'un des piliers de la sécurité des API, et sont absolument nécessaires pour suivre 
              les recommandations de l'OWASP.
            </p>
        </div>
      </div>
		</div>
  </section>
        :
	<section
		id="about"
		className="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
	>
		<div
			className="flex flex-col py-4 gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-rose-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-rose-700"
		>
			<h6 className="text-lg sm:text-xl md:text-2xl">Want to know more?</h6>
			<h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl">
				A bit <span className="poppins text-rose-400">about</span> me.
			</h3>
		</div>
		<p className="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">I am . . .</p>
		<div className="flex md:px-20 flex-col gap-20 w-full mx-auto max-2-[800px]">
      <div className="flex gap-6 am:gap-8">
        <p className="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">
          1
        </p>
        <div className="flex flex-col gap-6 sm:gap-8">
          <h3 className="text-2xl sm:text-3xl md:text-5xl">
            Big picture thinker
          </h3>
          <p className="md:text-lg text-justify" >
              I always keep the context of what I'm doing in mind. I stay aware of deadlines,
              performance and usage constraints, security requirements, resource availability,
              code maintainability etc. I make sure that my focus and energy are given to the
              aspects of the project that should be focused on in this context. Additional work
              can potentially be done later, what is important is getting out a well-functioning,
              complete product on time.
          </p>
        </div>
      </div>
		</div>
		<div className="flex md:px-20 flex-col gap-20 w-full mx-auto max-2-[800px]">
      <div className="flex gap-6 am:gap-8">
        <p className="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">
          2
        </p>
        <div className="flex flex-col gap-6 sm:gap-8">
          <h3 className="text-2xl sm:text-3xl md:text-5xl">
            Up to date with current tech
          </h3>
          <p className="md:text-lg text-justify" >
              I keep up to date with frameworks that I work with, so that I can always keep my work as relevant
              and effective as possible. However, I also like keeping up with new tech in general, tech that
              is outside of my specilization. Being aware of tech breakthroughs and trends helps me stay aware
              of the big picture in the world of tech.
          </p>
        </div>
      </div>
		</div>
		<div className="flex md:px-20 flex-col gap-20 w-full mx-auto max-2-[800px]">
      <div className="flex gap-6 am:gap-8">
        <p className="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">
          3
        </p>
        <div className="flex flex-col gap-6 sm:gap-8">
          <h3 className="text-2xl sm:text-3xl md:text-5xl">
            Mindful of conventions
          </h3>
          <p className="md:text-lg text-justify" >
              Be they language and framework conventions, or the conventions of the team
              that I'm working on, I follow conventions to ensure the congruence and fluidity
              of work. I value the structure and readability that conventions facilitate. I also
              appreciate the maintainability that can be achieved through them. Where it is
              necessary to disregard conventions, I believe that well-written documentation
              can be a good supplement.
            </p>
        </div>
      </div>
		</div>
		<div className="flex md:px-20 flex-col gap-20 w-full mx-auto max-2-[800px]">
      <div className="flex gap-6 am:gap-8">
        <p className="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">
          4
        </p>
        <div className="flex flex-col gap-6 sm:gap-8">
          <h3 className="text-2xl sm:text-3xl md:text-5xl">
              A fan of good testing
          </h3>
          <p className="md:text-lg text-justify">
              I am a big fan of TDD. When there is enough time and information about the 
              project, I prefer developing through TDD. However, full TDD is not always 
              feasible, as the project may already be in progress when I join, or there
              isn't enough time to code test-first. In these cases, I still ensure that
              my code is well-tested. Very importantly, testing does not only serve as 
              documentation and ensures funstionality of future code, it is also one of the
              pillars of API security, and is absolutely necessary in order to follow
              the OWASP recommendations.
            </p>
        </div>
      </div>
		</div>
  </section>
  )
}

export default About
