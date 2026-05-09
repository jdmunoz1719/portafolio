import { useState } from "react";
import { useLang } from "../../context/LangContext";
import "./Projects.css";

export default function Projects() {
  const { t } = useLang();
  const { title, subtitle, items } = t.projects;

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">{subtitle}</p>
          <h2 className="section-title">{title}</h2>
        </div>

        <div className="projects-grid">
          {items.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div className="project-card" style={{ animationDelay: `${index * 0.1 + 0.1}s` }}>
      <div className="project-preview">
        {project.image && !imgFailed ? (
          <img
            src={project.image}
            alt={project.name}
            className="project-screenshot"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <div className="project-placeholder" style={{ "--accent": project.accent }}>
            <span className="placeholder-letter">{project.name[0]}</span>
          </div>
        )}
        <div className="project-overlay">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link-btn"
          >
            Ver app ↗
          </a>
        </div>
      </div>

      <div className="project-info">
        <div className="project-header">
          <div>
            <div className="project-name-row">
              <h3 className="project-name">{project.name}</h3>
              {project.badge && (
                <span className="project-badge">{project.badge}</span>
              )}
            </div>
            <span className="project-company">{project.company}</span>
          </div>
          <span className="project-period">{project.period}</span>
        </div>
        <p className="project-desc">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag, j) => (
            <span key={j} className="project-tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
