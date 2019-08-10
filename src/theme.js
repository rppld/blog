import React from 'react'
import { Global, css } from '@emotion/core'

export const fontSize = {
  f0: '0.75em',
  f1: '1em',
  f2: '1.25em',
  f3: '1.5em',
  f4: '1.75em',
  f5: '2em',
  f6: '2.25em',
  f7: '2.5em',
  f8: '2.75em',
  f9: '3em',
  f10: '3.25em',
}

export const space = {
  s0: '0.5rem',
  s1: '1rem',
  s2: '2rem',
  s3: '4rem',
  s4: '8rem',
}

export const letterSpacing = {
  ls1: '0.01em',
}

export const color = {
  nearBlack: '#1a1a1a',
  gray: '#6d6d6d',
  lightGray: '#ccc',
}
const size = {
  mobile: '20em', // 320px
  mobileM: '23.438em', // 375px
  mobileL: '26.563em', // 425px
  tablet: '48em', // 768px
  laptop: '64em', // 1024px
  laptopL: '90em', // 1440px
  desktop: '160em', // 2560px
}

export const device = {
  mobile: `(min-width: ${size.mobile})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
}

export function BaseStyles() {
  return <Global styles={baseStyles} />
}

const baseStyles = css`
  @font-face {
    font-family: 'IBM Plex Sans';
    src: url('/IBMPlexSans-Regular-Latin1.woff2') format('woff2'),
      url('/IBMPlexSans-Regular-Latin1.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'IBM Plex Sans';
    src: url('/IBMPlexSans-Italic-Latin1.woff2') format('woff2'),
      url('/IBMPlexSans-Italic-Latin1.woff') format('woff');
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: 'IBM Plex Sans';
    src: url('/IBMPlexSans-Bold-Latin1.woff2') format('woff2'),
      url('/IBMPlexSans-Bold-Latin1.woff') format('woff');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'IBM Plex Sans';
    src: url('/IBMPlexSans-BoldItalic-Latin1.woff2') format('woff2'),
      url('/IBMPlexSans-BoldItalic-Latin1.woff') format('woff');
    font-weight: 700;
    font-style: italic;
  }

  @font-face {
    font-family: 'IBM Plex Serif';
    src: url('/IBMPlexSerif-Bold-Latin1.woff2') format('woff2'),
      url('/IBMPlexSerif-Bold-Latin1.woff') format('woff');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'IBM Plex Serif';
    src: url('/IBMPlexSerif-BoldItalic-Latin1.woff2') format('woff2'),
      url('/IBMPlexSerif-BoldItalic-Latin1.woff') format('woff');
    font-weight: 700;
    font-style: italic;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    src: url('/IBMPlexMono-Regular-Latin1.woff2') format('woff2'),
      url('/IBMPlexMono-Regular-Latin1.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    src: url('/IBMPlexMono-Italic-Latin1.woff2') format('woff2'),
      url('/IBMPlexMono-Italic-Latin1.woff') format('woff');
    font-weight: 400;
    font-style: italic;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-kerning: auto;
    margin: 0;
    padding: 0;
    border: 0;
  }

  html {
    font-family: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont,
      'avenir next', avenir, 'helvetica neue', helvetica, ubuntu, roboto, noto,
      'segoe ui', arial, sans-serif;
    -webkit-text-size-adjust: 100%;
    font-weight: 400;
    font-size: 20px;
    line-height: 1.5;
  }

  body {
    margin: 0;
    padding: 0;
  }

  a {
    transition-property: background-color, border-color, opacity;
    transition-duration: 400ms;
    text-decoration: none;
    white-space: nowrap;
    font-family: 'IBM Plex Sans', serif;
    background-color: rgba(187, 239, 253, 0.3);
    border-bottom: 1px solid rgba(43, 1, 1, 0.2);
    color: #1a1a1a;
  }

  a:hover,
  a:focus {
    background-color: #bbeffd;
    border-bottom-color: #1a1a1a;
  }

  .menubar a {
    font-family: 'IBM Plex Mono', 'Courier New', Courier, monospace;
    text-decoration: none;
    color: inherit;
    transition: opacity 400ms;
    background-color: transparent;
    border: 0;
  }

  .menubar a:hover,
  .menubar a:focus {
    opacity: 0.5;
    background-color: transparent;
  }
`
