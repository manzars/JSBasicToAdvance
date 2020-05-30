// const hello = function(name){
//     return "hey there" + name
// }

// console.log(hello("manzar"))


// const hello = (name) => {
//     return "hey there " + name
// }



// const hello = (name) =>  "hey there " + name;

// console.log(hello("manzar"))

//method 1
//var fun = (toDos) => {
//     let store = []
//     for(i = 0; i < toDos.length ; i++){
//         if(toDos[i].isDone == true){
//             store.push(toDos[i])
//         }
//     }
//     return store
// }

const toDos = [{
    title: "Buy Bread",
    isDone: false,
    notDone: false,
},{
    title: "Go to Gym",
    isDone: false,
    notDone: true,
},{
    title: "Record Game",
    isDone: true,
    notDone: false,
},{
    title: "play game",
    isDone: true,
    notDone: true,
}, {
    title: "hello world",
    isDone: true,
    notDone: false,
}, {
    title: "im a winner",
    isDone: true,
    notDone: true,
}]


// console.log(fun(toDos))

//method 2

// var value = toDos.filter((todo) => todo.isDone === false)

// console.log(value)

// var value = toDos.filter((todo) => todo.notDone === false)

// const x = value.forEach((todo, index) => {
//     console.log(todo.title)
// })


const list = {
    price: 800,
    weight: 400,
    myDes: function(){
        return this.price
    }
}
console.log(list.myDes())