const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
})

process.stdin.setEncoding('utf8');

rl.once('line',line => {
    const n = Number(line.toString().split(' ')[0]);

    const ans = primitiveCalc(n);
    console.log(ans.length-1);
    for (let index = 0; index < ans.length; index++) {
       process.stdout.write(ans[index].toString() + " ")
        
    }
    process.stdout.write('\n');
    process.exit()
})


const primitiveCalc = (n) => {
    let ans = {  1 : [1], 2: [1, 2], 3: [1, 3] }
    
    for(let i = 4; i <= n; i++){
        let min1 = ans[i-1]
        let minArr = min1;

        if(i % 2 == 0){
            let min2 = ans[i/2];
            if(min2.length < minArr.length) minArr = min2
        }
        if(i % 3 == 0){
            let min3 = ans[i/3]
            if(min3.length < minArr.length) minArr = min3
        }
       ans[i] = [...minArr]
       ans[i].push(i)
    //    console.log(ans)
    }
    return ans[n];
}