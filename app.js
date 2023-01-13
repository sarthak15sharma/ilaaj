const express = require('express');
const app = express();
const ejsMate =- require('ejs-mate');
const path = require('path')

app.engine('ejs', ejsMate);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({entended: true}));
app.use(express.json());



app.listen(3000, () => {
    console.log('listening to port 3000');
})