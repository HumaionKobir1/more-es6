// Syntactic sugar
class Instructor{
    name;
    designation = 'Web Course Instructor';
    team = 'Web team';
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    startSupposrSession(time){
        console.log(`start the support sesion a ${time}`)
    }
    createQuiz(module){
        console.log(`please create quiz for module ${module}`)
    }
}
const kobir = new Instructor('kobir', 'Dhaka');
console.log(kobir);
kobir.startSupposrSession('8.20');
kobir.createQuiz(50);

const humaion = new Instructor('humaion', 'Dubai');
console.log(humaion);