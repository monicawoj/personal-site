import React from "react";
import Moment from "react-moment";
import { RichText } from "prismic-reactjs";
import styled from "@emotion/styled";
import { shape, array, string } from "prop-types";

import { ThemeLink } from "components/theme";
import colors from "styles/colors";

const PresentationCardContainer = styled("div")`
  border: 1px solid ${colors.grey200};
  padding: 3em 2.5em 2.25em 2.5em;
  border-radius: 3px;
  text-decoration: none;
  color: currentColor;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.06);
  transition: all 150ms ease-in-out;
  margin-left: 2em;

  &:hover {
    box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.1);
    transition: all 150ms ease-in-out;
    cursor: pointer;

    .PresentationCardAction {
      color: ${colors.themeGreenDark};
      transition: all 150ms ease-in-out;

      span {
        transform: translateX(0px);
        opacity: 1;
        transition: transform 150ms ease-in-out;
      }
    }
  }
`;

const ConferenceName = styled("h3")`
  margin: 0;
  margin-top: 0.5em;
`;

const PresentationMetas = styled("div")`
  display: flex;
  align-datas: center;
  margin-top: 1.5em;
  justify-content: space-between;
  font-size: 0.85em;
  color: ${colors.grey600};
`;

const PresentationAuthor = styled("div")`
  margin: 0;
`;

const PresentationDate = styled("div")`
  margin: 0;
`;

const PresentationTitle = styled("div")`
  p:last-of-type {
    margin: 0;
  }
`;

const PresentationCard = ({
  conference_location: location,
  location_latlng: { latitude, longitude },
  presentation_date: date,
  conference_name: conferenceName,
  conference_link: conferenceLink,
  presentation_title: presentationTitle,
  presentation_link: presentationLink,
}) => {
  return (
    <PresentationCardContainer>
      <ConferenceName>
        <ThemeLink
          href={conferenceLink[0].text}
          className="Button--secondary"
          target="_blank"
        >
          {RichText.render(conferenceName)}
        </ThemeLink>
      </ConferenceName>
      <PresentationTitle>
        {RichText.render(presentationTitle)}
      </PresentationTitle>
      <PresentationMetas>
        <PresentationAuthor>{RichText.render(location)}</PresentationAuthor>
        <PresentationDate>
          <Moment format="MMMM D, YYYY">{date}</Moment>
        </PresentationDate>
      </PresentationMetas>
    </PresentationCardContainer>
  );
};

export default PresentationCard;

PresentationCard.propTypes = {
  conference_location: array.isRequired,
  location_latlng: shape({}).isRequired,
  presentation_date: string.isRequired,
  conference_name: array.isRequired,
  presentation_title: array.isRequired,
};
