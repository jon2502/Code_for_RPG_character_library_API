var express = require('express');
var router = express.Router();

con = require('../controller/charactercontroller.js');

/* get all charachters */
router.get('/characters', con.getCharacters, function(req, res, next) {
  res.json({ characters: res.locals.characters});
});

router.get('/systems', con.getAllSystem, function(req, res) {
  res.json({ systems: res.locals.systems})
});

/* get all charachters from specific system*/
router.get('/systems/:system', con.getSystem, function(req, res) {
  res.json({ characters: res.locals.characters})
});

/* get specific character*/
router.get('/characters/:character', con.getCharacter, function(req, res) {
  res.json({ character: res.locals.character})
});

/*get all images*/
router.get('/gallery', con.getAllImages, function(req, res) {
  res.json({ characters: res.locals.characters})
});

/*get images for specifick character */
router.get('/gallery/:character', con.getCharacterImages, function(req, res) {
  res.json({ character: res.locals.character})
});

router.get('/downloads', con.getDownloads, function(req, res) {
  res.json({ downloads: res.locals.downloads})
})


module.exports = router;
