import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link, RouterLink } from "../components/Link"
import Image from "./Image"
import config from "../config"
import { device } from "../media"
import { paragraphStyles } from "./Paragraph"

const OuterWrap = styled.figure`
  position: relative;
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  transition: 400ms ease;
  margin-top: ${props => (props.inBody ? config.space2 : "0")};
  margin-bottom: ${props => (props.inBody ? config.space2 : "0")};

  @media ${device.tablet} {
    margin-top: ${props => (props.inBody ? config.space3 : "0")};
    margin-bottom: ${props => (props.inBody ? config.space3 : "0")};
  }

  img {
    vertical-align: middle;
    width: 100%;
  }
`

const Wrapper = props => {
  return props.link ? (
    <OuterWrap inBody={props.inBody}>
      {props.link.startsWith("http") ? (
        <Link href={props.link}>{props.children}</Link>
      ) : (
        <RouterLink to={props.link}>{props.children}</RouterLink>
      )}
    </OuterWrap>
  ) : (
    <OuterWrap inBody={props.inBody}>{props.children}</OuterWrap>
  )
}

const InnerWrap = styled.div`
  background-color: ${props => (props.bgColor ? props.bgColor : "transparent")};
  padding-top: ${props => (props.padTop ? "1rem" : "0")};
  padding-right: ${props => (props.padRight ? "1rem" : "0")};
  padding-bottom: ${props => (props.padBottom ? "1rem" : "0")};
  padding-left: ${props => (props.padLeft ? "1rem" : "0")};

  @media ${device.tablet} {
    padding-top: ${props => (props.padTop ? "2rem" : "0")};
    padding-right: ${props => (props.padRight ? "2rem" : "0")};
    padding-bottom: ${props => (props.padBottom ? "2rem" : "0")};
    padding-left: ${props => (props.padLeft ? "2rem" : "0")};
  }

  @media ${device.laptop} {
    padding-top: ${props => (props.padTop ? "4rem" : "0")};
    padding-right: ${props => (props.padRight ? "4rem" : "0")};
    padding-bottom: ${props => (props.padBottom ? "4rem" : "0")};
    padding-left: ${props => (props.padLeft ? "4rem" : "0")};
  }
`

const Caption = styled.figcaption`
  ${paragraphStyles};
  width: 100%;
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  color: ${config.gray};
  padding-left: ${config.space1};
  padding-right: ${config.space1};
  margin-top: 0.5rem;

  @media ${device.tablet} {
    padding-left: ${config.space2};
    padding-right: ${config.space2};
  }

  @media ${device.laptop} {
    padding-left: ${config.space3};
    padding-right: ${config.space3};
  }
`

class Figure extends Component {
  render() {
    return (
      <Wrapper link={this.props.link} inBody={this.props.inBody}>
        <InnerWrap
          bgColor={this.props.bgColor}
          padTop={this.props.padTop}
          padRight={this.props.padRight}
          padBottom={this.props.padBottom}
          padLeft={this.props.padLeft}
        >
          {this.props.sizes ? (
            <Image
              sizes={this.props.sizes}
              sizesString={this.props.sizesString}
            />
          ) : (
            <img src={this.props.publicURL} alt="" />
          )}
        </InnerWrap>
        {this.props.caption && <Caption>{this.props.caption}</Caption>}
      </Wrapper>
    )
  }
}

Figure.propTypes = {
  sizes: PropTypes.object,
  sizesString: PropTypes.string
}

export default Figure
