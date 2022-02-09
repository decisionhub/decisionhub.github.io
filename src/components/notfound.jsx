import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div
      style={{
        textAlign: "center",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
      }}
    >
      <h1>404 - Not Found!</h1>
      <br />
      <Link to="/">Go Home</Link>
    </div>
  );
};
