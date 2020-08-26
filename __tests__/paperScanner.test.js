let PaperScanner = require('../src/paperScanner')
let paperScanner = new PaperScanner

describe('#PaperScanner', () => {
  test('it should return 1 as string and int', () => {
    expect(paperScanner.calculate("1")).toEqual(["1", 1])
  })

  test('it should return 2 as string and int', () => {
    expect(paperScanner.calculate("2")).toEqual(["2", 2])
  })

  test('it should return 2 ints as string and result', () => {
    expect(paperScanner.calculate("1 + 1")).toEqual(["1 + 1", 2])
  })

  test('it should return 2 ints as string and result', () => {
    expect(paperScanner.calculate("1 * 1")).toEqual(["1 * 1", 1])
  })

  test('it should return 2 ints as string and result', () => {
    expect(paperScanner.calculate("1 - 1")).toEqual(["1 - 1", 0])
  })


  test('it should return 2 ints as string and result', () => {
    expect(paperScanner.calculate("9 % 3")).toEqual(["9 % 3", 0])
  })
})