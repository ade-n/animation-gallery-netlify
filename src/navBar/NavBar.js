import React, { Component } from "react";

import { Link } from "react-router-dom";

export class NavBar extends Component {
  render() {
    return (
      <div className="flex justify-between mx-auto w-3/5 py-4 ">
        <Link
          to="/"
          className="md:text-2xl text-md text-pink-400 font-mono font-bold hover:text-gray-500"
        >
          Animation Gallery
        </Link>

        <div className="flex items-center">
          <Link
            to="/about"
            className="text-gray-700  font-mono pr-6 hover:text-pink-400"
          >
            About
          </Link>
          <a
            href="https://github.com/alex-svg/Animations-Gallery"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700  font-mono hover:text-pink-400"
          >
            GitHub
          </a>
        </div>
      </div>
    );
  }
}

export default NavBar;
