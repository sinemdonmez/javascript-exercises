const findTheOldest = function(people) {
    const oldest = people.sort(function(a,b){
        if(a.yearOfDeath==null){
            a.yearOfDeath=2023;
        }
        if(b.yearOfDeath==null){
            b.yearOfDeath=2023;
        }
        const lastInventor = a.yearOfDeath - a.yearOfBirth;
        const nextInventor = b.yearOfDeath - b.yearOfBirth;
        return lastInventor > nextInventor ? -1 : 1;
    });

    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
