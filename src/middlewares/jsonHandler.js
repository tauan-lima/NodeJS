export async function jsonHandler(req, res) {

  //Adcionar os pedaços de dados em um array
  const buffers = []

  //Coleta dos chucks de dados da requisição
  for await (const chunk of req) {
    buffers.push(chunk);
  }

  //Concatenação dos pedaços de dados. Em seguida converte de string para JSON
  


  try{
    req.body = JSON.parse(Buffer.concat(buffers).toString());
  } catch (error) {
    req.body = {};
  }
  // definindp o tipo do conteudo
  res.setHeader('Content-Type', 'application/json');
}