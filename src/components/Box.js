import styled, { css } from 'styled-components'
import { device } from '../media'

export const Box = styled.div`
  position: relative;

  ${props =>
    props.gridGap &&
    css`
      grid-gap: ${props.gridGap}rem;
    `}

  ${props =>
    props.gridTemplateColumns &&
    css`
      grid-template-columns: repeat(${props.gridTemplateColumns}, 1fr);
    `}

  ${props =>
    props.alignItems &&
    css`
      align-items: ${props.alignItems};
    `}

  ${props =>
    props.justifyContent &&
    css`
      justify-content: ${props.justifyContent};
    `}

  ${props =>
    props.flexDirection &&
    css`
      flex-direction: ${props.flexDirection};
    `}
  
  ${props =>
    props.display &&
    css`
      display: ${props.display};
    `}

  ${props =>
    props.marginLeft &&
    css`
      margin-left: ${props.marginLeft}rem;
    `}

  ${props =>
    props.marginRight &&
    css`
      margin-right: ${props.marginRight}rem;
    `}

  ${props =>
    props.marginX &&
    css`
      margin-left: ${props.marginX}rem;
      margin-right: ${props.marginX}rem;
    `}

  ${props =>
    props.marginTop &&
    css`
      margin-top: ${props.marginTop}rem;
    `}

  ${props =>
    props.marginBottom &&
    css`
      margin-bottom: ${props.marginBottom}rem;
    `}

  ${props =>
    props.marginY &&
    css`
      margin-top: ${props.marginY}rem;
      margin-bottom: ${props.marginY}rem;
    `}

  @media ${device.tablet} {
    ${props =>
      props.gridGapMd &&
      css`
        grid-gap: ${props.gridGapMd}rem;
      `}

    ${props =>
      props.gridTemplateColumnsMd &&
      css`
        grid-template-columns: repeat(${props.gridTemplateColumnsMd}, 1fr);
      `}
  }
`
