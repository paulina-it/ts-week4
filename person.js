var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age, isStudent) {
        this.name = name;
        this.age = age;
        this.isStudent = isStudent;
    }
    return Person;
}());
var a = new Person('Ann', 21, true);
var b = new Person('John', 20, true);
var c = new Person('Jack', 18, false);
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, isStudent, averageMark) {
        var _this = _super.call(this, name, age, isStudent) || this;
        _this.isStudent = isStudent;
        _this.averageMark = averageMark;
        _this.name = name;
        _this.age = age;
        return _this;
    }
    return Student;
}(Person));
var Aspirant = /** @class */ (function (_super) {
    __extends(Aspirant, _super);
    function Aspirant(name, age, isStudent, averageMark, courseworkName) {
        var _this = _super.call(this, name, age, isStudent, averageMark) || this;
        _this.isStudent = isStudent;
        _this.averageMark = averageMark;
        _this.name = name;
        _this.age = age;
        _this.courseworkName = courseworkName;
        return _this;
    }
    return Aspirant;
}(Student));
