console.log("The filename of the code being executed.",__filename);
console.log("The directory that the currently executing script",__dirname);

setTimeout(function() {
    console.log('timeout fun. called once after 1000ms');
},1000);
//clearTimeout();

var it=setInterval(function() {
    console.log('interval function called every 1000ms');
},1000);
clearInterval(it);

var module1 = require('./module1');
console.log("require.main",require.main);
console.log("require.resolve",require.resolve('path'));

