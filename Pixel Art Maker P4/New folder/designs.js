$(function() {
	height = $('#inputHeight');
	width = $('#inputWeight');
	color = $('#colorPicker');
	const table = $('#pixelCanvas');

	function makeGrid() {
		// function to make the grid
		table.find('tbody').remove();
		Rows = height.val();
		Cols = width.val();
		table.append('<tbody></tbody>');
		tBody = table.find('tbody');
		// loop for rows
		for (a = 0; a < Rows; a++) {
			tBody.append('<tr></tr>');
		}
		//loop for cols
		for (b = 0; b < Cols; b++) {
			table.find('tr').append('<td class="colour"></td>');
		}
	}
	$(document).ready(function() {
		$('input[type="submit"]').on('click', function(m) {
			m.preventDefault();
			makeGrid();
		});
		$('#pixelCanvas').on('click', 'td', function(m) {
			x = color.val();
			currentColor = $(this).css('background-color');
			console.log(currentColor + "color:" + x);
			if ($(this).hasClass('colour')) {
				$(this).toggleClass('colour');
				$(this).css("background-color", x);
			} else {
				$(this).toggleClass('colour');
				$(this).css("background-color", "white");
			}
		});
	});
});
