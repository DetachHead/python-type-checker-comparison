// https://zensical.org/docs/authoring/data-tables/#sortable-tables
document$.subscribe(function() {
  var tables = document.querySelectorAll("article table:not([class])");
  tables.forEach(function(table) {
    new Tablesort(table);
  });
});
