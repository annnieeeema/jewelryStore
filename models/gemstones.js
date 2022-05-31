const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const gemstoneSchema = new Schema({
    name: String, 
    description: String, 
    img: String, 
    price: String, 
}); 

const Gemstone = mongoose.model('Gemstone', gemstoneSchema); 

module.exports = Gemstone; 
