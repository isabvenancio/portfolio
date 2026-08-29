import {
  BriefcaseBusiness,
  GraduationCap,
  Code2,
  Check,
} from "lucide-react";

import { experiences } from "../data/experience";

const icons = {
  Experiência: <BriefcaseBusiness size={20} />,
  Formação: <GraduationCap size={20} />,
  Acadêmico: <Code2 size={20} />,
};

function Experience() {
  return (
    <section className="section experience" id="experiencia">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Experiência</span>

          <h2>
            Minha trajetória até <span>aqui.</span>
          </h2>

          <p>
            Experiências profissionais, acadêmicas e projetos que contribuíram
            para minha formação em tecnologia.
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((experience, index) => (
            <article className="experience-item" key={experience.title}>
              <div className="experience-line">
                <div className="experience-icon">
                  {icons[experience.type]}
                </div>

                {index !== experiences.length - 1 && (
                  <span className="timeline-line"></span>
                )}
              </div>

              <div className="experience-card">
                <div className="experience-card-header">
                  <div>
                    <span className="experience-type">
                      {experience.type}
                    </span>

                    <h3>{experience.title}</h3>

                    <p className="experience-organization">
                      {experience.organization}
                    </p>
                  </div>

                  <span className="experience-period">
                    {experience.period}
                  </span>
                </div>

                <p className="experience-description">
                  {experience.description}
                </p>

                <div className="experience-highlights">
                  {experience.highlights.map((highlight) => (
                    <div key={highlight}>
                      <Check size={15} />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;