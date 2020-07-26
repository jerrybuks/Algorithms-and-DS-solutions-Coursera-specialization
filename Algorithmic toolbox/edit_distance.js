const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
})

process.stdin.setEncoding('utf8');

rl.once('line',line => {
    const strA = line.toString()

    rl.once('line', line => {
        const strB = line.toString()
        const ans = editDistance(strA, strB);
        console.log(ans);
        process.exit()
    })
})


const editDistance = (strA, strB) => {
    const res = Array.from({length : strA.length + 1}, (elem) => Array.from({ length: strB.length + 1 }));
    for (let i = 0; i < res[0].length; i++) {
       res[0][i] = i;
        
    }
    for (let i = 1; i < res.length; i++) {
        res[i][0] = i;
         
     }
     for (let i = 1; i < res.length; i++) {
         const curStrAVal = strA[i-1];
        for (let j = 1; j < res[i].length; j++) {
            let minOps = Math.min(res[i-1][j-1], res[i-1][j], res[i][j-1]) + 1;
            if(curStrAVal === strB[j-1]){
                // minOps = Math.min(res[i-1][j-1], res[i-1][j]+1, res[i][j-1]+1);
                minOps = res[i-1][j-1];
            }
            res[i][j]  = minOps
        }
     }
    // console.log(res)
    return res[res.length - 1].pop()
}
