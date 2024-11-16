window.onload = function() {

    let endpoint = new URL('https://pokeapi.co/api/v2/pokemon/chimchar');

    let llamadaApi = promesa(endpoint);
    console.log(llamadaApi);

    document.getElementById('cerrar').addEventListener('click', cerrarPokedex)

    fetch('https://pokeapi.co/api/v2/pokemon/chimchar')
    .then(respuesta => respuesta.json())
    .then(result => {
        console.log(result);
        chimchar = result;
        let name = result.forms[0].name;
        let type = result.types[0].type.name;
        let peso = result.weight;
        
        let altura = result.height;
        let backChimchar = result.sprites.back_default;
        let frontChimchar = result.sprites.front_default;
        console.log(backChimchar);
        console.log(frontChimchar);
        //document.getElementById('tipos').innerHTML = type;


        formatoTipos(type);
        document.getElementById('back').setAttribute('src',backChimchar);
        document.getElementById('front').setAttribute('src',frontChimchar);
        document.getElementById('peso').innerHTML = parseFloat(peso) / 10 ;
        document.getElementById('altura').innerHTML = parseFloat(altura) / 10;
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

function formatoTipos(tipos) {

    let tiposSeparados = tipos.split(',');
    let typesFormatted;

    for (let tipo of tiposSeparados) {

        switch (tipo) {

            case "fire":
                let spanFuego = document.createElement('span');
                let textoFuego = document.createTextNode(tipo);
                spanFuego.setAttribute('class','fire');
                spanFuego.appendChild(textoFuego);
                typesFormatted = spanFuego;
                break;

            case "water":
                let spanAgua = document.createElement('span');
                let textoAgua = document.createTextNode(tipo);
                spanAgua.setAttribute('class','water');
                spanAgua.appendChild(textoAgua);
                typesFormatted = spanAgua;
                break;

            case "ground":
                let spanTierra = document.createElement('span');
                let textoTierra = document.createTextNode(tipo);
                spanTierra.setAttribute('class','ground');
                spanTierra.appendChild(textoTierra);
                typesFormatted = spanTierra;
                break;

            case "fighting":
                let spanLucha = document.createElement('span');
                let textoLucha = document.createTextNode(tipo);
                spanLucha.setAttribute('class','fighting');
                spanLucha.appendChild(textoLucha);
                typesFormatted = spanLucha;
                break;

            case "flying":
                let spanVolad = document.createElement('span');
                let textoVolad = document.createTextNode(tipo);
                spanVolad.setAttribute('class','flying');
                spanVolad.appendChild(textoVolad);
                typesFormatted = spanVolad;
                break;
            
            case "grass":
                let spanPlanta = document.createElement('span');
                let textoPlanta = document.createTextNode(tipo);
                spanPlanta.setAttribute('class','grass');
                spanPlanta.appendChild(textoPlanta);
                typesFormatted = spanPlanta;
                break;
            
            case "poison":
                let spanVeneno = document.createElement('span');
                let textoVeneno = document.createTextNode(tipo);
                spanVeneno.setAttribute('class','poison');
                spanVeneno.appendChild(textoVeneno);
                typesFormatted = spanVeneno;
                break;

            case "electric":
                let spanElectrico = document.createElement('span');
                let textoElectrico = document.createTextNode(tipo);
                spanElectrico.setAttribute('class','electric');
                spanElectrico.appendChild(textoElectrico);
                typesFormatted = spanElectrico;
                break;
            
            case "normal":
                let spanNormal = document.createElement('span');
                let textoNormal = document.createTextNode(tipo);
                spanNormal.setAttribute('class','normal');
                spanNormal.appendChild(textoNormal);
                typesFormatted = spanNormal;
                break;
            
        }
        
        
    }
    
    document.getElementById('tipos').appendChild(typesFormatted);
     //typesFormatted;

}

function cerrarPokedex(e) {
    
    document.getElementById('screen').setAttribute("style", "visibility:hidden;");
}


function handleLeft() {
    console.log('entra en left');
}

async function promesa (endpoint) {

    let result = await fetch(endpoint);
    let data = await result.json();
    console.log('data', data);
}


function handleRight() {
    console.log('entra en right');
}
