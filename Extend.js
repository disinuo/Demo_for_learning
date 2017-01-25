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
console.log('-------------------'); //true
//---------------------------------------------------------------------

//-------- Another way ---------------------------------------------
var Book=function (name) {
    this.name=name;
};

Book.prototype={
    constructor:Book,
    getName:function () {
        return this.name;
    }
};
var Fiction = function (name,author) {
    Book.call(this,name);
    this.author=author;
};
Fiction.prototype=Object.create(Book.prototype);
Fiction.prototype.constructor=Fiction;
Fiction.prototype.getAuthor=function () {
    return this.author;
}
var book=new Book('Blind');
var blind_fiction=new Fiction('Harry Porter','J.K.');
console.log(book.getName());
console.log(blind_fiction.getName());
console.log(blind_fiction.getAuthor());
console.log(blind_fiction.constructor);
console.log(blind_fiction instanceof Book); //true

console.log("----------------------------");
console.log(Book.prototype.constructor);
console.log(Animal.prototype.constructor);
