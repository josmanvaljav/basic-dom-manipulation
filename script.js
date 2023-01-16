const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const p = document.querySelector('p');
const clase_parrafo = document.getElementsByClassName('.clase-parrafo');
const id_parrafo = document.getElementById('id-parrafo');
const inp_valor1 = document.getElementById('inp-valor1');
const inp_valor2 = document.querySelector('#inp-valor2');
const btn_calcular = document.getElementById('btn-calcular');
const btnSinOnClick = document.querySelector('#btnSinOnClick');
const idResult = document.querySelector('#idResult');
// Trabajo con forms, el último botón html lo reconoce automáticamente de tipo Submit y recarga toda la página
const idForm1 = document.querySelector('#idForm1');
const inp_valorx = document.getElementById('inp-valorx');
const inp_valory = document.querySelector('#inp-valory');
const btnSinOnClick2 = document.querySelector('#btnSinOnClick2');
const idResult2 = document.querySelector('#idResult2');
// Trabajo con forms, el último botón lo forzamos en html para que sea de tipo Button y no Submit
// para que no recargue toda la página
const idForm2 = document.querySelector('#idForm2');
const inp_valorp = document.getElementById('inp-valorp');
const inp_valorq = document.querySelector('#inp-valorq');
const btnSinOnClick3 = document.querySelector('#btnSinOnClick3');
const idResult3 = document.querySelector('#idResult3');


// Evento Click del botón o cualquier nombre de función cuando el evento se agrega desde js.
function btnOnClick() {
    const vResultado = inp_valor1.value + inp_valor2.value;
    console.log(vResultado);
    idResult.innerText = 'Resultado: ' + vResultado;
}
// Agregando evento clik desde javascript
btnSinOnClick.addEventListener('click', btnOnClick);

// Función con adecuaciones para que no se recargue la página cuando demos clic al botón dentro de un Form.
function sumarInputValues(event) {
    console.log({event});
    event.preventDefault();
    const vResultado2 = inp_valorx.value + inp_valory.value;
    console.log(vResultado2);
    idResult2.innerText = 'Resultado: ' + vResultado2;
}
// Agregando evento al form para que se ejecute al Submit
idForm1.addEventListener('submit', sumarInputValues);

// Función sin adecuaciones por botón tipo button.
function sumarInputValuesTypeButton() {
    const vResultado3 = inp_valorp.value + inp_valorq.value;
    console.log(vResultado3);
    idResult3.innerText = 'Resultado: ' + vResultado3;
}
// Agregando evento al form para que se ejecute al Submit
btnSinOnClick3.addEventListener('click', sumarInputValuesTypeButton);


// impresión de elementos, primer ejercicio
inp_valor1.value = "prueba texto";
console.log(inp_valor1.value);

console.log({
    h1,
    p,
    clase_parrafo,
    id_parrafo,
    inp_valor1
});

// Texto en párrafo o título
h1.innerHTML = "palabra <br> salto de línea"; // reconoce las etiquemas como parte del html
h2.innerText = "palabra <br> salto de línea"; // toma como puro texto

// Manipular propiedades de los elementos
console.log(h1.getAttribute('class'));
h1.setAttribute('class', 'amarillo');
h1.classList.add('rojo');
h1.classList.remove('amarillo');

// insertar imagen --nuevo elemento
const img = document.createElement('img');
//img.setAttribute('src', 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg');
img.src = 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg';
console.log(img);
id_parrafo.append(img);
img.width = 200;
