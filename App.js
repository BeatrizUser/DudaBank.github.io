// import { openDb } from './configDB.js'
import { createTable, insertPessoa, updatePessoa, selectPessoas, selectPessoa, deletePessoa} from './Controler/Pessoa.js'


import Koa from 'koa'
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'

const server = new Koa()
const router = new Router()


// openDb()
createTable()
server.use(bodyParser());

router
    .get("/bia", ctx => {
        ctx.body = `AQUI É O METODO GET`
})
    .get("/clientes", async ctx => {
        var data = await selectPessoas()
        var clientes = JSON.stringify(data)
        ctx.body = `${clientes}`

})
    .get("/cliente", async ctx => {
        var data = await selectPessoa(ctx.request.body.id)
        var cliente = JSON.stringify(data)
        ctx.body = `${cliente}`

})
    .post("/cadastro", async ctx => {
        insertPessoa(ctx.request.body)
        console.log(ctx.request.body)

})
    .put("/update", async ctx => {
        if(ctx.request.body && !ctx.request.body.id){
            ctx.response.status = 500
            ctx.response.message = "Coloca um ID!"
        }else
            updatePessoa(ctx.request.body)
            ctx.response.status = 200
            ctx.response.message = "Foi!"
        
})
    .delete("/cliente", async ctx => {
        deletePessoa(ctx.request.body.id)

        
    
}) 

    server.use(router.routes()).use(router.allowedMethods())

    server.listen(3000, () => {
        console.log('Servidor Funcionando em http://localhost:3000')
        console.log('Para encerrar o servidor: ctrl + c')
})