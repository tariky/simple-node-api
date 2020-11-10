const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const cors = require("cors");

const api = require('./server/routes/api');

app.use(bodyParser.json());
app.use(bcors());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', api);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname, "dist/index.html"));
  });

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));
