import { useLang } from "../context/LangContext";
import "./Experience.css";

export default function Experience() {
  const { t } = useLang();
  const { title, subtitle, jobs } = t.experience;

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">{subtitle}</p>
          <h2 className="section-title">{title}</h2>
        </div>

        <div className="timeline">
          {jobs.map((job, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-dot">
                <div className={`dot-inner ${job.current ? "active" : ""}`} />
              </div>
              <div className="timeline-card">
                <div className="timeline-head">
                  <div>
                    <h3 className="job-role">{job.role}</h3>
                    <span className="job-company">{job.company}</span>
                  </div>
                  <div className="job-meta">
                    <span className={`job-period ${job.current ? "current" : ""}`}>
                      {job.current && <span className="live-dot" />}
                      {job.period}
                    </span>
                  </div>
                </div>
                <ul className="job-bullets">
                  {job.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
