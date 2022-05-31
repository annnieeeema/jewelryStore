require('dotenv').config(); 
const express = require('express'); 
const app = express(); 
const gemstonesController = require('./controllers/gemstones.js'); 
app.use('/gemstones', gemstonesController); 

//routes
//I
app.get('/', (req, res) => {
    res.render('index.ejs'); 
}); 
//N
app.get('/new', (req, res) => {
    res.render('new.ejs'); 
}); 
//D
//U
//C
//E
//S


app.listen(3000, () => {
    console.log('listening...'); 
}); 