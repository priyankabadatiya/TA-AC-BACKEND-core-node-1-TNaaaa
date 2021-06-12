var http = require("http");

http
  .createServer((request, respone) => {
    console.log(request, respone);
    respone.end();
  })
  .listen(5000, "localhost");

//.....................................................

var http1 = require("http");

var server = http1.createServer(handleRequest);

function handleRequest(req, res) {
  res.end("My first server in NodeJS");
}

server.listen(5100, "localhost");
//.....................................................

var http2 = require("http");

var server = http2.createServer(handleRequest);

function handleRequest(req, res) {
  console.log(req.method, req.url);
}

server.listen(5566, "localhost");
//..............................................................

var server = http.createServer(handleRequest)

function handleRequest(req,res){
    res.setHeader('Content-Type', 'text/plain')
    res.end(req.headers)
}
server.listen(7000, ()=>{
    console.log(`server listening on port 7000`)
})

//.............................................................

var server2 = http.createServer(handleRequest5)
function handleRequest(req,res){
    res.statusCode = 202
}

server2.listen(3333, ()=>{
    console.log('listening to port 3333')
})
//............................................................

var server3 = http.createServer(handleRequest6)

function handleRequest6(req,res){
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end(`<h3>Welcome to altcampus</h3>`)
}
server3.listen(8000, ()=>{
    console.log('server listening to port 8000')
})
//............................................................
var http3 = http.createServer(handleRequest7)

function handleRequest7(req,res){
    if(req.method === 'POST' && req.url === '/index'){
        res.writeHead(200), {'Content-Type':'text/html'}
        res.end('<h1>posted for first time</h1>')
    }
}
http3.listen(5050, ()=>{
    console.log('server listening to port 5050')
});

//...............................................................

var server4 = http.createServer(handleRequest);

function handleRequest(req, res) {
  if (req.method === "GET" && req.url === "/") {
    res.setHeader("Content-Type", "text/plain");
    res.write("priyanka");
    res.end();
  } else if (req.method === "GET" && req.url === "/about") {
    res.setHeader("Content-Type", "text/html");
    res.end("<h2>this is all aboutpage</h2>");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>Page Not Found </h1>");
  }
}

server.listen(2345, () => {
  console.log("server listening on port of 2345");
});