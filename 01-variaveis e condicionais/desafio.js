// Faça um programa para calcular o valor gasto de combustível em uma viagem.


// voce terá 3 variáveis:
// 1- Preço do combustivel
// 2- Gasto medio de combustivel  gasto
// 3- Distancia em Km da viagem

// imprima no console o valor que sera gasto de combustivel para realizar a viagem
const gasolina = 5.09;
const etanol = 4.45;
const gastoMedio = 30;
const KmRodados = 1000;
const tipoCombustivel = "gasolina";

if(tipoCombustivel === "Etanol"){
    const litrosGastos = KmRodados / gastoMedio;
    const valorGasto = litrosGastos * etanol;
    console.log(valorGasto.toFixed(2));
    return
}
if(tipoCombustivel === "gasolina"){
    const litrosGastos = KmRodados / gastoMedio;
    const valorGasto = litrosGastos * gasolina;
    console.log(valorGasto.toFixed(2));
}
/* 
const litrosGastos = KmRodados / gastoMedio;
const valorGasto = litrosGastos * precoCombustivel;
console.log(valorGasto.toFixed(2));

 */