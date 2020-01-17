import * as _ from 'lodash'

async function hello() {
	return 'Hello world!'
}
let lucky: number
lucky = 23

//type Style = 'string';

type Style = 'bold' | 'italic' | 23

let font: Style;

interface Person  {
	first: string;
	last: string;
	[key: string]: any
}
const person: Person = {
	first: 'Jeff',
	last: 'Delaney'
}

const person2: Person = {
	first: 'Usain',
	last: 'Bolt',
	fast: true
}


 function pow(x: number, y: number) {
 	return Math.pow(x, y);
 }
pow(5, 10)

function pow2(x: number, y: number): string {
 	return Math.pow(x, y).toString();
 }
pow2(5, 10)

// Arrays
type MyList = [number?, string?, boolean?]
const arr: MyList = []
arr.push(1)
arr.push('123')
arr.push(false)

//Generics
class Observable<T> {
	constructor(public value: T) {}
}

let x: Observable<number>;
let y: Observable<Person>;
let z = new Observable(23)

