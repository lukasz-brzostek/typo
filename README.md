# typo v 1.2

jQuery plugin which will help you improve typography / content on your website.

## How to use

Using typo is very simple. As the first step, add jQuery and typo js file for the project:

```
<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script src="js/typo.min.js"></script>
```

In step 2 call script from your website code:

```
<script>
$.fn.typography();
</script>
```

In step 3 you can set some options in previously added code (but it's not necessary):
```
<script>
$.fn.typography({
'spaceComma': true
});
</script>
```

All available options with description:

Option | Default | Description
------ | ------- | -----------
enableAll | false | Turns on all available options
styling | true | Adds basic styles that improves fonts in website body
wordBreak | true | Sets wordBreak to "break-word" when true and "normal" when false
nbsp | true | The most important option, which brings 1, 2 or 3 letter words at the end of the line to the next one, making typography better
spaceComma | false | Adds space after comma and removes before
spaceDot | false | Adds space after dot and removes before
spaceQuestion | false | Adds space after question mark and removes before
spaceExclamation | false | Adds space after exclamation mark and removes before
spaceBracket | false | Adds spaces outside of brackets and removes unnecessary spaces inside
spaceDashes | false | Adds spaces between dashes
oneSpace | false | Changes multiple unnecessary spaces to one space
oneComma | false | Changes multiple unnecessary commas to one comma
oneQuestion | false | Changes multiple unnecessary question signs to one
oneExclamation | false | Changes multiple exclamation signs to one
oneBracket | false | Changes multiple bracket signs to one

In step 4 add typo class to elements with text content:
```
<div class="typo">Website content</div>
```

## License

typo is licensed under the Creative Commons Attribution 4.0 
International License: https://creativecommons.org/licenses/by/4.0

## Author

**Łukasz Brzostek**

Have a question about usage? Found a bug?<br>
Feel free to write a message to me: info@espritdesign.pl
