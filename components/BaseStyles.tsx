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
      @import url('https://rsms.me/inter/inter.css');

      html {
        font-family: 'Inter', sans-serif;
      }

      @supports (font-variation-settings: normal) {
        html {
          font-family: 'Inter var', sans-serif;
        }
      }

      body {
        font-weight: var(--fw-regular);
        line-height: var(--lh-copy);
        font-size: var(--fs-18);
        color: var(--dark-1);
      }

      a:not(.default) {
        transition-property: background-color, border-color, opacity;
        transition-duration: 400ms;
        text-decoration: none;
        white-space: nowrap;
        font-family: var(--ff-sans);
        background-color: rgba(187, 239, 253, 0.3);
        border-bottom: 1px solid rgba(43, 1, 1, 0.2);
        color: #1a1a1a;
        cursor: pointer;
      }

      a:not(.default):hover,
      a:not(.default):focus {
        background-color: #bbeffd;
        border-bottom-color: #1a1a1a;
      }

      img {
        vertical-align: middle;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-size: inherit;
        font-weight: inherit;
        line-height: var(--lh-title);
      }

      @media ${device.tablet} {
        body {
          font-size: var(--fs-20);
        }
      }
    `}</style>
  </>
)
