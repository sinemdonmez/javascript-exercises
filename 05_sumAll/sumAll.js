const sumAll = function(from,to) {
    if(typeof(from)!=typeof(2) || typeof(to)!=typeof(2) || from<0 || to<0)
        return 'ERROR'
    let sum = 0;
    if(from>to){
        let temp = to;
        to = from;
        from = temp;
    }
    for(i=0; i<to; i++){
        sum += from+i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
