const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
   const endpoint = req.url;
   if( endpoint==='/start' ){
      fs.readFile('./index.html',(err, data)=>{
         res.writeHead(200, {'Content-Type': 'text/html'});
         res.write(data);
         res.end();
      });
   }
   if( endpoint==='/api' ){
      // ここに処理を記述してください。 
      let resultText;
      fs.readFile('/api', (err, data) => {
         res.writeHead(200, {'Content-Type': 'text/html'});
         for (let i = 0, max = data.obj.num.length; i < max; i++) {
            if (i % data.obj.num[i] === 0) {
               resultText += String(data.obj.text) + ',&nbsp';
            } else {
               resultText += String(i) + ',&nbsp';
            }
         }
         console.log(resultText);
         res.write(resultText);
         res.end();
      })
   }
});
server.listen(8080); 