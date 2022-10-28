import { Component } from "react";

import "./slider.scss";

const Slider = () => {
  return (
    <div className="slider">
      <div className="slider__text">
        <p className="slider__text--gradients">Your finances in your pocket</p>

        <div className="slider__text--black font-mulish">
          Get your personal <span>Credit card now</span>
        </div>
        <div className="slider__text--small font-mulish">
          Rewards and benefits without the downsides of a credit card.
          Simplicity and transparency buit right in. Leave money issue. with us
          and focus on your core business.
        </div>
        <div className="slider__text-button">
          <button>Learn more</button>
        </div>
      </div>

      <div className="slider__dot">
        <span className="dot__item dot__item--active"></span>
        <span className="dot__item"></span>
        <span className="dot__item"></span>
      </div>
    </div>
  );
};

export default Slider;
