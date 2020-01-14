import css from 'styled-jsx/css'

// Smoother & sharper shadows with layered box-shadows
// https://tobiasahlin.com/blog/layered-smooth-box-shadows/

const style = css.global`
  :root {
    --shadow-low: 0 0 1px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.15),
      0 2px 4px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(0, 0, 0, 0.15);
    --shadow-medium: 0 0 1px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.12),
      0 2px 4px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.12),
      0 8px 16px rgba(0, 0, 0, 0.12);
    --shadow-high: 0 0 1px rgba(0, 0, 0, 0.11), 0 1px 2px rgba(0, 0, 0, 0.11),
      0 2px 4px rgba(0, 0, 0, 0.11), 0 4px 8px rgba(0, 0, 0, 0.11),
      0 8px 16px rgba(0, 0, 0, 0.11), 0 16px 32px rgba(0, 0, 0, 0.11);
  }
`

export default style
