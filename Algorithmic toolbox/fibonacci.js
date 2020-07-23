// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    console.log(fib(parseInt(line, 10)));
    process.exit();
}

const cache = {}
function fib(n) {
    // recursive cached version
    // if(n <= 1){
    //     return n;
    // } 
    // let result;
    // if(cache[n]){
    //    result = cache[n];
    // } else {
    //     result =  fib(n-1) + fib(n-2);
    //     cache[n] = result;
    // }
    // return result; 

    //iterative
    let prev1 = 0;
    let prev2 = 1;
    let cur;
    if(n<=1) return n;
     for(let i = 2; i <= n; i++){
       cur = prev1 + prev2;
       prev1 = prev2;
       prev2 = cur;
     }
     return cur%10;
}

module.exports = fib;
