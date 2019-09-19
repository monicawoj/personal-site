import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import TextLoop from "react-text-loop";

import Logo from "components/Logo";
import { ThemeLink } from "components/theme";
import NavBar from "./NavBar";
import dimensions from "styles/dimensions";

const HeaderContainer = styled("div")`
  padding-top: 3em;
  padding-bottom: 1em;
`;

const HeaderContent = styled("div")`
  display: flex;
  justify-content: space-between;
`;

const Tagline = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  h1,
  h2 {
    margin: 0;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    h2 {
      font-size: 22px;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Link to="/">
          <Logo width={100} height={100} />
        </Link>
        <NavBar />
      </HeaderContent>
      <HeaderContent>
        <Tagline>
          <h1>
            REFLECTING <span style={{ fontWeight: 300 }}>|</span> REASON
          </h1>
          <h2>
            <span style={{ fontWeight: 300 }}>{"for the <3 of "}</span>
            {
              <ThemeLink
                href="https://en.wiktionary.org/wiki/%CE%BB%CF%8C%CE%B3%CE%BF%CF%82"
                className="Button--secondary"
                target="_blank"
              >
                <TextLoop
                  interval={3800}
                  adjustingSpeed={200}
                  springConfig={{ stiffness: 170, damping: 30 }}
                  children={[
                    "Logos",
                    "λόγος",
                    "thought",
                    "speech",
                    "story",
                    "information",
                    "Word",
                    "logic",
                    "explanation",
                    "contemplation",
                    "communication",
                    "dialogue",
                    "rationality",
                    "rhetoric",
                    "discourse",
                    "God",
                  ]}
                />
              </ThemeLink>
            }
          </h2>
        </Tagline>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
