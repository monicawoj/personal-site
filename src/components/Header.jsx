import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import styled from "@emotion/styled";
import TextLoop from "react-text-loop";
import Helmet from "react-helmet";

import Logo from "components/Logo";
import { ThemeLink } from "components/theme";
import NavBar from "./NavBar";
import dimensions from "styles/dimensions";
import { shape } from "prop-types";

const HeaderContainer = styled("div")`
  padding-top: 3em;
  padding-bottom: 1em;
`;

const HeaderContent = styled("div")`
  display: flex;
  justify-content: space-between;
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

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    h2 {
      font-size: 22px;
    }
  }
`;

const Header = () => {
  const query = graphql`
    query SiteMetaData {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `;
  const meta = useStaticQuery(query);
  return (
    <>
      <Helmet
        title={meta.title}
        titleTemplate={`%s | ${meta.title}`}
        meta={[
          {
            name: `description`,
            content: meta.description,
          },
          {
            property: `og:title`,
            content: meta.title,
          },
          {
            property: `og:description`,
            content: meta.description,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: meta.author,
          },
          {
            name: `twitter:title`,
            content: meta.title,
          },
          {
            name: `twitter:description`,
            content: meta.description,
          },
        ].concat(meta)}
      />
      <HeaderContainer>
        <HeaderContent>
          <Link to="/">
            <Logo width={100} height={100} />
          </Link>
          <NavBar />
        </HeaderContent>
        <HeaderContent>
          <Tagline>
            <h1>
              REFLECTING <span style={{ fontWeight: 300 }}>|</span> REASON
            </h1>
            <h2>
              <span style={{ fontWeight: 300 }}>{"for the <3 of "}</span>
              {
                <ThemeLink
                  href="https://en.wiktionary.org/wiki/%CE%BB%CF%8C%CE%B3%CE%BF%CF%82"
                  className="Button--secondary"
                  target="_blank"
                >
                  <TextLoop
                    interval={3800}
                    adjustingSpeed={200}
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
                      "communication",
                      "dialogue",
                      "rationality",
                      "rhetoric",
                      "discourse",
                      "God",
                    ]}
                  />
                </ThemeLink>
              }
            </h2>
          </Tagline>
        </HeaderContent>
      </HeaderContainer>
    </>
  );
};

export default Header;

Header.propTypes = {
  meta: shape({}).isRequired,
};
