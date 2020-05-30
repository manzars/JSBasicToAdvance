var john = {
    name: "I am john",
    age: 24,
    isActive: true
}

var marry = {
    name: "I am marry",
    age: 23,
    isActive: true
}

var sam = {
    name: "I am sam",
    age: 29,
    isActive: false
}

var user = new Map()
user.set("john", john)
user.set("marry", marry)
user.set("sam", sam)
// console.log(user)

// for (const value of user.values()) {
//     console.log(value)
// }

// for (const [key, value] of user.entries()) {
//     console.log(key + " + " + value.name)
// }


user.forEach((key, val, users) => {
    console.log(val + " = " + key.name)
});
