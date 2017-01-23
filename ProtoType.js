/**
 * Created by disinuo on 17/1/10.
 */
var Animal=function(name){
    this.name=name;
}
Animal.prototype={
    sleep:function(){
        return "sleeping~";
    }
}

var dog=new Animal('dogge');
console.log(dog.name);      //dogge
console.log(dog.sleep());   //sleeping
// using keyword `new`，
// interpreter will add 2 lines of codes to the constructor of Animal
// then it became this
//
// var Animal=function (name) {
//     this=Object.create(Animal.prototype);
//     this.name=name;
//     return this;
// }
//------------------------------------------------------
//Or if you don't use `new`
//the codes will not be added
var cat=Animal('Kitty');
console.log(cat);       //undefined.Because the function `Animal` doesn't return anything

var a = {a: 1};
// a ---> Object.prototype ---> null

var b = Object.create(a);
// b ---> a ---> Object.prototype ---> null
console.log(b.a); // 1 (inherited)

var c = Object.create(b);
// c ---> b ---> a ---> Object.prototype ---> null

console.log(c.hasOwnProperty('a'));// false
console.log(a.hasOwnProperty('a'));// true

var d = Object.create(null);
// d ---> null
console.log(d.hasOwnProperty);
//------------------------------------------------------
//------  Prototype & constructor -------------------
console.log('------------------------------------------------------');
var Person=function (name,age) {
    this.name=name;
    this.age=age;
    this.hobbies=['Drawing','Music'];
};
Person.prototype={
    constructor:Person,
    sex:'Male',
    friends:['Lihua','Oliver'],
    getName:function () {
        return this.name;
    }
};

var person1=new Person('Lily',18);
var person2=new Person('Amy',24);
person1.sex='Female';
console.log(person1.sex);//Female
console.log(person2.sex);//Male
person1.friends.push('Selena');
console.log(person1.friends);//Lihua,Oliver,Selena
console.log(person2.friends);//Lihua,Oliver,Selena
person1.hobbies.push('Movie');
console.log(person1.hobbies);//Drawing,Music,Movie
console.log(person2.hobbies);//Drawing,Music
