/**
 * Created by disinuo on 17/1/8.
 */
//*********  parseInt()  *******************
var x0='22s';   //22---------1
var x1='a22';   //NaN--------2
var x2='22.413';//22---------3
var x3='';      //NaN--------4
var x4='-22e5';  //-22--------5
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
console.log("*********************");
//************ parseFloat() ******************************
var a0='092.5';     //92.5---------1
var a1='23.4.5';    //23.4---------2
var a2='23.4g';     //23.4---------3
var a3='s23.4.5';   //NaN----------4
var a4='3.6e5';     //360000-------5
var a5='3.6e-5';    //0.000036-----6
var a6='-3.6';      //-3.6---------7
var floatA=parseFloat(a6);
console.log(floatA);
//==============conclusion==================
//1.it will translate until the character that is not a number or `.`or `e` or `E`---3,5,6
//2.only the first `.` will be identified.
// (the second`.` and characters following it will be ignored)---2
//3.It can only identify string starting with + or - or number,otherwise return `NaN`---4,7
//4.starting 0(s) will be ignored---1
//********************************************************
