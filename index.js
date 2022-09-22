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
    constructor(detalle, dinero) {
        super(detalle, dinero)
    }
}

// manejo de array en clases
const arregloIngreso = [];

function agregarDinero() {
    let detalle = document.getElementById('detalle');
    let monto = document.getElementById('monto');
    console.log("Detalle : " + detalle.value + " el monto ingresado es : " + parseInt(monto.value));
    let nuevoIngreso = new Ingreso(detalle.value, monto.value);
    arregloIngreso.push(nuevoIngreso);
    mostrarInformacion();
}

function mostrarInformacion() {
    let total = 0;
    let texto = '';

    if (arregloIngreso.length === 0) {
        document.getElementById('informacionEgreso').innerHTML = '<h3 class="text-center">no existen registros</h3>';
        console.log('if longitud del arreglo' + arregloIngreso.length);
    } else if (arregloIngreso.length > 0) {
        for (let iterador of arregloIngreso) {
            total += parseInt(iterador._dinero);
            texto += ` <li class="list-group-item d-flex justify-content-between align-items-center">${iterador._idIngreso}: ${iterador._detalle} 
                        <span class="badge badge- badge-primary">s/ ${iterador._dinero}</span>
                        <button onclick="eliminarItemIngreso(${iterador._idIngreso})" class="btn btn-danger">x</button></li>`;
            document.getElementById('informacionEgreso').innerHTML = texto;
            console.log('longitud del arreglo' + arregloIngreso.length);

        }
    }
    document.getElementById('montoActual').innerHTML = ` ${total} soles `;
    console.log(arregloIngreso);
}

function eliminarItemIngreso(id) {
    let itemEliminado = arregloIngreso.findIndex(ingreso => ingreso._idIngreso === id);
    arregloIngreso.splice(itemEliminado, 1); //el indice que se va a eliminar y luego ahi cuantos otros itemas se van a eliminar
    mostrarInformacion();
}