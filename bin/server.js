// requisição dosmódulos que vaos utilizar
const app = require('../src/app')
const http = require('http')
const debug = require('debug')('nodestr:server')
// setando as portas
const port = normalizePort(process.env.PORT || '3000')
app.set('port', port)
// instanciando o servidor
const server = http.createServer(app)

server.listen(port)
server.on('error', onError)
// server.on('listening', onListening)
console.log('API rodando na porta' + port)

// função para normalizar a porta de entrada da app
function normalizePort (val) {
  const port = parseInt(val, 10)
  if (isNaN(port)) {
    return val
  }
  if (port >= 0) {
    return port
  }
  return false
}

// tratativa de excessões
function onError (error) {
  if (error.syscall !== 'listen') {
    throw error
  }
  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port

  switch (error.code) {
    case 'EACESS':
      console.error(bind + 'requires elevated privileges')
      process.exit(1)
    case 'EADDRINUSE':
      console.error(bind + 'is already in use');
      process.exit(1)
    default:
      throw error
  }
}


