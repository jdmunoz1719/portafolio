import { useLang } from "../context/LangContext";
import "./About.css";

export default function About() {
  const { t } = useLang();
  const a = t.about;

  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">{a.subtitle}</p>
          <h2 className="section-title">{a.title}</h2>
        </div>

        <div className="about-grid">
          <div className="about-avatar">
            <div className="avatar-ring">
              <div className="avatar-initials">DG</div>
            </div>
            <div className="avatar-badge">
              <span className="badge-dot" />
              {a.location}
            </div>
          </div>

          <div className="about-text">
            <p>{a.p1}</p>
            <p>{a.p2}</p>

            <div className="about-chips">
              <span className="chip">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
                {a.experience}
              </span>
              <span className="chip">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/></svg>
                {a.location}
              </span>
              <span className="chip">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                {a.english}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
