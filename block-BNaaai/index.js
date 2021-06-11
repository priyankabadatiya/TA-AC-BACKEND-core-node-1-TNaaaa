var url = require("url");
const urlData = url.parse(
  "https://blog.altcampus.io:80/students/register?name=altcampus&gender=male",
  true
);
console.log(urlData);
console.log(urlData.pathname);
console.log(urlData.query);
console.log(urlData.host);
console.log(urlData.protocol);