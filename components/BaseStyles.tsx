import * as React from 'react'
import reset from '../theme/reset'
import space from '../theme/space'
import device from '../theme/device'
import colors from '../theme/colors'
import easing from '../theme/easing'
import shadow from '../theme/shadow'
import typography from '../theme/typography'

export default () => (
  <>
    <style jsx global>
      {reset}
    </style>
    <style jsx global>
      {space}
    </style>
    <style jsx global>
      {colors}
    </style>
    <style jsx global>
      {easing}
    </style>
    <style jsx global>
      {shadow}
    </style>
    <style jsx global>
      {typography}
    </style>

    <style jsx global>{`
      body {
        background-color: var(--color-body);
        font-family: var(--ff-default);
        font-weight: var(--fw-regular);
        line-height: var(--lh-copy);
        font-size: var(--fs-18);
        color: var(--dark-1);
        hyphens: auto;
      }

      @media ${device.tablet} {
        body {
          font-size: var(--fs-20);
        }
      }
    `}</style>
  </>
)
