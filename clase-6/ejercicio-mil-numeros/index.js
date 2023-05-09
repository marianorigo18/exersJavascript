const obj = {}

for(let i = 0; i < 10000; i++){
    let numerito = Math.floor(Math.random()*20 + 1);
    if(!obj[numerito]) obj[numerito] = 1;
    else obj[numerito]++
}
console.log(obj)