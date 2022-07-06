import React from "react";

const Contact = () => {
  return (
    <div className="container py-5 mt-md-5">
      <h2 className="text-uppercase text-center mb-5 borderBottom">
        Contact us
      </h2>

      <div className="row align-items-start justify-content-between gap-5">
        <div className="col-md">
          <p className="title">Al Tahir Enterprise</p>
          <p>Manpower Consultant and Recruiting Agent</p>
          <p className=" my-3">
            <i className="fa-solid fa-location-dot me-2"></i> 1/1st Flr.
            Rawalpindi House, <br />
            12 Imamwada Road, <br />
            Jail Road (W), Mumbai - 400 009. INDIA
          </p>
          <p className="my-3">
            <i className="fa-solid fa-mobile me-2"></i> Office: 022 -23729289
          </p>
          <p className="my-3">
            <i className="fa-solid fa-mobile me-2"></i> Mobile: 9820612183 ,
            9619810371 , 9820710292
          </p>
          <p className="my-3">
            <i className="fa-solid fa-envelope me-2"></i> Email :
            info@altahirenterprises.com <br />
            contact@altahirenterprises.com
          </p>
        </div>

        <div className="col-md">
          <p className="title">Mr Osama Baldiwala</p>
          <p className="my-3">
            <i className="fa-solid fa-mobile me-2"></i> Mobile: 0091- 9820710292
          </p>
          <p className="my-3">
            <i className="fa-solid fa-mobile me-2"></i> Office: 022 -23729289
          </p>
          <p className="my-3">
            <i className="fa-solid fa-envelope me-2"></i> Email :
            osama@altahirenterprises.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
