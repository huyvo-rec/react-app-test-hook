import { Component } from "react";
import { IFormItem } from "../../../pages/auth/auth";

import Sound from "../../../assets/images/sound.png";
import Switch from "../../../assets/images/switch.png";

import "./content.scss";

interface Props {
  form: IFormItem;
}

const Content = (props: Props) => {
  const { form } = props;
  console.log("content form", form.fullname);
  return (
    <div className="information__content">
      <div className="content__main">
        <div className="content__main--slider">
          <div className="slider__text">
            <p className="slider__text--gradients">
              Your finances in your pocket
            </p>

            <div className="slider__text--black font-mulish">
              Get your personal <span>Credit card now</span>
            </div>
            <div className="slider__text--small font-mulish">
              Rewards and benefits without the downsides of a credit card.
              Simplicity and transparency buit right in. Leave money issue. with
              us and focus on your core business.
            </div>
            <div className="slider__text--button">
              <button>Learn more</button>
            </div>
          </div>

          <div className="slider__div-dot">
            <span className="div-dot__item div-dot__item--active"></span>
            <span className="div-dot__item"></span>
            <span className="div-dot__item"></span>
          </div>
        </div>
        <div className="content__main--card">
          <div className="card__info">
            <div className="card__info--top">
              <div className="top__logo">finely</div>
              <img className="top__sound" src={Sound} alt="sound"></img>
            </div>

            <div className="card__info--numberID">
              {(form?.numberID as string)?.split("-").map((item: string) => (
                <span>{item}</span>
              ))}
            </div>

            <div className="card__info--auth">
              <img className="auth__switch" src={Switch} alt=""></img>
              <div className="auth__name">{form.fullname}</div>
              <div className="auth__date">{form.expiryDate}</div>
            </div>
          </div>

          <div className="card__text">
            Universal Card
            <div className="card__text--dot"></div>
            <div className="card__text--dot-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
