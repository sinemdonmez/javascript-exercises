const palindromes = function (check) {
    let str = check.toLowerCase();
    str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    str = str.replace(/\s/g,"");

    for(let i=0; i<str.length; i+=2){
        console.log(str[i])
        console.log(str[str.length-1-i])
        if(str[i]!=str[str.length-1-i])
            return false;
    }

    return true;
        

};

// Do not edit below this line
module.exports = palindromes;
