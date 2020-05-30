var toDos = {
    day: "Monday",
    meeting: 0,
    meetDone: 0
}

var addMeeting = function(todo, meet = 0){
    todo.meeting = todo.meeting + meet
}

var meetDone = function(todo, meet = 0){
    todo.meetDone = todo.meetDone - meet
}

var reset = function (todo) {
    todo.meeting = 0
    todo.meetDone = 0
}

var summary = function(todo){
    console.log(`you have done ${todo.meeting + todo.meetDone} Today`)
}

addMeeting(toDos, 5)
meetDone(toDos, 3)

summary(toDos)