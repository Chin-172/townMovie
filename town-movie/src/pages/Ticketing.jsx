import { useLocation } from "react-router-dom";
import MenuBar from "../components/MenuBar";
import PageFooter from "../components/Footer";
import "../style/style.css";
import Moive from "../components/Movie";
function Ticketing() {
  const location = useLocation();
  const movieInfo = {
    name: "A",
    rate: "2",
    image: "",
  };
  return (
    <div className="ticket-page">
      <div className="nav-bar">
        {/* using component */}
        <MenuBar showNav={true} />
      </div>
      <div className="ticket-content">
        <div className="content-tag">
          <a
            href="/Ticketing"
            className={location.pathname === "/Ticketing" ? "active-tag" : ""}
          >
            Showing
          </a>
          <a href="/Upcoming">Coming</a>
        </div>
        <div className="movie-slide">
          <Moive />
        </div>
      </div>
      <div className="footer">
        {/* Contact us & Others */}
        <PageFooter />
      </div>
    </div>
  );
}

export default Ticketing;
