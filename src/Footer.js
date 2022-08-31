import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <p>
        Coded by{" "}
        <a
          href="https://fabulous-sherbet-795727.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
        TataKor
        </a>
        {" "}and is{" "}
        <a
          href="https://github.com/TataKor/dictionary-project"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>
      </p>
    </div>
  );
}