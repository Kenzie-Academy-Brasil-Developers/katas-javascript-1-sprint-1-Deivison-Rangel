function oneThroughTwenty() {
  let contar = 0
  let lista=[]
  while(contar<20){
    contar+=1
    lista.push(contar) 
  } 
  return lista
}
console.log(oneThroughTwenty())  


function evensToTwenty() {
    let contar2 = 0
    let lista2=[]
    while(contar2<20){
      contar2+=2
      lista2.push(contar2)
    }
    return lista2
}
console.log(evensToTwenty())


function oddsToTwenty() {
  let contar3 = 1
  let lista3=[]
  while(contar3<20){
    lista3.push(contar3)
    contar3+=2
  }
  return lista3
}
console.log(oddsToTwenty())


function multiplesOfFive() {
    let numero = 5
    let lista5=[]
    for(let contador = 1;contador <= 20;contador++){
      lista5.push(numero * contador)
    }
    return lista5
}
console.log(multiplesOfFive())


function squareNumbers() {
  let resultado=[]
  for(let i= 1;i <= 100; i++){
    let quadrado = i*i
    if (i<=10){
    resultado.push(quadrado)
    }
  }
  return resultado
}
console.log(squareNumbers())


function countingBackwards() {
let contar = 21
  let lista=[]
  while(contar>1){
    contar-=1
    lista.push(contar)
  }   
  return lista
}
console.log(countingBackwards())


function evenNumbersBackwards() {
  let contar2 = 22
  let lista2=[]
  while(contar2>1){
    contar2-=2
    lista2.push(contar2)
  }
  return lista2
}
console.log(evenNumbersBackwards())


function oddNumbersBackwards(){
  let contar3 = 19
  let lista3=[]
  while(contar3>1){
    lista3.push(contar3)
    contar3-=2
  }
  return lista3
}
console.log(oddNumbersBackwards())


function multiplesOfFiveBackwards(){
  let numero = 5
  let lista5=[]
  for(let contador = 20;contador >= 1;contador-=1){
    lista5.push(numero * contador)
  }
  return lista5
}
console.log(multiplesOfFiveBackwards())



function squareNumbersBackwards(){
  let resultado=[]
  for(let i= 100;i >= 1; i--){
    let quadrado = i*i
    if (i<=10){
    resultado.push(quadrado)
    }
  }
  return resultado
}
console.log(squareNumbersBackwards())