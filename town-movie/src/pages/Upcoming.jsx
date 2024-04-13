import { useLocation } from "react-router-dom";
import MenuBar from "../components/MenuBar";
import "../style/Ticketing.module.css";

function Upcoming() {
  const location = useLocation();
  return (
    <div className="page-container">
      <div className="nav-bar">
        {/* using component */}
        <MenuBar showNav={true} />
      </div>
      <div className="page-content">
        <div className="content-tag">
          <a href="/Ticketing">Showing</a>
          <a
            href="/Upcoming"
            className={location.pathname === "/Upcoming" ? "active-btn" : ""}
          >
            Coming
          </a>
        </div>
      </div>
    </div>
  );
}

export default Upcoming;
