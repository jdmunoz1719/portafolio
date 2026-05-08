import { createContext, useContext, useState } from "react";
import { content } from "../data/content";

const LangContext = createContext();

export function LangProvider({ children }) {
  const [lang, setLang] = useState("es");
  const toggle = () => setLang((l) => (l === "es" ? "en" : "es"));
  const t = content[lang];
  return (
    <LangContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
