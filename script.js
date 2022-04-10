//funcion para añadir contacto

function nvoContacto() {
  const contact = {
    id: parseInt(prompt("Ingrese un número de id")),
    nombre: prompt("Ingrese el nombre del contacto"),
    apellido: prompt("Ingrese el apellido del contacto"),
    telefono: parseInt(prompt("Ingrese un número de teléfono")),
    ubicacion: [prompt("Ingrese Ciudad"), prompt("Ingrese dirección")],
  };

  contactos.push(contact);
}

//funcion para borrar contacto

function borrarContacto() {
  const indice = parseInt(
    prompt("ingrese la posicion del contacto que desea borrar")
  );
  contactos.splice(indice, 1);
}

//funcion para imprimir contactos
function imprimirContactos() {
  console.log(contactos);
}

//inico de la ejecucion

let contactos = [
  {
    id: 1,
    nombre: "Ana ",
    apellido: "Soto",
    telefono: 04242210073,
    ubicacion: ["Guarenas", "Nva Casarapa"],
  },
  {
    id: 2,
    nombre: "Leticia",
    apellido: "Quintero",
    telefono: 04149121344,
    ubicacion: ["Guatire", "Calle Zamora"],
  },
  {
    id: 3,
    nombre: "Miguel",
    apellido: "Peña",
    telefono: 0978872443,
    ubicacion: ["Quito", "Quitumbre"],
  },
];

nvoContacto();
borrarContacto();
imprimirContactos();
