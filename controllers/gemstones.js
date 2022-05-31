const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('gemstones/index.ejs');
});

module.exports = router;