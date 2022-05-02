import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 95, clear: "both", paddingTop: 120, textAlign: "center" }}
    >
      {children}
    </div>
  );
}

export default Jumbotron;
