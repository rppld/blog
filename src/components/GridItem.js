import styled from '@emotion/styled'
import { device } from '../theme'

export const GridItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;

  @media ${device.tablet} {
    grid-column: ${props =>
      props.size === 'small'
        ? 'span 2'
        : props.size === 'medium'
        ? 'span 3'
        : 'span 5'};
  }

  a {
    background-color: transparent;
    border: 0;
    text-decoration: none;
  }
`
