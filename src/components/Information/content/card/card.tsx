import { Component } from "react";

import Sound from "../../../../assets/images/sound.png";
import Switch from "../../../../assets/images/switch.png";
import { IFormItem } from "../../../../pages/auth/auth";
import "./card.scss";

interface Props {
  form: IFormItem;
}

const Card = (props: Props) => {
  const { form } = props;
  return (
    <div className="card">
      <div className="card__info">
        <div className="card__info--top">
          <div className="top__logo">finely</div>
          <img className="top__sound" src={Sound} alt="sound"></img>
        </div>

        <div className="card__info-numberID">
          {(form?.numberID as string)?.split("-").map((item: string) => (
            <span>{item}</span>
          ))}
        </div>

        <div className="card__info-auth">
          <img className="auth__switch" src={Switch} alt=""></img>
          <div className="auth__name">{form.fullname}</div>
          <div className="auth__date">{form.expiryDate}</div>
        </div>
      </div>

      <div className="card__text">
        Universal Card
        <div className="card__text-dot1"></div>
        <div className="card__text-dot2"></div>
      </div>
    </div>
  );
};

export default Card;
