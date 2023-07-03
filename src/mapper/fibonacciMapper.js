function mapFibonacciResponse(index, value) {
    return {
      index,
      fibonacciValue: value,
      message: `The Fibonacci value for index ${index} is ${value}.`
    };
}
  
module.exports = {
    mapFibonacciResponse
};
