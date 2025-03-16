import {jsonHandler} from './middlewares/jsonHandler.js'
export const routes = [
  {
    method: 'GET',
    path: '/products',
    controller: (res, req)=>{
      res.end(JSON.stringify(res.body))
    }
  },
  {
    method: 'POST',
    path: '/products',
    controller: (res, req)=>{
      console.log(res.body)
    }
  }
]