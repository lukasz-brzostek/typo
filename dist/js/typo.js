/*
 * typo v1.3 - 18/9/2020
 * Author: Łukasz Brzostek
 *
 * This work is licensed under the Creative Commons
 * Attribution 4.0 International License:
 * https://creativecommons.org/licenses/by/4.0
*/

// Check for jQuery
// ----------------

if ("undefined" == typeof jQuery)
    throw new Error("typo requires jQuery");

(function($){
$.fn.typography = function (userOptions) {

// Default plugin options
// ----------------------

    var options = $.extend({
    enableAll: false,
    styling: true,
    wordBreak: true,
    nbsp: true,
    spaceComma: false,
    spaceDot: false,
    spaceQuestion: false,
    spaceExclamation: false,
    spaceBracket: false,
    spaceDashes: false,
    oneSpace: false,
    oneComma: false,
    oneQuestion: false,
    oneExclamation: false,
    oneBracket: false
    }, userOptions);

    if (options.wordBreak == true || options.enableAll == true) {
    var wordb = "break-word;";
    }
    if (options.styling == true || options.enableAll == true) {
    $("body").append("<style>body {-webkit-font-smoothing: subpixel-antialiased;-webkit-text-stroke: 1px transparent;-moz-osx-font-smoothing: grayscale;text-rendering: optimizeLegibility;font-kerning: normal;word-break: " + (wordb != null ? wordb: 'normal') + "}</style>");
    }
    $(".typo").each( function () {
	var content = $(this).html();
	var processed = content;
    if (options.oneComma == true || options.enableAll == true) {    
    processed = processed.replace(/\,\,+/g, ","); // change multiple commas to one comma
    }
    if (options.oneQuestion == true || options.enableAll == true) {    
    processed = processed.replace(/\?\?+/g, "?"); // change multiple question marks to one
    }
    if (options.oneExclamation == true || options.enableAll == true) {    
    processed = processed.replace(/\!\!+/g, "!"); // change multiple exclamation marks to one
    }
    if (options.oneBracket == true || options.enableAll == true) {    
    processed = processed.replace(/\(\(+/g, "(").replace(/\)\)+/g, ")").replace(/\[\[+/g, "[").replace(/\]\]+/g, "]"); // change multiple brackets to one
    }
	if (options.spaceComma == true || options.enableAll == true) {
	processed = processed.replace(/,/g, ', ').replace(/ ,/g, ','); // add space after comma and remove before
    }
    if (options.spaceQuestion == true || options.enableAll == true) {
    processed = processed.replace(/\?/g, '? ').replace(/ \?/g, '?'); // add space after question mark and remove before
    }
    if (options.spaceExclamation == true || options.enableAll == true) {
    processed = processed.replace(/\!/g, '! ').replace(/ \!/g, '!'); // add space after exclamation mark and remove before
    }
    if (options.spaceBracket == true || options.enableAll == true) {
    processed = processed.replace(/\( /g, '(').replace(/\(/g, ' (').replace(/\)/g, ') ').replace(/ \)/g, ')'); // remove-add space between bracket
    processed = processed.replace(/\[ /g, '[').replace(/\[/g, ' [').replace(/\]/g, '] ').replace(/ \]/g, ']'); // remove-add space between sqare bracket
    }
    if (options.spaceDot == true || options.enableAll == true) {
    processed = processed.replace(/\./g, '. ').replace(/ \./g, '.'); // add space after dot and remove before
    }
    if (options.spaceDashes == true || options.enableAll == true) {
    processed = processed.replace(/-+/g, " - "); // add spaces between dashes;
    }
    if (options.oneSpace == true || options.enableAll == true) {    
    processed = processed.replace(/\s\s+/g, " "); // change multiple spaces to one space
    }
    if (options.nbsp == true || options.enableAll == true) { // Add &nbsp;
    processed = processed.replace(/(\s\w\s{1})/gi, "$1&nbsp;");
    processed = processed.replace(/(\b\s\w{2}\s)/gi, "$1&nbsp;");
    processed = processed.replace(/(\b\s\w{3}\s)/gi, "$1&nbsp;");
    processed = processed.replace(/(\s\w{3}\s)/gi, "$1&nbsp;");
    processed = processed.replace(/(\s\w{2}\S\s)/gi, "$1&nbsp;");
    processed = processed.replace(/(\s\w{2}\s)/gi, "$1&nbsp;");
    processed = processed.replace(/(\s\d{0,2}\d\s)/gi, "$1&nbsp;");
    processed = processed.replace(/(\b\s\w{0,3}\b\s\b)/gi, "$1&nbsp;");
    processed = processed.replace(/(\s\w{2}[.]\s)/ig, "$1&nbsp;");
    processed = processed.replace(/(\s\w{0,1}\w\s)/gi, "$1&nbsp;");
    processed = processed.replace(/(\s\W[że]\s)/gi, "$1&nbsp;");
    processed = processed.replace(/(\s\w\S{1}\w\s)/gi, "$1&nbsp;");
    processed = processed.replace(/\s&nbsp;/gi, "&nbsp;"); // remove spaces between &nbsp;
    processed = processed.replace(/(&nbsp;)\1+/g, "&nbsp;"); // remove doubled &nbsp;
    }
	$(this).html(processed);
});
};
})(jQuery);