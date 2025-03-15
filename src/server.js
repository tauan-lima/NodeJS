import http from 'http';

const server = http.createServer((req, res) => {
  res.end('Tauan Programmer');
});
server.listen(3000)