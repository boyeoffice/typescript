async function hello() {
    return 'Hello world!';
}
let lucky;
lucky = 23;
let font;
const person = {
    first: 'Jeff',
    last: 'Delaney'
};
const person2 = {
    first: 'Usain',
    last: 'Bolt',
    fast: true
};
function pow(x, y) {
    return Math.pow(x, y);
}
pow(5, 10);
function pow2(x, y) {
    return Math.pow(x, y).toString();
}
pow2(5, 10);
const arr = [];
arr.push(1);
arr.push('123');
arr.push(false);
//Generics
class Observable {
    constructor(value) {
        this.value = value;
    }
}
let x;
let y;
let z = new Observable(23);
