import styled from "styled-components"
import config from "../config"
import { device } from "../media"

export const Body = styled.div`
  padding: ${config.space1};

  @media ${device.tablet} {
    padding: ${config.space2};
  }

  @media ${device.laptop} {
    padding: ${config.space3};
  }
`
