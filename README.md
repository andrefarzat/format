format
======

Format string function for javascript

[![Build Status](https://travis-ci.org/andrefarzat/format.svg?branch=master)](https://travis-ci.org/andrefarzat/format)


### Installing

`bower install format --save`

### Usage

```html
<script src="/path/to/format.js"></script>
<script>
    // As the arguments number
    var txt = "It's {0} for the money, {1} for the show, {2} to get ready";
    var formatted = format(txt, 'one', 'two', 'three');
    // results: "It's one for the money, two for the show, three to get ready"

    // Also as dict-like object
    var txt = "It's one for the {one}, two for the {two}, three to {three}";
    var formatted = format(txt, { 'one': 'money', 'two': 'show', 'three': 'get ready' });
    // also results: "It's one for the money, two for the show, three to get ready"

    // It's possible to access properties of the obejct
    var txt = 'My name is {name.lastName}, {name.firstName} {name.lastName}';
    var formatted = format(txt, { 'name': { 'firstName': 'James', 'lastName': 'Bond' } });
    // results: "My name is Bond, James Bond"
</script>