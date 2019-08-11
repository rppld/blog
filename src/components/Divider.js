import styled from '@emotion/styled'

export const Divider = styled.div`
  color: var(--color-light-gray);
  font-size: 2rem;
  text-align: center;

  &:before {
    content: '* * *';
  }
`
