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
})

server.listen(5000)