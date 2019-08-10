import styled from '@emotion/styled'
import { device } from '../theme'

export const Grid = styled.div`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;

  @media ${device.tablet} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 2rem;
  }

  @media ${device.laptop} {
    grid-gap: 4rem;
  }
`
