import http from 'http';

const server = http.createServer((req, res) => {
  const {method} = req
  res.writeHead(201).end('Criado com sucesso!');
});
server.listen(3000)