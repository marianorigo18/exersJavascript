const suma = (num1, num2) => {
    return new Promise((resolve, reject) =>{
        if(num1===0 || num2===0) reject("operacion innecesaria")
        if(num1 + num2 < 0) reject("solo devolver valores positivos")
        resolve(num1 + num2)
    })
}

const calculos = async () => {
    try{
        let numero1 = -21;
        let numero2 = 20;
        const resultSuma = await suma(numero1, numero2)
        console.log(resultSuma)
    }catch(err){
        console.log(err);
    }
}
calculos()