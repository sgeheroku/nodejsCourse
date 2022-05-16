const url = require('url');

const myUrl = new URL('https://www.golucky.com/api/query?id=100&status=active');

console.log(myUrl.href);
console.log(myUrl.toString());
console.log(myUrl.host);
console.log(myUrl.hostname);
console.log(myUrl.pathname);
console.log(myUrl.searchParams);
myUrl.searchParams.append('abc','123');
myUrl.searchParams.forEach((name, value)=>{
    console.log(`${name}:${value}`);
})