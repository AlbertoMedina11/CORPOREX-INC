
// PORTADA HTML

const input1 = document.querySelector('#inputid1');

const input2 = document.querySelector('#inputid2');

const input3 = document.querySelector('#inputid3');

const input4 = document.querySelector('#inputid4');

const input5 = document.querySelector('#inputid5');
const nuevohtml = document.querySelector('#nuevohtml');


const btn = document.querySelector('#btn');
const ingreso1 = document.querySelector('#ingreso1');
const ingreso2 = document.querySelector('#ingreso2');
const ingreso3 = document.querySelector('#ingreso3');
const ingreso4 = document.querySelector('#ingreso4');
const ingreso5 = document.querySelector('#ingreso5');

function btnOnClick(){
    const razon = input1.value;
    const duracion = input2.value;
    const administracion = input3.value;
    const consejo = input4.value;
    const constitucion = input5.value;

    ingreso1.innerText = razon;
    ingreso2.innerText = "Duracion" + duracion;
    ingreso3.innerText = " Administracion" + administracion;
    ingreso4.innerText = " Consejo de Administracion " + consejo;
    ingreso5.innerText = "Constitucion " + constitucion;
};


const Nuevasociedad = [];

Nuevasociedad.push({
 name: "alberto",
 duracion: "55",
 
});





       
// PATITOS HTML
const Agregarcontrato = document.querySelector('#Agregarcontrato');

const enviarcontrato = document.querySelector('enviarcontrato')

function Seagreganuevocontrato(){
  const contratonuevo = Agregarcontrato.value;
  enviarcontrato.innerText = contratonuevo;
};

