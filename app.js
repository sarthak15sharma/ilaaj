const express = require('express');
const app = express();
const ejsMate = require('ejs-mate');
const path = require('path')

app.engine('ejs', ejsMate);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('pages/explore');
})

app.get('/about', (req,res)=>{
    res.render('pages/about');
})

app.listen(3000, () => {
    console.log('listening to port 3000');
})
