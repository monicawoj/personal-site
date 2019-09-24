import React from "react";
import PropTypes from "prop-types";
import { RichText } from "prismic-reactjs";
import { graphql, Link } from "gatsby";
import styled from "@emotion/styled";
import colors from "styles/colors";
import dimensions from "styles/dimensions";
import { ThemeButton } from "components/theme";
import Layout from "components/Layout";
import ProjectCard from "components/ProjectCard";
import NatureAnimation from "components/NatureAnimation";
import HomeContent from "components/HomeContent";

const HeroContainer = styled("div")`
  padding-top: 1em;
  padding-bottom: 3em;
  margin-bottom: 6em;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    margin-bottom: 3em;
    flex-direction: column;
    width: 100%;
  }
`;

const AnimationContainer = styled("div")`
  @media (max-width: ${dimensions.maxwidthMobile}px) {
    width: 100%;
  }

  width: 50%;
`;

const Hero = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 50%;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    max-width: 90%;
  }

  h2 {
    margin-bottom: 1em;

    a {
      text-decoration: none;
      transition: all 100ms ease-in-out;
      color: ${colors.themeBlue};

      &:hover {
        cursor: pointer;
        transition: all 100ms ease-in-out;
        color: ${colors.white};
        background-color: ${colors.themeGreenDark};
      }
    }
  }
`;

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

const WorkAction = styled(Link)`
  font-weight: 600;
  text-decoration: none;
  color: currentColor;
  transition: all 150ms ease-in-out;
  margin-left: auto;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin: 0 auto;
  }

  span {
    margin-left: 1em;
    transform: translateX(-8px);
    display: inline-block;
    transition: transform 400ms ease-in-out;
  }

  &:hover {
    color: ${colors.themeGreenDark};
    transition: all 150ms ease-in-out;

    span {
      transform: translateX(0px);
      opacity: 1;
      transition: transform 150ms ease-in-out;
    }
  }
`;

const RenderBody = ({ home, projects, meta }) => (
  <>
    <HeroContainer>
      <AnimationContainer>
        <NatureAnimation />
      </AnimationContainer>
      <Hero>
        {RichText.render(home.hero_title)}
        <Link to={"/about"}>
          <ThemeButton>{home.hero_button_text[0].text}</ThemeButton>
        </Link>
      </Hero>
    </HeroContainer>

    <Section>
      <HomeContent content={home.content} />
    </Section>

    <Section>
      {projects.map((project, i) => (
        <ProjectCard
          key={i}
          category={project.node.project_category}
          title={project.node.project_title}
          description={project.node.project_preview_description}
          thumbnail={project.node.project_preview_thumbnail}
          uid={project.node._meta.uid}
        />
      ))}
      <WorkAction to={"/projects"}>
        See more work <span>&#8594;</span>
      </WorkAction>
    </Section>
  </>
);

export default ({ data }) => {
  //Required check for no data being returned
  const doc = data.prismic.allHomepages.edges.slice(0, 1).pop();
  const projects = data.prismic.allProjects.edges;

  if (!doc) return null;

  return (
    <Layout>
      <RenderBody home={doc.node} projects={projects} />
    </Layout>
  );
};

RenderBody.propTypes = {
  home: PropTypes.object.isRequired,
  projects: PropTypes.array.isRequired,
};

export const query = graphql`
  {
    prismic {
      allHomepages {
        edges {
          node {
            hero_title
            hero_button_text
            hero_button_link {
              ... on PRISMIC__ExternalLink {
                _linkType
                url
              }
            }
            content
          }
        }
      }
      allProjects {
        edges {
          node {
            project_title
            project_preview_description
            project_preview_thumbnail
            project_category
            project_post_date
            _meta {
              uid
            }
          }
        }
      }
    }
  }
`;
