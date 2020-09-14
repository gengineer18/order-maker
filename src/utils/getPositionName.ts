export const getPositionName = (positionNumber: number) => {
  switch (positionNumber) {
    case 1: {
      return '(投)'
    }
    case 2: {
      return '(捕)'
    }
    case 3: {
      return '(一)'
    }
    case 4: {
      return '(二)'
    }
    case 5: {
      return '(三)'
    }
    case 6: {
      return '(遊)'
    }
    case 7: {
      return '(左)'
    }
    case 8: {
      return '(中)'
    }
    case 9: {
      return '(右)'
    }
    default:
      return ''
  }
}
