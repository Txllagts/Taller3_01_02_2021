let numero = [];

parar:
do {
    let n = parseInt(prompt("Ingrese un numero"));
    numero.push(n);
    let opc = parseInt(prompt("Deseas ingresar otro numero, \n 1. Si. \n 2. No"));
    switch (opc) {
        case 1:
            continue parar;
        case 2:
            console.log(`Cantidad de numeros ingresados ${numero.length}`);
            consoler.log(`${numero}`);
            break parar;
    
        default:
            alert("A sos re trol");
            break;
    }
} while (true);