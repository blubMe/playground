"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
// classical class constuction
var Worker = /** @class */ (function () {
    function Worker(name) {
        this.workerName = name;
    }
    Worker.prototype.greet = function () {
        console.log("Good morning " + this.workerName);
    };
    return Worker;
}());
var worker1 = new Worker('Fahmi');
worker1.greet();
var WorkerFull = /** @class */ (function () {
    function WorkerFull(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
    }
    WorkerFull.prototype.greet = function () {
        console.log("Hello, " + this.firstName + " " + this.lastName + " from inner");
    };
    return WorkerFull;
}());
function greeter(p) {
    return console.log("Hello, " + p.firstName + " " + p.lastName);
}
var user1 = new WorkerFull('fahmi irsyad', 'Khairi');
// use method from classes
// no interface , just use from inner
user1.greet();
// call from function and connected with intefaces
greeter(user1);
// extends
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerFirstName, managerLastName) {
        return _super.call(this, managerFirstName, managerLastName) || this;
    }
    Manager.prototype.greetManager = function () {
        console.log("Manager show up");
    };
    return Manager;
}(WorkerFull));
var manager1 = new Manager('Fahmi irsyad', 'Khairi');
manager1.greetManager();
manager1.greet();
console.log(manager1.fullName);
