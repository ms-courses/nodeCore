var em=require('events').EventEmitter;
var emiter = new em();
var callback = function(stream) {
    console.log('Function called');
};

emiter.on('listen',function(name) {
    console.log('Listener called');
});

emiter.once('listenOnce',function(name) {
    console.log('Listener called once');
});
//emit
for (var i=0;i<3;i++) {
    console.log(emiter.emit('listen', 'Argument'));
    console.log(emiter.emit('listenOnce', 'Argument'));
}


