const express = require('express');
const fibonacciRouter = require('./src/router/fibonacciRouter');

const app = express();
const port = 3000;

app.use('/api', fibonacciRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
