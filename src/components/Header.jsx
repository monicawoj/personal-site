import React, { useState, useEffect } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import styled from "@emotion/styled";
import Helmet from "react-helmet";
import HeaderTextLoop from "components/HeaderTextLoop";
import Logo from "components/Logo";
import { ThemeLink } from "components/theme";
import NavBar from "./NavBar";
import dimensions from "styles/dimensions";
import title_image from "../assets/images/website_title.png";

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
  const [showLoop, setShowLoop] = useState(false);
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

  useEffect(() => {
    setShowLoop(true);
    return () => setShowLoop(false);
  }, []);

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
            {/* <h1>THE POLISH AMERICAN</h1> */}
            <img src={title_image} width={650} height={100} />
            <h2>
              <span style={{ fontWeight: 300 }}>{"for the <3 of "}</span>
              {
                <ThemeLink
                  href="https://en.wiktionary.org/wiki/%CE%BB%CF%8C%CE%B3%CE%BF%CF%82"
                  className="Button--secondary"
                  target="_blank"
                >
                  {showLoop ? <HeaderTextLoop /> : <span>Logos</span>}
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
