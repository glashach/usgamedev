import "./Home.css";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Contacts } from "./components/Contacts";

export const Home = () => {
  return (
    <>
      <section className="home section">
        <div className="home__heading-wrapper">
          <h1 className="heading heading-xl home__heading">Welcome</h1>
          <p className="home__text text">
            I’m a Level Designer with more than 8 years of industry experience
            based in Poland.
          </p>
          <p className="home__text text">
            Proficient in Unreal Engine, with additional experience in Unity,
            proprietary engines.
          </p>
          <p className="home__text text">
            Also proficient with supporting software: Git, SVN, Perforce,
            Blender, Confluence, Adobe Photoshop/Illustrator, Figma, Krita, etc.
          </p>
          <p className="home__text text">
            I enjoy creating intense action-driven levels.
          </p>
        </div>
        <iframe
          className="home__video"
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/KKt5djbnya0?si=D4V0kkktJlT1JCEt&rel=0&showinfo=0&modestbranding=1"
          title="Showreel"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </section>
      <section className="section">
        <h2 className="heading heading-l home__section-heading">
          Discover some of my projects
        </h2>
        <Projects />
      </section>
      <Experience />
      <Contacts />
    </>
  );
};
