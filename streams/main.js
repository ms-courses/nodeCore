var fs=require('fs');
var readableStrem=fs.createReadStream('streams/data.txt',{ flags: 'r',
    //encoding: 'ascii',
    //encoding: 'utf8',
    //encoding: 'base64',
    encoding: null,
    fd: null,
    mode: 0666,
    autoClose: true
});
readableStrem.on('readable',function() {
    console.log('Strem is readable');
});

readableStrem.on('open',function(fd) {
   console.log('Strem is open',fd);
});
readableStrem.on('error',function(error) {
    console.log('Error to open',error);
});
readableStrem.on('data', function(chunk) {
    console.log('got bytes of data', chunk);
});
readableStrem.on('end', function() {
    console.log('there will be no more data.');
});
readableStrem.on('close', function() {
    console.log('Close the strem.');
});

//fs
fs.readFile('streams/data.txt', {encoding:'utf8'},function (err, data) {
    if (err) throw err;
    console.log(data);
});