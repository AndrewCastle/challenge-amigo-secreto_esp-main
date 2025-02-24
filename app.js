// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let name = document.getElementById('amigo').value.trim();
    if (name == "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    amigos.push(name);
    document.getElementById('amigo').value = "";
    document.getElementById('amigo').focus();
    console.log(amigos);
    listaAmigos();
}

function listaAmigos() {
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = "";
    for (let index = 0; index < amigos.length; index++) {
        lista.append(amigos[index], document.createElement('li'));
    }
}