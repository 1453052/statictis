$(function () {


    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2010 Q1',
            SachThieuNhi: 2666,
            SachGiaoKhoa: null,
            SachKhoaHoc: 2647
        }, {
            period: '2010 Q2',
            SachThieuNhi: 2778,
            SachGiaoKhoa: 2294,
            SachKhoaHoc: 2441
        }, {
            period: '2010 Q3',
            SachThieuNhi: 4912,
            SachGiaoKhoa: 1969,
            SachKhoaHoc: 2501
        }, {
            period: '2010 Q4',
            SachThieuNhi: 3767,
            SachGiaoKhoa: 3597,
            SachKhoaHoc: 5689
        }, {
            period: '2011 Q1',
            SachThieuNhi: 6810,
            SachGiaoKhoa: 1914,
            SachKhoaHoc: 2293
        }, {
            period: '2011 Q2',
            SachThieuNhi: 5670,
            SachGiaoKhoa: 4293,
            SachKhoaHoc: 1881
        }, {
            period: '2011 Q3',
            SachThieuNhi: 4820,
            SachGiaoKhoa: 3795,
            SachKhoaHoc: 1588
        }, {
            period: '2011 Q4',
            SachThieuNhi: 15073,
            SachGiaoKhoa: 5967,
            SachKhoaHoc: 5175
        }, {
            period: '2012 Q1',
            SachThieuNhi: 10687,
            SachGiaoKhoa: 4460,
            SachKhoaHoc: 2028
        }, {
            period: '2012 Q2',
            SachThieuNhi: 8432,
            SachGiaoKhoa: 5713,
            SachKhoaHoc: 1791
        }],
        xkey: 'period',
        ykeys: ['SachThieuNhi', 'SachGiaoKhoa', 'SachKhoaHoc'],
        labels: ['Sach Thieu Nhi', 'Sach Giao Khoa', 'Sach Khoa Hoc'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            SachThieuNhi: 2687,
            SachGiaoKhoa: 4260,
            SachKhoaHoc: 2428
        }, {
            y: '2007',
            SachThieuNhi: 1687,
            SachGiaoKhoa: 4260,
            SachKhoaHoc: 2018
        }, {
            y: '2008',
            SachThieuNhi: 2687,
            SachGiaoKhoa: 5460,
            SachKhoaHoc: 6328
        }, {
            y: '2009',
            SachThieuNhi: 3687,
            SachGiaoKhoa: 3460,
            SachKhoaHoc: 6028
        }, {
            y: '2010',
            SachThieuNhi: 3687,
            SachGiaoKhoa: 3460,
            SachKhoaHoc: 6028
        }, {
            y: '2011',
            SachThieuNhi: 4687,
            SachGiaoKhoa: 3460,
            SachKhoaHoc: 3628
        }, {
            y: '2012',
            SachThieuNhi: 5687,
            SachGiaoKhoa: 6460,
            SachKhoaHoc: 3228
        }],
        xkey: 'y',
        ykeys: ['SachThieuNhi', 'SachGiaoKhoa', 'SachKhoaHoc'],
        labels: ['SachThieuNhi', 'SachGiaoKhoa', 'SachKhoaHoc'],
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Chi Nhánh A",
            value: 2320
        }, {
            label: "Chi Nhánh B",
            value: 3520
        }, {
            label: "Chi Nhánh C",
            value: 2120
        }, {
            label: "Chi Nhánh D",
            value: 2210
        }, {
            label: "Chi Nhánh E",
            value: 2210
        }],
        resize: true
    });
});
