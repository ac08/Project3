import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav"


export default function Header() {
  return (
    <header>
      <Link to="/">
        <img alt="" src="" />
      </Link>
      <Nav />
    </header>
  );
}