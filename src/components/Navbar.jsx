import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navRef = useRef(null);

  const navbarToggle = () => {
    navRef.current.classList.toggle("active");
  };

  return (
    <nav>
      <div className="top-nav">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="hamburger" onClick={navbarToggle}>
            <i className="fa-solid fa-bars d-lg-none"></i>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <ul className="list-unstyled d-flex align-items-center justify-content-between gap-2">
              <li>
                <p>Follow us on</p>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <i className="fa-brands fa-facebook-f text-black"></i>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <i className="fa-brands fa-twitter text-black"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom-nav" ref={navRef}>
        <div className="container">
          <ul className="list-unstyled d-flex align-items-lg-center justify-content-between gap-2 pagelinks">
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/service">services</Link>
            </li>
            <li>
              <a href="javascript:void(0)">feedback</a>
            </li>
            <li>
              <Link to="/contact">contact us</Link>
            </li>
            <li>
              <a href="javascript:void(0)">current opening</a>
            </li>
            <li>
              <a href="javascript:void(0)">upload resume</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
