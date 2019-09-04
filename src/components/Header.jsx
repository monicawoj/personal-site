import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import TextLoop from "react-text-loop";

import colors from "styles/colors";
import dimensions from "styles/dimensions";
import Logo from "components/_ui/Logo";

const HeaderContainer = styled("div")`
  padding-top: 3em;
  padding-bottom: 1em;
`;

const HeaderContent = styled("div")`
  display: flex;
  justify-content: space-between;
`;

const HeaderLinks = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  max-width: 300px;

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
      margin: 2.5em;
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

const Tagline = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  h1,
  h2 {
    margin: 0;
  }
`;

const LogosLink = styled("a")`
  text-decoration: none;
  color: ${colors.themeBlue};
  &:hover {
    color: ${colors.themeGreen};
  }

  .english {
    display: inline;
  }
  .greek {
    display: none;
  }
  &:hover {
    .english {
      display: none;
    }

    .greek {
      display: inline;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Link to="/">
          <Logo width={100} height={100} />
        </Link>
        <HeaderLinks>
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
          <Link activeClassName="Link--is-active" to="/speaker">
            Speaking
            <div />
          </Link>
        </HeaderLinks>
      </HeaderContent>
      <HeaderContent>
        <Tagline>
          <h1>reflect&reason</h1>
          <h2>
            {"for the <3 of "}
            {
              <LogosLink
                href="https://en.wiktionary.org/wiki/%CE%BB%CF%8C%CE%B3%CE%BF%CF%82"
                className="Button--secondary"
                target="_blank"
              >
                <TextLoop
                  interval={4000}
                  adjustingSpeed={500}
                  springConfig={{ stiffness: 170, damping: 30 }}
                  children={[
                    "Logos",
                    "λόγος",
                    "thought",
                    "speech",
                    "story",
                    "information",
                    "Word",
                    "logic",
                    "explanation",
                    "contemplation",
                    "God",
                    "dialogue",
                    "creativity",
                    "rationality",
                    "rhetoric",
                    "discourse",
                  ]}
                />
              </LogosLink>
            }
            {}
          </h2>
        </Tagline>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
