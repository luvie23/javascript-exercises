const removeFromArray = function(array, ...other) {
    other.forEach(number => {
        array.forEach((arrayNumber, index) =>{
            if (arrayNumber === number) {
                array.splice(index, 1)
            }
        })
    })
    return array
}   


// Do not edit below this line
module.exports = removeFromArray;
