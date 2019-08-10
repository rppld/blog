import styled from '@emotion/styled'
import { color } from '../theme'

export const Divider = styled.div`
  color: ${color.lightGray};
  font-size: 2rem;
  text-align: center;

  &:before {
    content: '* * *';
  }
`
