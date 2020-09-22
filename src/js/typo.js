/*
 * typo v1.4 - 22/9/2020
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

// Loop for each option if enableAll is true
// -----------------------------------------

    if (options.enableAll) {
       for (var i in options) options[i] = true;
    }

// Insert additional styles if styling or word break is active
// -----------------------------------------------------------

    if (options.wordBreak) var wordb = "break-word;";

    if (options.wordBreak && !options.styling) {
       $("body").append("<style>body {word-break: " + (wordb != null ? wordb: 'normal') + "}</style>");        
    }

    if (options.styling) {
       $("body").append("<style>body {-webkit-font-smoothing: subpixel-antialiased;-webkit-text-stroke: 1px transparent;-moz-osx-font-smoothing: grayscale;text-rendering: optimizeLegibility;font-kerning: normal;word-break: " + (wordb != null ? wordb: 'normal') + "}</style>");
    }

// Process content with selected by user options
// ---------------------------------------------

    $(".typo").each( function () {
	   var content = $(this).html();
	   var processed = content;
    if (options.oneComma) {
       processed = processed.replace(/\,\,+/g, ","); // change multiple commas to one comma
    }
    if (options.oneQuestion) {
       processed = processed.replace(/\?\?+/g, "?"); // change multiple question marks to one
    }
    if (options.oneExclamation) {
       processed = processed.replace(/\!\!+/g, "!"); // change multiple exclamation marks to one
    }
    if (options.oneBracket) {
       processed = processed.replace(/\(\(+/g, "(").replace(/\)\)+/g, ")").replace(/\[\[+/g, "[").replace(/\]\]+/g, "]").replace(/\{\{+/g, "{").replace(/\}\}+/g, "}"); // change multiple brackets to one
    }
	if (options.spaceComma) {
	   processed = processed.replace(/(,\b)/g, ', ').replace(/\s{1,},/g, ','); // add space after comma and remove before
    }
    if (options.spaceQuestion) {
       processed = processed.replace(/\?/g, '? ').replace(/\s{1,}\?/g, '?'); // add space after question mark and remove before
    }
    if (options.spaceExclamation) {
       processed = processed.replace(/\!/g, '! ').replace(/\s{1,}\!/g, '!'); // add space after exclamation mark and remove before
    }
    if (options.spaceBracket) {
       processed = processed.replace(/\( /g, '(').replace(/\(/g, ' (').replace(/\)/g, ') ').replace(/ \)/g, ')'); // remove-add space between bracket
       processed = processed.replace(/\[ /g, '[').replace(/\[/g, ' [').replace(/\]/g, '] ').replace(/ \]/g, ']'); // remove-add space between sqare bracket
    }
    if (options.spaceDot) {
       processed = processed.replace(/\./g, '. ').replace(/\s{1,}\./g, '.'); // add space after dot and remove before
    }
    if (options.spaceDashes) {
       processed = processed.replace(/-+/g, " - "); // add spaces between dashes;
    }
    if (options.oneSpace) {    
       processed = processed.replace(/\s\s+/g, " "); // change multiple spaces to one space
    }
    if (options.nbsp) { // RegEx to add &nbsp; in various cases
       processed = processed.replace(/(\b\s\w{1,3}\s)/g, "$1&nbsp;");
       processed = processed.replace(/(\b\s\w{1,2}\s)/g, "$1&nbsp;");
       processed = processed.replace(/(\s\w{1,3}\s)/g, "$1&nbsp;"); 
       processed = processed.replace(/(&nbsp;\w{1,3}\s)/g, "$1&nbsp;");
       processed = processed.replace(/([,.]\w{1,3}\s)/g, "$1&nbsp;");
       processed = processed.replace(/(\s\w{1,3}[,.])/g, "$1&nbsp;");
       processed = processed.replace(/(\s\w{1,3}\W\s)/g, "$1&nbsp;"); 
       processed = processed.replace(/(\d{1,3}[,.]\s)/g, "$1&nbsp;");
       processed = processed.replace(/(\s{0,10}&nbsp;\s{0,10})/g, "&nbsp;"); // remove spaces between &nbsp;
       processed = processed.replace(/(&nbsp;)\1+/g, "&nbsp;"); // remove doubled &nbsp;
    }
	$(this).html(processed);
});
};
})(jQuery);