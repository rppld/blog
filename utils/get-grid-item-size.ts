function getGridItemSize(index: number) {
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

export default getGridItemSize
