/**
 * Created by disinuo on 17/1/8.
 */
//*********  parseInt()  *******************
var x0='22s';   //22---------1
var x1='a22';   //NaN--------2
var x2='22.413';//22---------3
var x3='';      //NaN--------4
var x4='-22s';  //-22--------5
var intX=parseInt(x4);
console.log(intX);
//-----------------------
var y0=010;     //8----------6
var y1='010';   //10---------7
var y2='0x10';   //16--------8
var intY=parseInt(y0);
console.log(intY);
//-------------------------
var z0=010;     //NaN--------9
var z1='010';   //8----------10
var z2='0x10';   //0---------11
var intZ=parseInt(z2,8);
console.log(intZ);
//==============conclusion==================
//1.It will translate until the character that is not a number---1,3,5
//2.It can only identify string starting with + or - or number,otherwise return `NaN`---2,4,5
//3.Any string will be transferred to Decimal ,
// unless it start with `0x`(that case ,hexadecimal)---7,8
//4.there's an optional parameter--the type to transfer the string,
// 8 means octal number,2 means binary number~
//Also notice that string like `0x10` when be transferred with a second parameter 8,
//the transfer will stop at `x`---10,11
//*******************************
