var merge = require('../merge-light');

var a = {x:1};
var b = {y:2};
var c = {z:3};

var d = merge({}, a, b, c);
console.log(a);        // -> a = {x:1}
console.log(b);        // -> b = {y:2}
console.log(c);        // -> c = {z:3}
console.log(d);        // -> d = {x:1, y:2, z:3}
