import "../style/Footer.css";
function PageFooter() {
  return (
    <div className="footer">
      <div className="contact-us">
        <div className="label">Contact Us</div>
        <div className="details">
          <div className="item">Email : service@townHR.com</div>
          <div className="item">Hot-line : (+852) 1234 5667 </div>
          <div className="item">
            Monday to Friday, 10:00 a.m. - 6:00 p.m. (Saturday, Sunday and
            Public Holidays closed)
          </div>
        </div>
      </div>
      <div className="others">
        <div className="label">Others</div>
        <div className="details">
          <div className="row">
            <div className="link">FAQ</div>
            <div className="link">Terms & Conditions</div>
          </div>
          <div className="row">
            <div className="link">Join Us</div>
            <div className="link">Disclaimer</div>
          </div>
          <div className="row">
            <div className="link">Privacy Policy</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageFooter;
