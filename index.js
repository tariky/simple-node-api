const express = require('express');
const http = require('http');
const path = require('path');
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

app.use(express.static(path.join(__dirname, 'dist')));

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
