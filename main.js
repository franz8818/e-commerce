
//Funcion nativa
// alert("HOLA FRANZ");

//Variables
let nombre = "Franz Seidel"
nombre = "franz seidel"

//Constantes
const apellido = "Seidel"
const altura = 165;

//Concatenación -> Puedo unir dos variables
let concatenacion = nombre + " " + apellido; 

//Seleccionar elementos de la página
let datos = document.querySelector("#datos");
datos.innerHTML = `
        <h1> Soy la caja de datos </h1>
        <h2>Mi nombre es: $(nombre) $(apellido)
`

//mostrar por consola
console.log(nombre);
console.log(altura);

