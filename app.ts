// let a: {
//     name: string,
//     age: number,
//     company: string
// } = {
//     name: "Umayer",
//     age: 21,
//     company: "Oracle",
// }
// // a.name = "Ahmad"

// console.log(a)

let a: {
    [key: string]: string | number | undefined
} = {
    name: "Umayer",
    age: 21,
    company: undefined,
}
a.company = "BJIT"

console.log(a)