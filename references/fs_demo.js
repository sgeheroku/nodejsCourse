const fs = require('fs');
const path = require('path');

console.log('fs-demo:');

//create folder
fs.mkdir(path.join(__dirname, 'test'), {}, err=>{
    if(err){
        console.log(err);
        //throw err;
    }else{
        console.log('fs: Folder Created!');
    }
})


//create & write file
fs.writeFile(path.join(__dirname, 'test', 'hello.txt'), 'Hello World !! from node.js\n', err=>{
    if(err){
        console.log(err);
        //throw err;
    }
    console.log('fs: File written !');
    //append file
    fs.appendFile(path.join(__dirname, 'test', 'hello.txt'), 'I Love node.js', err=>{});

});

//read file
fs.readFile(path.join(__dirname, 'test', 'hello.txt'), 'utf8', (err,data)=>{
    if(err){
        console.log(err);
        //throw err;
    }
    console.log('fs-readFile: ' + data);
});

// file rename
fs.rename(path.join(__dirname, 'test', 'hello.txt'), path.join(__dirname, 'test', 'helloworld.txt'), err=>{
    if(err){
        console.log(err);
        //throw err;
    }
    console.log('fs-readFile: File Renamed !');
});