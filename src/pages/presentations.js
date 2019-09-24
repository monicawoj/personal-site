import React from "react";
import { shape } from "prop-types";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import dimensions from "styles/dimensions";
import Layout from "components/Layout";
import PresentationCard from "components/PresentationCard";

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

const PresentationsPage = ({ data }) => {
  const { title, presentations } = data;
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
    </Layout>
  );
};

export default ({ data }) => {
  if (!data) return null;

  const pageData = data.prismic.allSpeakings.edges[0].node;
  return <PresentationsPage data={pageData} />;
};

PresentationsPage.propTypes = {
  data: shape({}).isRequired,
};

export const query = graphql`
  {
    prismic {
      allSpeakings {
        edges {
          node {
            title
            subtitle
            _linkType
            presentations {
              conference_location
              conference_name
              conference_link
              location_latlng
              presentation_date
              presentation_title
            }
          }
        }
      }
    }
  }
`;
