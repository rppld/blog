import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import c from "../config"

const Wrapper = styled.header`
  position: relative;
  z-index: 0;
`

const FixedElement = styled.div`
  min-height: 100vh;
  max-width: 1180px;
  padding: ${c.space1};

  @media (min-width: ${c.bpNs}) {
    padding: ${c.space2};
  }

  @media (min-width: ${c.bpL}) {
    padding: ${c.space3};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    transition: 400ms;
    opacity: ${props => (props.show ? "1" : "0")};
  }
`

const Spacer = styled.div`
  @media (min-width: ${c.bpL}) {
    min-height: 100vh;
  }
`

const Title = styled.h1`
  margin-top: -0.75rem;
  margin-bottom: 0.75rem;
  font-size: ${c.f5};
  font-weight: 700;
  color: ${c.nearBlack};
  line-height: 1.25;
  transform: translateX(-1px);

  @media (min-width: ${c.bpNs}) {
    font-size: ${c.f6};
    transform: translateX(-2px);
  }

  @media (min-width: ${c.bpL}) {
    margin-bottom: 1rem;
    transform: translateX(-3px);
    font-size: ${c.f7};
  }

  @media (min-width: ${c.bpXl}) {
    transform: translateX(-3px);
    font-size: ${c.f8};
  }
`

const Lede = styled.h2`
  margin: 0;
  font-size: ${c.f1};
  letter-spacing: ${c.ls1};
  font-weight: 300;
  color: ${c.gray};

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

const Link = styled.a`
  transition-property: background-color, border-color;
  transition-duration: 400ms;
  text-decoration: none;
  background-color: rgba(187, 239, 253, 0.3);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  color: #1a1a1a;

  &:hover,
  &:focus {
    background-color: #bbeffd;
    border-bottom-color: #1a1a1a;
  }
`

const Header = props => (
  <Wrapper>
    <Spacer />

    <FixedElement show={props.show}>
      <div>
        <Title>Rppld.co — Photos</Title>

        <Lede>
          I'm Philipp Rappold, an information designer from Vienna, living and
          working in Amsterdam, and taking photos for fun. I've collected quite
          a few of them over time, so I made this archive of personal favourites
          to showcase the ones I'm most happy with. You can follow me on{" "}
          <Link href="https://twitter.com/rppld">Twitter</Link> and{" "}
          <Link href="https://www.instagram.com/philipprappold/">
            Instagram
          </Link>.
        </Lede>
      </div>
    </FixedElement>
  </Wrapper>
)

Header.propTypes = {
  show: PropTypes.bool
}

export default Header
