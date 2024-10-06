



class Pokedex {
}


window.onload = function() {
    document.getElementById('cargar').addEventListener('click',cargar);
    console.log('HOLA');

    fetch('https://pokeapi.co/api/v2/pokemon/chimchar')
    .then(respuesta => respuesta.json())
    .then(result => {
        console.log(result);
    })

    fetch('https://pokeapi.co/api/v2/pokemon/monferno')
    .then(respuesta => respuesta.json())
    .then(result => {
        console.log(result);
    })

    fetch('https://pokeapi.co/api/v2/pokemon/infernape')
    .then(respuesta => respuesta.json())
    .then(result => {
        console.log(result);
    })

    fetch('https://pokeapi.co/api/v2/pokemon/shinx')
    .then(respuesta => respuesta.json())
    .then(result => {
        console.log(result);
    })

    fetch('https://pokeapi.co/api/v2/pokemon/luxio')
    .then(respuesta => respuesta.json())
    .then(result => {
        console.log(result);
    })

    fetch('https://pokeapi.co/api/v2/pokemon/luxray')
    .then(respuesta => respuesta.json())
    .then(result => {
        console.log(result);
    })

    fetch('https://pokeapi.co/api/v2/pokemon/starly')
    .then(respuesta => respuesta.json())
    .then(result => {
        console.log(result);
    })

    fetch('https://pokeapi.co/api/v2/pokemon/staravia')
    .then(respuesta => respuesta.json())
    .then(result => {
        console.log(result);
    })

    fetch('https://pokeapi.co/api/v2/pokemon/staraptor')
    .then(respuesta => respuesta.json())
    .then(result => {
        console.log(result);
    })

    fetch('https://pokeapi.co/api/v2/pokemon/wooper')
    .then(respuesta => respuesta.json())
    .then(result => {
        console.log(result);
    })

    fetch('https://pokeapi.co/api/v2/pokemon/quagsire')
    .then(respuesta => respuesta.json())
    .then(result => {
        console.log(result);
    })

    fetch('https://pokeapi.co/api/v2/pokemon/riolu')
    .then(respuesta => respuesta.json())
    .then(result => {
        console.log(result);
    })

    fetch('https://pokeapi.co/api/v2/pokemon/lucario')
    .then(respuesta => respuesta.json())
    .then(result => {
        console.log(result);
    })

    fetch('https://pokeapi.co/api/v2/pokemon/budew')
    .then(respuesta => respuesta.json())
    .then(result => {
        console.log(result);
    })

    fetch('https://pokeapi.co/api/v2/pokemon/roselia')
    .then(respuesta => respuesta.json())
    .then(result => {
        console.log(result);
    })


    fetch('https://pokeapi.co/api/v2/pokemon/roserade')
    .then(respuesta => respuesta.json())
    .then(result => {
        console.log(result);
    })
    
}

function cargar() {
    console.log('carga');
}