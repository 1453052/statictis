var express = require('express');
var db = require('../db');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

    var collection = db.get().collection('doanh_so');
    collection.find({}, {
        period: 1,
        SachThieuNhi: 1,
        SachGiaoKhoa: 1,
        SachKhoaHoc: 1,
        _id: 0
    }).toArray(function (err, data) {
        if (err) {
            console.log('Loi query' + err);
        }
        console.log(data);
        res.render('index', {title: 'Express', data: data});
    })
});

module.exports = router;
