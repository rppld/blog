import styled from '@emotion/styled'
import { device } from '../theme'

export const Heading = styled.h1`
  margin-top: ${props => (props.secondary ? 'var(--space-32)' : '0')};
  font-family: var(--ff-serif);
  margin-bottom: ${props => (props.inBody ? 'var(--space-8)' : '0')};
  font-weight: 700;
  text-align: center;
  max-width: ${props => (props.inBody ? '800px' : 'none')};
  margin-left: ${props => (props.inBody ? 'auto' : '0')};
  margin-right: ${props => (props.inBody ? 'auto' : '0')};
  color: var(--color-near-black);
  line-height: 1.5;
  font-size: ${props => (props.secondary ? 'var(--fs-16)' : 'var(--fs-28)')};
  padding-left: ${props => (props.inBody ? 'var(--space-16)' : '0')};
  padding-right: ${props => (props.inBody ? 'var(--space-16)' : '0')};

  @media ${device.mobileLg} {
    font-size: ${props => (props.secondary ? 'var(--fs-20)' : 'var(--fs-24)')};
  }

  @media ${device.tablet} {
    font-size: ${props => (props.secondary ? 'var(--fs-24)' : 'var(--fs-28)')};
    margin-top: ${props => (props.secondary ? 'var(--space-64)' : '0')};
    margin-bottom: ${props => (props.inBody ? 'var(--space-16)' : '0')};
    padding-left: ${props => (props.inBody ? 'var(--space-32)' : '0')};
    padding-right: ${props => (props.inBody ? 'var(--space-32)' : '0')};
  }

  @media ${device.laptop} {
    padding-left: ${props => (props.inBody ? 'var(--space-64)' : '0')};
    padding-right: ${props => (props.inBody ? 'var(--space-64)' : '0')};
    font-size: ${props => (props.secondary ? 'var(--fs-32)' : 'var(--fs-36)')};
    margin-bottom: ${props => (props.inBody ? 'var(--space-32)' : '0')};
  }

  @media ${device.laptopLg} {
    font-size: ${props => (props.secondary ? 'var(--fs-44)' : 'var(--fs-48)')};
  }
`
