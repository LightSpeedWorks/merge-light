var merge = require('../merge-light');

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
