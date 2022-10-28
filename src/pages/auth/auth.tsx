import React, { Component, useState } from "react";

import FormItem from "../../components/FormItem/form-item";
import Fb from "../../assets/images/icons8-facebook-48.png";
import "./auth.scss";
import { useNavigate } from "react-router-dom";

export interface IFormItem {
  fullname: string;
  email: string;
  numberID: number | string;
  expiryDate: string;
}

const Auth = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<IFormItem>({
    fullname: "",
    email: "",
    numberID: "",
    expiryDate: "",
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleAuth = () => {
    if (true) {
      navigate("/information", {
        state: { form },
      });
    }
  };

  return (
    <div className="auth">
      <div className="auth__welcome">
        <div className="auth__welcome--black">Create Acount,</div>
        <div className="auth__welcome--gray">Sign up to get started!</div>
      </div>

      <form className="auth__form">
        <div className="form__input">
          <FormItem form={form} handleInputChange={handleInputChange} />
        </div>
        <div className="form__forgot-password">Forgot password?</div>
        <button
          type="button"
          className="form__button--gradients"
          onClick={handleAuth}
        >
          Sign up
        </button>
        <button className="form__button--facebook">
          <img src={Fb} alt="logo-fb" />
          Connect with Facebook
        </button>
      </form>

      <div className="auth__text">
        I'm already a member,<span>Sign In</span>
      </div>
    </div>
  );
};

export default Auth;
