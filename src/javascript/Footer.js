import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="footer-list">
        <div>
          <Link to="/">About</Link>
        </div>
        <div>
          <Link to="/all-posts">Posts</Link>
        </div>
        <div>
          <a href="mailto:tarptaeya@gmail.com">Contact</a>
        </div>
        <div>
          <a href="https://github.com/tarptaeya">GitHub</a>
        </div>
        <div>
          <a href="https://linkedin.com/in/tarptaeya">LinkedIn</a>
        </div>
      </div>
      <div className="footer-copyright">
        Copyright Anmol Gautam &copy; {year}
      </div>
    </div>
  );
}
