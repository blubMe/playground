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
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" && "name" in obj;
}
var mix = 8;
mix = true;
mix = "Its mixed";
hasName(mix) ? console.log(mix.name) : null;
