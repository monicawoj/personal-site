import React from "react";
import { injectGlobal } from "emotion";
import colors from "styles/colors";

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Oregano&display=swap');
`;

const Logo = ({ width, height }) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    preserveAspectRatio="xMidYMid meet"
    width={width}
    height={height}
    viewBox="0 0 601.37 647.42"
  >
    <text
      class="logo-letter"
      id="b2YgIGjlok"
      x="396.66"
      y="256.99"
      font-size="461"
      font-family="Oregano"
      font-weight="400"
      font-style="normal"
      letter-spacing="0"
      alignment-baseline="before-edge"
      transform="matrix(1 0 0 1 -136.13355956794703 -212.37214834726979)"
      style={{ lineHeight: "100%" }}
      xmlSpace="preserve"
      dominant-baseline="text-before-edge"
      fill={colors.themeBlue}
    >
      <tspan
        x="396.66"
        dy="0em"
        alignment-baseline="before-edge"
        dominant-baseline="text-before-edge"
        text-anchor="start"
      >
        R
      </tspan>
    </text>

    <text
      class="logo-letter"
      id="daQWgPKoV"
      x="396.66"
      y="256.99"
      font-size="461"
      font-family="Oregano"
      font-weight="400"
      font-style="normal"
      letter-spacing="0"
      alignment-baseline="before-edge"
      transform="matrix(-1 0 0 -1 787.1818085728441 844.9504776545803)"
      style={{ lineHeight: "100%" }}
      xmlSpace="preserve"
      dominant-baseline="text-before-edge"
      fill={colors.themeBlue}
    >
      <tspan
        x="396.66"
        dy="0em"
        alignment-baseline="before-edge"
        dominant-baseline="text-before-edge"
        text-anchor="start"
      >
        R
      </tspan>
    </text>
  </svg>
);

export default Logo;
