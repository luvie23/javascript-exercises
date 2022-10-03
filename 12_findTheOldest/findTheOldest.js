const findTheOldest = function(people) {
    for (i = 0; i < people.length; i++){
        if (!people[i].yearOfDeath){
            people[i].yearOfDeath = 2022;
    }}
    const oldest = people.sort(function (a,b){
        if ((a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth)){
            console.log(a.yearOfDeath)
            return -1;
        } else {
            return 1;
        }
    })
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
