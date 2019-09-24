import React from "react";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import dimensions from "styles/dimensions";
import About from "components/About";
import Layout from "components/Layout";

const Section = styled("div")`
  margin-bottom: 10em;
  display: flex;
  flex-direction: column;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-bottom: 4em;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export default ({ data }) => {
  if (!data) return null;

  const aboutData = data.prismic.allAbouts.edges[0].node;

  return (
    <Layout>
      <Section>
        <h1>{aboutData.about_title[0].text}</h1>
        <About bio={aboutData.about_bio} socialLinks={aboutData.about_links} />
      </Section>
    </Layout>
  );
};

export const query = graphql`
  {
    prismic {
      allAbouts {
        edges {
          node {
            about_title
            about_bio
            _linkType
            about_links {
              about_link
            }
          }
        }
      }
    }
  }
`;
