// Translate a value [oldVal] in range [oldMin, oldMax] to relative value in range [newMin, newMax]
export const remap = (oldVal, oldMin, oldMax, newMin, newMax, limit = true) => {
  let newVal

  if (limit) {
    oldVal < oldMin
      ? (newVal = newMin)
      : oldVal > oldMax
        ? (newVal = newMax)
        : (newVal =
            newMin + (newMax - newMin) * (oldVal - oldMin) / (oldMax - oldMin))
  } else {
    newVal = newMin + (newMax - newMin) * (oldVal - oldMin) / (oldMax - oldMin)
  }

  return newVal
}

export const getYOffset = () => {
  return window.pageYOffset !== undefined
    ? window.pageYOffset
    : (document.documentElement || document.body.parentNode || document.body)
        .scrollTop
}
