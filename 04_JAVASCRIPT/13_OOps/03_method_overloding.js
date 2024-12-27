class Person{
    constructor(name, age, place){
        this.name = name;
        this.age = age;
        this.place = place;
    }

    introduce(){
    console.log(`Hi my name is ${this.name} i am ${this.age} and live in ${this.place}`)
    }
}

class Student extends Person{
    constructor(name, age, place, grade){
        super(name, age, place)
        this.grade = grade;
    }

    showGrade(){
        console.log(`${this.name} grade is ${this.grade}`);
        
    }

    introduce(){
        console.log('I am method ovrloading ');
        
    }
}

const mithun = new Person('Mithun', 35, 'Bengaluru')
mithun.introduce()

const basu = new Student('Basu', 21, 'Kolkata', 98)
basu.showGrade()
basu.introduce()


// Both parent and chlid have same method, but child acess his own method when the name of the method is same.

