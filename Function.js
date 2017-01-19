/**
 * Created by disinuo on 17/1/19.
 */
/*
/********* Function Declare VS Function Expression  ************
 */
console.log(typeof cal);     //function
console.log(typeof add);     //undefined
console.log(cal({a:1,b:2})); //3
// console.log(add({a:1,b:2})); //TypeError: add is not a function

function cal(arg) {
    return (arg.a+arg.b);
}
var add=function (arg) {
    return (arg.a+arg.b);
}
console.log(typeof cal);    //function
console.log(typeof add);    //function
console.log(cal({a:1,b:2}));//3
console.log(add({a:1,b:2}));//3
console.log('*******************************');
/*
 A good use of 'returning a function'~
 */
var students=[
    {name:'Selena',age:18},
    {name:'Christina',age:23}
];
students.sort(createCompareFunc('name'));//give sort() a function as the ordering rule
console.log(students[0].name);//Christina

students.sort(createCompareFunc('age'));
console.log(students[0].name);//Selena

function createCompareFunc(propertyName) {
    return function (a,b) {
        var a_p=a[propertyName];
        var b_p=b[propertyName];
        if(a_p<b_p) {
            return -1;
        }else if(a_p>b_p) {
            return 1;
        }else {
            return 0;
        }
    }
}