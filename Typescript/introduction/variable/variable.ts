export {}

let name: string = "Fahmi irsyad khairi";
let age: number  = 18;
let role: string = "Mahasiswa";
let isMarried: boolean = false;
const year: number = 2018;

console.log({name},{age},{role},{isMarried},{year});

let n: null = null;
let u: undefined = undefined;

let isPunyaPacar: boolean = null;
let isPunyaGebetan: string = undefined;

let mix : any = 8;
mix = true;
mix = "Its mixed";

console.log(mix.toUpperCase());

let mixUnkown : unknown = "hello";
mixUnkown = false;
mixUnkown = "its unkown";

console.log((mixUnkown as string).toUpperCase());

let list1 : number[] = [1,2,3];
let list2 : Array<number> = [1,2,3];
let list3 : string[] = ["saya","dia","kita"];
let list4 : Array<string> = ["saya","dia","kita"];

console.log(list1,list2,list3,list4,mix)

let person1 : [string,number] = ["fahmi irsyad",18];

enum color {red = 5,green,blue};

let c: color = color.green
console.log(c);