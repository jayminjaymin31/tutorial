var data = ["ray","jaymkn","sahil","saumil","dygf","patrl","krypa"]
var filteredarray = []

// for(let i = 0;i<data.length;i++){
//     if(data[i].startsWith("s")){
//         filteredarray.push(data[i])
//     }
// }
var filtarray = data.filter((x)=>{
        return x.startsWith("s")
})

var filtarray1= data.filter((x)=>{
    return x.length>4
})







//console.log(filteredarray)
console.log(filtarray1)