// const days = ["M", "TU", "W", "TH", "F", "SA", "SU"]
// for (let index = days.length - 1; index >= 0; index--) {
//     console.log(days[index])
    
// }      


const toDos = []
toDos.unshift("Buy breads")
toDos.unshift("watch TV")
toDos.unshift("to to gym")

toDos.forEach(function(todo, index){
    console.log(`your task No ${index + 1} is: ${todo}`)
})

