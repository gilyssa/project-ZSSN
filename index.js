require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const survivorRoute = require('./src/routes/survivors.route');


app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use('/api/survivors', survivorRoute);


app.listen(process.env.PORTA, () => { console.log('Api no ar') }) 
