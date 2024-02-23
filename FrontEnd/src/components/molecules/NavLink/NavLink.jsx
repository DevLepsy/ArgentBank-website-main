import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../atoms/Icon/Icon";

const NavLink = ({ to, icon, children }) => (
  <Link to={to} className="flex items-center font-semibold hover:underline">
    <Icon icon={icon} />
    {children}
  </Link>
);

export default NavLink;
