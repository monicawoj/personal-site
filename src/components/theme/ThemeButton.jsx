import React from "react";
import styled from "@emotion/styled";
import colors from "styles/colors";
import dimensions from "styles/dimensions";

const ButtonContainer = styled("button")`
  padding: 1em 2em;
  background: ${colors.themePrimary};
  font-weight: 600;
  color: white;
  outline: none;
  border: none;
  font-size: 1rem;
  border-radius: 2px;
  position: relative;
  transition: background 100ms ease-in-out;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    padding: 0.8em 1.8em;
    font-size: 1em;
  }

  p {
    margin: 0;
  }

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      ${colors.themeSecondary} 0%,
      ${colors.themePrimary} 100%
    );
    z-index: -1;
  }

  &:hover {
    cursor: pointer;
    background: transparent;
    transition: background 100ms ease-in-out;
  }

  &.Button--secondary {
    background: ${colors.themeSecondary};
    color: ${colors.white};
    padding: 0.95em 1.8em;
    font-size: 0.95rem;

    &:hover {
      background: ${colors.themeDark};
      transition: background 100ms ease-in-out;
    }
  }
`;

export const ThemeButton = ({ children, ...props }) => (
  <ButtonContainer onClick={props.onClick} {...props}>
    {children}
  </ButtonContainer>
);
