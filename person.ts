class Person {
    protected name: string
    protected age: number
    protected isStudent: boolean

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
    protected averageMark: number;

    constructor(name: string,
        age: number, isStudent: true, averageMark: number) {
            super(name, age, isStudent);
            this.isStudent = isStudent;
            this.averageMark = averageMark;
            this.name = name;
            this.age = age;
    }
}

class Aspirant extends Student {
    protected courseworkName: string;

    constructor(name: string,
        age: number, isStudent: true, averageMark: number, courseworkName: string) {
            super(name, age, isStudent, averageMark);
            this.isStudent = isStudent;
            this.averageMark = averageMark;
            this.name = name;
            this.age = age;
            this.courseworkName = courseworkName;
    }
}