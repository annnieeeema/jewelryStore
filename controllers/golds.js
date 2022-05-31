const express = require('express');
const router = express.Router();
const Gold = require('../models/golds');


// Seed
const goldSeed = require('../models/goldSeed.js'); 

router.get('/seed', (req, res) => {
	Gold.deleteMany({}, (error, allGolds) => {});

	Gold.create(goldSeed, (error, data) => {
		res.redirect('/golds');
	});
});

//routes
//I
router.get('/', (req, res) => {
    Gold.find({}, (error, foundGolds) => {
        res.render('golds/index.ejs', {
            golds: foundGolds,
        });
    });
});
//N
//D
//U
//C
//E
//S
router.get('/:id', (req, res) => {
    Gold.findById(req.params.id, (err, foundGold) => {
        res.render('golds/show.ejs', {
            gold: foundGold
        }); 
    }); 
}); 

module.exports = router;