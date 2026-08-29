import {
  Code2,
  Server,
  ChartNoAxesCombined,
  Wrench,
} from "lucide-react";

import { skillGroups } from "../data/skills";

function Skills() {
  const icons = [
    <Code2 size={23} />,
    <Server size={23} />,
    <ChartNoAxesCombined size={23} />,
    <Wrench size={23} />,
  ];

  return (
    <section className="section skills" id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Tecnologias</span>

          <h2>
            Ferramentas que fazem parte do meu <span>dia a dia.</span>
          </h2>

          <p>
            Algumas das tecnologias que utilizo em projetos acadêmicos,
            profissionais e pessoais.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <article className="skill-card" key={group.title}>
              <div className="skill-card-header">
                <div className="skill-icon">
                  {icons[index]}
                </div>

                <h3>{group.title}</h3>
              </div>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;