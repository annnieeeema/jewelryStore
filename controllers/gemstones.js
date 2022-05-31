const express = require('express');
const router = express.Router();
const Gemstone = require('../models/gemstones.js'); 


// Seed
const gemstoneSeed = require('../models/gemstoneSeed.js'); 

router.get('/seed', (req, res) => {
	Gemstone.deleteMany({}, (error, allGemstones) => {});

	Gemstone.create(gemstoneSeed, (error, data) => {
		res.redirect('/gemstones');
	});
});

//Routes
//I
router.get('/', (req, res) => {
    Gemstone.find({}, (err, foundGemstones) => {
        res.render('gemstones/index.ejs', {
            gemstones: foundGemstones
        }); 
    })
});
//N
router.get('/new', (req, res) => {
    res.render('gemstones/new.ejs'); 
})
//D
router.delete('/:id', (req, res) => {
    Gemstone.findByIdAndDelete(req.params.id, () => {
        res.redirect('/gemstones'); 
    }); 
}); 
//U
router.put('/:id', (req, res) => {
    Gemstone.findByIdAndUpdate(req.params.id, req.body, () => {
        res.redirect('/gemstones'); 
    }); 
}); 
//C
router.post('/', (req, res) => {
    Gemstone.create(req.body, (err, createdGemstone) => {
        res.redirect('/gemstones'); 
    }); 
}); 
//E
router.get('/:id/edit', (req, res) => {
    Gemstone.findById(req.params.id, (err, foundGemstone) => {
        res.render('gemstones/edit.ejs', {
            gemstone: foundGemstone
        }); 
    }); 
}); 
//S
router.get('/:id', (req, res) => {
    Gemstone.findById(req.params.id, (err, foundGemstone) => {
        res.render('gemstones/show.ejs', {
            gemstone: foundGemstone
        }); 
    }); 
}); 

module.exports = router;