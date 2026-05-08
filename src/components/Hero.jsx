import { useState, useEffect } from "react";
import { useLang } from "../context/LangContext";
import "./Hero.css";

export default function Hero() {
  const { t } = useLang();
  const roles = t.hero.roles;
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex, roles]);

  // reset on lang change
  useEffect(() => {
    setDisplayed("");
    setDeleting(false);
    setRoleIndex(0);
  }, [roles]);

  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-glow glow-1" />
        <div className="hero-glow glow-2" />
        <div className="hero-grid" />
      </div>

      <div className="hero-content">
        <p className="hero-greeting">{t.hero.greeting}</p>
        <h1 className="hero-name">{t.hero.name}</h1>
        <div className="hero-role">
          <span className="role-text">{displayed}</span>
          <span className="cursor">|</span>
        </div>
        <p className="hero-desc">{t.hero.description}</p>

        <div className="hero-ctas">
          <button className="btn-primary" onClick={() => scrollTo("#experience")}>
            {t.hero.cta}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
          <button className="btn-secondary" onClick={() => scrollTo("#contact")}>
            {t.hero.ctaContact}
          </button>
        </div>

        <div className="hero-scroll" onClick={() => scrollTo("#about")}>
          <div className="scroll-dot" />
        </div>
      </div>
    </section>
  );
}
