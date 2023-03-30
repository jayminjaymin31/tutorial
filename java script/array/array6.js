
var data = ["raj","amit","parth","krunal","parth"]

var id1 = data.indexOf("parth")
var id2 = data.lastIndexOf("parth")

console.log(id1)
console.log(id2)

var flag = data.some((x)=>{
    return x.length>3
})
 

console.log(flag)