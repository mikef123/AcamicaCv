//Declaración de variables
let nombreUsuario = 'mike';
let saldoCuenta = 10000;
let limiteExtraccion = 8000;
const servicios = [agua, telefono, luz, internet];

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


//Funciones que tenes que completar


function CalcularTransaccion(accion) {
    swal(`Digita la cantidad de dinero a ${accion}:`, {
            content: "input",
        })
        .then((value) => {
                switch (accion) {
                    case 'depositar':
                        debugger
                        if ("" !== value) {
                            var saldoActual = saldoCuenta;
                            saldoCuenta += parseInt(value);
                            swal("Genial!", `Has depositado: $${value} 
                         Saldo anterior: $${saldoActual} 
                         Saldo actual: $${saldoCuenta}`);
                            actualizarSaldoEnPantalla();
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

                                        swal("Genial!", `Has retirado: $${value} 
                                             Saldo anterior: $${saldoActual} 
                                             Saldo actual: $${saldoCuenta}`);
                                        actualizarSaldoEnPantalla();
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
                    case 'pagarServicio':
                        swal("Ingresa el numero del servicio a pagar", {
                                content: "input",
                            })
                            .then((value) => {
                                    const servicio = parseInt(value);
                                    servicio -= 1;
                                    switch (servicio) {
                                        case 0:

                                            if (parseInt(value) <= saldoCuenta || parseInt(value) <= limiteExtraccion) {
                                                var saldoActual = saldoCuenta;
                                                saldoCuenta -= parseInt(value);

                                                swal("Genial!", `Has pagado el servicio de agua.
                                                Has retirado: $${value} 
                                                                     Saldo anterior: $${saldoActual} 
                                                                     Saldo actual: $${saldoCuenta}`);
                                                actualizarSaldoEnPantalla();
                                            } else {
                                                swal("Upss", "No hay suficiente saldo en la cuenta para pagar este servicio", "error");
                                            }

                                            break;
                                        case 1:

                                            if (parseInt(value) <= saldoCuenta || parseInt(value) <= limiteExtraccion) {
                                                var saldoActual = saldoCuenta;
                                                saldoCuenta -= parseInt(value);

                                                swal("Genial!", `Has pagado el servicio de telefono.
                                                Has retirado: $${value} 
                                                                     Saldo anterior: $${saldoActual} 
                                                                     Saldo actual: $${saldoCuenta}`);
                                                actualizarSaldoEnPantalla();
                                            } else {
                                                swal("Upss", "No hay suficiente saldo en la cuenta para pagar este servicio", "error");
                                            }
                                            break;
                                        case 2:

                                            if (parseInt(value) <= saldoCuenta || parseInt(value) <= limiteExtraccion) {
                                                var saldoActual = saldoCuenta;
                                                saldoCuenta -= parseInt(value);

                                                swal("Genial!", `Has pagado el servicio de luz.
                                                Has retirado: $${value} 
                                                                     Saldo anterior: $${saldoActual} 
                                                                     Saldo actual: $${saldoCuenta}`);
                                                actualizarSaldoEnPantalla();
                                            } else {
                                                swal("Upss", "No hay suficiente saldo en la cuenta para pagar este servicio", "error");
                                            }
                                            break;
                                        case 3:

                                            if (parseInt(value) <= saldoCuenta || parseInt(value) <= limiteExtraccion) {
                                                var saldoActual = saldoCuenta;
                                                saldoCuenta -= parseInt(value);

                                                swal("Genial!", `Has pagado el servicio de internet.
                                                Has retirado: $${value} 
                                                                     Saldo anterior: $${saldoActual} 
                                                                     Saldo actual: $${saldoCuenta}`);
                                                actualizarSaldoEnPantalla();
                                            } else {
                                                swal("Upss", "No hay suficiente saldo en la cuenta para pagar este servicio", "error");
                                            }
                                            break;
                                        default:
                                            swal("Upss", "No existe el servicio que ha seleccionado", "error");
                                    }
                                    break;
                                    default:
                                    swal("Upss!", "No has seleccionado una opción correcta", "error");
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
                CalcularTransaccion('pagarServicio');


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