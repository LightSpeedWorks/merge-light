[merge-light](https://www.npmjs.com/package/merge-light) - npm
====

`merge-light` : merge objects into first argument object.
thin merge copy.

# PREPARE:

for node.js or io.js

```bash
$ npm install merge-light --save
```

```js
var merge = require('merge-light');
```

or

for browsers

[https://lightspeedworks.github.io/merge-light/merge-light.js](https://lightspeedworks.github.io/merge-light/merge-light.js)

# USAGE:

```js
destination = merge(destination, source, ...)
```

# EXAMPLES:

merge object into first object.

```js
var merge = require('merge-light');

var a = {x:1};
var b = {y:2};

merge(a, b);
console.log(a);        // -> a = {x:1, y:2}
console.log(b);        // -> b = {y:2}
```

merge object into first object and return merged first object.

```js
var merge = require('merge-light');

var a = {x:1};
var b = {y:2};

var c = merge(a, b);
console.log(a);        // -> a = {x:1, y:2}
console.log(b);        // -> b = {y:2}
console.log(c);        // -> c = {x:1, y:2}
console.log(a === c);  // -> true
```

create a new object and merge rest of arguments objects.

```js
var merge = require('merge-light');

var a = {x:1};
var b = {y:2};
var c = {z:3};

var d = merge({}, a, b, c);
console.log(a);        // -> a = {x:1}
console.log(b);        // -> b = {y:2}
console.log(c);        // -> c = {z:3}
console.log(d);        // -> d = {x:1, y:2, z:3}
```

merge objects, if destination has same property already, then does not copied.

```js
var merge = require('merge-light');

var a = {x:1, z:3};
var b = {y:22};
var c = {z:33};
var d = {w:44};

var e = merge({}, a, b, c, d);
console.log(a);        // -> a = {x:1, z:3}
console.log(b);        // -> b = {y:22}
console.log(c);        // -> c = {z:33}
console.log(d);        // -> d = {w:44}
console.log(e);        // -> d = {x:1, z:3, y:22, w:44}
```

# LICENSE:

  MIT
