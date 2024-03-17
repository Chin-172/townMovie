import "../style/Welcome.css";
import MenuBar from "../components/MenuBar";
import PageFooter from "../components/Footer";
function WelcomePage() {
  return (
    <div className="page-container">
      <div className="nav-bar">
        {/* using component */}
        <MenuBar />
      </div>
      <div className="page-content">
        <div id="page-title">Welcome</div>
        <hr />
        <div className="btn-group">
          <button className="action-btn" id="highlight-btn">
            TICKETING
          </button>
          <button className="action-btn">IMAX</button>
          <button className="action-btn">UPCOMING</button>
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
