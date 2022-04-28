import styled from "@emotion/styled";
import colors from "styles/colors";

export const ThemeLink = styled("a")`
  text-decoration: none;
  color: ${colors.themePrimary};
  &:hover {
    color: ${colors.themeSecondary};
  }
`;
