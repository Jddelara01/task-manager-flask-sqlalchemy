document.addEventListener("DOMContentLoaded", function () {
    // sidenav initialization
    var sidenav = document.querySelectorAll(".sidenav");
    M.Sidenav.init(sidenav);

    var elems = document.querySelectorAll('.modal');
    M.Modal.init(elems);

    // datepicker initialization
    var datepicker = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(datepicker, {
        format: "dd mmmm, yyyy",
        i18n: {
            done: "Select"
        }
    });

    // select initialization
    var selects = document.querySelectorAll("select");
    M.FormSelect.init(selects);

    // display tasks
    var collapsibles = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsibles);
});