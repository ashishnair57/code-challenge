//Solution 1
const sum_to_n_a = function(n) {
    let val = 0;
    for(let i=1;i<=n;i++){
        val +=i;
    }
    return val;
};

//Solution 2
const sum_to_n_b = function(n) {
   return Array.from({ length: n }, (v, i) => i + 1).reduce((total, num) => total + num);
};

//Solution 3
const sum_to_n_c = function(n) {
    if(n===0){
        return n;
    }
    return sum_to_n_c(n-1) + n;
};

const n = 5;

console.log("Solution 1 => ", sum_to_n_a(n));

console.log("Solution 2 => ", sum_to_n_b(n));

console.log("Solution 3 => ", sum_to_n_c(n));