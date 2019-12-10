import styled from 'styled-components'
import { css } from 'styled-components'
import { device } from '../theme'

export const textStyles = css`
  hyphens: auto;
  letter-spacing: var(--ls-1);
  font-weight: 400;
  font-size: var(--fs-18);
  padding-left: var(--space-16);
  padding-right: var(--space-16);
  margin-bottom: var(--space-32);
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  color: var(--color-near-black);

  @media ${device.mobileLg} {
    font-size: var(--fs-20);
  }

  @media ${device.tablet} {
    font-size: var(--fs-24);
    padding-left: var(--space-32);
    padding-right: var(--space-32);
  }

  @media ${device.laptop} {
    padding-left: var(--space-64);
    padding-right: var(--space-64);
  }

  @media ${device.laptopLg} {
    font-size: var(--fs-28);
  }
`

export const Text = styled.span`
  ${textStyles};
`
