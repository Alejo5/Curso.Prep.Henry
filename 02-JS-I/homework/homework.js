// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Pablo";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 10;

// Crea una variable booleana:
const nuevoBool = "true";

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {return "str"
  // "Return" la string provista: str
  // Tu código:
};

function suma(x, y) {return x + y
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
};

function resta(x, y) {return x - y
  // Resta "x" de "y" y devuelve el valor
  // Tu código:
};

function multiplica(x, y) {return x * y
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
};

function divide(x, y) {return x / y
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
};

function sonIguales(x, y) {if(x===y) return true
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
};

function tienenMismaLongitud(str1, str2) {if (str1.lenght === str2.lenght) return true
  
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
};

function menosQueNoventa(num) {if (num < 90) return true
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
};

function mayorQueCincuenta(num) {if (num > 50)return true} 
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:


function obtenerResto(x, y) {return (x % y)};
  // Obten el resto de la división de "x" entre "y"
  // Tu código:


function esPar(num) {if (num % 2 === 0 ) return true};
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:


function esImpar(num) {if (num % 2 === 1 ) return true};
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:


function elevarAlCuadrado(num) {return (num * num)};
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:


function elevarAlCubo(num) {return (num * num * num)};
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:


function elevar(num, exponent) {return Math.pow(num, exponent)};
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:


function redondearNumero(num) {return Math.round (num)};
  // Redondea "num" y devuélvelo
  // Tu código:


function redondearHaciaArriba(num) {return Math.ceil (num)};
  // Redondea "num" hacia arriba y devuélvelo
  // Tu código:


function agregarSimboloExclamacion(str) {return + "!"};
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:


function combinarNombres(nombre, apellido) { return ("Alejandro" , "Pilón")};
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:


function obtenerSaludo(nombre) {var Saludo = "Hola" + "nombre" + "!"};
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:


function obtenerAreaRectangulo(alto, ancho) {return ( alto)
  // Retornar el area de un cuadrado teniendo su altura y ancho
  // Tu código:
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
};
