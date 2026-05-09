import {
  SiAngular, SiTypescript, SiReact, SiHtml5, SiFlutter, SiBootstrap, SiTailwindcss,
  SiDotnet, SiNodedotjs, SiSpringboot, SiLaravel,
  SiPostgresql, SiMongodb, SiMysql, SiSequelize,
  SiDocker, SiKubernetes, SiGit, SiGithubactions,
  SiJest, SiGithubcopilot, SiOpenai, SiVite,
  SiCss, SiSequelize as _seq,
} from "react-icons/si";
import { useLang } from "../../context/LangContext";
import "./Skills.css";

function AzureIcon() {
  return (
    <svg viewBox="0 0 96 96" fill="currentColor" style={{ width: "1em", height: "1em" }}>
      <path d="M33.3 4.1L8.2 74.8h21.4l14.7-25.4 14 25.4h21.5L54.5 4.1H33.3zm11.2 16.6l17.3 31.3H27L44.5 20.7z"/>
    </svg>
  );
}

function AwsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "1em", height: "1em" }}>
      <path d="M6.76 10.45c0 .28.03.51.09.67.06.17.15.35.28.54.05.07.07.14.07.2 0 .09-.05.18-.16.27l-.52.35c-.07.05-.15.07-.22.07-.09 0-.17-.04-.26-.11-.12-.13-.23-.27-.32-.41-.09-.14-.18-.31-.28-.5C4.93 12.58 4.27 13 3.42 13c-.63 0-1.13-.18-1.5-.54-.37-.36-.55-.84-.55-1.44 0-.64.22-1.15.67-1.54.45-.39 1.04-.59 1.79-.59.25 0 .5.02.77.06.27.04.54.1.83.17v-.53c0-.55-.12-.94-.35-1.17-.23-.23-.63-.34-1.2-.34-.26 0-.52.03-.79.09-.27.07-.53.15-.79.27-.12.05-.2.08-.26.09-.05.01-.09.02-.12.02-.11 0-.17-.08-.17-.24v-.38c0-.12.02-.22.06-.27.04-.05.11-.11.22-.17.26-.14.57-.26.93-.35.36-.1.74-.14 1.14-.14.87 0 1.5.2 1.91.59.41.39.61.98.61 1.77v2.34zm-3.2 1.2c.24 0 .49-.04.74-.13.26-.09.49-.25.68-.48.12-.14.2-.29.24-.47.05-.18.07-.39.07-.63V9.7c-.21-.05-.43-.1-.66-.13-.22-.03-.44-.05-.66-.05-.47 0-.82.09-1.05.28-.23.19-.35.46-.35.82 0 .33.08.58.26.75.17.17.42.26.73.26zm5.67.78c-.13 0-.22-.02-.28-.07-.06-.04-.12-.14-.16-.27L7.14 6.4c-.04-.13-.06-.23-.06-.28 0-.11.06-.17.17-.17h.7c.13 0 .23.02.28.07.06.04.11.14.15.27l1.46 5.74 1.35-5.74c.04-.14.09-.23.15-.27.06-.05.16-.07.28-.07h.57c.13 0 .22.02.28.07.06.04.12.14.15.27l1.37 5.81 1.51-5.81c.04-.13.09-.23.15-.27.06-.05.16-.07.28-.07h.66c.11 0 .18.05.18.17 0 .03-.01.07-.02.11-.01.04-.03.1-.06.18l-2.1 7.69c-.04.13-.09.23-.15.27-.07.04-.16.07-.28.07h-.62c-.13 0-.22-.02-.28-.07-.06-.04-.11-.14-.15-.28l-1.35-5.6-1.34 5.59c-.04.14-.09.24-.15.28-.06.05-.16.07-.29.07h-.6zm11.2.23c-.37 0-.73-.04-1.08-.13-.36-.09-.63-.18-.82-.29-.11-.06-.19-.13-.22-.2-.03-.07-.04-.14-.04-.21v-.4c0-.17.06-.24.18-.24.05 0 .09.01.14.03.05.02.12.05.2.09.27.12.57.21.88.28.32.06.63.09.95.09.5 0 .89-.09 1.16-.27.27-.18.41-.44.41-.77 0-.23-.07-.42-.21-.57-.14-.15-.41-.29-.8-.42l-1.15-.35c-.58-.18-1.01-.45-1.28-.81-.27-.35-.4-.74-.4-1.16 0-.34.07-.63.22-.89.15-.26.35-.49.6-.67.25-.18.53-.32.86-.41.33-.09.68-.13 1.05-.13.18 0 .37.01.55.04.19.02.36.06.53.1.16.04.32.09.46.14.14.05.25.1.33.15.11.07.19.14.24.21.04.07.07.16.07.28v.36c0 .17-.06.24-.18.24-.06 0-.16-.03-.29-.1-.44-.2-.93-.3-1.48-.3-.45 0-.81.07-1.06.22-.25.15-.38.38-.38.71 0 .23.08.43.24.59.16.15.45.3.88.44l1.13.35c.57.18.98.43 1.23.76.25.32.37.69.37 1.1 0 .34-.07.65-.2.93-.14.27-.33.52-.58.71-.25.2-.55.35-.9.45-.36.11-.74.16-1.15.16zm3.9-10.5c-2.7 1.97-6.62 3.01-9.99 3.01-4.73 0-8.99-1.75-12.21-4.65-.25-.23-.03-.54.28-.36 3.48 2.02 7.77 3.24 12.21 3.24 2.99 0 6.28-.62 9.31-1.91.46-.19.84.3.4.67zm1.14-1.3c-.35-.44-2.3-.21-3.18-.11-.27.03-.31-.2-.07-.38 1.56-1.09 4.12-.78 4.42-.41.3.37-.08 2.94-1.54 4.16-.23.19-.44.09-.34-.16.33-.82 1.06-2.67.71-3.1z"/>
    </svg>
  );
}

function SqlServerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "1em", height: "1em" }}>
      <path d="M3 3h18v3H3zm0 4.5h18v3H3zm0 4.5h18v3H3zm0 4.5h18V19H3z" opacity=".4"/>
      <path d="M12 3v18"/>
    </svg>
  );
}

function VsCodeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "1em", height: "1em" }}>
      <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 19.605V4.395a1.5 1.5 0 0 0-.85-1.408zM16.597 17.08L10.463 12l6.134-5.08z"/>
    </svg>
  );
}

function CursorIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "1em", height: "1em" }}>
      <path d="M5.5 2L2 5.5v13L5.5 22H12l10-10V5.5L18.5 2H5.5zm.5 2h12l3 3v8.5L12 24H5.5L3 21.5v-12L6 2z"/>
      <path d="M8 8l4 8 1.5-3.5L17 11 8 8z"/>
    </svg>
  );
}

const ICONS = {
  Angular: SiAngular,
  TypeScript: SiTypescript,
  React: SiReact,
  HTML5: SiHtml5,
  CSS3: SiCss,
  Flutter: SiFlutter,
  Bootstrap: SiBootstrap,
  Tailwind: SiTailwindcss,
  ".NET / C#": SiDotnet,
  "Node.js": SiNodedotjs,
  "Java / Spring Boot": SiSpringboot,
  Laravel: SiLaravel,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  Sequelize: SiSequelize,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  "Azure": AzureIcon,
  "Azure DevOps": AzureIcon,
  "AWS": AwsIcon,
  "CI/CD": SiGithubactions,
  Git: SiGit,
  Jest: SiJest,
  "GitHub Copilot": SiGithubcopilot,
  ChatGPT: SiOpenai,
  "VS Code": VsCodeIcon,
  Cursor: CursorIcon,
  "SQL Server": SqlServerIcon,
};

const CATEGORY_COLORS = ["#6366f1", "#06b6d4", "#f59e0b", "#3b82f6", "#22c55e"];

export default function Skills() {
  const { t } = useLang();
  const { title, subtitle, categories } = t.skills;

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">{subtitle}</p>
          <h2 className="section-title">{title}</h2>
        </div>

        <div className="skills-grid">
          {categories.map((cat, i) => (
            <div className="skill-card" key={i} style={{ "--cat-color": CATEGORY_COLORS[i] }}>
              <div className="skill-card-header">
                <span className="skill-icon-label">{cat.name}</span>
              </div>
              <div className="skill-tags">
                {cat.items.map((item, j) => {
                  const Icon = ICONS[item];
                  return (
                    <span className="skill-tag" key={j}>
                      {Icon && <Icon className="skill-tag-icon" />}
                      {item}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
