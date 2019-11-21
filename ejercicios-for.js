for (let i = 0; i <= 100; i++) {
  console.log(i)
};

///////////////EJERCICIO 2/////////////////////////
for (let i = 100; i >= 0; i--) {
  console.log(i)
};

//////////////EJERCICIO 3/////////////////////////
for (let i = 0; i <= 1000; i += 2) {
  console.log(i)
};

/////////////////////////////////////
let cantidadDeGatitos = 3;
for (i = cantidadDeGatitos; cantidadDeGatitos > 0; i--) {
  let respuesta = prompt("¿Queres adoptar un gatito?");
  if (respuesta === "si") {
    alert("Adoptaste un gatito")
    cantidadDeGatitos--
  };
};

/////////EJERCICIO 4///////////////////////////
for (let i = 0; i <= 10; i++) {
  console.log(`9 * ${i} = ${9 * i}`)
};

//////////////////EJERCICIO 5///////////////////
let suma = 0;
for (let i = 0; i <= 1000; i++, suma += i) {
  console.log(suma); 
}

////////////////EJERCICIO 6///////////////////////
suma = 0;
for (let i = -1; i <= 1000; i += 2, suma += i) {
  console.log(suma); 
}

////////////////EJERCICIO 7///////////////////////
let asterisco = "*"; 
for (let i = 0; i <= 13; i++, asterisco += "*" ) {
  console.log(asterisco);
}

///////////////EJERCICIO 8////////////////////////
asterisco = "*"; 
for (let i = 0; i <= 7; i++, asterisco += "**" ) {
  console.log(asterisco);
}

////////////////EJERCICIO 9///////////////////////
let a = 0;
let b = 1;
let fibonacci = a + b;
for (let i = 0; i <= 10; i++) {
  console.log(fibonacci)
  a = b;
  b = fibonacci;
  fibonacci = a + b;
}

