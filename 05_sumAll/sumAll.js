const sumAll = function(val1, val2) {
    let val,start,end;
    val = 0;
    if(val1 < 0 || val2 < 0 || Number.isInteger(val1) == false || Number.isInteger(val2) == false){
        return "ERROR";
    }
    if (val1 < val2){
        start = val1;
        end = val2;
    }
    else{
        start = val2;
        end = val1;
    }

    for(let i = start; i <= end; i++){
        val += i;
    }
    return val;
};

// Do not edit below this line
module.exports = sumAll;
