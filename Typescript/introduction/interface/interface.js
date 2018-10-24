"use strict";
exports.__esModule = true;
function greet(p) {
    return "Hello, im " + p.firstName + " " + p.lastName + "\nIm " + p.age + " yo , and im " + p.role + " right now\nMy hobby is " + p.hobby + "\n";
}
var me = { firstName: "Fahmi irsyad", lastName: "User", age: 18, isMarried: false, role: "Mahasiswa", hobby: ["Code", "Music", "Dreaming.. just dreaming"] };
console.log(greet(me));
