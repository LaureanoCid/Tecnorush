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

        //Compra para -- GABINETES 
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

        //Compra para -- PROCESADORES 
        case 2:
            op_prod = parseInt(prompt("Presione la opcion deseada: \n1. Ryzen 7 5700G - $325.000 \n2. Ryzen 5 5600X - $215.000 \n3. Ryzen 3 3200G - $130.000 "));
            switch (op_prod) {
                case 1:
                    alert("Ryzen 7 5700G agregado a su carrito");
                    cant++;
                    monto += 325.000;
                    lista += "\n" + cant + " Ryzen 7 5700G - $325.000";
                    break;
                case 2:
                    alert("Ryzen 5 5600X agregado a su carrito");
                    cant++;
                    monto += 215.000;
                    lista += "\n" + cant + " Ryzen 5 5600X - $215.000";
                    break;
                case 3:
                    alert("Ryzen 3 3200G agregado a su carrito");
                    cant++;
                    monto += 130.000;
                    lista += "\n" + cant + " Ryzen 3 3200G - $130.000";
                    break;
                default:
                    alert("Opcion incorrecta");
                    break;
            }
            break;

        //Compra para -- AURICULARES 
        case 3:
            op_prod = parseInt(prompt("Presione la opcion deseada: \n1. Razer Blackshark V2 Pro - $645.000 \n2. JBL 910 RGB - $630.000 \n3. Logitech G G733 - $460.000 "));
            switch (op_prod) {
                case 1:
                    alert("Razer Blackshark V2 Pro agregado a su carrito");
                    cant++;
                    monto += 645.000;
                    lista += "\n" + cant + " Razer Blackshark V2 Pro - $645.000";
                    break;
                case 2:
                    alert("JBL 910 RGB agregado a su carrito");
                    cant++;
                    monto += 630.000;
                    lista += "\n" + cant + " JBL 910 RGB - $630.000";
                    break;
                case 3:
                    alert("Logitech G G733 agregado a su carrito");
                    cant++;
                    monto += 460.000;
                    lista += "\n" + cant + " Logitech G G733 - $460.000";
                    break;
                default:
                    alert("Opcion incorrecta");
                    break;
            }
            break;

        //Compra para -- ALMACENAMIENTO 
        case 4:
            op_prod = parseInt(prompt("Presione la opcion deseada: \n1. SSD Kingston 1TB - $100.000 \n2. SSD Samsung 860 EVO 1TB - $790.000 \n3. SSD M.2 Western Digital 1TB - $750.000 "));
            switch (op_prod) {
                case 1:
                    alert("SSD Kingston 1TB agregado a su carrito");
                    cant++;
                    monto += 100.000;
                    lista += "\n" + cant + " SSD Kingston 1TB - $100 .000";
                    break;
                case 2:
                    alert("SSD Samsung 860 EVO 1TB agregado a su carrito");
                    cant++;
                    monto += 790.000;
                    lista += "\n" + cant + " SSD Samsung 860 EVO 1TB - $790.000";
                    break;
                case 3:
                    alert("SSD M.2 Western Digital 1TB agregado a su carrito");
                    cant++;
                    monto += 750.000;
                    lista += "\n" + cant + " SSD M.2 Western Digital 1TB - $750.000";
                    break;
                default:
                    alert("Opcion incorrecta");
                    break;
            }
            break;

            //Compra para -- PLACAS DE VIDEO 

            //Compra para -- MOTHERBOARDS 

            //Compra para -- MOUSES 

            //Compra para -- MEMORIAS RAM 

            //Compra para -- TECLADOS 

        default:
            alert("Opcion incorrecta");
            break;
    }
    alert(lista);
}






