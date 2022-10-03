const fibonacci = function(number) {
    if (number > 0){
        let result = 1;
        let x = 0;
        let z = 1;
        for (i = 2; i <= number; i++){
            result = x + z;
            x = z;
            z = result;
        }
        return result;
        } return "OOPS"
    };

// Do not edit below this line
module.exports = fibonacci;
