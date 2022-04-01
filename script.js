//funcion para añadir contacto

function nvoContacto(){
contactos.push(prompt("nombre y apellido del contacto"));
}


//funcion para borrar contacto

function borrarContacto(){
const indice = parseInt(
  prompt("ingrese la posicion del contacto que desea borrar")
);    
contactos.splice(indice,1);

}

function imprimirContactos(){
    console.log(contactos);
}

//inico de la ejecucion
let contactos = ["Petruzca Ramirez", "Juana Quintero ", "Johana Soto"];

nvoContacto();
borrarContacto();
imprimirContactos();


