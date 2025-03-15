import http from 'http';

const server = http.createServer((req, res) => {
  const {url, method} = req
  
  if(method === 'GET' && url === '/products') {
    res.end("Lista de Produtos")
  } else if(method === 'POST' && url === '/products') {
    res.writeHead(201).end("Produto Cadastrado")
  } else{
    res.writeHead(404).end("Rota não encontrada")
  }
});
server.listen(3000)