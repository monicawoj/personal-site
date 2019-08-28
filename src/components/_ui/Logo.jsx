import React from "react"
import { injectGlobal } from "emotion"

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Oregano&display=swap');
`

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
    <defs>
      <linearGradient
        id="gradientb744Tu1pF"
        gradientUnits="userSpaceOnUse"
        x1="558.49"
        y1="612.19"
        x2="701.72"
        y2="852.37"
      >
        <stop style={{ stopColor: "#87ba7e", stopOpacity: "1" }} offset="0%" />
        <stop
          style={{ stopColor: "#004100", stopOpacity: "1" }}
          offset="100%"
        />
      </linearGradient>
      <linearGradient
        id="gradientcQqVVHkEW"
        gradientUnits="userSpaceOnUse"
        x1="558.49"
        y1="612.19"
        x2="701.72"
        y2="852.37"
      >
        <stop style={{ stopColor: "#87ba7e", stopOpacity: "1" }} offset="0%" />
        <stop
          style={{ stopColor: "#004100", stopOpacity: "1" }}
          offset="100%"
        />
      </linearGradient>
    </defs>
    <path d="M611.36 619.87L611.36 11.87" id="f1yQ2GTWc" />
    <path d="M9.99 629.76L9.99 21.76" id="bFxEGvCfg" />
    <text
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

    <g>
      <g id="fpy2zxNm6">
        <use
          xlinkHref="#b2YgIGjlok"
          opacity="1"
          fill="url(#gradientb744Tu1pF)"
        />
        <g>
          <use
            xlinkHref="#b2YgIGjlok"
            opacity="1"
            fill-opacity="0"
            stroke="#1ca8f0"
            stroke-width="0"
            stroke-opacity="1"
          />
        </g>
      </g>
      <g id="d5FtCH1cXC">
        <use
          xlinkHref="#daQWgPKoV"
          opacity="1"
          fill="url(#gradientcQqVVHkEW)"
        />
        <g>
          <use
            xlinkHref="#daQWgPKoV"
            opacity="1"
            fill-opacity="0"
            stroke="#1ca8f0"
            stroke-width="0"
            stroke-opacity="1"
          />
        </g>
      </g>
    </g>
  </svg>
)

export default Logo
