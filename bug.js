const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might fail
  someAsyncOperation().then(result => {
    res.send(result);
  }).catch(error => {
    // Error handling missing!  This will cause a 500 error internally in Express,
    // but won't handle the error gracefully or send an appropriate response
    console.error("Error:", error);
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));