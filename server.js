const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, './public')));

const server = app.listen(process.env.PORT || 3000, function () {
  const port = server.address().port;

  console.log(`server running on localhost:${port}`);
});