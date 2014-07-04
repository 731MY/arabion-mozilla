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
		if(Pattren.test(content)) continue;
		
		type = content.slice(-4).toLowerCase();
		if (IMAGES.indexOf(type) > -1) {
			// get image grandpa width
			var SimpleWidth	=	$(links[i]).parent().parent().width();
			links[i].innerHTML = "<img src='" + content + "' style='max-width:"+SimpleWidth+"px;'>";
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