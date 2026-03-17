const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let result = "";

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    
    for (s of str){
        if(s === s.toUpperCase()){
            result += s.toLowerCase();
        } else {
            result += s.toUpperCase();
        }
    }
    console.log(result);
});