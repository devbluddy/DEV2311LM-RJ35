class Person{
    constructor(){
        this.name="minh hieu";
        this.age= 20;
    }
    getname(){
        return this.name;
    }
    setage(){
        this.name;
    }
    getage(){
        return this.age;
    }
}

var person= new Person();
person.setage(21);
console.log("ten nguoi: "+person.getname());
console.log("tuoi: "+person.getage());

class Student extends Person{
    constructor(name,age,studenID){
        super(name,age);
        this.studenID="SV001";
    }
    getStudentInfo(){
        return "ten: "+this.getname()+" MSV: "+this.studenID;
    }
}

var student = new Student();
console.log(student.getStudentInfo());