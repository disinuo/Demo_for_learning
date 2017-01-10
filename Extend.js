/**
 * Created by disinuo on 17/1/10.
 */
//--------------- `class`keyword in ECMAScript6-----------------------
class Animal{
    constructor(name){
        this.name=name;
    }
    getName(){
        return this.name;
    }
}

class Dog extends Animal{

}
var animal=new Animal('animalooo');
console.log(animal.name);

var dog=new Dog('dogge');
console.log(dog.name);
console.log(dog instanceof Animal); //true
//---------------------------------------------------------------------

//--------don't know how to extend the constructor---------------------------------------------
var Book=function (name) {
    this.name=name;
};

Book.prototype={
    getName:function () {
        return this.name;
    }
};
var Fiction = function (name) {this.name=name};
Fiction.prototype=new Book(name);

var book=new Book('Harry Porter');
var blind_fiction=new Fiction('Blind');
console.log(book.getName());
console.log(blind_fiction.getName());
console.log(blind_fiction.constructor);
console.log(blind_fiction instanceof Book); //true

console.log("---------------------------------------");

//---------------------------------------------------------------------
console.log(Book.prototype.constructor);//this and next line print different things
console.log(Book);

console.log(Animal.prototype.constructor); //this and next line print the same thing
console.log(Animal);

