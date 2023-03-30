var users = [
    {
        name:"jaymin",
        age:23,
    },
    {
        name:"krupa",
        age:50,
    },
    {
        name:"patel",
        age:40,
    },
]

users.map((user)=>{
    console.log(user.name.toUpperCase(), " " , user.age)
})

// var filteruser = users.filter((x)=>{
//     return x.age>30
// }).forEach((i)=>{
//     console.log(i.name, " " , i.age)
// })

// console.log(filteruser)

for(let i=0;i<users.length;i++){
    console.log(users[i].name," ",users[i].age)
}