//Problema 1 - nivel facil
// for(let i = 1; i<=100; i++ ){
//     if(i%15===0){
//         console.log("fizzbuzz /n");
//     }
//     else{
//         if(i%3 === 0){
//             console.log("fizz /n");
//         }
//         else{
//             if(i%5===0){
//                 console.log("fuzz/n");
//             }
//             else{
//                 console.log(i);
//             }
//         }
//     }
// }
//Problema 2 nivel medio
// function ComprobarAnagrama(original: string, anagrama: string): boolean{
//     let acumulador:string|number[][] = [];
//     for(let i = 0; i<original.length; i++){
//         let suma = 0;
//         for (let a = 0; a < original.length; a++) {
//             if(original[i] === original[a] ){
//                 suma = suma +1;
//             }
//         }
//         acumulador[i][a] = suma;
//     }
//     let acumulador2: string[] = [];
//     for(let i = 0; i<anagrama.length; i++){
//         let suma = 0;
//         for (let a = 0; a < anagrama.length; a++) {
//             if(anagrama[i] === anagrama[a] ){
//                 suma = suma +1;
//             }
//         }
//         acumulador2[anagrama[i]] = suma;
//     }
//     console.log(acumulador2)
//     console.log(acumulador)
// }
// console.log(ComprobarAnagrama("maria", "maria"))
//problema 3 nivel dificil
// let penultimoValor = 0;
// let ultimoValor = 1;
// let arregloFibonacci = [0,1];
// for (let index = 0; index < 48 ;index++) {
//     const nuevoValor = penultimoValor + ultimoValor;
//     arregloFibonacci.push(nuevoValor);
//     console.log(nuevoValor);
//     penultimoValor = ultimoValor;
//     ultimoValor = nuevoValor;
// }
// console.log(arregloFibonacci)
//problema 4 nivel  medio
// let arregloDePrimos: number[] = [];
// let esPrimo: boolean = true;
// for (let i = 2; i <= 100; i++) {
//     if(i === 2) {
//         arregloDePrimos.push(2);
//         continue
//     }
//     for (let b = 2; b < i; b++) {
//         if (i%b===0) {
//             esPrimo = false;
//             break
//         }
//         else{
//             esPrimo=true;
//         }
//     }
//     if(esPrimo){
//         arregloDePrimos.push(i);
//     }
// }
// console.log(arregloDePrimos)
//problema 5 nivel fácil
// function AreaDelPoligono(poligono: string): string {
//   switch (poligono) {
//     case ("triangulo"):
//       return "base x altura / 2"
//     case ("cuadrado"):
//       return "lado x lado"
//     case ("rectángulo"):
//         return "base x altura"
//     default:
//         return "poligono no conocido";
//   }
// }
// console.log(AreaDelPoligono('cuadrado'))
//problema 7 nivel fácil
// const palabra: string = "hola";
// let nuevaPalabra: String ="";
// for (let i = 1; i <= palabra.length; i++) {
//   nuevaPalabra = nuevaPalabra.concat(palabra[palabra.length - i])
// }
// console.log(nuevaPalabra)
//problema 8 nivel medio
// const palabra = "perro"
// let acumulador2: string[] = [];
// for (let i = 0; i < palabra.length; i++) {
//   let suma = 0;
//   for (let a = 0; a < palabra.length; a++) {
//     if (palabra[i] === palabra[a]) {
//       suma = suma + 1;
//     }
//   }
//   acumulador2[palabra[i]] = suma;
// }
// console.log(acumulador2, " hay un total de ", palabra.length, " letras.")
//problema 9 nivel fácil
// let dividendo = 20;
// let numeroBinario = "";
// let arreglo: number[]= [];
// let residuo = 0;
// let nuevoDividendo = 0;
// while (dividendo>=2) {
//     nuevoDividendo= (dividendo/2)|0;
//     residuo = dividendo%2;
//     arreglo.push(residuo);
//     dividendo = nuevoDividendo;
// }
// arreglo.push(dividendo);
// for (let i = arreglo.length; i >= 1 ; i--){
//   numeroBinario = numeroBinario.concat(arreglo[i-1].toString())
// }
// console.log(numeroBinario)
//problema 12 nivel medio
// function EliminandoCaracteres(str1: string, str2: string): string{
//   let noStr2 = "";
//   for (let i = 0; i < str1.length; i++) {
//     let estaIncluido = false;
//     for (let a = 0; a < str2.length; a++) {
//       if(str1[i] === str2[a]){
//         estaIncluido = true;
//       }
//     }
//     if (estaIncluido === false) {
//       noStr2 = noStr2.concat(str1[i]);
//     }
//   }
//   return noStr2;
// }
// console.log(EliminandoCaracteres("pato con arroz","p"))
//problema 13 nivel medio
// function EliminarEspacios(expresion): string {
//   let expresionSinEspacios = "";
//   for (let i = 0; i < expresion.length; i++) {
//     if (expresion[i] === " ") {
//       continue;
//     }
//     expresionSinEspacios = expresionSinEspacios.concat(expresion[i]);
//   }
//   return expresionSinEspacios;
// }
// function VerificarPalindromo(expresion: string): boolean {
//   const expresionSinEspacios = EliminarEspacios(expresion).toLowerCase();
//   let esPalindromo = true;
//   for (let i = 0; i < expresionSinEspacios.length; i++) {
//     if (
//       expresionSinEspacios[i] !==
//       expresionSinEspacios[expresionSinEspacios.length - (i + 1)]
//     ) {
//       esPalindromo = false;
//       break;
//     }
//     esPalindromo = true;
//   }
//   return esPalindromo;
// }
// console.log(VerificarPalindromo("Perep"));
//problema 14 nivel fácil
// function factorial(n: number){
//     if (n===1) {
//        return n;
//     }
//     else{
//         return factorial(n-1)*n
//     }
// }
// console.log(factorial(4))
//problema 15
// function ValidarNumeroDeAmstrong(numero: number): boolean{
//     const nroCifras = numero.toString().length;
//     const numeroInicial = numero;
//     let suma = 0;
//     for (let i = 0; i < nroCifras; i++) {
//         suma = suma +((numero/(10**(nroCifras-i-1)))|0)**nroCifras;
//         numero = (numero%(10**(nroCifras-i-1)));
//     }
//     if(numeroInicial === suma){
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// console.log(ValidarNumeroDeAmstrong(8208));
//problema 17
// function PrimeraLetraEnMayuscula(expresion: string): string {
//     let nuevaExpresion = "";
//     for (let i = 0; i < expresion.length; i++) {
//         if(expresion[i-1] ===" " &&  i > 0){
//             nuevaExpresion = nuevaExpresion.concat(expresion[i].toUpperCase());      
//         }
//         else{
//             if(i === 0 ){
//                 nuevaExpresion = nuevaExpresion.concat(expresion[i].toUpperCase());
//             }
//             else {
//                 nuevaExpresion = nuevaExpresion.concat(expresion[i]);
//             }
//         }
//     }
//     return nuevaExpresion;
// }
// console.log(PrimeraLetraEnMayuscula("  ana  la      huerfanita"));
//problema 19 tres en raya
// const matriz: string[][] = [
//     ["x","x","x"],
//     ["x","O","O"],
//     ["O","X","X"]
// ];
// function verificarFilas(matriz: string[][]): string[]{
//     let ganador:string[] =[];
//     for (let i = 0; i < 3; i++) {
//         let contador  = 0;
//         for (let a = 0; a < 3; a++) {
//             if(matriz[i][a] === matriz[i][2-a]){
//                 contador++;
//             }
//         }
//         if(contador === 3){
//             ganador = matriz[i];
//         }
//         else{
//             ganador = []
//         }
//     }
//     return ganador
// }
// function TresEnRaya(matriz: string[][]): string{    
// // }
// console.log(verificarFilas(matriz))
//problema 20
function ConvertirAMilisegundos(cantidad, tipoTiempo) {
    var resultado = 0;
    switch (tipoTiempo) {
        case "días": {
            resultado = cantidad * 24 * 60 * 60 * 1000;
            break;
        }
        case "horas": {
            resultado = cantidad * 60 * 60 * 1000;
            break;
        }
        case "minutos": {
            resultado = cantidad * 60 * 1000;
            break;
        }
        case "segundos": {
            resultado = cantidad * 1000;
            break;
        }
        default: {
            resultado = "No se puede definir";
            break;
        }
    }
    return resultado;
}
console.log(ConvertirAMilisegundos(5, "minutos"));
