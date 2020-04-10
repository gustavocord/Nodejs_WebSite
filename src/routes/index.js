const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('index', { title: 'First Web Node' });
  });
  

  router.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact Page' });
  });
  router.get('/videos', (req, res) => {
    res.render('videos', { title: 'Videos' });
  });

module.exports = router;