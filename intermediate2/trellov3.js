var toDos = {
    "day": "Monday",
    "Meetings": 0,
    "meetDone": 0,

    addMeeting: function(num){
        this.Meetings = this.Meetings + num
    },

    addMeetDone: function(num){
        this.meetDone = this.meetDone - num
    },

    summary: function(){
        return `there are ${this.Meetings + this.meetDone} meeting to be done`
    },

    reset: function(){
        this.Meetings = 0;
        this.meetDone = 0
    }

}

toDos.addMeeting(10)
toDos.addMeetDone(5)
toDos.reset()
console.log(toDos.summary())