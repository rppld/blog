// Translate a value [i] in range [iL, iH] to relative value in range [oL, oH]
export const mapRange = (i, iL, iH, oL, oH, limit = true) => {
  let newVal

  if (limit) {
    i < iL
      ? (newVal = oL)
      : i > iH
        ? (newVal = oH)
        : (newVal = oL + (oH - oL) * (i - iL) / (iH - iL))
  } else {
    newVal = oL + (oH - oL) * (i - iL) / (iH - iL)
  }

  return newVal
}

export const getYOffset = () => {
  return window.pageYOffset !== undefined
    ? window.pageYOffset
    : (document.documentElement || document.body.parentNode || document.body)
        .scrollTop
}
