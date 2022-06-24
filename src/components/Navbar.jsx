import React, { useRef } from "react";

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
              <a href="javascript:void(0)">home</a>
            </li>
            <li>
              <a href="javascript:void(0)">about</a>
            </li>
            <li>
              <a href="javascript:void(0)">services</a>
            </li>
            <li>
              <a href="javascript:void(0)">feedback</a>
            </li>
            <li>
              <a href="javascript:void(0)">contact us</a>
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
