const express = require('express');
const router = express.Router();

const quizController = require('../controllers/quiz');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz' });
});

// GET /credits

router.get('/credits', function(req, res, next) {
  res.render('credits', { authors: 'Marta Hernández Muela y Carlos Caro Álvarez' });
});

// GET /quizzes

router.get('/quizzes', quizController.index);

module.exports = router;