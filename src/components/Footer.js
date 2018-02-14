import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import config from "../config"
import { device } from "../media"

const Wrapper = styled.footer`
  max-width: 1280px;
  padding: ${config.space1};

  @media ${device.tablet} {
    padding: ${config.space2};
  }

  @media ${device.laptop} {
    padding: ${config.space3};
  }
`

const SmallPrint = styled.p`
  margin: 0;
  font-size: ${config.f1};
  letter-spacing: ${config.ls1};
  font-weight: 300;
  color: ${config.nearBlack};

  @media ${device.tablet} {
    font-size: ${config.f2};
  }

  @media ${device.laptop} {
    font-size: ${config.f3};
  }

  @media ${device.laptopL} {
    font-size: ${config.f4};
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
