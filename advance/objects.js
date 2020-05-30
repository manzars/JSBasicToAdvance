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

var user = new User("Manzar", "Shaikh", "21")
user.editName()
console.log(user.getFullName())