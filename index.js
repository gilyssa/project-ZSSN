require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const handle404Error = require('./src/middlewares/handle404Error');

const app = express();

const survivorRoute = require('./src/routes/survivors.route');


app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use('/api/survivors', survivorRoute);
app.use(handle404Error);


app.listen(process.env.PORTA, () => { console.log('Api no ar') }) 
