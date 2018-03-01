function showRows(tableID, noOfRows) {
    //Add a div to hold row numbers
    $(tableID).after('<div id="nav"></div>');

    var tableRows = $(tableID).find('tbody tr');
    var rowsShown = noOfRows;
    var rowsTotal = $(tableRows).length;
    var numPages = rowsTotal / rowsShown;
    for (i = 0; i < numPages; i++) {
        var pageNum = i + 1;
        $('#nav').append('<a href="#" rel="' + i + '">' + pageNum + '</a> ');
    }
    $(tableRows).hide();
    $(tableRows).slice(0, rowsShown).show();
    $('#nav a:first').addClass('active');
    $('#nav a').bind('click', function () {

        $('#nav a').removeClass('active');
        $(this).addClass('active');
        var currPage = $(this).attr('rel');
        var startItem = currPage * rowsShown;
        var endItem = startItem + rowsShown;
        $(tableRows).css('opacity', '0.0').hide().slice(startItem, endItem).
            css('display', 'table-row').animate({ opacity: 1 }, 300);
    });

}