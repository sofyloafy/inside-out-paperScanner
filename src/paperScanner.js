class PaperScanner {

  calculate(score){
    let result = []
    let splitInts = score.split(" ")
    let operator = splitInts[1]
    splitInts.splice(1,1)
    let total = 0
    if (splitInts.length > 1) {
      if (operator == '+') {
        total = splitInts.reduce((a, b) => (parseInt(a, 10) + parseInt(b, 10)))
      } else if (operator == '*') {
        total = splitInts.reduce((a, b) => (parseInt(a, 10) * parseInt(b, 10)))
      }
      
    } else {
      total = parseInt(splitInts[0],10)
    }
    result.push(score, total)
    console.log(result)
    return result
  }

}

module.exports = PaperScanner