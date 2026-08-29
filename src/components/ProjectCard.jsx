import { useState } from "react";

import {
  ArrowUpRight,
  ExternalLink,
  Image as ImageIcon,
} from "lucide-react";

import { FaGithub } from "react-icons/fa6";

function ProjectCard({ project }) {
  const [imageError, setImageError] = useState(false);

  return (
    <article className="project-card">
      <div className="project-image">
        {project.image && !imageError ? (
          <img
            src={project.image}
            alt={`Preview do projeto ${project.title}`}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="project-image-placeholder">
            <ImageIcon size={32} />
          </div>
        )}

        {project.featured && (
          <span className="project-featured">
            Destaque
          </span>
        )}
      </div>

      <div className="project-body">
        <div className="project-title-row">
          <h3>{project.title}</h3>
          <ArrowUpRight size={20} />
        </div>

        <p>{project.description}</p>

        <div className="project-technologies">
          {project.technologies.map((technology) => (
            <span key={technology}>
              {technology}
            </span>
          ))}
        </div>

        <div className="project-links">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              <FaGithub size={17} />
              Código
            </a>
          ) : (
            <span className="project-link project-link-disabled">
              <FaGithub size={17} />
              Código
            </span>
          )}

          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              <ExternalLink size={16} />
                Demo
            </a>
          ) : (
            <span className="project-link project-link-disabled">
              <ExternalLink size={16} />
              Demo
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;