/**
 * Created by NgoXuanManh on 3/22/2017.
 */
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('.datepicker').datepicker({});
    $("[name='status_customer']").bootstrapSwitch();
});