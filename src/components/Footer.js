import React from "react";
import "../scss/footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <p onMouseOver={() => {alert("Apply code 5thwheel at checkout for booking deal!")}}>Terms of Service • Privacy Policy • © 2019 Fifth Wheel</p>
        <p>Made at Lambda School</p>
      </div>
    </footer>
  );
}
