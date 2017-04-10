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
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2010',
            a: 50,
            b: 40
        }, {
            y: '2011',
            a: 75,
            b: 65
        }, {
            y: '2012',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Download Sales",
            value: 12
        }, {
            label: "In-Store Sales",
            value: 30
        }, {
            label: "Mail-Order Sales",
            value: 20
        }],
        resize: true
    });
});
