const findTheOldest = function(people) {
    function getAge(person) {
        const endYear = person.yearOfDeath || new Date().getFullYear();
        const startYear = person.yearOfBirth;

        return endYear - startYear;
    }

    return people.sort((current, next) => getAge(current) - getAge(next)).at(-1);
};

// Do not edit below this line
module.exports = findTheOldest;
