import React, { useState } from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import dimensions from "styles/dimensions";
import colors from "styles/colors";

// const NavBar = styled("div")`
//   display: flex;
//   flex-direction: row-reverse;
//   align-items: center;
//   justify-content: center;

//   @media (max-width: ${dimensions.maxwidthTablet}px) {
//     flex-direction: column;
//     align-items: flex-end;
//     justify-content: flex-end;
//   }
// `;

const NavBar = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const NavBarIcon = styled("div")`
  display: none;
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    display: flex;
    margin: 1em;
  }
`;

const NavbarItems = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    display: ${props => (props.isExpanded ? "flex" : "none")};
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
  }

  a {
    margin: 2em;
    color: currentColor;
    text-decoration: none;
    border-bottom: 3px solid transparent;
    font-weight: 600;
    font-size: 0.95em;
    height: 100%;
    padding-bottom: 1.25em;
    padding-top: 0.25em;
    display: block;
    position: relative;

    @media (max-width: ${dimensions.maxwidthTablet}px) {
      margin: 5.5em;
    }

    @media (max-width: ${dimensions.maxwidthMobile}px) {
      margin: 1em;
    }

    div {
      width: 100%;
      height: 3px;
      background: transparent;
      transition: 100ms ease-in-out background;
    }

    &:hover {
      div {
        background: ${colors.themeGreenDark};
        transition: 100ms ease-in-out background;
      }
    }

    &.Link--is-active {
      &:after {
        background: ${colors.themeGreenDark};
        transition: 100ms ease-in-out background;
      }
    }
  }
`;

export default () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <NavBar>
      <NavBarIcon>
        <FontAwesomeIcon
          color={colors.themeBlue}
          icon={faBars}
          size="3x"
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        />
      </NavBarIcon>
      <NavbarItems isExpanded={isNavExpanded}>
        <Link activeClassName="Link--is-active" to="/about">
          About
          <div />
        </Link>
        <Link activeClassName="Link--is-active" to="/blog">
          Blog
          <div />
        </Link>
        <Link activeClassName="Link--is-active" to="/work">
          My Work
          <div />
        </Link>
        <Link activeClassName="Link--is-active" to="/speaking">
          Speaking
          <div />
        </Link>
      </NavbarItems>
    </NavBar>
  );
};
