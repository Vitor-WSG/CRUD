import http from 'node:http'
const users = []

const server = http.createServer(async (request, response)=>{
    const {method, url} = request

    const buffers = []

    for await (const chunk of request) {
        buffers.push(chunk)
    }

    const body = JSON.parse(Buffer.concat(buffers).toString())
    console.log(body)

    // try {
    //     request.body = JSON.parse(Buffer.concat(buffers).toString())
    // } catch {
    //     request.body = null
    // }

    if (method === 'GET' && url === '/users'){
        return response
            .setHeader('Content-type','application/json') //setando headers na aplicação para formatação do response
            .end (JSON.stringify(users))
    }

    if (method === 'POST' && url === '/users'){
        const {name, email} = body
        users.push({
            id: 1,
            name,
            email,
        })
        return response
            .writeHead(201)
            .end()
    }

    if (method === 'DELETE' && url === '/users/1'){
        users.pop({
            id: 1,
            name: 'Vitor Gomes',
            email:'vitor@gomes.com'
        })
        return response
            .end('Usuário deletado com sucesso')
    }

    return response
        .writeHead(404)
        .end ('Not found')
})

server.listen(3333)