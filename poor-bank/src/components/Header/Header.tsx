import React from "react";

import { useNavigate } from "react-router-dom";

import "./styles.css";

export default function Header() {
  const navigate = useNavigate();
  const teste = (rote) => {
    navigate(rote);
  };

  return (
    <div className="container">
      <nav className="navBar">
        <ul className="navBar-ul">
          <li onClick={() => teste("/")}>Home</li>
          <li onClick={() => teste("/seila")}>seila</li>
          <li onClick={() => teste("/naosei")}>naosei</li>
        </ul>
      </nav>
    </div>
  );
}
