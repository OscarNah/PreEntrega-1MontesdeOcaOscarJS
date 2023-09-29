let nombre = prompt("Bienvendio a RentCar México, donde puedes rentar vehiculos de todas las gamas a precios accesibles y justos.\nLos vehiculos se rentan por dia con precios fijos\n ¿Cual es tu nombre?");
let presupuesto = Number(prompt(`Hola ${nombre}, a continuacion te mostramos el listado de nuestros vehiculos y precios por dia:\n Volkswagen Vento 2020. $550 MXM por día\n Volkswagen Jetta 2021. $730 MXM por día\n Mazda 3 2023. $800 MXM por día\n BMW 220i 2023. $1100 MXM por día\n Mercedes Benz GLC 2023. $1300 MXM por día\n Ya que conoces los precios por día.\n ¿De cuanto es tu presupuesto?`));
let eleccion = "";
let dias = "";

function cotizar(){
    calculo = dias * precio;
    restante = presupuesto-calculo;
    let reservar = prompt(`El costo por rentar el vehiculo ${dias} dias es de ${calculo} MXM.\n Te sobra un total de ${restante} MXM\n¿Deseas reservar el vehiculo?\n\n Intrucciones: Presionar aceptar o escribe "si" para reservarlo ó escribe no para checar otra opcion`).toLowerCase();
    if (reservar == "si" || reservar == "") {
        alert(`Reservaste el vehiculo por ${dias} dias pasa a pagar ${calculo} MXM y a recoger tu vehiculo a nuestra sucursal en CDMX \nTu numero de folio es el: 01`);
    } else {
        alert("Regresando al menu...");
    }
}
function eleccionVehiculo() {
    do {
    eleccion = prompt(`${nombre}, Tu presupuesto es de: ${presupuesto}, ¿En cual de las opciones estas interesado?\n 1)Volkswagen Vento 2020. $550 MXM por día.\n 2)Volkswagen Jetta 2021. $730 MXM por día.\n 3)Mazda 3 2023. $800 MXM por día.\n 4)BMW 220i 2023. $1100 MXM por día.\n 5)Mercedes Benz GLC 2023. $1300 MXM por día.\n 6) Cerrar programa`);
        switch (eleccion) {
            case "1":
                dias = Number(prompt("¿Cuantos dias estas interesado en rentar el vehiculo?"));
                precio=550;
                cotizar();
                break;
            case "2":
                dias = Number(prompt("¿Cuantos dias estas interesado en rentar el vehiculo?"));
                precio=730;
                cotizar();
                break;
            case "3":
                dias = Number(prompt("¿Cuantos dias estas interesado en rentar el vehiculo?"));
                precio=800;
                cotizar();
                break;
            case "4":
                dias = Number(prompt("¿Cuantos dias estas interesado en rentar el vehiculo?"));
                precio=1100;
                cotizar();
                break;
            case "5":
                dias = Number(prompt("¿Cuantos dias estas interesado en rentar el vehiculo?"));
                precio=1300;
                cotizar();
                break;
            case "6":
                alert("Vuelve pronto");
                break;
            default:
                alert("Entrada invalida");
        }
    } while (eleccion !== "6")
}
eleccionVehiculo();



