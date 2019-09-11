import { useStaticQuery, graphql } from "gatsby";

export const useAboutData = () => {
  const {
    prismic: {
      allAbouts: { edges },
    },
  } = useStaticQuery(graphql`
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
  `);

  return edges[0].node;
};
