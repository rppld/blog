import styled from "styled-components"
import config from "../config"

export const Divider = styled.div`
  color: ${config.lightGray};
  font-size: 2rem;
  text-align: center;

  &:before {
    content: "* * *";
  }
`
