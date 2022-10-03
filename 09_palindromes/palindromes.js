const palindromes = function (string) {
    let newString = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g,"");
    
    let reverseString = function (string) {
        return string.split("").reverse().join("");
    }
    return (reverseString(newString.toLowerCase()) === newString.toLowerCase());
};

// Do not edit below this line
module.exports = palindromes;
