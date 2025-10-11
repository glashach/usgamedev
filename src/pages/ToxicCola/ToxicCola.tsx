import { Button } from "../../components/Button/Button";
import "./ToxicCola.css";

export const ToxicCola = () => {
  return (
    <>
      <section className="toxic-cola section">
        <div className="toxic-cola__heading-wrapper">
          <h1 className="heading heading-xl toxic-cola__heading">
            <span className="heading__tag">Project</span>
            <span>Toxic Arena</span>
          </h1>
          <p className="text toxic-cola__heading-text">
            Fast paced team PvP 3rd person shooter set in futuristic setting.
            This map serves as an ultimate playground.
          </p>
          <Button
            className="toxic-cola__heading-button"
            href="https://store.steampowered.com/app/1784650/BOSS_FIGHTERS/"
          >
            See on Steam &#8811;
          </Button>
        </div>
        <iframe
          className="toxic-cola__heading-video"
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/ReXqdkiA0zU?si=TLR29pRKN8FezQpH&rel=0&showinfo=0&modestbranding=1"
          title="Toxic Cola"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </section>
      <section className="section">
        <aside className="">
          <h2 className="heading heading-m">Contents</h2>
          <ul>
            <li></li>
            <li></li>
          </ul>
        </aside>
      </section>
    </>
  );
};
