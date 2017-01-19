/**
 * Created by disinuo on 17/1/19.
 */


// the type of each item in one array,can be different!
var array=['red',666,true,'Dance!'];
array[5]='w';
console.log(array[4]);
console.log(array.join(','));
console.log(array.toString());
console.log(array);

console.log('-----------------------------');
// pop,push; operate at Back
// shift,unshift; operate at front
// shift:get and remove the first item from the front.Like pop at front
// pop&push OR shift&unshift, can imitate stack
// pop&unshift OR shift&push, can imitate queue
array=['aaa','bbb','ccc','ddd'];
console.log('original array: '+array);
var x=array.push('ccc');
console.log(x);     //5
console.log(array); //aaa,bbb,ccc,ddd,ccc
var y=array.push('eee','fff');
console.log(y);     //7
console.log(array); //aaa,bbb,ccc,ddd,ccc,eee,fff
var z=array.pop();
console.log(z);     //fff
console.log(array); //aaa,bbb,ccc,ddd,ccc,eee
var m=array.shift();
console.log(m);     //aaa
console.log(array); //bbb,ccc,ddd,ccc,eee
var n=array.unshift('ggg');
console.log(n);     //6
console.log(array); //ggg,bbb,ccc,ddd,ccc,eee
var p=array.unshift('hhh','iii');
console.log(p);     //8
console.log(array); //hhh,iii,ggg,bbb,ccc,ddd,ccc,eee
