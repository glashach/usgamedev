import { Button } from "../../components/Button/Button";
import "./Experience.css";
import { experience } from "./Constants";

export const Experience = () => {
  return (
    <section className="experience section">
      <h1 className="heading heading-xl experience__heading">Experience</h1>
      <ul className="experience__list">
        {experience.map(
          ({ achievements, companyLink, project, projectHref, role }) => (
            <li key={project} className="experience__item">
              <article className="experience__card">
                <h2 className="heading heading-l experience__card-heading">
                  {role}
                </h2>
                {companyLink ? (
                  <a
                    href={companyLink}
                    target="_blank"
                    rel="noreferrer"
                    className="heading heading-s experience__card-link"
                  >
                    {project}
                  </a>
                ) : (
                  <p className="heading heading-s experience__card-link">
                    {project}
                  </p>
                )}
                <h3 className="heading heading-s experience__card-heading">
                  Achievements:
                </h3>
                <ul className="experience__card-list">
                  {achievements.map((item) => (
                    <li key={item} className="experience__card-item">
                      {item}
                    </li>
                  ))}
                </ul>
                {/* {images && (
                  <div className="experience__card-images">
                    {images.map((image) => (
                      <img
                        className="experience__card-image"
                        key={image}
                        src={image}
                        alt=""
                      />
                    ))}
                  </div>
                )} */}
                {/* {projectLink && (
                  <Button
                    className="experience__card-button"
                    link={projectLink}
                  >
                    See more <span role="presentation">≫</span>
                  </Button>
                )} */}
                {projectHref && (
                  <Button
                    className="experience__card-button"
                    href={projectHref}
                  >
                    See more <span role="presentation">≫</span>
                  </Button>
                )}
              </article>
            </li>
          )
        )}
      </ul>
    </section>
  );
};
