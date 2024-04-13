import { useState } from "react";

export const LangChange = () => {
  const [lang, setLang] = useState("中");
  return (
    <>
      <button
        className="menu-bar-button"
        onClick={() => {
          setLang(lang === "ENG" ? "中" : "ENG");
        }}
      >
        {lang}
      </button>
    </>
  );
};
