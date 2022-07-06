import React from "react";
import five from "../assets/images/5.png";

const Feedback = () => {
  return (
    <div className="container py-5 mt-5">
      <h2 className="text-uppercase mb-4">wakala</h2>

      <div className="row align-items-center justify-content-between gap-md-0 gap-2">
        <div className="col-lg-4 col-sm-6">
          <img src={five} alt="" />
        </div>
        <div className="col-lg-8 col-md">
          <form className="d-flex flex-column justify-content-between h-100">
            <div>
              <div className="form-group">
                <label>Name :</label>
                <input name="name" required type="text" />
              </div>
              <div className="form-group">
                <label>Contact No :</label>
                <input name="contact" required type="number" />
              </div>
              <div className="form-group">
                <label>Destination :</label>
                <input name="destination" required type="text" />
              </div>
              <div className="form-group">
                <label>Email :</label>
                <input name="email" required type="email" />
              </div>
              <div className="form-group">
                <label>Comments :</label>
                <input name="comments" type="text" />
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-end gap-2">
              <button className="myBtn myRadius">submit</button>
              <button className="cancelBtn myRadius">cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
