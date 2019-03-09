# typo v 1.1

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

In step 3 you can (but it's not necessary) set some options in previously added code:
```
<script>
$.fn.typography({
'spaceComma': true
});
</script>
```

In step 4 add typo class to elements with text content:
```
<div class="typo">Website content</div>
```
