let precio = prompt('Ingresa el precio:');
if (precio >= 5 && precio <= 15) {
    alert('El precio es razonable');
} else if (precio > 15) {
    alert('El precio es muy caro');
} else if (precio < 5) {
    alert('El precio es muy barato');
}

let anioNacimiento = prompt('Ingresa tu año de nacimiento');
if (anioNacimiento < 2004) {
    alert('Eres mayor de edad!!!!');
} else if (anioNacimiento > 2004) {
    alert('Eres un niñato y no tienes acceso :fear !');
}

//Ejemplos con FOR,WHILE y DO WHILE

const cantidad = 10;

console.log('Del 1 al ' + cantidad + ' con FOR');
for (let i = 0; i <= cantidad; i++) {
    console.log(i);

}

console.log('Del 1 al ' + cantidad + ' con WHILE');
let contador = 1;
while (contador <= cantidad) {
    console.log(contador);
    contador++;

}

console.log('Del 1 al ' + cantidad + ' con DO WHILE');
let contadorDO = 1;
do {
    console.log(contadorDO);
    contadorDO++;
} while (contadorDO <= cantidad);