const removeFromArray = function(array, ...extras) {
    for(const element of extras){
        if(array.indexOf(element)!=-1){
            array.splice(array.indexOf(element),1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
