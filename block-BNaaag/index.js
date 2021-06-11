const path = require("path");

filepath = path.join(__dirname, "index.md");

const fs = require("fs");

fs.readFile(filepath, (err, file) => {
  console.log(file);
  console.log(file.toString());
});

console.log("Execute me first");

console.time("file1");

for (let i = 0; i < 1000000; i++) {}

console.timeEnd("file1");

console.log("execute me last");

console.time("file1");
setTimeout(() => {
  console.log("time executed");
  console.timeEnd("file1");
}, 1000);

var buff1 = Buffer.alloc(10);

buff1.write("Welcome to Node.js");

console.log(buff1.toString());
