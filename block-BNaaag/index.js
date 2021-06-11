var {readFile, readFileSync} = require('fs');

readFile('./content.md', 'utf8', (err, content)=>{
    console.log(comtent);
});

var result = readFileSync('./content.md', 'utf8');

console.log(result);

var buff1 = Buffer.alloc(10);

buff1.write('Welcome to node.js');
console.log(buff1);