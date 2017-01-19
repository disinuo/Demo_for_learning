/**
 * Created by disinuo on 17/1/19.
 */
var pattern=/mom( and dad( and baby)?)?/gi;
var text='mom and dad and baby';
var matches=pattern.exec(text);
console.log(RegExp.input);
console.log('-------------------------------');
if(matches){
    console.log(matches.length);
    console.log(matches[0]);
    console.log(matches[1]);
    console.log(matches[2]);
    console.log(matches[3]);
}

console.log('*******************************');

var pattern1=/.*a/gi;
var text1='hello world';
var matches1=pattern1.exec(text1);
console.log('RegExp.input  '+RegExp.input);
// only when matches is not null,
// will the input string be recorded as RegExp.input
// Aslo notice that RefExp.input is not standard! Don't use it!
console.log('-------------------------------');
if(matches1){
    console.log(matches1.length);
    console.log(matches1[0]);
    console.log(matches1[1]);
    console.log(matches1[2]);
    console.log(matches1[3]);
}

