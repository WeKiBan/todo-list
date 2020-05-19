import formatDistance from 'date-fns/formatDistance'

const arrDates = [
    new Date(1985, 5, 30),
    new Date(2007, 11, 15),
    new Date()
]



console.log(formatDistance(arrDates[0], arrDates[1], {
    addSuffix: true
  }))