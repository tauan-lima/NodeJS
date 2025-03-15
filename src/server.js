import http from 'http';
import { jsonHandler } from './middlewares/jsonHandler.js';

const server = http.createServer(async(req, res) => {
  const {url, method} = req

  await jsonHandler(req, res)
  
  if(method === 'GET' && url === '/products') {
    res.end(JSON.stringify(res.body))
  } 
  
  else if(method === 'POST' && url === '/products') {
    console.log(res.body)
    res.writeHead(201).end("Produto Cadastrado")
  } 
  
  else{
    res.writeHead(404).end("Rota não encontrada")
  }
});
server.listen(3000)