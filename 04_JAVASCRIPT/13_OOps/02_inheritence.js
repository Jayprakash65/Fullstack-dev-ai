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
}


const basu = new Student('Basu', 21, 'Kolkata', 98)
basu.showGrade()
basu.introduce()


// Use super to use parent constructor 
// Use extend to build relationship with parent