import "../style/style.css";
import MenuBar from "../components/MenuBar";
import PageFooter from "../components/Footer";
// import { useState } from "react";

function WelcomePage() {
  return (
    <div className="page-container">
      <div className="nav-bar">
        {/* using component */}
        <MenuBar showNav={false} />
      </div>
      <div className="page-content">
        <div id="page-title">Welcome</div>
        <hr />
        <div className="btn-group">
          <a href="/Ticketing" className="action-btn" id="highlight-btn">
            TICKETING
          </a>
          <a href="/imax" className="action-btn">
            IMAX
          </a>
          <a href="/Upcoming" className="action-btn">
            UPCOMING
          </a>
        </div>
      </div>
      <div className="footer">
        {/* Contact us & Others */}
        <PageFooter />
      </div>
    </div>
  );
}

export default WelcomePage;
