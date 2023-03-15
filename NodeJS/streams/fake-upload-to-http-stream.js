import { Readable} from'node:stream'
import fetch from "node-fetch";
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

fetch('http://localhost:3334', {
  method: 'POST',
  body: new oneToHundredStream(),
  duplex: 'half'
})