const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
})

process.stdin.setEncoding('utf8');

rl.once('line',line => {
    const n = Number(line.toString().split(' ')[0]);

    const ans = changeDp(n);
    console.log(ans);
    process.exit()
})

const changeDp = (money) => {
    const minNoOfCoins = [0];
    const coins = [1,3,4];
    for (let i = 1; i <= money; i++) {
        let curMin =  minNoOfCoins[i-coins[0]] + 1;
        for(let j = 0; (j < coins.length) && (i >= coins[j]); j++){
            curMin = Math.min(curMin,minNoOfCoins[i-coins[j]] + 1);
        } 
        minNoOfCoins.push(curMin);
    }
    return minNoOfCoins[minNoOfCoins.length - 1];
}