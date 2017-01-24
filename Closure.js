/**
 * Created by disinuo on 17/1/19.
 */
//********** private *************************************
var Person=function(){
    var name='Lily';
    var age=20;
    this.getName=function(){
        return name;
    };
    this.addAge=function () {
        age++;
    };
    this.getAge=function () {
       return age;
    }

}
var func=new Person();
console.log(func.name);     //undefined
console.log(func.getName());//Lily
func.addAge();
console.log(func.getAge()); //21
console.log('********************************');
//*************** one call,one closure ***********************************
var gLogNumber, gIncreaseNumber, gSetNumber;
function setupSomeGlobals() {
    // Local variable that ends up within closure
    var num = 42;
    // Store some references to functions as global variables
    gLogNumber = function() { console.log(num); }
    gIncreaseNumber = function() { num++; }
    gSetNumber = function(x) { num = x; }
}

setupSomeGlobals();
gIncreaseNumber();
gLogNumber(); // 43
gSetNumber(5);
gLogNumber(); // 5

var oldLog = gLogNumber;

setupSomeGlobals();
gLogNumber(); // 42

oldLog() // 5

// if you use the function keyword inside another function, you are creating a closure.

//************* example of `For` *********************************************
function buildList(list) {
    var result = [];
    for (var i = 0; i < list.length; i++) {
        var item = 'item' + i;
        result.push( function() {console.log(item + ' ' + list[i])} );
        /**
         result.push( function(i){
            return function() {console.log(item + ' ' + list[i])}
         }(i) );
         */
    }
    return result;
}
function testList() {
    var fnlist = buildList([1,2,3]);
    // Using j only to help prevent confusion -- could use i.
    for (var j = 0; j < fnlist.length; j++) {
        fnlist[j]();
    }
}
testList() //logs "item2 undefined" 3 times
// Note that when you run the example, "item2 undefined" is alerted three times! This is because just like previous examples, there is only one closure for the local variables for buildList. When the anonymous functions are called on the line fnlist[j](); they all use the same single closure, and they use the current value for i and item within that one closure (where i has a value of 3 because the loop had completed, and item has a value of 'item2'). Note we are indexing from 0 hence item has a value of item2. And the i++ will increment i to the value 3.

//**********************************************************
function sayAlice() {
    var say = function() { console.log(alice); }
    // Local variable that ends up within closure
    var alice = 'Hello Alice';
    return say;
}
sayAlice()();// logs "Hello Alice"
console.log('---------------------------');

//************* example of `For` *********************************************
function createFunction() {
    var result=[];
    for(var i=0;i<10;i++){
        result[i]=function () {
            return i;
        } // 10,10,10,10,10,10,10,10,10,10
        // result[i]=function (x) {
        //     return function(){
        //         return x;
        //     }
        // }(i); // 0,1,2,3,4,5,6,7,8,9
    }
    return result;
}
var funcs=createFunction();
for(var i=0;i<funcs.length;i++){
    console.log(funcs[i]());
}
//*********  Factory  ***********************************
function isType(type){ //factory
    return function(obj){
        return Object.prototype.toString.call(obj)==='[object '+type+']';
    }
}
var isString=isType('String');//function to check whether the variable is a string
var isNumber=isType('Number');//function to check whether the variable is a number
var isArray=isType('Array');//function to check whether the variable is an array

console.log(isNumber(233));     //true
console.log(isNumber('hhh'));   //false
console.log(isString('hhh'));   //true
console.log(isArray([1,2,3]));  //true