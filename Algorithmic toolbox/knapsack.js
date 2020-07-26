const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
})

process.stdin.setEncoding('utf8');

rl.once('line',line => {
    const firstLine = line.toString().split(' ')
    const W = Number(firstLine[0])
    const n = Number(firstLine[1])

    rl.once('line', line => {
        const goldBars = line.toString().split(' ').splice(0,n).map(Number)
        const ans = maxAmountOfGOld(W, goldBars);
        console.log(ans);
        process.exit()
    })
})


const maxAmountOfGOld = (maxW, goldBars) => {
    const res = Array.from({length :goldBars.length + 1}, (elem) => Array.from({ length: maxW + 1 }));
    for (let i = 0; i < res[0].length; i++) {
       res[0][i] = 0;
        
    }
    for (let i = 1; i < res.length; i++) {
        res[i][0] = 0;
         
     }
     for (let i = 1; i < res.length; i++) {
         const curGold = goldBars[i-1];
        for (let j = 1; j <= maxW; j++) {
            let minOps = res[i-1][j];
            if(curGold <= j){
                minOps = Math.max(res[i-1][j-curGold] + curGold, res[i-1][j]) ;
            }
            res[i][j]  = minOps
        }
     }
    // console.log(res)
    return res[res.length - 1].pop()
}
