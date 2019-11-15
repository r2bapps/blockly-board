const express = require('express');
const http = require('http')
const app = express();
app.use(express.static('public'));
const server = http.createServer(app);
server.listen(port = 8080, hostname = 'localhost', () => {
  console.debug(`Server running at http://${hostname}:${port}/`)
})