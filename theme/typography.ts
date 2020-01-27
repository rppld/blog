import css from 'styled-jsx/css'

const style = css.global`
  :root {
    /* Font sizes */
    --fs-12: ${12 / 16}rem;
    --fs-14: ${14 / 16}rem;
    --fs-16: ${16 / 16}rem;
    --fs-18: ${18 / 16}rem;
    --fs-20: ${20 / 16}rem;
    --fs-24: ${24 / 16}rem;
    --fs-32: ${32 / 16}rem;
    --fs-48: ${48 / 16}rem;
    --fs-64: ${64 / 16}rem;
    --fs-96: ${96 / 16}rem;
    --fs-128: ${128 / 16}rem;

    /* Line heights */
    --lh-solid: 1;
    --lh-title: 1.25;
    --lh-copy: 1.5;

    /* Font families */
    --ff-default: -apple-system, BlinkMacSystemFont, 'avenir next', avenir,
      'helvetica neue', helvetica, ubuntu, roboto, noto, 'segoe ui', arial,
      sans-serif;

    /* Font weights */
    --fw-regular: 400;
    --fw-bold: 700;
    --fw-black: 800;
  }
`

export default style
