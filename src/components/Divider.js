import styled from "styled-components"
import config from "../config"
import { device } from "../media"

export const Divider = styled.div`
  color: ${config.lightGray};
  margin-top: ${config.space2};
  font-size: 2rem;
  text-align: center;

  @media ${device.tablet} {
    margin-top: ${config.space3};
  }

  &:before {
    content: "* * *";
  }
`
