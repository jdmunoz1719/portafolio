import { useLang } from "../context/LangContext";
import "./Footer.css";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="footer-logo">DM<span className="dot">.</span></span>
        <p className="footer-text">{t.footer.built}</p>
        <p className="footer-copy">© {new Date().getFullYear()} Jesus David Muñoz</p>
      </div>
    </footer>
  );
}
