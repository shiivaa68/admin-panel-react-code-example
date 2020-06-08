const express = require('express');
const serverRenderer = require('./middleware/renderer');

const PORT = process.NODE_ENV === 'development' ? 3000 : 80;
const path = require('path');

const app = express();
const router = express.Router();
const routes = require('../src/router/appRoutes').default;
const Loadable = require('react-loadable');

router.use('^/$', serverRenderer);
routes.map(({ path }) => router.get(path, serverRenderer));

router.use(express.static(
  path.resolve(__dirname, '..', 'build'),
  { maxAge: '30d' },
));

app.use(router);

Loadable.preloadAll().then(() => {
  app.listen(PORT, (error) => {
    if (error) {
      return console.log('something bad happened', error);
    }

    console.log("listening on " + PORT + "...");
  });
});
