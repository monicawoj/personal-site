import React from "react";
import styled from "@emotion/styled";
import { RichText } from "prismic-reactjs";
import PropTypes from "prop-types";

import dimensions from "styles/dimensions";
import colors from "styles/colors";

const AboutContainer = styled("div")`
  padding-top: 1em;
  display: grid;
  grid-template-columns: 1fr 8em;
  grid-gap: 3em;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    display: flex;
    flex-direction: column;
  }
`;

const AboutLinkContainer = styled("div")`
  padding-top: 1em;
  padding-bottom: 3em;
  display: flex;
  flex-direction: column;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-row: 2;
  }
`;

const AboutLink = styled("a")`
  margin-bottom: 1.5em;
  font-weight: 600;
  line-height: 1.9;
  text-decoration: none;
  color: currentColor;

  span {
    margin-left: 1em;
    transform: translateX(-8px);
    display: inline-block;
    opacity: 0;
    transition: all 400ms ease-in-out;
  }

  &:hover {
    span {
      transform: translateX(0px);
      opacity: 1;
      transition: all 150ms ease-in-out;
    }
  }
`;

const AboutBio = styled("div")`
  padding-bottom: 3em;
  border-right: 1px solid ${colors.themeBlue};
  padding-right: 3em;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-row: 2;
  }
`;

const About = ({ bio, socialLinks }) => (
  <AboutContainer>
    <AboutBio>{RichText.render(bio)}</AboutBio>
    <AboutLinkContainer>
      <AboutLink
        href="mailto:monica.wojciechowski@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Email me
        <span>&#8594;</span>
      </AboutLink>
      {socialLinks.map((social, i) => (
        <AboutLink
          key={i}
          href={
            social.about_link[0].spans[0]
              ? social.about_link[0].spans[0].data.url
              : ""
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          {social.about_link[0].text}
          <span>&#8594;</span>
        </AboutLink>
      ))}
    </AboutLinkContainer>
  </AboutContainer>
);

export default About;

About.propTypes = {
  bio: PropTypes.array.isRequired,
  socialLinks: PropTypes.array.isRequired,
};
