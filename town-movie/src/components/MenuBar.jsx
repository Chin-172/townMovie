import icon from "../images/townMovie-icon.svg";
import member from "../images/member-icon.svg";
import { LangChange } from "../global/variables";
import { createContext, useContext, useState } from "react";
import "../style/MenuBar.css";
function MenuBar() {
  return (
    <div className="menu-bar">
      <div className="icon">
        <button>
          <img src={icon} />
          Town Movie
        </button>
      </div>
      <div className="pages-nav">{/* Use flag to control visibility */}</div>
      <div className="lang">
        <LangChange/>
      </div>
      <div className="member">
        <button>
          <img src={member} />
        </button>
      </div>
    </div>
  );
}

export default MenuBar;
