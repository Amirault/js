
function fizzBuzz(array) {
  return array.map(element => {
    if (element % 2 === 0 && element % 3 === 0) {
      return "FizzBuzz"
    } else if (element % 2 === 0) {
      return "Fizz"
    } else if (element % 3 === 0) {
      return "Buzz"
    } else {
      return "Bar"
    }
  })
}

describe.skip("fizzBuzz", () => {
  it("testEmpty", () => {
    const arrayEmpty = []
    expect(fizzBuzz(arrayEmpty)).toEqual([])
  })

  it("testFizz", () => {
    const array = [2]
    expect(fizzBuzz(array)).toEqual(["Fizz"])
  })

  it("testBuzz", () => {
    const array = [3]
    expect(fizzBuzz(array)).toEqual(["Buzz"])
  })

  it("testFizz two times", () => {
    const array = [2, 2]
    expect(fizzBuzz(array)).toEqual(["Fizz", "Fizz"])
  })
});
