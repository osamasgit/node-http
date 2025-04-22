const http = require('node:http')
const webInfo = require('./data.js')

const template = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${webInfo.title}</title>
</head>
<body>
    <h1>${webInfo.title}</h1>
    <h2>${webInfo.subtutle}</h2>
    <p>${webInfo.description}</p>
</body>
</html>`

const server = http.createServer((req,res) => {
    console.log('request recived')
    res.end(template)
});

server.listen(0, () => {
    console.log(`server listening on port http://localhost:${server.address().port}`)
});