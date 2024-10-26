window.onload = function() {


    fetch('https://pokeapi.co/api/v2/pokemon/chimchar')
    .then(respuesta => respuesta.json())
    .then(result => {
        console.log(result);
        chimchar = result;
        let name = result.forms[0].name;
        let type = result.types[0].type.name;
        let peso = result.weight;
        let altura = result.height;
        
        document.getElementById('tipos').innerHTML = type;
        document.getElementById('peso').innerHTML += peso;
        document.getElementById('altura').innerHTML += altura;
        /*let imgEspaldas;
        let imgFrontal = */

        console.log(name);
        document.getElementById('title_Pokemon').innerHTML = name;
    })
    //console.log('chimchar ',chimchar);
    fetch('https://pokeapi.co/api/v2/pokemon/monferno')
    .then(respuesta => respuesta.json())
    .then(result => {
        //console.log(result);
    })

    fetch('https://pokeapi.co/api/v2/pokemon/infernape')
    .then(respuesta => respuesta.json())
    .then(result => {
        //console.log(result);
    })

    fetch('https://pokeapi.co/api/v2/pokemon/shinx')
    .then(respuesta => respuesta.json())
    .then(result => {
        //console.log(result);
    })

    fetch('https://pokeapi.co/api/v2/pokemon/luxio')
    .then(respuesta => respuesta.json())
    .then(result => {
        //console.log(result);
    })

    fetch('https://pokeapi.co/api/v2/pokemon/luxray')
    .then(respuesta => respuesta.json())
    .then(result => {
        //console.log(result);
    })

    fetch('https://pokeapi.co/api/v2/pokemon/starly')
    .then(respuesta => respuesta.json())
    .then(result => {
        //console.log(result);
    })

    fetch('https://pokeapi.co/api/v2/pokemon/staravia')
    .then(respuesta => respuesta.json())
    .then(result => {
        //console.log(result);
    })

    fetch('https://pokeapi.co/api/v2/pokemon/staraptor')
    .then(respuesta => respuesta.json())
    .then(result => {
        //console.log(result);
    })

    fetch('https://pokeapi.co/api/v2/pokemon/wooper')
    .then(respuesta => respuesta.json())
    .then(result => {
        //console.log(result);
    })

    fetch('https://pokeapi.co/api/v2/pokemon/quagsire')
    .then(respuesta => respuesta.json())
    .then(result => {
        //console.log(result);
    })

    fetch('https://pokeapi.co/api/v2/pokemon/riolu')
    .then(respuesta => respuesta.json())
    .then(result => {
        //console.log(result);
    })

    fetch('https://pokeapi.co/api/v2/pokemon/lucario')
    .then(respuesta => respuesta.json())
    .then(result => {
        //console.log(result);
    })

    fetch('https://pokeapi.co/api/v2/pokemon/budew')
    .then(respuesta => respuesta.json())
    .then(result => {
        //console.log(result);
    })

    fetch('https://pokeapi.co/api/v2/pokemon/roselia')
    .then(respuesta => respuesta.json())
    .then(result => {
        //console.log(result);
    })


    fetch('https://pokeapi.co/api/v2/pokemon/roserade')
    .then(respuesta => respuesta.json())
    .then(result => {
        //console.log(result);
    })
    
}

function handleLeft() {
    console.log('entra en left');
}

function handleRight() {
    console.log('entra en right');
}
