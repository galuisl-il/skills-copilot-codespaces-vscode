// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Create a new comment
app.post('/comments', (req, res) => {
  console.log('Creating a new comment');
  console.log('Request body:', req.body);
  res.send('Comment created');
});

// Start server
app.listen(4001, () => {
  console.log('Comments service started on port 4001');
});