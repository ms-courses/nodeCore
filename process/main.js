console.log("Process",process);
process.on('exit', function(code) {
    console.log('About to exit with code:', code);
});