import FileSystem from "node:fs/promises"

const DATABASE_PATH = new URL("db.json", import.meta.url)

export class Database{
  //acrescentados # para tornar a variável privada

  #database = {}

  constructor(){
    FileSystem.readFile(DATABASE_PATH, "utf-8").then((data)=>{
      this.#database = JSON.parse(data)
    }).catch(()=>{
      this.#database = {}
    })
  }
  #persist(){
    FileSystem.writeFile(DATABASE_PATH, JSON.stringify(this.#database))
  }

  insert(table, data){
    if(Array.isArray(this.#database[table])){
      this.#database[table].push(data)
    } else{
      this.#database[table] = [data]
    }
    this.#persist()
  }

  select(table){
    return this.#database[table] ?? []
  }
  //edite esse delete para que ele remova um item de uma tabela com o name vindo do body
  delete(table, data){
    this.#database[table] = this.#database[table].filter((item) => item.name !== data.name)
    this.#persist()
  }
  
}