/**
 * Created by disinuo on 17/1/19.
 */
/*
/********* Function Declare VS Function Expression  ************
 */
console.log(typeof cal); //undefined
console.log(typeof add); //function
// console.log(cal({a:1,b:2})); // TypeError: cal is not a function
console.log(add({a:1,b:2}));//-1
console.log('-------------------------------');
var cal=function func(arg) {
    return arg.a+arg.b;
}

function add(arg) {
    return arg.a-arg.b;

}
console.log(typeof cal); //function
console.log(typeof add); //function
console.log(cal({a:1,b:2})); //3
console.log(add({a:1,b:2})); //-1