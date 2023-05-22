
// PORTADA HTML

const { Alert } = require("bootstrap");
const { log } = require("console");

const input1 = document.querySelector('#inputid1');

const input2 = document.querySelector('#inputid2');


const nuevohtml = document.querySelector('#nuevohtml');


const btn = document.querySelector('#btn');
const ingreso1 = document.querySelector('#ingreso1');
const ingreso2 = document.querySelector('#ingreso2');
const ingreso3 = document.querySelector('#ingreso3');
const ingreso4 = document.querySelector('#ingreso4');
const ingreso5 = document.querySelector('#ingreso5');

function btnOnClick(){
    const nombre = input1.value;
    const razon = input2.value;
  

    ingreso1.innerText = nombre;
    ingreso2.innerText = "Razon o Denominacion Social" + razon;

};

// PATITOS 

function Escoger(){
    const option = document.getElementById('Escoger-contratos').value;

    if (option === "Arrendamiento " ){
        windows.location.href= "./html/arrendamiento.html"
    } else if (option === "Compra venta"){
        windows.location.href= "./html/compraventa.html"
    };
    
};


export default btnOnClick;
