class FibonacciService {
    calculate(index) {
      if (index <= 0) {
        return 0;
      } else if (index === 1) {
        return 1;
      } else {
        let a = 0;
        let b = 1;
        for (let i = 2; i <= index; i++) {
          const temp = a + b;
          a = b;
          b = temp;
        }
        return b;
      }
    }
  }
  
  module.exports = FibonacciService;
  