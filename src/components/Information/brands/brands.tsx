import React from "react";

import logoANGEL from "../../../assets/images/logoANGEL.svg";
import logoMEDIUM from "../../../assets/images/logoMEDIUM.svg";
import logoOMS from "../../../assets/images/logoOMS.svg";
import logoUZU from "../../../assets/images/logoUZU.svg";
import logoWEDDING from "../../../assets/images/logoWEDDING.svg";
import "./brands.scss";

const Brands = () => {
  return (
    <div className="brands">
      <div className="brands__item">
        <img src={logoANGEL} alt="logo" className="filter-gray" />
        <img src={logoMEDIUM} alt="logo" className="filter-gray" />
        <img src={logoOMS} alt="logo" className="filter-gray" />
        <img src={logoUZU} alt="logo" className="filter-gray" />
        <img src={logoWEDDING} alt="logo" className="filter-gray" />
      </div>
    </div>
  );
};

export default Brands;
