$(document).ready(function() {

	// http://highlightjs.org/usage/
	$('pre code').each(function(i, e) {hljs.highlightBlock(e)});
	
	// https://gist.github.com/lambdaX/ccb0b94b5998d8dcfb96
	var IMAGES = ['.jpg', '.png', '.gif'];
	// select helper
	var _$ = function (s) {
		return document.querySelectorAll(s);
	}
	// finding images links
	var links = _$('p a');
	for (var i = 0; i < links.length; i++) {
		// finding Images (PNG , JPG)
		var content = links[i].href;
		// escape dropbox Links
		var Pattren = /(http|https):\/\/(www\.|)dropbox\.com/i;
		// check if a URL is a valid image
		if(Pattren.test(content) || !isValidURL(content)) continue;
		
		type = content.slice(-4).toLowerCase();
		if (IMAGES.indexOf(type) > -1) {
			// get image grandpa width
			var SimpleWidth	=	$(links[i]).parent().parent().width();
			var ImageVar=document.createElement("img"); // create img element
			ImageVar.src=content; // set src to image url
			ImageVar.style="max-width:"+SimpleWidth+"px;"; // grandpa width
			links[i].innerHTML = ""; // clear element content
			links[i].appendChild(ImageVar); // append img element
		}
	}
	
	// MathJax
	MathJax.Hub.Config({tex2jax: {inlineMath: [['#$','$'] ]} , messageStyle: "none" });
	// https://gist.github.com/lambdaX/ccb0b94b5998d8dcfb96#comment-977398
	var comment_match = document.URL.match( /#comment_(\d+)$/ ); 
	if ( comment_match instanceof Array ) {
		var comment = _$('div#comment-' + comment_match[1] + ' div.comment_wrapper div.comment_content')[0];
		comment.style.backgroundColor = "#FFFFCC";
	}
});

function isValidURL(s) { 
  var testRegex = /^https?:\/\/(?:[a-z\-]+\.)+[a-z]{2,6}(?:\/[^\/#?]+)+\.(?:jpe?g|gif|png)$/;
  return testRegex.test(s);
}
