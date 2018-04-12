var express = require('express');
var router = express.Router();
import User from './users'
export default class getProfile {
  static getProfile(req, res) {
      let data = {
        "Nama": "Leo Masta Kusuma",
        "Jenis Kelamin": "Laki-laki",
        "title": "test"
      }
      res.render('layout', {
        data,
        title: "title"
      });
  }
}


/* GET home page. */
router.get('/', function (req, res, next) {
  let data = {
    "Nama": "Leo Masta Kusuma",
    "Jenis Kelamin": "Laki-laki",
    "title": "test"
  }
  res.render('layout', {
    data,
    title: "Home",
  });
});

module.exports = router;