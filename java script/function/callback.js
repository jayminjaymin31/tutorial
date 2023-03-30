function test(){
    console.log("call back...")
}

function driver(x){
    x()
}
driver(test)