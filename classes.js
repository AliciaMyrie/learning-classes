class Student {
    name = ""
    grade = 100
    constructor(name) {
        this.name = name
    }
    sayHi() {
       return`my name is ${this.name}!` 
    }
}

let student1 = new Student("Bobbie")
let student2 = new Student("Jennifer")

console.log(student1.name)
console.log(student1.grade)
console.log(student1.sayHi())