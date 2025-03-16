export async function jsonHandler(req,res) {
  //coleta os dados da requisição
  const buffer = [] 
  //coleta os chuncks da requisição
  for await (const chuck of req){
    buffer.push(chuck)
  }

  try{
    //converte os dados da requisição em JSON
    res.body = JSON.parse(Buffer.concat(buffer).toString())

  } catch (error){
    res.body = null
    res.writeHead(400).end("Erro ao processar requisição")
  }
  //Difine o Headler de resposta como JSON
}