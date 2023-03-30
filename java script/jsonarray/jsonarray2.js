var students = [
    {
        id:101,
        name:"amit",
        age:20,
        marks:50

    },
    {
        id:102,
        name:"raj",
        age:24,
        marks:75
        
    },
    {
        id:103,
        name:"parth",
        age:22,
        marks:60
        
    }
]

function removestudent(id){
    students = students.filter((stu)=>{
        return stu.id != id
    })
    console.log(students)
}

removestudent(102)