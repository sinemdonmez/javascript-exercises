const fibonacci = function(num) {
    if(num<0){
        return "OOPS";
    }
    let start = 1;
    let last = 1;
    for(let i=2; i<num; i++){
        let temp = start + last;
        start = last;
        last = temp;
    }
    return last;
};

// Do not edit below this line
module.exports = fibonacci;
