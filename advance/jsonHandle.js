var user = {
    title: "Buy Bread",
    isDone: false,
    notDone: false,
}

var strn = JSON.stringify(user)

console.log(typeof strn)

var jsonObj = JSON.parse(strn)
console.log(jsonObj)