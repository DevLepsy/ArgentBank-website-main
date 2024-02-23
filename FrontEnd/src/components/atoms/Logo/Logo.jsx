import React from "react";
import { Link } from "react-router-dom";
import logoArgentBank from "../../../assets/img/argentBankLogo.webp";

const Logo = () => {
  <Link to="/">
    <img
      src={logoArgentBank}
      alt="Argent Bank Logo"
      className="W-[200px] max-w-full"
    />
  </Link>;
};

export default Logo;
