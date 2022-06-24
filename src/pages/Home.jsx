import React from "react";
import ten from "../assets/images/10.png";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="row align-items-start justify-content-start text-center mt-2">
          <div className="col-lg-4 col-md-6">
            <div className="logo mt-2 mb-5">
              <img src={ten} alt="" />
            </div>

            <h1 className="mb-5 text-white">
              Lorem ipsum <br /> Lorem ipsum.
            </h1>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              debitis dignissimos harum fugiat ex nemo, obcaecati impedit
              sapiente autem voluptatem optio neque cum commodi blanditiis!
              Accusamus nesciunt quidem veniam ab?
            </p>

            <div className="mt-5">
              <button className="myBtn">Know more</button>
            </div>
          </div>
        </div>
      </div>
      <div className="my-5 px-2">
        <button className="myBtn">Download application form</button>
      </div>
    </div>
  );
};

export default Home;
