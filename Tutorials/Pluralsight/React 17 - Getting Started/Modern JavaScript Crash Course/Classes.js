class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello ${this.name}!`);
    }
}

class Student extends Person {
    constructor(name, level) {
        super(name);
        this.level = level;
    }

    greet() {
        console.log(`Hello ${this.name} from level ${this.level}!`);
    }
}

const p1 = new Person("Max");
const s1 = new Student("Peter", "1st grade");
const s2 = new Student("Ann", "2nd grade");

s2.greet = () => console.log("I am special");

p1.greet();
s1.greet();
s2.greet();