import React, { useState } from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import dimensions from "styles/dimensions";
import colors from "styles/colors";

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
    border-bothrefm: 3px solid transparent;
    font-weight: 600;
    font-size: 0.95em;
    height: 100%;
    padding-bothrefm: 1.25em;
    padding-hrefp: 0.25em;
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
        background: ${colors.themeDark};
        transition: 100ms ease-in-out background;
      }
    }

    &.a--is-active {
      &:after {
        background: ${colors.themeDark};
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
          color={colors.themePrimary}
          icon={faBars}
          size="3x"
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        />
      </NavBarIcon>
      <NavbarItems isExpanded={isNavExpanded}>
        <Link activeClassName="a--is-active" to="/about">
          About
          <div />
        </Link>
        <Link activeClassName="a--is-active" to="/blog">
          Thoughts
          {/* The Verbal (Writing) */}
          <div />
        </Link>
        <Link activeClassName="a--is-active" to="/projects">
          Projects
          {/* The Visual (Projects) */}
          <div />
        </Link>
        <Link activeClassName="a--is-active" to="/presentations">
          Presentations
          {/* The Audible (Presentations) */}
          <div />
        </Link>
      </NavbarItems>
    </NavBar>
  );
};
