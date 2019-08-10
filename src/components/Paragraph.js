import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { letterSpacing, fontSize, space, color, device } from '../theme'

export const paragraphStyles = props => css`
  hyphens: auto;
  letter-spacing: ${letterSpacing.ls1};
  text-align: ${props.textCenter ? 'center' : 'left'};
  font-weight: 400;
  font-size: ${fontSize.f1};
  padding-left: ${space.s1};
  padding-right: ${space.s1};

  @media ${device.mobileL} {
    font-size: ${fontSize.f2};
  }

  @media ${device.tablet} {
    font-size: ${fontSize.f3};
    padding-left: ${space.s2};
    padding-right: ${space.s2};
  }

  @media ${device.laptop} {
    padding-left: ${space.s3};
    padding-right: ${space.s3};
  }

  @media ${device.laptopL} {
    font-size: ${fontSize.f4};
  }

  em {
    white-space: nowrap;
  }

  img {
    vertical-align: middle;
  }
`

export const Paragraph = styled.p`
  ${paragraphStyles};
  margin-top: 0;
  margin-bottom: ${space.s2};
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  color: ${color.nearBlack};
`
