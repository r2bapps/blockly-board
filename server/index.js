const express = require('express');
const http = require('http')
const app = express();
app.use(express.static('public'));
const server = http.createServer(app);
server.listen(port = process.env.PORT || 8080, () => {
  console.log(`Server running on port ${port}`)
})