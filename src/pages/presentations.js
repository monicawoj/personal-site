import React from "react";
import { shape } from "prop-types";
import Helmet from "react-helmet";
import styled from "@emotion/styled";
import dimensions from "styles/dimensions";
import Layout from "components/Layout";
import PresentationCard from "components/PresentationCard";
import { usePresentationsData, useSiteMetadata } from "../hooks";

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

const TitleContainer = styled("div")`
  margin: 0;
`;

const PresentationsPage = () => {
  const meta = useSiteMetadata();
  const { title, presentations } = usePresentationsData();
  const sortByDateAsc = (a, b) =>
    new Date(b.presentation_date) - new Date(a.presentation_date);
  const sortByDateDesc = (a, b) =>
    new Date(a.presentation_date) - new Date(b.presentation_date);

  if (!title || !presentations.length) return null;

  const pastPresentations = presentations
    .filter(item => new Date(item.presentation_date) <= new Date())
    .sort(sortByDateAsc);
  const upcomingPresentations = presentations
    .filter(item => new Date(item.presentation_date) > new Date())
    .sort(sortByDateDesc);

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
          <TitleContainer>
            <h1>{title[0].text}</h1>
            {/* <h2>{subtitle && subtitle[0].text}</h2> */}
          </TitleContainer>
          <h3>Upcoming</h3>
          {upcomingPresentations.map(item => (
            <PresentationCard
              {...item}
              key={`${item.presentation_date}_${item.conference_name}`}
            />
          ))}
          <h3>Past</h3>
          {pastPresentations.map(item => (
            <PresentationCard
              {...item}
              key={`${item.presentation_date}_${item.conference_name}`}
            />
          ))}
        </Section>
      </>
    </Layout>
  );
};

PresentationsPage.propTypes = {
  meta: shape({}).isRequired,
  data: shape({}).isRequired,
};

export default PresentationsPage;
