import React from "react";
import eleven from "../assets/images/11.png";
import two from "../assets/images/2.png";
import three from "../assets/images/3.png";
import four from "../assets/images/4.png";
import twelve from "../assets/images/12.png";
import five from "../assets/images/5.png";

const About = () => {
  return (
    <>
      <div className="container pt-5">
        <div className="row align-items-start justify-content-md-between justify-content-center gap-lg-0 gap-5">
          <div className="col-lg-7 col-md">
            <h2 className="text-uppercase mb-4">About us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              atque, tenetur aspernatur aut sit neque voluptatem ea officiis
              omnis magni illo vel totam eaque deserunt soluta exercitationem
              nemo, ipsa earum?
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
              omnis atque eius dolor id beatae commodi totam fuga recusandae
              praesentium ipsam, soluta fugiat dolorum neque. Numquam possimus
              alias harum eligendi.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
              omnis atque eius dolor id beatae commodi totam fuga recusandae
              praesentium ipsam, soluta fugiat dolorum neque. Numquam possimus
              alias harum eligendi.
            </p>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="circle1">
              <img src={eleven} alt="" />
            </div>
            <div className="circleMargin">
              <div className="circle2">
                <img src={two} alt="" />
              </div>
              <div className="d-flex align-items-center justify-content-between gap-2 my-2">
                <div className="circle3">
                  <img src={three} alt="" />
                </div>
                <div className="circle4">
                  <img src={four} alt="" />
                </div>
              </div>
              <div className="circle5">
                <img src={twelve} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container pb-5">
        <h2 className="text-uppercase mb-4">wakala</h2>

        <div className="row align-items-center justify-content-between gap-md-0 gap-2">
          <div className="col-lg-4 col-sm-6">
            <img src={five} alt="" />
          </div>
          <div className="col-lg-8 col-md">
            <p>
              We are Government of India, Ministry of Labor license holder (REGD
              NO : B-0737/BOM/PER/1000+/3/2238/87)
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
