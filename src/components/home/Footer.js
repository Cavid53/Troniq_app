import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMailBulk,
  faPhone,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import "../../assets/styles/footer.css";
import Icon from "../../assets/icons/icon1.png";

const AppFooter = () => {
  return (
    <div className="footer-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12  d-flex justify-content-center">
            <div className="icon-footer">
              <img src={Icon} alt="Icon" />
            </div>
          </div>
          <div className="line"></div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4 d-flex justify-content-center">
            <div className="mail">
              <div className="mail-icon">
                <FontAwesomeIcon icon={faMailBulk} />
              </div>
              <div className="mail-value">
                <span>info@troniq.az</span>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-center">
            <div className="phone">
              <div className="phone-icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="phone-value">
                <span>0515613883</span>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-center">
            <div className="location ">
              <div className="location-icon">
                <FontAwesomeIcon icon={faLocationArrow} />
              </div>
              <div className="location-value">
                <span>Baku, Azerbaijan</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="socials">
            <ul>
              <li>
                <FontAwesomeIcon icon={faFacebookF} />
              </li>
              <li>
                <FontAwesomeIcon icon={faTwitter} />
              </li>
              <li>
                <FontAwesomeIcon icon={faLinkedin} />
              </li>
              <li>
                <FontAwesomeIcon icon={faInstagram} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppFooter;
