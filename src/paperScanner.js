class PaperScanner {

  calculate(score){
    let result = []
    let splitInts = score.split(" ")
    let operator = splitInts[1]
    let ints = []
    let total = 0
    splitInts.forEach(e => {
      if (isNaN(e)){
        operator = e
      } else {
        ints.push(e)
      }
    })
    if (ints.length > 1) {
      if (operator == '+') {
        total = ints.reduce((a, b) => (parseInt(a, 10) + parseInt(b, 10)))
      } else if (operator == '*') {
        total = ints.reduce((a, b) => (parseInt(a, 10) * parseInt(b, 10)))
      } else if (ints == '-') {
        total = splitInts.reduce((a, b) => (parseInt(a, 10) - parseInt(b, 10)))
      } else if (ints == '%') {
        total = splitInts.reduce((a, b) => (parseInt(a, 10) % parseInt(b, 10)))
      }
    } else {
      total = parseInt(ints[0],10)
    }
    result.push(score, total)
    return result
  }

}

module.exports = PaperScanner