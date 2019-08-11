import React from 'react'
import { Global, css } from '@emotion/core'

export const letterSpacing = css`
  --ls-1: 0.01em;
`

export const space = css`
  --space-0: ${0 / 16}rem;
  --space-4: ${4 / 16}rem;
  --space-8: ${8 / 16}rem;
  --space-16: ${16 / 16}rem;
  --space-32: ${32 / 16}rem;
  --space-64: ${64 / 16}rem;
  --space-128: ${128 / 16}rem;
  --space-256: ${256 / 16}rem;
`

export const fontSizes = css`
  --fs-12: ${12 / 16}rem;
  --fs-14: ${14 / 16}rem;
  --fs-16: ${16 / 16}rem;
  --fs-18: ${18 / 16}rem;
  --fs-20: ${20 / 16}rem;
  --fs-24: ${24 / 16}rem;
  --fs-28: ${28 / 16}rem;
  --fs-32: ${32 / 16}rem;
  --fs-36: ${36 / 16}rem;
  --fs-44: ${44 / 16}rem;
  --fs-48: ${48 / 16}rem;
  --fs-64: ${64 / 16}rem;
  --fs-96: ${96 / 16}rem;
  --fs-128: ${128 / 16}rem;
`

export const colors = css`
  --color-google: rgb(219, 68, 55);
  --color-google-focus: rgb(219, 68, 55, 0.2);
  --color-facebook: rgb(23, 119, 242);
  --color-facebook-focus: rgba(23, 119, 242, 0.2);
  --color-github: rgb(10, 10, 10);
  --color-github-focus: rgba(10, 10, 10, 0.2);
  --color-brand: #7d4cdb;
  --color-accent-1: #6fffb0;
  --color-accent-2: #fd6fff;
  --color-accent-3: #81fced;
  --color-accent-4: #ffca58;
  --color-neutral-1: #00873d;
  --color-neutral-2: rgb(61, 19, 141);
  --color-neutral-2-focus: rgb(61, 19, 141, 0.2);
  --color-neutral-3: #00739d;
  --color-neutral-4: #a2423d;
  --color-status-critical: #ff4040;
  --color-status-error: rgb(255, 64, 64);
  --color-status-error-focus: rgba(255, 64, 64, 0.2);
  --color-status-warning: #ffaa15;
  --color-status-ok: rgb(0, 199, 129);
  --color-status-ok-focus: rgba(0, 199, 129, 0.2);
  --color-status-unknown: #cccccc;
  --color-status-disabled: #cccccc;
  --color-light-1: #f8f8f8;
  --color-light-2: #f2f2f2;
  --color-light-3: #ededed;
  --color-light-4: #dadada;
  --color-light-5: #dadada;
  --color-light-6: #dadada;
  --color-dark-1: #333333;
  --color-dark-2: #555555;
  --color-dark-3: #777777;
  --color-dark-4: #999999;
  --color-dark-5: #999999;
  --color-dark-6: #999999;
  --color-near-black: #1a1a1a;
  --color-gray: #6d6d6d;
  --color-light-gray: #ccc;
`

export const device = {
  mobile: `(min-width: ${320 / 16}em)`,
  mobileMd: `(min-width: ${375 / 16}em)`,
  mobileLg: `(min-width: ${425 / 16}em)`,
  tablet: `(min-width: ${768 / 16}em)`,
  laptop: `(min-width: ${1024 / 16}em)`,
  laptopMd: `(min-width: ${1280 / 16}em)`,
  laptopLg: `(min-width: ${1440 / 16}em)`,
  desktop: `(min-width: ${2560 / 16}em)`,
}

export const lineHeight = css`
  --lh-solid: 1;
  --lh-title: 1.25;
  --lh-copy: 1.5;
`

export const fontFamilies = css`
  --ff-sans: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'avenir next',
    avenir, 'helvetica neue', helvetica, ubuntu, roboto, noto, 'segoe ui', arial,
    sans-serif;
  --ff-serif: 'IBM Plex Serif', georgia, times, serif;
  --ff-mono: 'IBM Plex Mono', Consolas, monaco, monospace;
`

export const fontWeights = css`
  --fw-regular: 400;
  --fw-bold: 700;
  --fw-black: 900;
`

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

  :root {
    ${space};
    ${colors};
    ${fontSizes};
    ${lineHeight};
    ${fontWeights};
    ${fontFamilies};
    ${letterSpacing};
  }

  *,
  *:before,
  *:after {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    border: 0;
  }

  body {
    font-family: var(--ff-sans);
    font-weight: var(--fw-regular);
    line-height: var(--lh-copy);
    font-size: var(--fs-20);
    color: var(--dark-1);
    hyphens: auto;

    @media ${device.tablet} {
      font-size: var(--fs-24);
    }

    /* Hyphenation */
    /* http://clagnut.com/blog/2395 */

    -webkit-hyphens: auto;
    -webkit-hyphenate-limit-before: 3;
    -webkit-hyphenate-limit-after: 3;
    -webkit-hyphenate-limit-chars: 6 3 3;
    -webkit-hyphenate-limit-lines: 2;
    -webkit-hyphenate-limit-last: always;
    -webkit-hyphenate-limit-zone: 8%;

    -moz-hyphens: auto;
    -moz-hyphenate-limit-chars: 6 3 3;
    -moz-hyphenate-limit-lines: 2;
    -moz-hyphenate-limit-last: always;
    -moz-hyphenate-limit-zone: 8%;

    -ms-hyphens: auto;
    -ms-hyphenate-limit-chars: 6 3 3;
    -ms-hyphenate-limit-lines: 2;
    -ms-hyphenate-limit-last: always;
    -ms-hyphenate-limit-zone: 8%;

    hyphens: auto;
    hyphenate-limit-chars: 6 3 3;
    hyphenate-limit-lines: 2;
    hyphenate-limit-last: always;
    hyphenate-limit-zone: 8%;
  }

  code,
  var,
  kbd,
  samp,
  tt,
  dir,
  listing,
  plaintext,
  xmp,
  abbr,
  acronym,
  blockquote,
  input,
  textarea,
  q {
    hyphens: none;
  }

  a {
    text-decoration: none;
  }

  button {
    margin: 0;
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    cursor: pointer;
    background-color: transparent;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  ol,
  ul {
    list-style: none;
  }

  img,
  video {
    max-width: 100%;
  }

  img {
    border-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:after,
  blockquote:before,
  q:after,
  q:before {
    content: '';
    content: none;
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
`
