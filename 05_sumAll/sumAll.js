const sumAll = function(x, y) {
    result = 0;
    if (x < 0 || y < 0) {
        return "ERROR";
    } 
    if (typeof x !== "number" || typeof y !== "number"){
        return "ERROR";
    }

    if (x < y){
        for (i = x; i < (y+1); i++) {
            result += i;
            
        };
        return result;
    } else if (x > y){
        for (i = y; i < (x+1); i++) {
            result += i;
            
        };
        return result;
    }

    
};

// Do not edit below this line
module.exports = sumAll;
