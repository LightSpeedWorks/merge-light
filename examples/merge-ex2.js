var merge = require('../merge-light');

var a = {x:1};
var b = {y:2};

var c = merge(a, b);
console.log(a);        // -> a = {x:1, y:2}
console.log(b);        // -> b = {y:2}
console.log(c);        // -> c = {x:1, y:2}
console.log(a === c);  // -> true
