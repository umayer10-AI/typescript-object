// type A = {name: string}
// type B = {age: number}
// type C = A & B

interface A {name: string}
interface B {age: number}
type C = A & B

const PA: A = {name: "Umayer"}
const PB: B = {age: 21}

const PC: A & B = {name: "Umayer", age: 21}
console.log(PC)