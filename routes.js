const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.ejs')
    //res.end('Hello World')
}).get('/login', (req, res) => {
    res.render('login')
    //res.end('Login page')
});

module.exports = router;