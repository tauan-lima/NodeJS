export const routes = [
  {
    method: "GET",
    path: "/user",
    controller: ({req,res, database}) => {
     const user = database.select('user')
     if (!user) {
       res.writeHead(404).end('Usuário não encontrado')} else {
      res.writeHead(200).end(JSON.stringify(user))}
    }
  },
  {
    method: "POST", 
    path: "/user",
    controller: ({req,res, database}) => {
      const {name, CPF} = req.body
      database.insert('user', {name, CPF})
      return res.writeHead(201).end()
    }
  },
  {
    method: "DELETE",
    path: "/user",
    controller: ({req,res, database}) => {
      database.delete('user', req.body)
      return res.writeHead(202).end('Deletado')
    }
  }
]