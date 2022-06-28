import React from "react";

const Footer = () => {
  return (
    <footer className="container py-2">
      <div className="newsletter p-2 mb-4 myRadius">
        <p className="title">Newsletter Sign Up</p>

        <form className="myRadius">
          <input type="email" placeholder="Email address" />
          <button className="myRadius">submit</button>
        </form>
      </div>
      <div className="text-end">
        <select className="region">
          <option defaultValue disabled>
            Select Region
          </option>
          <option value="India">India</option>
        </select>
      </div>
      <p className="text-center">© 2022 Al Tahir • All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
