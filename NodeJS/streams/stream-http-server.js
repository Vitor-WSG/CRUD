import http from 'node:http'
import { Transform } from 'node:stream'

class inverseNumberStream extends Transform { //stream de transformação, transforma um dado(chunk) em outro dado
  _transform(chunk, encoding, callback) {
    const transformed = Number(chunk.toString())*-1
    console.log(transformed)
    callback(null, Buffer.from(String(transformed)))
  }
}

//request => ReadableStream
//response => WriteableStream

const server = http.createServer((request, response)=>{
  return request 
    .pipe(new inverseNumberStream())
    .pipe(response)

})

server.listen(3334) 