import React from 'react'
import styled from '@emotion/styled'
import { space, device } from '../theme'

const Wrapper = styled.div`
  min-height: 100vh;
  text-align: center;
  padding: ${space.s1};
  display: flex;
  justify-content: center;
  transition: opacity 400ms;
  align-items: center;

  @media ${device.tablet} {
    padding: ${space.s2};
  }

  @media ${device.laptop} {
    padding: ${space.s3};
  }
`

function Outro(props) {
  return <Wrapper>{props.children}</Wrapper>
}

export default Outro
