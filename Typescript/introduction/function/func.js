"use strict";
exports.__esModule = true;
function gretting(person) {
    return "Hello, " + person;
}
var user = "My name is fahmi";
// implementation ES6
var arr = function (arry) { return "List array: " + arry; };
var listarr = ["aku", "dia", "kita", "mereka"];
console.log(gretting(user) + "\n" + arr(listarr));
// optional params
var arrOpt = function (obj1, obj2) {
    var res = obj2 ? obj1 + " & " + obj2 : obj1;
    return res;
};
var a = "Aku harus masuk";
var b = "Aku optional";
console.log(arrOpt(a, b));
console.log(arrOpt(a));
