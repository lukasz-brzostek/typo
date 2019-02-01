$.fn.typography = function (userOptions) {
    var options = $.extend({ 
    styling: true,
    spaceComma: true,
    oneSpace: true,
    nbsp: true
    }, userOptions);
    if (options.styling == true) {
    $("<style>body {-webkit-font-smoothing: subpixel-antialiased!important;-webkit-text-stroke: 1px transparent!important;-moz-osx-font-smoothing: grayscale!important;text-rendering: optimizeLegibility!important;word-break: break-word!important;font-kerning: normal!important;}</style>").appendTo('body');
    }
    $(".typo").each( function () {
	var content = $(this).html();
	var processed = content;
	if (options.spaceComma == true) {
	processed = processed.replace(',', ', '); // add space after comma
    }
	if (options.oneSpace == true) {    
	processed = processed.replace(/\s\s+/g, " "); // change multiple spaces to one space
    }
    if (options.nbsp == true) { // Add &nbsp;
    processed = processed.replace(/(\s\w\s{1})/gi, "$1&nbsp;");
    processed = processed.replace(/(\b\s\w{2}\s)/gi, "$1&nbsp;");
    processed = processed.replace(/(\s\w{2}\s)/gi, "$1&nbsp;");
    processed = processed.replace(/(\s\d{0,2}\d\s)/gi, "$1&nbsp;");
	processed = processed.replace(/(\b\s\w{0,3}\b\s\b)/gi, "$1&nbsp;");
    processed = processed.replace(/(\s\w{0,2}\W\s)/gi, "$1&nbsp;")
    processed = processed.replace(/(\s\w{0,1}\w\s)/gi, "$1&nbsp;")
    processed = processed.replace(/(\s[ż]\w\s{1})/gi, "$1&nbsp;");
	processed = processed.replace(/\s&nbsp;/gi, "&nbsp;"); // remove spaces between &nbsp;
	processed = processed.replace(/(?:&nbsp;){2,}/gi, "&nbsp;"); // remove doubled &nbsp;
    }
	$(this).html(processed);
});
};