

const input1 = document.querySelector('#inputid1');

const input2 = document.querySelector('#inputid2');

const input3 = document.querySelector('#inputid3');

const input4 = document.querySelector('#inputid4');
const btn = document.querySelector('#btn');
const resultado = document.querySelector('#resultado');

function btnOnClick(){
    const razon = input1.value;
    const administracion = input1.value;
    const duracion = input3.value;
    const consejo = input1.value;

    resultado.innerHTML = 
    
    "
    <div class="col">
    <div class="card mb-4 rounded-3 shadow-sm">
        <div class="card-header-3 py-3">
        <h4 class="my-0 fw-normal"><strong></strong></h4>
      </div>
      <div class="card-body">
        <ul class="list-unstyled mt-3 mb-4">
          <li><strong>Razon social:</strong><p>{razon}</p></li>
          <li><strong>Duracion:</strong><p>{administracion}</p></li>
          <li><strong>Administrador Unico:</strong><p>{duracion}</p></li>
          <li><strong>Consejo de Administracion:</strong><p>{consejo}</p></li>
          <li><strong>Fecha de Constitucion: </strong><p></p></li>
        </ul>
        <a type="button" class="btn btn-danger btn-lg" href='#' >IR</a>
      </div>
    </div>
  </div>"


};

