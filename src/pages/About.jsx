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
        <div className="row align-items-start justify-content-md-between justify-content-center gap-lg-0 gap-5 pt-md-5">
          <div className="col-lg-7 col-md">
            <h2 className="text-uppercase mb-4 borderBottom">About us</h2>
            <p>
              The best run corporations across the world are not run by
              machines, computers, or systems. Rather, business become
              successful operations if the right teams are in place, made up of
              the right persons on the right jobs.
              <br />
              <br />
              AL Tahir Enterprises” is one of the most trusted and reputed
              manpower consultant in Mumbai (INDIA) duly recognized by the
              Government of India, with an excellent track record of 28 years,
              Established in the year of 1987
              <br />
              <br />
              Al Tahir Enterprises is based in Mumbai supplying
              skilled/non-skilled manpower to G.C.C countries. Our Office is
              situated in the heart of Mumbai City and the location is
              convenient to our clients and candidates to reach.
              <br />
              <br />
              We have well qualified staff experienced in recruiting process
              executing responsibilities with professional grace and efficiency.
              Our infrastructure includes a fully equipped modern office with
              facilities for Fax, Telephone, E-mail and Computerized operating
              system.
              <br />
              <br />
              We focus on continued success by bringing the best possible
              candidates to our clients. We accomplish this by gaining a solid
              understanding of our client's organization, their products and
              services, competitive advantage, corporate culture, competitors,
              strength etc.
              <br />
              <br />
              We have experience and expertise in providing ManPower for
              Information Technology, Hospitality Industry, Construction
              Engineering and Civil Workers, Hospitals and Health care, Oil and
              Gas Industry
              <br />
              <br />
              We recruit decent and hard working professionals, skilled, semi
              skilled and un-skilled workers from India.
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

      <div className="container mt-5">
        <h2 className="text-uppercase mb-4">wakala</h2>

        <div className="row align-items-center justify-content-between gap-md-0 gap-2">
          <div className="col-lg-4 col-sm-6">
            <img src={five} alt="" />
          </div>
          <div className="col-lg-8 col-md">
            <p>
              We are Government of India, Ministry of Labor license holder (REGD
              NO : B-0737/BOM/PER/1000+/3/2238/87)
              <br />
              <br />
              We also have the Identity Card required for the Consulate Of Saudi
              Arabia
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
