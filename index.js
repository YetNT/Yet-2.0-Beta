const express = require('express');
const app = express();
const fs = require('fs')
const port = 3000;

app.get('/', (req, res) => res.send("helo wrldo"));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`)); 
