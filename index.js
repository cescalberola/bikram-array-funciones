//Arrays

//1.-Crea una variable de nombre 'arrayVacio' cuyo valor sea un array vacio
let arrayVacio = [];
//2.- Crea una variable de nombre 'arrayNumeros' cuyo valor sea el array de numeros del 0 al 9 incluidos (0, 1, 2...)
let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//3.- Crea una variable de nombre 'arrayNumerosPares' cuyo valor sea el array de numeros pares del 0 al 9 (considerando al 0 par)
let arrayNumerosPares = [0, 2, 4, 6, 8];
//4.- Crea una variable de nombre 'arrayBidimensional' cuyo valor sea el siguiente array [[0, 1, 2], ['a', 'b', 'c']]
let arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']];

//Funciones

//5.- Crea la función 'suma' que acepte como argumentos dos números y devuelva como resultado su suma
function suma(num1, num2) {
    return num1+num2; }
//6.- Crea la función 'potenciacion' que acepte como argumentos dos números y devuelva como resultado el primer número (a) elevado al segundo(b) a^b [Prohibido operador ** y math.exp]
function potenciacion(num1, num2) {
    return num1**num2; }
//7.- Crea la función 'separarPalabras' que acepte como argumento un string y devuelva un array de palabras
function separarPalabras(str) {
    return str.split(' '); }
//8.- Crea la función 'repetirString' que acepta como argumento un string y un número, y retorna el primer string concatenado el número dado de veces
function repetirString(str, num) {
    return str.repeat(num); }
//9.- Crea la función 'esPrimo' que acepte como argumento un número y devuelva true si es primo y false si no lo es
function esPrimo(num) {
    return (num == 1 || (num%2!=0 && num%3!=0))
}

//Mezclando Arrays y Funciones

//10.- Crea la función 'ordenarArray' que acepte como argumento un array de números y devuelva un array ordenado de menor a mayor
function ordenarArray(numArray) {
    return numArray.sort((a,b)=>a-b);
}
//11.- Crea la función 'obtenerPares' que acepte como argumento un array de números y devuelva un array con los elementos que sean pares
function obtenerPares(numArray) {
    let pairs = [];
    numArray.forEach(el => {
        if (el%2 == 0) {
            pairs.push(el);
        }
    })
    return pairs;
}
//12.- Crea la función 'pintarArray' que acepte como argumento un array y devuelva una cadena de texto Array: [0, 1, 2] String: '[0, 1, 2]'
function pintarArray(array) {
    return `[${array}]`.split(',').join(', ');
}
//13.- Crea la función 'arrayMapi' que acepte como argumento un array y una función y retorne un array en el que se haya aplicado la función a cada elemento del primer array
function arrayMapi(arr, func) {
    return arr.map(el => func(el));
}
//14.-Crea la función 'eliminarDuplicados' que acepte como argumento un array y deberá devolver un array en el que se hayan eliminado los duplicados
function eliminarDuplicados(arr) {
    return arr.reduce((acc, el) => {
        if (acc.indexOf(el) === -1) {
          acc.push(el);
        }
        return acc;
      }, []);
}

//Project iteractions
//Arrays

//15.- Crea una variable de nombre 'arrayNumerosNeg' cuyo valor sea el array de numeros del 0 al -9 incluidos (0, -1, -2...)
let arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];
//16.- Crea una variable de nombre 'holaMundo' cuyo valor sea un array con las palabras 'Hola' y 'Mundo'
let holaMundo = ['Hola', 'Mundo'];
//17.- Crea una variable de nombre 'loGuardoTodo' cuyo valor sea un array con los valores 'hola', 'que', 23, 42.33 y 'tal'
let loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal'];
//18.- Crea una variable de nombre 'arrayDeArrays' cuyo valor sea el siguiente array [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]
let arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];

//Funciones

//19.- Crea la función 'multiplicacion' que acepte como argumentos dos números y devuelva como resultado su multiplicacion
function multiplicacion(num1, num2) {
    return num1*num2;
}
//20.- Crea la función 'division' que acepte como argumentos dos números y devuelva como resultado su division
function division(num1, num2) {
    return num1/num2;
}
//21.- Crea la función 'esPar' que acepte como argumento un número y devuelva true si es par y false si es impar
function esPar(num) {
    return num%2==0;
}
//22.- Crea una variable de nombre 'arrayFunciones' que tenga el valor de un array con las funciones: suma, resta y multiplicacion (todas aceptan 2 números como argumento y devuelve el resultado de su operación)
function resta(num1, num2) {
    return num1-num2;
}
let arrayFunciones = [suma, resta, multiplicacion];

//Mezclando Arrays y Funciones

//23.- Crea la función 'ordenarArray2' que acepte como argumento un array de números y devuelva un array ordenado de mayor a menor
function ordenarArray2(arr) {
    return arr.sort((a,b) => a-b);
}
//24.- Crea la función 'obtenerImpares' que acepte como argumento un array de números y devuelva un array con los elementos que sean impares
function obtenerImpares(arr) {
    let odds = [];
    arr.forEach(el => {
        if (el%2 !== 0) {
            odds.push(el);
        }
    })
    return odds;
}
//25.- Crear la función 'sumarArray' que acepte como argumento un array numérico y devuelva el resultado de la suma de los elementos
function sumarArray(numArr) {
    return numArr.reduce((a,b)=>a+b);
}
//26.- Crear la función 'multiplicarArray' que acepte como argumento un array numérico y devuelva el resultado de la multiplicación de los elementos
function multiplicarArray(numArr) {
    return numArr.reduce((a,b)=>a*b)
}