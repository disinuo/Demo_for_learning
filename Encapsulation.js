/**
 * Created by disinuo on 17/1/9.
 */
var obj=(function () {
    var name='Sally';
    return {
        getName:function () {
            return name;
        }
    }

})();

console.log(obj.name);      //undefined
console.log(obj.getName()); //Sally