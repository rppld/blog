import styled from '@emotion/styled'
import { device } from '../theme'
import { textStyles } from './Text'

export const Heading = styled.h1`
  ${textStyles};
  font-family: var(--ff-serif);
  font-weight: 700;
  font-size: var(--fs-28);

  @media ${device.mobileLg} {
    font-size: ${props => (props.secondary ? 'var(--fs-20)' : 'var(--fs-24)')};
  }

  @media ${device.tablet} {
    font-size: ${props => (props.secondary ? 'var(--fs-24)' : 'var(--fs-28)')};
  }

  @media ${device.laptop} {
    font-size: ${props => (props.secondary ? 'var(--fs-32)' : 'var(--fs-36)')};
  }

  @media ${device.laptopLg} {
    font-size: ${props => (props.secondary ? 'var(--fs-44)' : 'var(--fs-48)')};
  }
`
