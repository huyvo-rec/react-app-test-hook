import { Component } from "react";
import { IFormItem } from "../../../pages/auth/auth";
import Card from "./card/card";

import "./content.scss";
import Slider from "./slider/slider";

interface Props {
  form: IFormItem;
}

const Content = (props: Props) => {
  const { form } = props;
  console.log("content form", form.fullname);
  return (
    <div className="content">
      <div className="content__container">
        <div className="content__slider">
          <Slider />
        </div>

        <div className="content__card">
          <Card form={form} />
        </div>
      </div>
    </div>
  );
};

export default Content;
