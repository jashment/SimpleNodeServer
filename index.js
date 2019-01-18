const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.setHeader('Content-type', 'text/html')
        res.setHeader('Jordan', "Booyah")
        res.write('<html>')
        res.write('<head><title>Testing my Simple Server</title></head>')
        res.write('<body><h1>Welcome to my Simple Server!</h1></body>')
        res.write('</html>')
        return res.end()
    }

    if (req.url === '/api') {
        const androidTypes = {
            pie: 9,
            oreo: 8,
            nougat: 7
        }
        res.setHeader('Content-Type', 'application/json')
        res.write(JSON.stringify(androidTypes))
        return res.end()
    }

    if (req.url === '/user') {
        const body = []
        req.on('data', chunk => {
            body.push(chunk)
        })
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString()
            console.log(parsedBody.split('=')[1])
        })
        res.statusCode = 302
        res.setHeader('Location', '/')
        return res.end()
    }
})

server.listen(5000)