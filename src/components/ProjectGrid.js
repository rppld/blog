import styled from "styled-components"
import { device } from "../media"

export const ProjectGrid = styled.div`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;

  @media ${device.tablet} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`
