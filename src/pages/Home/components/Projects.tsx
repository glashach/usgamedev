import { Fragment } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Button } from "../../../components/Button/Button";
import { projects } from "../Constants";
import "react-photo-view/dist/react-photo-view.css";

export const Projects = () => {
  return projects.map(({ heading, images, link }) => (
    <Fragment key={heading}>
      <h3 className="heading heading-m home__project-heading">{heading}</h3>
      <ul className="home__image-list">
        <PhotoProvider>
          {images.map((image, index) => (
            <li key={image} className="home__image-item">
              <PhotoView src={image}>
                <img
                  className="home__image"
                  src={image}
                  alt={`${heading} project preview ${index}`}
                />
              </PhotoView>
            </li>
          ))}
        </PhotoProvider>
      </ul>
      <Button className="home__project-button" href={link}>
        {`Watch ${heading} project `}
        <span aria-hidden={true}>&#8811;</span>
      </Button>
    </Fragment>
  ));
};
