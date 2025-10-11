import { Link } from "react-router-dom";
import "./Header.css";
import { Button } from "../Button/Button";
import { paths } from "../../constants/paths";
import { extrenalLinks } from "../../constants/externalLinkts";

export const Header = () => {
  return (
    <header className="header">
      <Link className="header__title" to={paths.index}>
        <span>Uladzimir Slezavin</span>
        <span className="header__animation" />
        <span>Level Designer</span>
      </Link>
      <nav>
        <ul className="header__nav">
          <li>
            <Button
              href={extrenalLinks.artstation}
              className="header__nav-link"
            >
              ARTStation
            </Button>
          </li>
          <li>
            <Button href={extrenalLinks.linkedin} className="header__nav-link">
              Linkedin
            </Button>
          </li>
          <li>
            <Button
              hash="mailto:slezavin.vladimir@gmail.com"
              className="header__nav-link"
            >
              EMAIL
            </Button>
          </li>
          <li>
            <Button
              href="/assets/UladzimirSlezavin_LevelDesigner_CV.pdf"
              className="header__nav-link"
            >
              Resume
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
