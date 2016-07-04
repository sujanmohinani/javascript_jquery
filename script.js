$(document).ready(function(){
  createGrid(16);
  color();
  reset();
});

function createGrid() {
  var grid = $('#wrapper');
  var resetButton = '<br/><button type="button"> Reset </button>';
  for (var x = 0; x < 16; x++) {
    var row = '<div class="row">';
    for (var j = 0; j < 16; j++) {
      row += '<div class="square"></div>';
      // row += '</div>';
    }
    row += '</div>';
    '<div />'
    grid.append(row);
  }
  grid.append(resetButton);
}

function color() {
  $(".square").mouseover(function() {
    $(this).css("background-color", "red");
  });
}

function reset() {
  $('button').click(function() {
    $('.square').css("background-color", "yellow");
  });
}