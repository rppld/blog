import styled from '@emotion/styled'
import { space, color, fontSize, device } from '../theme'

export const Heading = styled.h1`
  margin-top: ${props => (props.secondary ? space.s2 : '0')};
  font-family: 'IBM Plex Serif', serif;
  margin-bottom: ${props => (props.inBody ? space.s0 : '0')};
  font-weight: 700;
  text-align: center;
  max-width: ${props => (props.inBody ? '800px' : 'none')};
  margin-left: ${props => (props.inBody ? 'auto' : '0')};
  margin-right: ${props => (props.inBody ? 'auto' : '0')};
  color: ${color.nearBlack};
  line-height: 1.5;
  font-size: ${props => (props.secondary ? fontSize.f1 : fontSize.f2)};
  padding-left: ${props => (props.inBody ? space.s1 : '0')};
  padding-right: ${props => (props.inBody ? space.s1 : '0')};

  @media ${device.mobileL} {
    font-size: ${props => (props.secondary ? fontSize.f2 : fontSize.f3)};
  }

  @media ${device.tablet} {
    font-size: ${props => (props.secondary ? fontSize.f3 : fontSize.f4)};
    margin-top: ${props => (props.secondary ? space.s3 : '0')};
    margin-bottom: ${props => (props.inBody ? space.s1 : '0')};
    padding-left: ${props => (props.inBody ? space.s2 : '0')};
    padding-right: ${props => (props.inBody ? space.s2 : '0')};
  }

  @media ${device.laptop} {
    padding-left: ${props => (props.inBody ? space.s3 : '0')};
    padding-right: ${props => (props.inBody ? space.s3 : '0')};
    font-size: ${props => (props.secondary ? fontSize.f5 : fontSize.f6)};
    margin-bottom: ${props => (props.inBody ? space.s2 : '0')};
  }

  @media ${device.laptopL} {
    font-size: ${props => (props.secondary ? fontSize.f8 : fontSize.f9)};
  }
`
