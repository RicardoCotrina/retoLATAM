const FibonacciService = require('../service/fibonacciService');
const { mapFibonacciResponse } = require('../mapper/fibonacciMapper');

exports.getFibonacci = (req, res) => {
  const index = parseInt(req.params.index);
  
  if (isNaN(index) || index < 0) {
    return res.status(400).json({ error: 'Invalid input. Please provide a positive number.' });
  }
  
  const fibonacciService = new FibonacciService();
  const result = fibonacciService.calculate(index);

  // Mapear el resultado a la estructura de respuesta deseada
  const response = mapFibonacciResponse(index, result);
  
  res.json(response);
};
