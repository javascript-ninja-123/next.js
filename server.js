const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();


app.prepare().then(() => {
  const server = express();


  server.get('/bitcoin', (req,res) => app.render(req,res,'/'))

  server.get('/', (req,res) => res.redirect(301, '/bitcoin'))

  server.get('/about', (req,res) => app.render(req,res,'/about'));

  server.get('/bitcoin/:id', (req,res) => {
    return app.render(req,res, '/')
  })

  server.get('/*', (req,res) => handle(req,res));

  server.listen(PORT, err => {
    if(err) throw err
    console.log(`working on localhost ${PORT}`)
  })
})
