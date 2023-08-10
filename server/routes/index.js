var express = require('express');
var router = express.Router();
let {
  getLogin, 
  handleLogin
}  = require("../controller/login")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/login', getLogin);
router.post('/login', handleLogin);

module.exports = router;
