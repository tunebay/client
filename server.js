const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const port = process.env.PORT || '3000'

app
  .prepare()
  .then(() => {
    const server = express()

    server.get('/:id', (req, res) => {
      const actualPage = '/user'
      const queryParams = { id: req.params.id }
      app.render(req, res, actualPage, queryParams)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, err => {
      if (err) {
        console.log('======= LISTENIGN ERROR======')
        throw err
      }
      console.log('> Ready on ' + port)
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
