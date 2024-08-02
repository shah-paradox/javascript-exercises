const removeFromArray = function(arr) {
    for(let i =0; i<arr.length;i++)
    {
        let flag=false;
        for(let j=1;j<arguments.length;j++)
        {
            if(arguments[j]===arr[i])
                flag=true;
        }
        if(flag==true)
        {
            arr.splice(i,1);
            i--;
        }
        
    }
    console.log(arguments[2]);
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
