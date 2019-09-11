import { useStaticQuery, graphql } from "gatsby";

export const useSpeakingData = () => {
  const {
    prismic: {
      allSpeakings: { edges },
    },
  } = useStaticQuery(graphql`
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
                location_latlng
                presentation_date
                presentation_title
              }
            }
          }
        }
      }
    }
  `);

  return edges[0].node;
};
