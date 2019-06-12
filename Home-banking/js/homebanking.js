//Declaración de variables
let nombreUsuario = 'mike';
let saldoCuenta = 10000;
let limiteExtraccion = saldoCuenta * 0.9;

const Agua = {
    nombre: 'agua',
    Precio: 3500
}
const Telefono = {
    nombre: 'Telefono',
    Precio: 4250
}
const Luz = {
    nombre: 'Luz',
    Precio: 2100
}
const Internet = {
    nombre: 'Internet',
    Precio: 5700
}

const cuentaAmiga1 = {
    nombre: 'Cuenta amiga 1',
    numeroCuenta: 1234567
}

const cuentaAmiga2 = {
    nombre: 'Cuenta amiga 2',
    numeroCuenta: 7654321
}

const servicios = [Agua, Telefono, Luz, Internet];
const cuentasAmiga = [cuentaAmiga1, cuentaAmiga2];


//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


//Funciones que tenes que completar


function CalcularTransaccion(accion) {
    const value = prompt(`Digita la cantidad de dinero a ${accion}:`);

    switch (accion) {
        case 'depositar':
            if ("" !== value) {
                var saldoActual = saldoCuenta;
                saldoCuenta += parseInt(value);
                limiteExtraccion = saldoCuenta * 0.9;
                swal("Genial!", `Has depositado: $${value} 
                        Saldo anterior: $${saldoActual} 
                        Saldo actual: $${saldoCuenta}`);
                actualizarSaldoEnPantalla();
                actualizarLimiteEnPantalla();
            } else {
                swal("Upss", "No has digitado ningún valor", "error");
            }
            break;
        case 'retirar':
            if ("" !== value) {
                if (parseInt(value) <= saldoCuenta) {
                    if (parseInt(value) <= limiteExtraccion) {
                        if (parseInt(value) % 100 === 0) {
                            var saldoActual = saldoCuenta;
                            saldoCuenta -= parseInt(value);
                            limiteExtraccion = saldoCuenta * 0.9;

                            swal("Genial!", `Has retirado: $${value} 
                                        Saldo anterior: $${saldoActual} 
                                        Saldo actual: $${saldoCuenta}`);
                            actualizarSaldoEnPantalla();
                            actualizarLimiteEnPantalla();
                        } else {
                            swal("Upss", "Solo puedes extraer billetes de 100", "error");
                        }
                    } else {
                        swal("Upss", "La cantidad a retirar es mayor al límite de extracción", "error");
                    }
                } else {
                    swal("Upss", "La cantidad a retirar es mayor al saldo actual", "error");
                }
            } else {
                swal("Upss", "No has digitado ningún valor", "error");
            }
            break;
        case 'transferir':
            if ("" !== value) {
                if (parseInt(value) <= saldoCuenta) {
                    if (parseInt(value) <= limiteExtraccion) {
                        transferirCuenta(value);
                    } else {
                        swal("Upss", "No se puede transferir esa cantidad de dinero", "error");
                    }
                }
            } else {
                swal("Upss", "No has digitado ningún valor", "error");
            }
            break;
        default:
            swal("Upss!", "No has seleccionado una opción correcta", "error");
            break;
    }
}

function transferirCuenta(valorCuenta) {
    let cuenta = prompt('Digita la cuenta amiga a transferir de dinero');
    cuenta = parseInt(cuenta);
    switch (cuenta) {
        case cuentasAmiga[0].numeroCuenta:
            if ("" !== valorCuenta) {
                if (parseInt(valorCuenta) <= saldoCuenta) {
                    if (parseInt(valorCuenta) <= limiteExtraccion) {
                        var saldoActual = saldoCuenta;
                        saldoCuenta -= parseInt(valorCuenta);
                        limiteExtraccion = saldoCuenta * 0.9;
                        alert(`Has transferido: $${valorCuenta} \nCuenta destino: ${cuentasAmiga[0].numeroCuenta}`);
                        actualizarSaldoEnPantalla();
                        actualizarLimiteEnPantalla();
                    } else {
                        swal("Upss", "La cantidad a transferir es mayor al límite de extracción", "error");
                    }
                } else {
                    swal("Upss", "La cantidad a transferir es mayor al saldo actual", "error");
                }
            } else {
                swal("Upss", "No has digitado ningún valor", "error");
            }
            break;
        case cuentasAmiga[1].numeroCuenta:
            if ("" !== valorCuenta) {
                if (parseInt(valorCuenta) <= saldoCuenta) {
                    if (parseInt(valorCuenta) <= limiteExtraccion) {
                        var saldoActual = saldoCuenta;
                        saldoCuenta -= parseInt(valorCuenta);
                        limiteExtraccion = saldoCuenta * 0.9;
                        swal("Genial!", `Has transferido: $${valorCuenta} 
                                                                    Cuenta destino: $${cuentasAmiga[1].numeroCuenta}`);
                        actualizarSaldoEnPantalla();
                        actualizarLimiteEnPantalla();
                    } else {
                        swal("Upss", "La cantidad a transferir es mayor al límite de extracción", "error");
                    }
                } else {
                    swal("Upss", "La cantidad a transferir es mayor al saldo actual", "error");
                }
            } else {
                swal("Upss", "No has digitado ningún valor", "error");
            }
            break;
        default:
            swal("Upss", "Has digitado un número de cuenta que no esta en tu lista de referidos", "error");
            break;
    }
}

function realizarPago() {
    swal("Servicios", "Ingresa el numero del servicio a pagar \n 1.agua - $3500 \n 2.telefono - $4250 \n 3.luz - $2100 \n 4.Internet - $5700", {
            content: "input",
        })
        .then((value) => {
            let servicio = parseInt(value);
            servicio -= 1;

            switch (servicio) {
                case 0:
                    if (servicios[servicio].Precio <= saldoCuenta || servicios[servicio].Precio <= limiteExtraccion) {
                        var saldoActual = saldoCuenta;
                        saldoCuenta -= servicios[servicio].Precio;
                        limiteExtraccion = saldoCuenta * 0.9;
                        swal("Genial!", `Has pagado el servicio de ${servicios[servicio].nombre}.
                        Saldo anterior: $${saldoActual} 
                        Dinero descontado: $${servicios[servicio].Precio} 
                        Saldo actual: $${saldoCuenta}`);
                        actualizarSaldoEnPantalla();
                        actualizarLimiteEnPantalla();
                    } else {
                        swal("Upss", "No hay suficiente saldo en la cuenta para pagar este servicio", "error");
                    }
                    break;
                case 1:
                    if (servicios[servicio].Precio <= saldoCuenta || servicios[servicio].Precio <= limiteExtraccion) {
                        var saldoActual = saldoCuenta;
                        saldoCuenta -= servicios[servicio].Precio;
                        limiteExtraccion = saldoCuenta * 0.9;
                        swal("Genial!", `Has pagado el servicio de ${servicios[servicio].nombre}.
                        Saldo anterior: $${saldoActual} 
                        Dinero descontado: $${servicios[servicio].Precio} 
                        Saldo actual: $${saldoCuenta}`);
                        actualizarSaldoEnPantalla();
                        actualizarLimiteEnPantalla();
                    } else {
                        swal("Upss", "No hay suficiente saldo en la cuenta para pagar este servicio", "error");
                    }
                    break;
                case 2:
                    if (servicios[servicio].Precio <= saldoCuenta || servicios[servicio].Precio <= limiteExtraccion) {
                        var saldoActual = saldoCuenta;
                        saldoCuenta -= servicios[servicio].Precio;
                        limiteExtraccion = saldoCuenta * 0.9;
                        swal("Genial!", `Has pagado el servicio de ${servicios[servicio].nombre}.
                        Saldo anterior: $${saldoActual} 
                        Dinero descontado: $${servicios[servicio].Precio} 
                        Saldo actual: $${saldoCuenta}`);
                        actualizarSaldoEnPantalla();
                        actualizarLimiteEnPantalla();
                    } else {
                        swal("Upss", "No hay suficiente saldo en la cuenta para pagar este servicio", "error");
                    }
                    break;
                case 3:
                    if (servicios[servicio].Precio <= saldoCuenta || servicios[servicio].Precio <= limiteExtraccion) {
                        var saldoActual = saldoCuenta;
                        saldoCuenta -= servicios[servicio].Precio;
                        limiteExtraccion = saldoCuenta * 0.9;
                        swal("Genial!", `Has pagado el servicio de ${servicios[servicio].nombre}.
                        Saldo anterior: $${saldoActual} 
                        Dinero descontado: $${servicios[servicio].Precio} 
                        Saldo actual: $${saldoCuenta}`);
                        actualizarSaldoEnPantalla();
                        actualizarLimiteEnPantalla();
                    } else {
                        swal("Upss", "No hay suficiente saldo en la cuenta para pagar este servicio", "error");
                    }
                    break;
                default:
                    swal("Upss", "No existe el servicio que ha seleccionado", "error");
                    break;
            }
        });
}


function cambiarLimiteDeExtraccion() {}

function extraerDinero(dineroARetirar) {
    CalcularTransaccion('retirar');
}

function depositarDinero() {
    CalcularTransaccion('depositar');
}

function pagarServicio() {
    realizarPago();


}

function transferirDinero() {
    CalcularTransaccion('transferir');
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