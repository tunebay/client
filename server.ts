import express, { Errback } from 'express';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: './src', dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || '3000';

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/discover', (req, res) => handle(req, res));
    server.get('/upload', (req, res) => handle(req, res));

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

    server.listen(port, (err: any) => {
      if (err) {
        throw err;
      }
      if (dev) {
        console.log(`>Listening on http://localhost:${port}`);
      } else {
        console.log('Server running');
      }
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
