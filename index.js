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
    constructor(detalle, dinero) {
        super(detalle, dinero)
    }
}
class Egreso extends Dato {
    constructor(detalle, dinero) {
        super(detalle, dinero)
    }
}

// manejo de array en clases
const arregloIngreso = [new Ingreso('mochila', 60),
    new Ingreso('tijera', 2)
];

function agregarDinero() {
    let detalle = document.getElementById('detalle');
    let monto = document.getElementById('monto');
    console.log("Detalle : " + detalle.value + " el monto ingresado es : " + parseInt(monto.value));
    let nuevoIngreso = new Ingreso(detalle.value, monto.value);
    let montoAgregado = arregloIngreso.push(nuevoIngreso);
    console.log("++++++" + montoAgregado);

    mostrarInformacion();
}

function mostrarInformacion() {
    let total = 0;
    let texto = '';
    for (let iterador of arregloIngreso) {
        let mensaje = "El detalle es  : " + iterador._detalle + " -dinero : " + iterador._dinero;

        console.log(mensaje);
        total += parseInt(iterador._dinero);

        console.log("El total : " + total);
        texto += ` 
        <li class="list-group-item d-flex justify-content-between align-items-center">${iterador._detalle} 
        <span class="badge badge- badge-primary">s/ ${iterador._dinero}</span>
        <button onclick="prueba()" class="btn btn-danger">-</button></li>`;

        document.getElementById('informacionEgreso').innerHTML = texto;
    }
    document.getElementById('montoActual').innerHTML = ` ${total} soles `;
    console.log(arregloIngreso);
}

function prueba() {
    alert();
}