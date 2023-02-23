class TeamMember{
    name;
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    prodiveFeedback(){
        console.log(`${this.name} thank you for your feedback`);
    }
}

class Devoloper extends TeamMember{
    designation = 'Web Course Instructor';
    team = 'Web team';
    tech;
    constructor(name, location, tech){
        super(name, location);
        this.tech = tech;
    }
    developFeature(freature){
        console.log(`start the support sesion a ${freature}`)
    }
    release(version){
        console.log(`please create quiz for module ${version}`)
    }
}


class JobPlacement extends TeamMember{
    name;
    designation = 'Job Placement commandos';
    team = 'Web team';
    region;
    constructor(name, location, region){
        super(name, location);
        this.region = region;
    }
    provideResume(freature){
        console.log(`start the support sesion a ${freature}`)
    }
    prepareStudent(version){
        console.log(`please create quiz for module ${version}`)
    }
}

const alia = new Devoloper('Alia Bhatt', 'Mumbai', 'React');
console.log(alia);

const humaion = new Devoloper('Humaion Kobir', 'Mumbai', 'React');
console.log(humaion);
