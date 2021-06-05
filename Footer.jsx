import React from "react";

function Footer() {
  var current = new Date().getFullYear();

  return (
    <footer>
      <p>Copright @ {current}</p>
    </footer>
  );
}

export default Footer;
