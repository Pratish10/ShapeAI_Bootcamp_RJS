import React from "react";

var currYear = new Date().getFullYear();
function Footer() {
  return (
    <footer>
      <p>Copyright @ {currYear}. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
