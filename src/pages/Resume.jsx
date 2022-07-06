import React, { useContext } from "react";
import seven from "../assets/images/7.png";
import { myContext } from "../App";

const Resume = () => {
  const { user, setUser } = useContext(myContext);

  const inputChange = (e) => {
    const { name, value } = e.target;

    setUser((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();

    if (user.name === "") {
      alert("Enter your name");
    } else if (user.contact === "") {
      alert("Enter your contact number");
    } else if (user.contact.length !== 10) {
      alert("Enter your 10 digit contact number");
    } else if (user.destination === "") {
      alert("Enter your destination");
    } else if (user.email === "") {
      alert("Enter your email address");
    } else if (user.resume === "") {
      alert("Upload your resume");
    } else {
      setUser({
        name: "",
        contact: "",
        destination: "",
        email: "",
        comments: "",
        resume: "",
      });
      alert("Your response has been recorded.")
      localStorage.setItem("user", JSON.stringify(user));
    }
  };
  return (
    <>
      <div className="container py-5 mt-md-5">
        <h2 className="text-uppercase text-center mb-5 borderBottom">
          upload resume
        </h2>

        <div className="row align-items-start justify-content-between resumeSection p-2 gap-md-0 gap-2">
          <div className="col-lg-7 col-md myBorder p-2 myRadius">
            <form
              className="d-flex flex-column justify-content-between h-100"
              onSubmit={formSubmit}
            >
              <div>
                <div className="form-group">
                  <label>Name :</label>
                  <input
                    name="name"
                    required
                    type="text"
                    onChange={inputChange}
                    value={user.name}
                  />
                </div>
                <div className="form-group">
                  <label>Contact No :</label>
                  <input
                    name="contact"
                    required
                    type="number"
                    onChange={inputChange}
                    value={user.contact}
                  />
                </div>
                <div className="form-group">
                  <label>Destination :</label>
                  <input
                    name="destination"
                    required
                    type="text"
                    onChange={inputChange}
                    value={user.destination}
                  />
                </div>
                <div className="form-group">
                  <label>Email :</label>
                  <input
                    name="email"
                    required
                    type="email"
                    onChange={inputChange}
                    value={user.email}
                  />
                </div>
                <div className="form-group">
                  <label>Comments :</label>
                  <input
                    name="comments"
                    type="text"
                    onChange={inputChange}
                    value={user.comments}
                  />
                </div>
                <div className="form-group">
                  <label>Upload your resume :</label>
                  <input
                    name="resume"
                    required
                    type="file"
                    className="custom-file-input"
                    onChange={inputChange}
                    value={user.resume}
                  />
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-end gap-2">
                <button className="myBtn myRadius">submit</button>
                <button className="cancelBtn myRadius">cancel</button>
              </div>
            </form>
          </div>
          <div className="col-lg-4 col-md px-0 ps-md-2">
            <div className="d-flex flex-column align-items-center justify-content-between text-center primaryBg p-2 myRadius h-100">
              <h2 className="text-uppercase text-white">
                High your chance of selection
              </h2>
              <img src={seven} alt="" />
              <p className="text-uppercase text-white">
                By simply uploading your resume
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
