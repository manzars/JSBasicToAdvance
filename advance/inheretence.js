class User{
    constructor(firstName, lastName, credits) {
        this.firstName = firstName
        this.lastName = lastName
        this.credits = credits
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
    editName(firstName = this.firstName, lastName = this.lastName){
        this.firstName = firstName
        this.lastName = lastName
    }
}

class Teacher extends User {
    constructor(firstName, lastName, credits, subject){
        super (firstName, lastName, credits)
        this.subject = subject
    }
    getFullName(){
        return `${this.firstName} ${this.lastName} teaches ${this.subject}`
    }

}

var teacher = new Teacher("Manzar", "Shaikh", 21, "Python")
console.log(teacher.getFullName())