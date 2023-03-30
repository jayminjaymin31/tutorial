superheroes = {
    "hero_1" : {
        "name": "Amit", 
        "age": 20,
        "isAlive": true,
        "address": null,
        "friends": ["Rahul", "Rohan", "Shrey"],
        "superpowers": {
            "power1": "flying",
            "power2": "teleportation",
            "power3": "super strength"
        },

        "getDetails": function(){
            return this.name + " " + this.age + " " + this.isAlive + " " + this.address + " " + this.friends + " " + this.superpowers.power1 + " " + this.superpowers.power2 + " " + this.superpowers.power3;
        },
    },

    "hero_2" : {

        "name": "Rudra",
        "age": 21,
        "isAlive": true,
        "address": null,
        friends:["JAYMIN","RAHUL","PATEL"],
        "superpowers": {
            "power1": "flying",
            "power2": "teleportation",
            "power3": "super strength"
        },

        "getDetails": function(){
            return this.name + " " + this.age + " " + this.isAlive + " " + this.address + " " + this.friends + " " + this.superpowers.power1 + " " + this.superpowers.power2 + " " + this.superpowers.power3;
        },
    },

    
}


console.log(superheroes.hero_2.friends[1]);