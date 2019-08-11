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

// Translate a value [oldVal] in range [oldMin, oldMax] to relative value in range [newMin, newMax]
export const remap = (oldVal, oldMin, oldMax, newMin, newMax, limit = true) => {
  let newVal

  if (limit) {
    oldVal < oldMin
      ? (newVal = newMin)
      : oldVal > oldMax
      ? (newVal = newMax)
      : (newVal =
          newMin + ((newMax - newMin) * (oldVal - oldMin)) / (oldMax - oldMin))
  } else {
    newVal =
      newMin + ((newMax - newMin) * (oldVal - oldMin)) / (oldMax - oldMin)
  }

  return newVal
}

export const scaleItems = els => {
  if (!els.length) return false
  let i = null
  const scrollTop = getYOffset()
  const windowHeight = window.innerHeight
  const windowWidth = window.innerWidth

  for (i = 0; i < els.length; i++) {
    // find card position
    const yPos = els[i].offsetTop - scrollTop

    // Desktop behavior
    if (windowWidth > 992) {
      // determine scale value
      let scaleValue = 1
      if (yPos > windowHeight * 0.6) {
        scaleValue = remap(yPos, windowHeight * 0.6, windowHeight, 1, 0.9)
      } else {
        scaleValue = remap(yPos, 0, windowHeight * 0.6, 1, 1)
      }
      // shift Y position on scroll
      const yOffset = remap(yPos, windowHeight * 0.2, windowHeight, 0, 200)
      // apply transformations & reset opacity (mobile override)
      els[i].style.transform = `scale(${scaleValue}) translateY(${yOffset}px)`
      els[i].style.opacity = 1
    } else {
      // Mobile/default behavior
      const yOffset = remap(yPos, windowHeight * 0.4, windowHeight, 0, 75)
      els[i].style.transform = `translateY(${yOffset}px)`
      const opac = remap(yPos, windowHeight * 0.7, windowHeight, 1, 0)
      els[i].style.opacity = opac
    }
  }
}

export const getYOffset = () => {
  return window.pageYOffset !== undefined
    ? window.pageYOffset
    : (document.documentElement || document.body.parentNode || document.body)
        .scrollTop
}
