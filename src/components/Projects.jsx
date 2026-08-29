import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

function Projects() {
  return (
    <section className="section projects" id="projetos">
      <div className="container">
        <div className="projects-header">
          <div className="section-header">
            <span className="section-label">Projetos</span>

            <h2>
              Algumas coisas que já <span>construí.</span>
            </h2>

            <p>
              Projetos envolvendo desenvolvimento de software, dados,
              inteligência artificial, backend e automação.
            </p>
          </div>

          <a
            href="https://github.com/isabvenancio"
            target="_blank"
            rel="noreferrer"
            className="projects-github"
          >
            Ver GitHub
          </a>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              project={project}
              key={project.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;