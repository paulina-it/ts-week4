class Person {
    name: string
    age: number
    isStudent: boolean

    constructor(name: string,
        age: number,
        isStudent: boolean) {
            this.name = name;
            this.age = age;
            this.isStudent = isStudent;
    }
}

let a = new Person('Ann', 21, true);
let b = new Person('John', 20, true);
let c = new Person('Jack', 18, false);

class Student extends Person {
    constructor(name: string,
        age: number, isStudent: true) {
            super(name, age, isStudent);
            this.isStudent = isStudent;
            this.name = name;
            this.age = age;
    }
}