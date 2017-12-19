const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: './src', dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || '3000';

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/:username', (req, res) => {
      const actualPage = '/profile';
      const queryParams = { username: req.params.username };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('/:username/:permalink', (req, res) => {
      const actualPage = '/playlist';
      const queryParams = {
        permalink: req.params.permalink,
        username: req.params.username,
      };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('*', (req, res) => handle(req, res));

    server.listen(port, err => {
      if (err) {
        throw err;
      }
      console.log(`> Ready on port:${port}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
