// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');

rl.once('line', line => {
    const [itemsCount, knapsackCapacity] = line.toString().split(' ').map(Number);
    const arr = [];
    let count = 0;

    rl.on('line', line => {
        const [v, w] = readLine(line);
        arr.push([v,w]);

        if (++count >= itemsCount) {
            console.log(max(itemsCount, knapsackCapacity, arr));
            process.exit();
        }
    });
});

function readLine(line) {
    const v = parseInt(line.toString().split(' ')[0], 10);
    const w = parseInt(line.toString().split(' ')[1], 10);

    return [v, w];
}

function max(count, capacity, arr) {
    // write your code here
    arr.sort((a,b) =>  (b[0]/b[1]) - (a[0]/a[1]));
    let val = 0;
    for(let i = 0; i < arr.length; i++){
        if(capacity <= 0) break;
        val += (arr[i][0]/arr[i][1]) * Math.min(capacity,arr[i][1])
        capacity = capacity - arr[i][1]
    }

    return val
}

module.exports = max;
