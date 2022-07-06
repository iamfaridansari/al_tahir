import React from "react";
import eight from "../assets/images/8.png";
import nine from "../assets/images/9.png";
import Contact from "./Contact";

const Opening = () => {
  return (
    <>
      <div className="container pt-5 mt-md-5">
        <h2 className="text-center text-uppercase mb-5 borderBottom">
          current opening
        </h2>

        <div className="row align-items-start justify-content-md-between justify-content-end myBorder m-0 jobSection">
          <div className="col-lg-4 col-sm p-0">
            <img src={eight} className="img1" alt="" />
          </div>
          <div className="col-lg-5 col-sm py-5">
            <ul>
              <li>Electrical Supervisor</li>
              <li>Chilier Technician</li>
              <li>House Keeping Supervisor</li>
              <li>Senior House Keeping</li>
              <li>Laundry Supervisor</li>
              <li>Laundry Person</li>
              <li>Cook</li>
              <li>Cook Cold Section</li>
              <li>Butcher</li>
              <li>Waiter</li>
            </ul>
          </div>
          <div className="col-md-3 p-0 align-self-end">
            <img src={nine} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Opening;
