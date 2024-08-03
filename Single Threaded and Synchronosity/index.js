function third(){
    console.log("third function") // 3
}

function second(){
    console.log("second function") // 2
    third();
}

function first(){
    console.log("first function") // 1
    second();
}

first()

console.log("set Timeout before")
setTimeout(()=>{
    console.log("Timed out!")
}, 1000)
console.log("set Timeout after")
