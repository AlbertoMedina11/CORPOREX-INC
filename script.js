
// PORTADA HTML




const input1 = document.querySelector('#inputid1');

const input2 = document.querySelector('#inputid2');



const nuevohtml = document.querySelector('#nuevohtml');


const btn = document.querySelector('#btn');
const ingreso1 = document.querySelector('#ingreso1');
const ingreso2 = document.querySelector('#ingreso2');
const ingreso3 = document.querySelector('#ingreso3');
const ingreso4 = document.querySelector('#ingreso4');
const ingreso5= document.querySelector('#ingreso5');
const ingreso6 = docuement.querySelector('#ingreso6');


function btnOnClick(){
    const nombre = input1.value;
    const razon = input2.value;
    const nuevobotonregistro = document.createElement('button');
        nuevobotonregistro.innerText= "Registro";
        
    const nuevobotonborrar = document.createElement("button");
        nuevobotonborrar.innerText = "Borrar";

    ingreso1.innerText = nombre;
    ingreso2.innerText = "Razon o Denominacion Social: " + razon  ; 
    ingreso5.appendChild(nuevobotonregistro);  
    
};



function Borrador1(){
    const caja1 = document.querySelector('div.col-3')
    caja1.remove(caja1);
};

function Borrador2(){
    const caja2 = document.querySelector('div.col-2')
    caja2.remove(caja2);
};

function Borrador3(){
    const caja3 = document.querySelector('div.col-1')
    caja3.remove(caja3);
};


function funcategory(){
    var a = document.getElementById('h1');
    if (a.style.display === "none") {
      a.style.display = "block";
    } else {
      a.style.display = "none";
    }
  };