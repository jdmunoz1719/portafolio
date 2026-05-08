import { useLang } from "../context/LangContext";
import "./Skills.css";

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
            <div className="skill-card" key={i}>
              <div className="skill-card-header">
                <span className="skill-icon">{cat.icon}</span>
                <h3>{cat.name}</h3>
              </div>
              <div className="skill-tags">
                {cat.items.map((item, j) => (
                  <span className="skill-tag" key={j}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
