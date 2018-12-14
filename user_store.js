var express = require('express')
var fs = require('fs')
var https = require('https')
var app = express()



app.get('/', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin','*')
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log('ip:',ip)
  const user_data=fs.readFileSync('./user_store','utf-8');
  console.log('user_data:',user_data)
  if(user_data.indexOf(ip)!=-1){res.send("")}
  const write_data=`${ip}:${req.originalUrl}`
  console.log('write_data:',write_data)
  fs.writeFileSync('user_data',write_data)
  res.send('done')
})

https.createServer({
  key: fs.readFileSync('./ssl/private.key'),
  cert: fs.readFileSync('./ssl/certificate.crt')
}, app)
.listen(3000, function () {
  console.log('Example app listening on port 3000! Go to https://localhost:3000/')
})
