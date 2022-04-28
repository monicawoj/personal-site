import React from "react";
import { injectGlobal } from "emotion";
import logo from "../assets/images/logo.png";

console.log(logo);

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Oregano&display=swap');
`;

const Logo = ({ width, height }) => {
  return <img src={logo} width={width} height={height} />;
};

export default Logo;
