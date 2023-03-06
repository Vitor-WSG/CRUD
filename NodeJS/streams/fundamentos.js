import { Readable, Writable, Transform} from 'node:stream'

class oneToHundredStream extends Readable{
  index = 1

  _read(){
    const i = this.index++
    setTimeout(()=>{
      if (i>100){
        this.push(null)
      } else {
        const buf = Buffer.from(String(i))
        this.push(buf) //chunk, enviado para stream de escrita
      }

    }, 1000)
  }
}

class multiplyStream extends Writable { //stream de escrita nada é retornado, ela não transforma o dado, somente processa
  _write(chunk, encoding, callback){
    //chunk = pedaço lido da stream de leitura, ou seja, o que esta sendo enviado pela stream de leitura
    //encoding = como a informação esta codificada
    //callback = função que vai encerrar tudo que precisava ser executado
    console.log(Number(chunk.toString())*10)
    callback()
  }
}

class inverseNumberStream extends Transform { //stream de transformação, transforma um dado(chunk) em outro dado
  _transform(chunk, encoding, callback) {
    const transformed = Number(chunk.toString())*-1
    callback(null, Buffer.from(String(transformed)))
  }
}

new oneToHundredStream() //stream de leitura
.pipe(new inverseNumberStream()) //sream de transformação
.pipe(new multiplyStream()) //stream de escrita