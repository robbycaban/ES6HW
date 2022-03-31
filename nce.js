//nce.js
// new class example with methods 
// (use your own code, concept, and different methods as you build out your own thing this evening)

class Student {
        constructor(email, name, age, gender){
        this.email = email 
        this.name = name 
        this.age = age 
        this.gender = gender
        this.examScore = 90 
        this.grade = {name: "pass", 
                      gradescore: 100}        
}         
useExam() {
    if (this.examScore < this.grade.gradeScore){
        console.log ("you are passsing")   
    }
    else {let newScore = this.examScore - this.grade.gradeScore 
        console.log (newScore) 
    }
}                         
}
class StudentTas extends Student {
    constructor ( ){
    super ("Manny@gmail.com", "Manny", 20, "male");
    this.class = "Digital Crafts TA"
    this.city =  "ATL" 
    
}
}
const desk = new Student ("rob@gmail.com","Robby", "30","female") 
console.log (desk)
const it = new StudentTas ("Manny@gmail.com", "Manny", 20, "male")
console.log (it)









// // login() {
// //     console.log(this.email, 'just logged in'); 
// // }
// // logout(){
// //     console.log(this.email, 'just logged out'); 
// //     }
// // }

// let studentOne = new User( 'robby@gmail.com', 'Robby'); 
// let StudentTwo = new User( 'frankling@gmail.com', 'Franklin' ); 
// let StudentThree = new User( 'mike@gmail.com', "Mike" )


// console.log(studentone); 
// console.log(studenttwo); 

// studentone.login(); 
// studenttwo.logout(); 

// // methods - outside of constructor function 

// // second class/child 

// class StudentTas extends - Student 
//     constructor (

//     ) {


