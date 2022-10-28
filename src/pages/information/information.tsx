import React, { Component } from "react";
import FormItem from "../../components/FormItem/form-item";

import "./information.scss";
import Header from "../../components/Information/Header/header";
import { useLocation } from "react-router-dom";
import Content from "../../components/Information/content/content";
import { IFormItem } from "../auth/auth";
import Brands from "../../components/Information/brands/brands";

const Information = () => {
  const location = useLocation();
  console.log(location?.state);
  const form: IFormItem = location?.state.form;

  return (
    <div className="information">
      <div className="information__main">
        <Header />
        <Content form={form} />
        <Brands />
      </div>
    </div>
  );
};

export default Information;
