import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import image from "../../assets/images/slider/1.jpg";
import "../../assets/styles/slider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight,
  faArrowAltCircleLeft,
} from "@fortawesome/free-solid-svg-icons";

const Slider = () => {
  const nextIconSlider = (
    <span className="nextIcon">
      <FontAwesomeIcon icon={faArrowAltCircleRight} />
    </span>
  );
  const prevIconSlider = (
    <span className="prevIcon">
      <FontAwesomeIcon icon={faArrowAltCircleLeft} />
    </span>
  );

  return (
    <Carousel nextIcon={nextIconSlider} prevIcon={prevIconSlider}>
      <Carousel.Item>
        <img className="d-block w-100" src={image} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image} alt="Third slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image} alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
