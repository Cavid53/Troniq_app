import React from "react";
import Image from "../../assets/images/slider/IMG_8702.jpg";
import "../../assets/styles/writeOur.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

const WriteOur = () => {
  const image = Image;
  return (
    <div className="write-our">
      <div className="row">
        <div className="col-md-6">
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
              ullam ipsa laboriosam dolor perspiciatis voluptatem eaque natus,
              voluptate sit possimus architecto doloribus aperiam nostrum nulla
              culpa iusto. Voluptatibus, dignissimos magni.
            </p>
          </div>
          <div className="icon-text">
            <p>Bize yazin</p>
            <FontAwesomeIcon className="font-icon" icon={faArrowAltCircleRight} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="img">
            <img src={image} alt="" style={{ width: "100%" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteOur;
