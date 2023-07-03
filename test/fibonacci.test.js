const Fibonacci = require('../src/model/fibonacciModel');

describe('Fibonacci', () => {
  test('should return 0 for index 0', () => {
    const fibonacci = new Fibonacci();
    expect(fibonacci.calculate(0)).toBe(0);
  });

  test('should return 1 for index 1', () => {
    const fibonacci = new Fibonacci();
    expect(fibonacci.calculate(1)).toBe(1);
  });

  test('should return correct Fibonacci value for index greater than 1', () => {
    const fibonacci = new Fibonacci();
    expect(fibonacci.calculate(6)).toBe(8);
    expect(fibonacci.calculate(10)).toBe(55);
    expect(fibonacci.calculate(15)).toBe(610);
  });
});
