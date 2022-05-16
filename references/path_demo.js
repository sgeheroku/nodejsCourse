const path = require('path');

console.log('__dirname:', __dirname)
console.log('__filename:', __filename);

//Base file name
console.log('path.basename(__filename):', path.basename(__filename));


//Directory name
console.log('path.dirname(__filename):', path.dirname(__filename));

console.log('path.extname(__filename):', path.extname(__filename));

console.log('path.parse(__filename):', path.parse(__filename));

console.log('path.join:', path.join(__dirname,'test', 'hello.html'));
