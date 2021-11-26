function isDivisibleBy3(number) {
  return number % 3 === 0;
}

function isDivisibleBy5(number) {
  return number % 5 === 0;
}

function toFizzBuzzOrNumber(number) {
  if (isDivisibleBy3(number) && isDivisibleBy5(number)) {
    return "FizzBuzz"
  } else if (isDivisibleBy3(number)) {
    return "Fizz";
  } else if (isDivisibleBy5(number)) {
    return "Buzz";
  } else {
    return number
  }
}
function determineFizzBuzz(array) {
  const callback = (number) => {
    return toFizzBuzzOrNumber(number);
  };
  return array.map(callback)
}

describe.skip("FizzBuzz", () => {
  it("si divisible par 3 alors Fizz", () => {
    expect(determineFizzBuzz(3)).toEqual("Fizz")
    expect(determineFizzBuzz(6)).toEqual("Fizz")
  })

  it("si divisible par 5 alors Buzz", () => {
    expect(determineFizzBuzz(5)).toEqual("Buzz")
    expect(determineFizzBuzz(10)).toEqual("Buzz")
  })

  it("si divisible par 3 et 5 alors FizzBuzz", () => {
    expect(determineFizzBuzz(15)).toEqual("FizzBuzz")
    expect(determineFizzBuzz(30)).toEqual("FizzBuzz")
  })

  it("si pas divisible par 3 ou 5 alors afficher le nombre", () => {
    expect(determineFizzBuzz(1)).toEqual(1)
    expect(determineFizzBuzz(2)).toEqual(2)
  })
})
