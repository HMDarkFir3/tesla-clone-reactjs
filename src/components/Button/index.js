//React
import React from "react";

//Style
import "./style.css";

export default function Button(props) {
  const { imp, text, link } = props;

  return (
    <div className={`button ${imp == "secondary" ? "buttonWhite" : ""}`}>
      <a href={link}>{text}</a>
    </div>
  );
}
