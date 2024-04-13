import icon from "../images/townMovie-icon.svg";
import member from "../images/member-icon.svg";
import { LangChange } from "../global/variables";
import "../style/style.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import classNames from "classnames";

function MenuBar(props) {
  const [active, setActive] = useState("Cinema");
  let location = useLocation();

  function navClick(e) {
    setActive(e.target.id);
  }

  // Test show hide nav use
  // const [hidden, setHidden] = useState(true);

  // function showNav() {
  //   setHidden(!hidden);
  // }
  return (
    <div className="menu-bar">
      <div className="menu-bar-icon">
        <button className="menu-bar-button">
          <img src={icon} alt="" />
          Town Movie
        </button>
      </div>

      <div className={props.showNav ? "pages-nav" : "hidden"}>
        <button
          id="Ticketing"
          className={
            active === "Ticketing" && location.pathname === "/Ticketing"
              ? "active-btn"
              : "menu-bar-button"
          }
          onClick={navClick}
        >
          Ticketing
        </button>
        <button
          id="Eat & Drink"
          className={
            active === "Eat & Drink" && location.pathname === "/FoodOrder"
              ? "active-btn"
              : "menu-bar-button"
          }
          onClick={navClick}
        >
          Eat & Drink
        </button>
        <button
          id="Member"
          className={
            active === "Member" && location.pathname === "/Member"
              ? "active-btn"
              : "menu-bar-button"
          }
          onClick={navClick}
        >
          Member
        </button>
        <button
          id="Promotion"
          className={
            active === "Promotion" && location.pathname === "/Promotion"
              ? "active-btn"
              : "menu-bar-button"
          }
          onClick={navClick}
        >
          Promotion
        </button>
      </div>
      <div className="lang">
        <LangChange />
      </div>
      <div className="member">
        <button className="menu-bar-button">
          <img src={member} alt="" />
        </button>
      </div>
    </div>
  );
}
export default MenuBar;
