$(function () {
    Morris.Area({
        element: 'morris-area-chart',
        data: data,
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
