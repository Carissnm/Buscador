// variables

const resultado = document.querySelector('#resultado');
const contenedor = document.querySelector('#contenedor');

const max = new Date().getFullYear();
const min = max - 10;

//variables selectores
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

// Generar un objeto de Búsqueda

const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}

//eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos);

    llenarSelect();
});
marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;

    filtrarAuto();
})
year.addEventListener('change', e => {
    datosBusqueda.year = Number(e.target.value);

    filtrarAuto();
});
minimo.addEventListener('change', e => {
    datosBusqueda.minimo = Number(e.target.value);

    filtrarAuto();
});
maximo.addEventListener('change', e => {
    datosBusqueda.maximo = Number(e.target.value);

    filtrarAuto();
});
puertas.addEventListener('change', e => {
    datosBusqueda.puertas = Number(e.target.value);

    filtrarAuto();
});
transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;

    filtrarAuto();
});
color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;

    filtrarAuto();
});



//funciones
function mostrarAutos(autos) {

    limpiarHTML(); //Elimina el contenido previo

    autos.forEach( auto => {
        const autoHTML = document.createElement('p');
        const { marca, modelo, year, puertas, transmision, precio, color } = auto;

        autoHTML.textContent = `
        ${marca} ${modelo} - ${year} - ${puertas} puertas - Transmisión: ${transmision} - Color: ${color} - Valor: $${precio}  `;

        //agrgar auto a html

        resultado.appendChild(autoHTML);
    })

}

function llenarSelect() {    
    for(let i = max; i >= min; i--){
        const yearHTML = document.createElement('option');
        yearHTML.value = i;
        yearHTML.textContent = i;

        year.appendChild(yearHTML);
    };
}

//limpiar HTML

function limpiarHTML(){
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild)
    }
}

function filtrarAuto() {
    const resultadoFiltrado = autos.filter( filtrarMarca ).filter( filtrarYear ).filter( filtrarMinimo ).filter( filtrarMaximo ).filter( filtrarPuertas ).filter( filtrarTransmision ).filter( filtrarColor );

    if(resultadoFiltrado.length) {
        mostrarAutos(resultadoFiltrado);
    } else {
        sinExito();
    } 
}

function sinExito() {
    limpiarHTML();
    const mensaje = document.createElement('div')
    mensaje.classList.add('alerta', 'error');
    mensaje.textContent = 'No se encontraron autos de esas características';

    resultado.appendChild(mensaje);
}

function filtrarMarca(auto) {
    const { marca } = datosBusqueda;
    if(marca) {
        return auto.marca === datosBusqueda.marca;
    } else {
        return auto;
    };
};

function filtrarYear(auto) {
    const { year } = datosBusqueda;
    if(year) {
        return auto.year === year;
    } else {
        return auto;
    }
}

function filtrarMinimo(auto) {
    const { minimo } = datosBusqueda;
    if( minimo ) {
        return auto.precio >= minimo;
    } else {
        return auto;
    }
}

function filtrarMaximo(auto) {
    const { maximo } = datosBusqueda;
    if( maximo ) {
        return auto.precio <= maximo;
    } else {
        return auto;
    }
}

function filtrarPuertas(auto) {
    const { puertas } = datosBusqueda;
    if(puertas) {
        return auto.puertas === puertas;
    } else {
        return auto;
    }
};

function filtrarTransmision(auto) {
    const { transmision } = datosBusqueda;
    if(transmision) {
        return auto.transmision === transmision;
    } else {
        return auto;
    }
};

function filtrarColor(auto) {
    const {color} = datosBusqueda;
    if(color) {
        return auto.color === color;
    } else {
        return auto;
    }
};





