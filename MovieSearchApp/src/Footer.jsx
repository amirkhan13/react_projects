
import React from "react";

function Footer() {
  return (
    <footer
      style={{
        background: "darkcyan",
        color: "#e5e5e5",
        textAlign: "center",
        padding: "25px 10px",
        marginTop: "30px",
        borderTop: "1px solid white",
      }}
    >
      <h3 style={{ margin: "0", fontWeight: "500", letterSpacing: "1px" }}>
         Movie Search App
      </h3>
      <p style={{ margin: "8px 0", fontSize: "14px", color: "white" }}>
        Made with  using React & OMDb API
      </p>
      <small style={{ color: "white" }}>
        © {new Date().getFullYear()} CineVerse | All Rights Reserved
      </small>
    </footer>
  );
}

export default Footer;
