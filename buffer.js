var buffer1 = new Buffer('Tutorials Point');
var buffer2 = new Buffer(3);
//buffer1.copy(buffer2);
//console.log("buffer2 content: " + buffer2.toString());
buffer2=buffer1.slice(0,9);
console.log(" Scliced content "+buffer2.toString());