import styled from "styled-components"
import { device } from "../media"

export const ProjectGridItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${props => (props.bgColor ? props.bgColor : "transparent")};
  padding-top: ${props => (props.padTop ? "1rem" : "0")};
  padding-left: ${props => (props.padLeft ? "1rem" : "0")};
  padding-right: ${props => (props.padRight ? "1rem" : "0")};

  @media ${device.tablet} {
    padding-top: ${props => (props.padTop ? "2rem" : "0")};
    padding-left: ${props => (props.padLeft ? "2rem" : "0")};
    padding-right: ${props => (props.padRight ? "2rem" : "0")};
    grid-column: ${props =>
      props.size === 3 ? "span 3" : props.size === 2 ? "span 2" : "span 1"};
  }

  @media ${device.laptop} {
    padding-top: ${props => (props.padTop ? "4rem" : "0")};
    padding-left: ${props => (props.padLeft ? "4rem" : "0")};
    padding-right: ${props => (props.padRight ? "4rem" : "0")};
  }
`
