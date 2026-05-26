// const a = (): string | string[] | number[] => {
//     let item = 1
//     if(item > 1){
//         return ['apple','pineApple']
//     }
//     else{
//         return "Banana"
//     }
// }
// console.log(a())

const a = (v: string | number | boolean) => {
    if(typeof v==="string"){
        return `My name is ${v}`
    }
    if(typeof v==="number"){
        return v
    }
    return v
}
console.log(a("Umayer Ahmad"))
console.log(a(100))
console.log(a(true))