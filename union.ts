const a = (): string | string[] | number[] => {
    let item = 1
    if(item > 1){
        return ['apple','pineApple']
    }
    else{
        return "Banana"
    }
}
console.log(a())