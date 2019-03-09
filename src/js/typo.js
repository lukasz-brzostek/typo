$.fn.typography = function (userOptions) {
    var options = $.extend({ 
    styling: true,
    nbsp: true,
    spaceComma: false,
    spaceDot: false,
    spaceQuestion: false,
    spaceExclamation: false,
    spaceBracket: false,
    spaceDashes: false,
    oneSpace: true,
    oneComma: false,
    oneQuestion: false,
    oneExclamation: false,
    oneBracket: false
    }, userOptions);
    if (options.styling == true) {
    $("<style>body {-webkit-font-smoothing: subpixel-antialiased!important;-webkit-text-stroke: 1px transparent!important;-moz-osx-font-smoothing: grayscale!important;text-rendering: optimizeLegibility!important;word-break: break-word!important;font-kerning: normal!important;}</style>").appendTo('body');
    }
    $(".typo").each( function () {
	var content = $(this).html();
	var processed = content;
    if (options.oneComma == true) {    
    processed = processed.replace(/\,\,+/g, ","); // change multiple commas to one comma
    }
    if (options.oneQuestion == true) {    
    processed = processed.replace(/\?\?+/g, "?"); // change multiple question marks to one
    }
    if (options.oneExclamation == true) {    
    processed = processed.replace(/\!\!+/g, "!"); // change multiple exclamation marks to one
    }
    if (options.oneBracket == true) {    
    processed = processed.replace(/\(\(+/g, "(").replace(/\)\)+/g, ")").replace(/\[\[+/g, "[").replace(/\]\]+/g, "]"); // change multiple brackets to one
    }
	if (options.spaceComma == true) {
	processed = processed.replace(/,/g, ', ').replace(/ ,/g, ','); // add space after comma and remove before
    }
    if (options.spaceQuestion == true) {
    processed = processed.replace(/\?/g, '? ').replace(/ \?/g, '?'); // add space after question mark and remove before
    }
    if (options.spaceExclamation == true) {
    processed = processed.replace(/\!/g, '! ').replace(/ \!/g, '!'); // add space after exclamation mark and remove before
    }
    if (options.spaceBracket == true) {
    processed = processed.replace(/\( /g, '(').replace(/\(/g, ' (').replace(/\)/g, ') ').replace(/ \)/g, ')'); // remove-add space between bracket
    processed = processed.replace(/\[ /g, '[').replace(/\[/g, ' [').replace(/\]/g, '] ').replace(/ \]/g, ']'); // remove-add space between sqare bracket
    }
    if (options.spaceDot == true) {
    processed = processed.replace(/\./g, '. ').replace(/ \./g, '.'); // add space after dot and remove before
    }
    if (options.spaceDashes == true) {
    processed = processed.replace(/-+/g, " - "); // add spaces between dashes;
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
	processed = processed.replace(/(&nbsp;)\1+/g, "&nbsp;"); // remove doubled &nbsp;
    }
	$(this).html(processed);
});
};