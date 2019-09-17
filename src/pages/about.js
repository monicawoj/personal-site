import React from "react";
import { shape } from "prop-types";
import Helmet from "react-helmet";
import { RichText } from "prismic-reactjs";
import styled from "@emotion/styled";
import dimensions from "styles/dimensions";
import About from "components/About";
import Layout from "components/Layout";
import { useSiteMetadata, useAboutData } from "../hooks";

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

const AboutPage = ({ data, meta }) => (
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
    <Section>
      <h1>{data.about_title[0].text}</h1>
      <About bio={data.about_bio} socialLinks={data.about_links} />
    </Section>
  </>
);

export default () => {
  const metaData = useSiteMetadata();
  const aboutData = useAboutData();

  if (!aboutData) return null;

  return (
    <Layout>
      <AboutPage data={aboutData} meta={metaData} />
    </Layout>
  );
};

AboutPage.propTypes = {
  about: shape({}).isRequired,
  meta: shape({}).isRequired,
};
