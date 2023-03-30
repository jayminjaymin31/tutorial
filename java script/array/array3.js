var data = ["jaymib","hdvf","dguf","jugf","sdhaooi","sSFJ","hfha"]

function sortbylan(a,b){
    return a.length - b.length
}

data = data.sort(sortbylan)

// data.forEach((x)=>[
//     console.log(x)
// ])

function sortSalaryByValue(a,b){
    return a-b
}
var salaries = [1200,15020,4852,5158,4754,1656,589]

salaries = salaries.sort((a,b)=>a-b)

salaries.forEach((x)=>{
    console.log(x)
})