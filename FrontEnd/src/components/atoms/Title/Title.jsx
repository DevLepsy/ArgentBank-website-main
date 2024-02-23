import React from "react";

const Title = ({ children, className = "" }) => {
  return <h2 className={`font-bold md:text-2xl ${className}`}>{children}</h2>;
};

export default Title;
