class Person {
    constructor (name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi! I'm ${this.name}.`;
    }
    getDescription() {
        return `Hi! I'm ${this.name} is ${this.age}.`;
    }
    toString() {
        return JSON.stringify(this);
    }
}
class Child extends Person {
    constructor (name, age, like) {
        super(name, age);
        this.like = like;
    }
    getDescription() {
        return `Huahahahha! My name is ${this.name} is ${this.age} and i like ${this.like}`;
    }
}

class Baby extends Person {
    getDescription() {
        return `Oeeek ${this.name}  ${this.age}`;
    }
}


var me = new Person('Joanzo');
console.log(me.getDescription());

var meo = new Child('Mira',25, 'Cars');
console.log(meo.getDescription());

var meow = new Baby('Mira',1);
console.log(meow.getDescription());

