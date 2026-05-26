const a = (): never => {
    while(true){
        console.log("Loop")
    }
}

const b = ():never => {
    throw new Error("Something is Wrong")
}