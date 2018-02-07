import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import c from "../config"

const Wrapper = styled.footer`
  max-width: 1280px;
  padding: ${c.space1};

  @media (min-width: ${c.bpNs}) {
    padding: ${c.space2};
  }

  @media (min-width: ${c.bpL}) {
    padding: ${c.space3};
  }
`

const SmallPrint = styled.p`
  margin: 0;
  font-size: ${c.f1};
  letter-spacing: ${c.ls1};
  font-weight: 300;
  color: ${c.nearBlack};

  @media (min-width: ${c.bpNs}) {
    font-size: ${c.f2};
  }

  @media (min-width: ${c.bpL}) {
    font-size: ${c.f3};
  }

  @media (min-width: ${c.bpXl}) {
    font-size: ${c.f4};
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
