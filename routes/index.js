const express = require('express');
const router = express.Router();

router.get('/home', (req, res) => {
    res.render("index", {text : 'World'} );
})

router.get('/about', (req, res) => {
    res.render("about");
})


router.get('/projects', (req, res) => {
    res.render("projects");
})

router.get('/services', (req, res) => {
    res.render("services");
})

router.get('/contact', (req, res) => {
    res.render("contact");
})




module.exports = router;