export const getSize = index => {
  switch (index) {
    case 1:
    case 5:
      return 'medium'
    case 2:
    case 4:
      return 'small'
    case 3:
    case 6:
    default:
      return 'large'
  }
}

export const easeInOutCubic = t =>
  t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1

export const getPaddingProps = str => {
  const arr = str ? str.split(',') : []

  return {
    padLeft: arr[0] === '1' ? true : false,
    padTop: arr[1] === '1' ? true : false,
    padRight: arr[2] === '1' ? true : false,
    padBottom: arr[3] === '1' ? true : false,
  }
}

export function createMarkup(str, options = {}) {
  const { renderInline = true } = options

  if (renderInline) {
    str.replace(/(<p[^>]+?>|<p>|<\/p>)/gim, '')
  }

  return { __html: str }
}

export const getSizesString = index => {
  switch (index) {
    case 1:
    case 5:
      return '(min-width: 30em) 60vw, 100vw'
    case 2:
    case 4:
      return '(min-width: 30em) 40vw, 100vw'
    case 3:
    case 6:
    default:
      return '(min-width: 60em) 80vw, 100vw'
  }
}
