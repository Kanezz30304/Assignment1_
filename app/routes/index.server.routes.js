var express = require('express');
var router = express.Router();
var indexController = require("../controllers/index.server.controller");
var aboutController = require("../controllers/about.server.controller");

/* GET home page. */
router.get('/', indexController.indexRender);

router.get('/about', aboutController.render);
router.get('/project', indexController.projectRender);
router.get('/contact', indexController.contactRender);

router.get('/services', indexController.servicesRender);
module.exports = router;
