const express = require('express');
const app = express();
const register = require('./routes/register');
const cors = require('cors');

app.use(cors());
app.get('/', (req, res) => res.send('Hello World!'));
app.get('/aaa', (req, res) => res.send('aaa'));
app.use('/register', register);

app.listen(10002, () => console.log('Example app listening on port 10002!'))
