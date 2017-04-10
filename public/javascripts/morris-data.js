$(function () {
    Morris.Area({
        element: 'morris-area-chart',
        data: data_area,
        xkey: 'period',
        ykeys: ['SachThieuNhi', 'SachGiaoKhoa', 'SachKhoaHoc'],
        labels: ['Sach Thieu Nhi', 'Sach Giao Khoa', 'Sach Khoa Hoc'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: data_bar,
        xkey: 'y',
        ykeys: ['SachThieuNhi', 'SachGiaoKhoa', 'SachKhoaHoc'],
        labels: ['SachThieuNhi', 'SachGiaoKhoa', 'SachKhoaHoc'],
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: data_donut,
        resize: true
    });
});
