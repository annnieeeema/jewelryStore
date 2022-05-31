//dependencies
require('dotenv').config(); 
const express = require('express'); 
const app = express(); 
const gemstonesController = require('./controllers/gemstones.js'); 
const goldsController = require('./controllers/golds.js'); 
const mongoose = require('mongoose'); 
const methodOverride = require('method-override'); 


//middleware
app.use(methodOverride('_method')); 
app.use(express.urlencoded({extended: false})); 
app.use('/gemstones', gemstonesController); 
app.use('/golds', goldsController); 

// Database Configuration
mongoose.connect(process.env.DATABASE_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
// Database Connection Error / Success
const db = mongoose.connection;
db.on('error', (err) => console.log(err.message + ' is mongod not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));


//routes
//I
app.get('/', (req, res) => {
    res.render('index.ejs'); 
}); 
//N
//D
//U
//C

//E
//S


app.listen(3000, () => {
    console.log('listening...'); 
}); 