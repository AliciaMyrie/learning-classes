
class Human {
    name = ""
    // grade = 100
    constructor(name) {
        this.name = name
    }
    sayHi() {
       return`my name is ${this.name}!` 
    }
}

class Teacher extends Human {
    currentlyTeaching = "yes"
    sayHi() { // overriding old sayHi
        return `Hi, Im a professor ${this.name}!`

    }
}

class Student extends Human {
    grade = 100
}

let student1 = new Student("Bobbie")
let student2 = new Student("Jennifer")
let teacher = new Teacher("Abby")

console.log(student1.name)
console.log(teacher.name)
// console.log(student1.grade)
// console.log(student1.sayHi())