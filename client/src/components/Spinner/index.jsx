import React from "react";
import "./style.css";

export default function Spinner() {
  return (
    <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
}
