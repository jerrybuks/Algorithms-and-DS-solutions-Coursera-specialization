const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8')

rl.once('line',line => {
    const n = Number(line.toString().split(' ')[0]);

    rl.once('line', line => {
        const z = line.toString().split(' ').slice(0).map(Number);
        const res = mergeSort(z);
        console.log(t)
        process.exit();
    })
})

let t = 0;

function mergeSort(arr){
	if(arr.length === 1) return arr

	let mid = Math.floor(arr.length/2);
	let left = mergeSort(arr.slice(0,mid));
	let right = mergeSort(arr.slice(mid));
	
	return merge(left,right,mid)
}

function merge(arr1, arr2,mid) {
	let i = 0;
	let j = 0;
	const res = [];
	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] <= arr2[j]) {
			res.push(arr1[i]);
			i++;
		} else {
            res.push(arr2[j]);
            t = t + (mid - i); 
			j++;
		}
	}

	while (i < arr1.length) {
        res.push(arr1[i]);
		i++;
	}

	while (j < arr2.length) {
        res.push(arr2[j]);
		j++;
    }
	return res;
}