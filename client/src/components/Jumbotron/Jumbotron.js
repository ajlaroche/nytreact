import React from "react";

const Jumbotron = ({ children }) => (
  <div
    style={{ height: 150, clear: "both", paddingTop: 10, textAlign: "center", borderStyle: "solid" }}
    className="jumbotron"
  >
    {children}
  </div>
);

export default Jumbotron;
