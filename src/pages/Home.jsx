import React from "react";
import ten from "../assets/images/10.png";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <div className="home pt-5">
        <div className="container">
          <div className="row align-items-start justify-content-start text-center mt-2">
            <div className="col-lg-4 col-md-6">
              <div className="logo mt-2 mb-5">
                <img src={ten} alt="" />
              </div>

              <h1 className="mb-5 text-white">
                Welcome to <br /> Al-Tahir Enterprises
              </h1>
              <p className="text-white">
                The best run corporations across the world are not run by
                machines, computers, or systems. Rather, business become
                successful operations if the right teams are in place, made up
                of the right persons on the right jobs. <br />
                <br />
                <div class="collapse" id="collapseExample">
                  AL Tahir Enterprises” is one of the most trusted and reputed
                  manpower consultant in Mumbai (INDIA) duly recognized by the
                  Government of India, with an excellent track record of 28
                  years, Established in the year of 1987 <br />
                  <br />
                  Al Tahir Enterprises is based in Mumbai supplying
                  skilled/non-skilled manpower to G.C.C countries. Our Office is
                  situated in the heart of Mumbai City and the location is
                  convenient to our clients and candidates to reach.
                  <br />
                  <br />
                  We have well qualified staff experienced in recruiting process
                  executing responsibilities with professional grace and
                  efficiency. Our infrastructure includes a fully equipped
                  modern office with facilities for Fax, Telephone, E-mail and
                  Computerized operating system.
                  <br />
                  <br />
                  We focus on continued success by bringing the best possible
                  candidates to our clients. We accomplish this by gaining a
                  solid understanding of our client's organization, their
                  products and services, competitive advantage, corporate
                  culture, competitors, strength etc.
                  <br />
                  <br />
                  We have experience and expertise in providing ManPower for
                  Information Technology, Hospitality Industry, Construction
                  Engineering and Civil Workers, Hospitals and Health care, Oil
                  and Gas Industry
                  <br />
                  <br />
                  We recruit decent and hard working professionals, skilled,
                  semi skilled and un-skilled workers from India. <br />
                  <br />
                  We are Government of India, Ministry of Labor license holder
                  (REGD NO : B-0737/BOM/PER/1000+/3/2238/87)
                  <br />
                  <br />
                  We also have the Identity Card required for the Consulate Of
                  Saudi Arabia
                </div>
              </p>

              <div
                className="mt-5"
                data-bs-toggle="collapse"
                href="#collapseExample"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <button className="myBtn myRadius">Know more</button>
              </div>
            </div>
          </div>
        </div>
        <div className="my-5 px-2">
          <button className="myBtn myRadius">Download application form</button>
        </div>
      </div>
    </>
  );
};

export default Home;
