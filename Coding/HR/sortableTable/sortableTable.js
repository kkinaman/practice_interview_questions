/**
 * Use jQuery to make an HTML table that is sortable by column.
 *
 * Clicking a table header should sort all the table rows
 * by the values in that column. The table should sort
 * words, integers, floats, and dates (in the form YYYY-MM-DD).
 *
 * Use the table provided in index.html.
 **/
 var headers = {
  'Item Name': 0,
  'Number of Pounds': 1,
  'Price Per Pound': 2,
  'Expiration Date': 3
 };

 // var trsToArray = function () {
 //  var rows = [];
 //  console.log($('tbody tr'));
 //  $('tbody tr').each(function() {
 //    var newRow = [];
 //    $(this).children().each(function() {
 //      newRow.push($(this).text());
 //    });
 //    rows.push(newRow);
 //  });
 //  return rows;
 // };

$(function () {
  $('th').click(function() {
    var rows = $('tbody tr').get();
    var colClicked = headers[$(this).text()];
    rows.sort(function(a, b) {
      var aText = $(a).children('td').eq(colClicked).text().toLowerCase();
      var bText = $(b).children('td').eq(colClicked).text().toLowerCase();
      if (aText.indexOf('-') !== -1) {
        aText = Date.parse(aText);
        bText = Date.parse(bText);
      }
      else if (parseFloat(aText)) {
        aText = parseFloat(aText);
        bText = parseFloat(bText);
      }
      if (aText < bText) {
        return -1;
      } else if (aText > bText) {
        return 1;
      } else {
        return 0;
      }
    });

    $('tbody').empty();
    $(rows).each(function() {
      $('tbody').append($(this));
    });
  });

});

