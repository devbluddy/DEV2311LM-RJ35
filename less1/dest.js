//lay ra mot thanh phan trong mang/ doi tuong
var arr=[1,2,3,4,5,6,7,8];
var [a,b]=arr;
console.log("a=",a );
console.log("b=",b );
var [a,n,c]=arr;
console.log("a=",a );
console.log("n=",b );
console.log("c=",c );

// doi tuong

var objperson={
    name:"minh hieu",
    age:20,
    skill:"all"
}
var {name,skill}= objperson;

console.log("name", name);
console.log("age", age);

var {name,age,skill}= objperson;

console.log("name", name);
console.log("age", age);
console.log("skill", skill);