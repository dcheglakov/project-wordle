import React from "react";

function Banner({ children, variant }) {
  return <div className={`${variant} banner`}>{children}</div>;
}

export default Banner;
