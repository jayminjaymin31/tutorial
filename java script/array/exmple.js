const users = [
    {
        id: 1,
        name: "John",
        age: 30,
        isMarried: true,
        child: 2,
        gender: "Male",
        hobbies: [
            { name: "Soccer"},
            { name: "Reading" }
        ]
    },
    {
        id: 2,
        name: "Jane",
        age: 25,
        isMarried: false,
        child: 0,
        gender: "Female",
        hobbies: [
            { name: "Dancing" },
            { name: "Hiking"},
            { name: "Swimming" }
        ]
    },
    {
        id: 3,
        name: "Bob",
        age: 40,
        isMarried: true,
        child: 1,
        gender: "Male",
        hobbies: [
            { name: "Gardening"},
            { name: "Fishing"}
        ]
    },
];

// Find user with highest age
const userWithHighestAge = users.reduce((prev, current) => {
    return (prev.age > current.age) ? prev : current
});
console.log("User with highest age:", userWithHighestAge);

// Find user with highest number of hobbies
const userWithMostHobbies = users.reduce((prev, current) => {
    return (prev.hobbies.length > current.hobbies.length) ? prev : current
});
console.log("User with most hobbies:", userWithMostHobbies);

// Find user with highest number of hobbies and is married
const userWithMostHobbiesAndMarried = users.filter(user => user.isMarried)
    .reduce((prev, current) => {
        return (prev.hobbies.length > current.hobbies.length) ? prev : current
    });
console.log("User with most hobbies and is married:", userWithMostHobbiesAndMarried);

// Find users who are married and not having any child
const marriedUsersWithoutChild = users.filter(user => user.isMarried && user.child === 0);
console.log("Married users without child:", marriedUsersWithoutChild);

// Find users who are married and having at least one child
const marriedUsersWithChild = users.filter(user => user.isMarried && user.child > 0);
console.log("Married users with child:", marriedUsersWithChild);
