// Definicion de variable / Constantes que se utilizaran a lo largo del programa

let user = "user"; //---------------------------Usuario
let pass = "pass"; //------------------------Contraseña
let user2 = "";
let pass2 = "";
let opMenu = 0;
let cant = 0;
let lista = "Su compra es la siguiente: ";
let monto = 0;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// COMIENZA PROGRAMA
alert("Bienvenid@ al carro de compras de TECNORUSH!");

// Login con su respectivas validaciones
login();

// MENU del carrito
do {
    opMenu = parseInt(prompt("Que operacion desea realizar: \n1. Comprar producto \n2. Eliminar producto \n3. Visualizar compra \n0. Salir"));
    switch (opMenu) {
        case 1:
            comprarProductos(cant, lista, monto);
            break;
        case 2:
            eliminarProductos(cant, lista, monto); //Falta desarrollar!
            break;
        case 3:
            visualizarCompra(cant, lista, monto); //Falta desarrollar!
            break;
        case 0:
            alert("Gracias por visitarnos, vuelva pronto!");
            break;
        default:
            alert("Opcion incorrecta!");
            break;
    }
} while (opMenu != 0);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FUNCIONES
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Login

function login() {
    do {
        alert("Debe loguearse para realizar operaciones: ")
        user2 = prompt("Ingrese su usuario: ");
        if (user2 == user) {
            pass2 = prompt("Ingrese su contraseña: ");
            if (pass2 == pass) {
                alert("Acceso correcto!");
                break;
            }
        }
        alert("Algo ha salido mal. Vuelva a ingresar sus datos!");
    } while (user2 != user || pass2 != pass);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Compra de productos

function comprarProductos(cant, lista, monto) {
    let op = parseInt(prompt("Presione la opcion deseada: \n1. Gabinetes \n2. Procesadores \n3. Auriculares \n4. Almacenamiento \n5. Placas de video \n6. Motherboards \n7. Mouse \n8. Memorias RAM \n9. Teclados "));
    let op_prod = 0;

    switch (op) {
        case 1:
            op_prod = parseInt(prompt("Presione la opcion deseada: \n1. Gabinete Deepcool - $109.000 \n2. Gabinete Thermaltake - $163.000 \n3. Gabinete Corsair - $210.000 "));
            switch (op_prod) {
                case 1:
                    alert("Gabinete Deepcool agregado a su carrito");
                    cant++;
                    monto += 109.000;
                    lista += "\n" + cant + " Gabinete Deepcool - $109.000";
                    break;
                case 2:
                    alert("Gabinete Thermaltake agregado a su carrito");
                    cant++;
                    monto += 163.000;
                    lista += "\n" + cant + " Gabinete Thermaltake - $163.000";
                    break;
                case 3:
                    alert("Gabinete Corsair agregado a su carrito");
                    cant++;
                    monto += 210.000;
                    lista += "\n" + cant + " Gabinete Corsair - $210.000";
                    break;
                default:
                    alert("Opcion incorrecta");
                    break;
            }
            break;
        default:
            alert("Opcion incorrecta");
            break;
    }
    alert(lista);
    console.log(cant);
    console.log(monto);
    console.log(lista);
}






