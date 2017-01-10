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
console.log(d.hasOwnProperty)
