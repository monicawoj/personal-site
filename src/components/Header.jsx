import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"
import Logo from "components/_ui/Logo"

const HeaderContainer = styled("div")`
  padding-top: 3.75em;
  padding-bottom: 3em;
`

const HeaderContent = styled("div")`
  display: flex;
  justify-content: space-between;
`

const HeaderLinks = styled("div")`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 2em;
  justify-content: flex-end;
  max-width: 200px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    grid-gap: 5.5em;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-gap: 2.5em;
  }

  a {
    color: currentColor;
    text-decoration: none;
    border-bottom: 3px solid transparent;
    font-weight: 600;
    font-size: 0.95em;
    height: 100%;
    padding-bottom: 1.25em;
    padding-top: 0.25em;
    display: block;
    position: relative;
    width: 40px;

    div {
      width: 100%;
      height: 3px;
      background: transparent;
      transition: 100ms ease-in-out background;
    }

    &:hover {
      div {
        background: ${colors.blue500};
        transition: 100ms ease-in-out background;
      }
    }

    &.Link--is-active {
      &:after {
        background: ${colors.blue500};
        transition: 100ms ease-in-out background;
      }
    }
  }
`

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
`

const Header = () => (
  <HeaderContainer>
    <HeaderContent>
      <Link to="/">
        <Logo width={50} height={50} />
      </Link>
      <HeaderLinks>
        <Link activeClassName="Link--is-active" to="/work">
          Work
          <div />
        </Link>
        <Link activeClassName="Link--is-active" to="/blog">
          Blog
          <div />
        </Link>
        <Link activeClassName="Link--is-active" to="/about">
          About
          <div />
        </Link>
      </HeaderLinks>
    </HeaderContent>
    <HeaderContent>
      <Tagline>
        <h1>reflect&refract</h1>
        <h2>{"for the <3 of Logos"}</h2>
      </Tagline>
    </HeaderContent>
  </HeaderContainer>
)

export default Header
