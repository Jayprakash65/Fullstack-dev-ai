class User{
    constructor(name, email, password){
        this.name = name;
        this.email = email;
        this.password = password;
        this.isVerfied = false;
        this.courseEnrolled = [];
    }

    verifyUser(){
        this.isVerfied = true;
    }

    courseToEnrolled(course){
        this.courseEnrolled.push(course);
    }

    discount(courseName, discountPercentage){
        const course = this.courseEnrolled.find(c => c.name === courseName);

        if(course){
            course.price = course.price - (course.price * discountPercentage)/ 100;
            console.log(`Discount of ${discountPercentage}% applied to ${course.name}. New price: ₹${course.price}`);
        }else{
            console.log(`Course "${courseName}" not found in enrolled courses.`);
        }
    }
}


class Course{
    constructor(name, price){
        this.name = name;
        this.price = price;

    }
}


const jay = new User('Jayprakash', 'jay@aimerz.ai', 'jay123'); // User created
const fsd = new Course('Fullstack Development', 10000); // Course created
const dsa = new Course('DSA', 999); // Another course created

// Enroll in courses
jay.courseToEnrolled(fsd);
jay.courseToEnrolled(dsa);

// Apply discount
jay.discount('Fullstack Development', 20); // Apply 20% discount to FSD course
jay.discount('DSA', 10); // Apply 10% discount to DSA course
jay.discount('AI Masterclass', 15); // Try applying discount to a non-enrolled course




