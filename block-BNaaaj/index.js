console.log("Welcome to Nodejs");

var os = require("os");

var freeM = os.freemem();
var cpus = os.cpus().length;

var uptime = os.uptime();

var version = os.version();

var buff1 = Buffer.alloc(12);
var buff2 = Buffer.allocUnsafe(12);

buff1.write("Welcome to Node js");

console.log(buff1.toString());
