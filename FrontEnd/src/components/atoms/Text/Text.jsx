import React from "react";

const Text = ({ children, className = "" }) => {
  return <p className={`mt-1 text-base md:text-lg ${className}`}>{children}</p>;
};

export default Text;
