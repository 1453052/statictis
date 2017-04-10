var express = require('express');
var db = require('../db');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    var collection_doanh_so = db.get().collection('doanh_so');
    var collection_doanh_thu_theo_the_loai = db.get().collection('doanh_thu_theo_the_loai');
    var collection_doanh_thu_theo_chi_nhanh = db.get().collection('doanh_thu_theo_chi_nhanh');
    collection_doanh_so.find({}, {
        period: 1,
        SachThieuNhi: 1,
        SachGiaoKhoa: 1,
        SachKhoaHoc: 1,
        _id: 0
    }).toArray(function (err, data) {
        if (err) {
            console.log('Loi query bang doanh_so' + err);
        }
        data_area = data;
    });
    collection_doanh_thu_theo_the_loai.find({}, {
        y: 1,
        SachThieuNhi: 1,
        SachGiaoKhoa: 1,
        SachKhoaHoc: 1,
        _id: 0
    }).toArray(function (err, data) {
        if (err) {
            console.log('Loi query bang doanh_thu_theo_the_loai' + err);
        }
        data_bar = data;
    })

    collection_doanh_thu_theo_chi_nhanh.find({}, {
        label: 1,
        value: 1,
        _id: 0
    }).toArray(function (err, data) {
        if (err) {
            console.log('Loi query bang doanh_thu_theo_chi_nhanh' + err);
        }
        data_donut = data;
    })
    console.log(data_area)
    res.render('index', {title: 'Express', data_area: data_area, data_bar: data_bar, data_donut: data_donut});
});

module.exports = router;
