const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from your API!' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
