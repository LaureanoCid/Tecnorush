// Definicion de variable / Constantes que se utilizaran a lo largo del programa

// Definicion de usario y su contraseña
let user = "user";
let pass = "pass";
let user2 = "";
let pass2 = "";

// Comienzo de programa

alert("Bienvenid@ al carro de compras de TECNORUSH!");

// Login con su respectivas validaciones
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

// MENU del carrito




// Compra de productos
let op = prompt("Presione la opcion deseada: \n1. Gabinetes \n2. Procesadores \n3. Auriculares \n4. Almacenamiento \n5. Placas de video \n6. Motherboards \n7. Mouse \n8. Memorias RAM \n9. Teclados ");
let op_prod = 0;
let cant = 0;
let lista = "Su compra es la siguiente: ";
let monto = 0;

switch (op) {
    case "1":
        op_prod = prompt("Presione la opcion deseada: \n1. Gabinete Deepcool - $109.000 \n2. Gabinete Thermaltake - $163.000 \n3. Gabinete Corsair - $210.000 ");
        switch (op_prod) {
            case "1":
                alert("Gabinete Deepcool agregado a su carrito");
                cant++;
                lista += "\n"+cant+" Gabinete Deepcool - $109.000";
                break;
            case "2":
                alert("Gabinete Thermaltake agregado a su carrito");
                cant++;
                lista += "\n"+cant+" Gabinete Thermaltake - $163.000";
                break;
            case "3":
                alert("Gabinete Corsair agregado a su carrito");
                cant++;
                lista += "\n"+cant+" Gabinete Corsair - $210.000";
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




