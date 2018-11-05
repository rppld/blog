import styled from "styled-components"
import { color } from "../constants"

export const Divider = styled.div`
  color: ${color.lightGray};
  font-size: 2rem;
  text-align: center;

  &:before {
    content: "* * *";
  }
`
