//
// jquery.rowClick.1.0.js
//
// Expands the clickable area to an entire table row
// if that row contains a link.
//
//
// REQUIRED HTML:
//
// <table>
//   <tr>
//     <td>Test Cell 1</td>
//     <td><a href="somewhere.html">Test Cell 2</a></td>
//     <td>Test Cell 3</td>
//   </tr>
// </table>
//
//
// REQUIRED JS:
//
// $('table').rowClick();
//
(function( $ ){
	$.fn.rowClick = function() {
		
		this.each(function() {
			$(this).find('tr').has('a')
				.addClass('rowClick')
				.click(function(){
					window.location = $(this).children('td').children('a').attr('href');
				});
		});
		
		return this;
	
	};
})( jQuery );