import styled from "styled-components"
import { device } from "../media"

export const GridItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${device.tablet} {
    grid-column: ${props =>
      props.size === "small"
        ? "span 2"
        : props.size === "medium" ? "span 3" : "span 5"};
  }
`
