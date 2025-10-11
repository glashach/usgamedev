import { Button } from "../../../components/Button/Button";
import { extrenalLinks } from "../../../constants/externalLinkts";

export const Contacts = () => {
  return (
    <section>
      <h2 className="heading heading-l home__contacts-heading">Contact me</h2>
      <ul className="home__contacts-list">
        <li>
          <Button href={extrenalLinks.artstation}>ArtStation</Button>
        </li>
        <li>
          <Button href={extrenalLinks.linkedin}>Linkedin</Button>
        </li>
        <li>
          <Button hash="mailto:uladzimir.slezavin@gmail.com">Email</Button>
        </li>
        <li>
          <Button href="/assets/UladzimirSlezavin_LevelDesigner_CV.pdf">
            Resume
          </Button>
        </li>
      </ul>
    </section>
  );
};
