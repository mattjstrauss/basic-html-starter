$(document).ready(function(){

	// ==============================================================*/
	// Remove loading class to "note" document is ready
	// ==============================================================*/

	$('body').removeClass('loading');

	// ==============================================================*/
	// Create node and insert SVG file after the body
	// ==============================================================*/

	// Remove local file and uncomment below once on the dev server

	// $.get("./img/spritemap.svg", function(data) {
	//   var div = document.createElement("div");
	//   div.innerHTML = new XMLSerializer().serializeToString(data.documentElement);
	//   document.body.insertBefore(div, document.body.childNodes[0]);
	// });

})