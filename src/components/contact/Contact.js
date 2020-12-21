import React from "react";
import ContactInput from "./Inputs";
import AppFooter from "../home/Footer"
import Image from "../../assets/images/contact/img1.jpg";

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-6">
              <div className="contact-left">
                <h1>Bizimle elaqe</h1>
                <p className="mb-10">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta possimus velit, placeat similique laborum unde ipsa
                </p>
                <ContactInput />
              </div>
            </div>
            <div className="col-md-5">
              <div className="contact-img">
                <img src={Image} alt="contactImage" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <AppFooter/>
    </div>
  );
};

export default Contact;
