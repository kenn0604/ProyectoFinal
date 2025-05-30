// AGENDA DE CONTACTOS 
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let contactos = [
    {
        nombre: "Carlos Pérez",
        telefono: "123456789",
        email: "carlos@correo.com"
    },
    {
        nombre: "Ana Martínez",
        telefono: "987654321",
        email: "ana@correo.com"
    },
    {
        nombre: "Luis Gómez",
        telefono: "555666777",
        email: "luis@correo.com"
    }
];

function mostrarMenu() {
    console.log("\n--- MENÚ DE AGENDA ---");
    console.log("1. Mostrar todos los contactos");
    console.log("2. Buscar contacto por nombre");
    console.log("3. Agregar un nuevo contacto");
    console.log("4. Borrar contacto por nombre");
    console.log("5. Salir");

    rl.question("Elige una opción (1-5): ", function(opcion) {
        if (opcion === "1") {
            mostrarContactos();
        } else if (opcion === "2") {
            buscarContacto();
        } else if (opcion === "3") {
            agregarContacto();
        } else if (opcion === "4") {
            borrarContacto();
        } else if (opcion === "5") {
            console.log("Gracias por usar la agenda.");
            rl.close();
        } else {
            console.log("Opción no válida.");
            mostrarMenu();
        }
    });
}

function mostrarContactos() {
    console.log("\n--- LISTA DE CONTACTOS ---");
    contactos.map(c => {
        console.log("Nombre:", c.nombre);
        console.log("Teléfono:", c.telefono);
        console.log("Email:", c.email);
        console.log("--------------------------");
    });
    mostrarMenu();
}

function buscarContacto() {
    rl.question("Escribe el nombre o parte del nombre a buscar: ", function(nombreBuscar) {
        let encontrados = contactos.filter(c => c.nombre.toLowerCase().includes(nombreBuscar.toLowerCase()));
        if (encontrados.length > 0) {
            console.log("\n--- RESULTADOS ---");
            encontrados.forEach(c => {
                console.log("Nombre:", c.nombre);
                console.log("Teléfono:", c.telefono);
                console.log("Email:", c.email);
                console.log("--------------------------");
            });
        } else {
            console.log("No se encontraron contactos con ese nombre.");
        }
        mostrarMenu();
    });
}

function agregarContacto() {
    rl.question("Nombre: ", function(nombre) {
        rl.question("Teléfono: ", function(telefono) {
            rl.question("Email: ", function(email) {
                let nuevo = {
                    nombre: nombre,
                    telefono: telefono,
                    email: email
                };
                contactos.push(nuevo);
                console.log("Contacto agregado exitosamente.");
                mostrarMenu();
            });
        });
    });
}

function borrarContacto() {
    rl.question("Escribe el nombre exacto del contacto a borrar: ", function(nombreBorrar) {
        let index = contactos.findIndex(c => c.nombre.toLowerCase() === nombreBorrar.toLowerCase());
        if (index !== -1) {
            contactos.splice(index, 1);
            console.log("Contacto eliminado correctamente.");
        } else {
            console.log("No se encontró un contacto con ese nombre exacto.");
        }
        mostrarMenu();
    });
}

mostrarMenu()
