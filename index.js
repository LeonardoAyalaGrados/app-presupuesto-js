console.log("buenas noches");
class Dato {

    constructor(detalle, dinero) {
        this._detalle = detalle;
        this._dinero = dinero;
    }
    get getDetalle() { return this._detalle }
    set setDetalle(detalle) { this._detalle = detalle }
    get getDinero() { return this._dinero }
    set setDinero(dinero) { this._dinnero = dinero }
}

class Ingreso extends Dato {
    static id = 0;
    constructor(detalle, dinero) {
        super(detalle, dinero)
        this._idIngreso = ++Ingreso.id;
    }
    get getIdIngreso() { return this._idIngreso }
}
class Egreso extends Dato {
    static id = 0;
    constructor(detalle, dinero) {
        super(detalle, dinero)
        this._idEgreso = ++Egreso.id;
    }
    get getIdEgreso() { return this._idEgreso }
}

// manejo de array en clases
const arregloIngreso = [];
const arregloEgreso = [];
// Variables que usamos para obetener valos de inputs
const detalle = document.getElementById('detalle');
const monto = document.getElementById('monto');

function agregarDinero() {
    console.log("Detalle : " + detalle.value + " el monto ingresado es : " + parseInt(monto.value));
    let nuevoIngreso = new Ingreso(detalle.value, monto.value);
    arregloIngreso.push(nuevoIngreso);
    mostrarInformacion();
}

function retirarDinero() {
    console.log("Detalle : " + detalle.value + " el monto egresado es : " + parseInt(monto.value));
    let nuevoEgreso = new Egreso(detalle.value, monto.value);
    arregloEgreso.push(nuevoEgreso);
    mostrarInformacion();
}

function mostrarInformacion() {
    // Variables para ingreso
    let totalIngreso = 0;
    let textoIngreso = '';

    // LOGICA PARA MOSTRAR INFORMACION DEL ARRAY INGRESOS
    if (arregloIngreso.length === 0) {
        document.getElementById('informacionIngreso').innerHTML = '<h3 class="text-center">no existen ingresos</h3>';
        console.log('if longitud del arreglo ingreso' + arregloIngreso.length);
    } else if (arregloIngreso.length > 0) {
        for (let iterador of arregloIngreso) {
            totalIngreso += parseInt(iterador._dinero);
            textoIngreso += ` <li class="list-group-item d-flex justify-content-between align-items-center">${iterador._idIngreso}: ${iterador._detalle} 
                        <span class="badge badge- badge-primary">s/ ${iterador._dinero}</span>
                        <button onclick="eliminarItemIngreso(${iterador._idIngreso})" class="btn btn-danger">x</button></li>`;
            document.getElementById('informacionIngreso').innerHTML = textoIngreso;
            console.log('longitud del arreglo' + arregloIngreso.length);

        }
    }
    // LOGICA PARA MOSTRAR INFORMACION DEL ARRAY EGRESOS
    // Variables para egreso
    let totalEgreso = 0;
    let textoEgreso = '';
    if (arregloEgreso.length === 0) {
        document.getElementById('informacionEgreso').innerHTML = '<h3 class="text-center">no existen egresos</h3>';
        console.log('if longitud del arreglo egreso' + arregloEgreso.length);
    } else if (arregloEgreso.length > 0) {
        for (let iterador of arregloEgreso) {
            totalEgreso += parseInt(iterador._dinero);
            textoEgreso += ` <li class="list-group-item d-flex justify-content-between align-items-center">${iterador._idEgreso}: ${iterador._detalle} 
                        <span class="badge badge- badge-primary">s/ ${iterador._dinero}</span>
                        <button onclick="eliminarItemEgreso(${iterador._idEgreso})" class="btn btn-success">x</button></li>`;
            document.getElementById('informacionEgreso').innerHTML = textoEgreso;
            console.log('longitud del arreglo' + arregloEgreso.length);
        }
    }
    // info primera logica if 
    document.getElementById('montoActual').innerHTML = ` ${totalIngreso} soles `;
    console.log(arregloIngreso);
    // info segunda logica if 
    document.getElementById('montoActualEgreso').innerHTML = ` ${totalEgreso} soles `;
    console.log(arregloEgreso);
}

function eliminarItemIngreso(id) {
    let itemEliminado = arregloIngreso.findIndex(ingreso => ingreso._idIngreso === id);
    arregloIngreso.splice(itemEliminado, 1); //el indice que se va a eliminar y luego ahi cuantos otros itemas se van a eliminar
    mostrarInformacion();
}

function eliminarItemEgreso(id) {
    let itemEgresoEliminado = arregloEgreso.findIndex(egreso => egreso._idIngreso === id);
    arregloEgreso.splice(itemEgresoEliminado, 1); //el indice que se va a eliminar y luego ahi cuantos otros itemas se van a eliminar
    mostrarInformacion();
}