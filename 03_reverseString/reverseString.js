const reverseString = function(str) {
    let l=str.length;
    let res="";
    for(let i =l-1; i>=0;i--)
    {
        res+=str[i];
    }
    
    return res;
};

// Do not edit below this line
module.exports = reverseString;
