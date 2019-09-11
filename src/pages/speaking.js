import React from "react";
import { shape } from "prop-types";
import Helmet from "react-helmet";
import { RichText } from "prismic-reactjs";
import styled from "@emotion/styled";
import dimensions from "styles/dimensions";
import Layout from "components/Layout";
import PresentationCard from "components/PresentationCard";
import { useSiteMetadata, useSpeakingData } from "../hooks";

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

const SpeakingPage = () => {
  const meta = useSiteMetadata();
  const { title, subtitle, presentations } = useSpeakingData();

  if (!title) return null;

  return (
    <Layout>
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
          {RichText.render(title)}
          {subtitle && RichText.render(subtitle)}
        </Section>
        <Section>
          {presentations.length &&
            presentations.map(item => <PresentationCard {...item} />)}
        </Section>
      </>
    </Layout>
  );
};

SpeakingPage.propTypes = {
  meta: shape({}).isRequired,
  data: shape({}).isRequired,
};

export default SpeakingPage;
