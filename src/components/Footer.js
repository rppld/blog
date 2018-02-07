import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import c from "../config"

const Wrapper = styled.footer`
  max-width: 1280px;
  padding: ${c.space1};

  @media (min-width: 30em) {
    padding: ${c.space2};
  }

  @media (min-width: 60em) {
    padding: ${c.space3};
  }
`

const SmallPrint = styled.p`
  margin: 0;
  font-size: ${c.f1};
  letter-spacing: ${c.ls1};
  font-weight: 300;
  color: ${c.nearBlack};

  @media (min-width: 30em) {
    font-size: ${c.f2};
  }

  @media (min-width: 60em) {
    font-size: ${c.f3};
  }
`

const Footer = props => (
  <Wrapper>
    <SmallPrint>
      All photos &copy; {new Date().getFullYear()} {props.author}.
    </SmallPrint>
  </Wrapper>
)

Footer.propTypes = {
  author: PropTypes.string
}

export default Footer
