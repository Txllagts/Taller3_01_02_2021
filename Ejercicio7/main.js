let n = parseInt(prompt("Ingrese un numero entero positivo:"));
let d = 1;
let result = 0;
let lista = [];

do {
    if (n%d==0){
        result = result + d;
        lista.push(d);
    }
    d++;
    if (d<n) {
        continue;
    } else {
        if (result==n) {
            console.log(`El numero ${n} es perfecto su suma es ${result} lista: `,lista);
        } else {
            console.log(`El numero ${n} no es perfecto ysu suma de los divisores es ${result} lista:`,lista);
        }
        break;
    }
   
}while (true) 