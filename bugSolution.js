const express = require('express');
const app = express();
app.get('/', (req, res) => {
  someAsyncOperation().then(result => {
    res.send(result);
  }).catch(error => {
    console.error('Error:', error);
    // Send a proper error response to the client
    res.status(500).send('Internal Server Error');
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));

// Simulate an asynchronous operation that may fail
function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate a potential error
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      resolve({ message: 'Success!' });
    } else {
      reject(new Error('Simulated error'));
    }
  });
}