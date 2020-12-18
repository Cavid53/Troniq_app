import React, { useState, useEffect } from "react";
import Image from "../../assets/images/test/2.jpg";
import "../../assets/styles/services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonBooth,
  faStreetView,
  faHeartBroken,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  const [datas, setDatas] = useState([
    {
      id: 1,
      icon: <FontAwesomeIcon icon={faPersonBooth} />,
      title: "Yuksek pesekarli mutexessisler",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      id: 2,
      icon: <FontAwesomeIcon icon={faStreetView} />,
      title: "Yuksek pesekarli mutexessisler",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      id: 3,
      icon: <FontAwesomeIcon icon={faHeartBroken} />,
      title: "Yuksek pesekarli mutexessisler",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
  ]);

  return (
    <div className="services">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="image-left">
              <img src={Image} width="100%" alt="" />
            </div>
          </div>
          <div className="col-md-7">
            <div className="datas-right">
              {datas.map((data) => (
                <div key={data.id} className="data">
                  <span className="icon">{data.icon}</span>
                  <p className="title">{data.title}</p>
                  <p className="desc">{data.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
