//Declaración de variables
let nombreUsuario = 'mike';
let saldoCuenta = 10000;
let limiteExtraccion = 8000;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function () {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


//Funciones que tenes que completar
function CalcularTransaccion(accion) {
    swal("Digita la cantidad de dinero a depositar:", {
        content: "input",
    })
        .then((value) => {
            var saldoActual = saldoCuenta;
            saldoCuenta += parseInt(value);
            swal("Genial!", `Has depositado: $${value} 
             Saldo anterior: $${saldoActual} 
             Saldo actual: $${saldoCuenta}`);
            actualizarSaldoEnPantalla();
        });
}


function cambiarLimiteDeExtraccion() {

}

function extraerDinero(dineroARetirar) {
    if (dineroARetirar < saldoCuenta) {
        saldoCuenta -= dineroARetirar;
    }
    else {
        swal("Upss", "La cantidad a retirar es mayor a el saldo en la cuenta", "error");
    }
}

function depositarDinero() {

    CalcularTransaccion('Depositar');

}

function pagarServicio() {

}

function transferirDinero() {

}

function iniciarSesion() {

}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}