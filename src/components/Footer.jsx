import React from "react";

const Footer = () => {
  return (
    <footer className="container py-2">
      <div className="newsletter p-2 mb-4">
        <p className="title">Newsletter Sign Up</p>

        <form>
            <input type="email" placeholder="Email address" />
            <button>submit</button>
        </form>
      </div>
      <p className="text-center">© 2022 Al Tahir • All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
