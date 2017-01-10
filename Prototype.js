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
var animal=new Animal('haha');
console.log(animal.name);

var dog=new Dog('gehhhhh');
console.log(dog.name);
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
var fiction=new Fiction('Blind');
console.log(book.getName());
console.log(fiction.getName());
