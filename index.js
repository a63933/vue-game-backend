const express = require('express');
const app = express();
const register = require('./routes/register');
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.use(cors());       //解决跨域请求用
app.get('/', (req, res) => res.send('Hello World!'));
app.get('/aaa', (req, res) => res.send('aaa'));
app.use('/register', register);

app.listen(10002, () => console.log('Example app listening on port 10002!'))
