// let a: {
//     name: string,
//     age: number,
//     college: string
// } = {
//     name: "Umayer Ahmad",
//     age: 21,
//     college: "Sonargaon University"
// }
// console.log(a)


interface A {
    name: string,
    age: number,
    college: string
}
interface B extends A {
    year: number,
    free: boolean
}

let a: A = {
    name: "Umayer Ahmad",
    age: 21,
    college: "Sonargaon University"
}
let b: A = {
    name: "Umayer Boss",
    age: 21,
    college: "Programming Hero"
}

let c: B = {
    name: "Umayer Boss",
    age: 21,
    college: "Programming Hero",
    year: 2026,
    free :true
}
console.log(a)
console.log(b)
console.log(c)