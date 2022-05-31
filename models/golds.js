const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const goldSchema = new Schema({
    name: String, 
    description: String, 
    img: String, 
    price: String, 
}); 

const Gold = mongoose.model('Gold', goldSchema); 

module.exports = Gold; 
