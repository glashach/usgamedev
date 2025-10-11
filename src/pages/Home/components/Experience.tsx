import { Button } from "../../../components/Button/Button";
import { experience } from "../../Experience/Constants";
import "../../Experience/Experience.css";

export const Experience = () => {
  return (
    <section className="experience section">
      <h2 className="heading heading-l experience__heading">Experience</h2>
      <ul className="experience__list">
        {experience.map(
          ({ achievements, companyLink, project, projectHref, role }) => (
            <li key={project} className="experience__item">
              <article className="experience__card">
                <h2 className="heading heading-m experience__card-heading">
                  {role}
                </h2>
                {companyLink ? (
                  <a
                    href={companyLink}
                    target="_blank"
                    rel="noreferrer"
                    className="heading heading-xs experience__card-link"
                  >
                    {project}
                  </a>
                ) : (
                  <p className="heading heading-xs experience__card-link">
                    {project}
                  </p>
                )}
                <ul className="experience__card-list">
                  {achievements.map((item) => (
                    <li key={item} className="experience__card-item">
                      {item}
                    </li>
                  ))}
                </ul>
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
