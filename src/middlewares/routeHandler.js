import {routes} from '../routes.js'

export function routeHandler(req, res){
  const route = routes.find((route)=>{
    return route.method === req.method && route.path === req.url
  })
}