window.onload = async function() {

    let urlChimchar = new URL('https://pokeapi.co/api/v2/pokemon/chimchar');
    let urlMonferno = new URL('https://pokeapi.co/api/v2/pokemon/monferno');
    let urlInfernape = new URL('https://pokeapi.co/api/v2/pokemon/infernape');
    let urlStarly = new URL('https://pokeapi.co/api/v2/pokemon/starly');
    let urlStaravia = new URL('https://pokeapi.co/api/v2/pokemon/staravia');
    let urlStaraptor = new URL('https://pokeapi.co/api/v2/pokemon/staraptor');
    let urlShinx = new URL('https://pokeapi.co/api/v2/pokemon/shinx');
    let urlLuxio = new URL('https://pokeapi.co/api/v2/pokemon/luxio');
    let urlLuxray = new URL('https://pokeapi.co/api/v2/pokemon/luxray');
    let urlBudew = new URL('https://pokeapi.co/api/v2/pokemon/budew');
    let urlRoselia = new URL('https://pokeapi.co/api/v2/pokemon/roselia');
    let urlRoserade = new URL('https://pokeapi.co/api/v2/pokemon/roserade');
    let urlWooper = new URL('https://pokeapi.co/api/v2/pokemon/roserade');
    let urlQuagsire = new URL('https://pokeapi.co/api/v2/pokemon/quagsire');
    let urlRiolu = new URL('https://pokeapi.co/api/v2/pokemon/riolu');
    let urlLucario = new URL('https://pokeapi.co/api/v2/pokemon/lucario');


    let dataChimchar = await getData(urlChimchar);
    let dataMonferno = await getData(urlMonferno);
    let dataInfernape = await getData(urlInfernape);
    let dataStarly = await getData(urlStarly);
    let dataStaravia = await getData(urlStaravia);
    let dataStarapator = await getData(urlStaraptor);
    let dataShinx = await getData(urlShinx);
    let dataLuxio = await getData(urlLuxio);
    let dataLuxray = await getData(urlLuxray);
    let dataBudew = await getData(urlBudew);
    let dataRoselia = await getData(urlRoselia);
    let dataRoserade = await getData(urlRoserade);
    let dataWooper = await getData(urlWooper);
    let dataQuagsire = await getData(urlQuagsire);
    let dataRiolu = await getData(urlRiolu);
    let dataLucario = await getData(urlLucario);

    console.log('data ', dataChimchar);

    let pokemonData = [dataChimchar, dataMonferno, dataInfernape, dataStarly, dataStaravia, 
        dataStarapator, dataShinx, dataLuxio, dataLuxray, dataBudew, dataRoselia, dataRoserade, 
        dataWooper, dataQuagsire, dataRiolu, dataLucario];

    let showDataPokemon = [];
    
    
    for (let pokemon of pokemonData) {


        let data = {};

        data.nombre = pokemon.forms[0].name;
        data.imgFront = pokemon.sprites.front_default;
        data.imgBack = pokemon.sprites.back_default;
        data.altura = pokemon.height;
        data.peso = pokemon.weight;
        data.tipo = pokemon.types[0].type.name;
        //data.descripcion = ;
        
        showDataPokemon.push(data);
    }

    document.getElementById('back').setAttribute('src',showDataPokemon[0].imgBack);
    document.getElementById('front').setAttribute('src',showDataPokemon[0].imgFront);
    document.getElementById('peso').innerHTML = parseFloat(showDataPokemon[0].peso) / 10 ;
    document.getElementById('altura').innerHTML = parseFloat(showDataPokemon[0].altura) / 10;
    document.getElementById('title_Pokemon').innerHTML = showDataPokemon[0].nombre;
    console.log(showDataPokemon[0].tipo);
    formatoTipos(showDataPokemon[0].tipo);


    console.log('showDataPokemon ',showDataPokemon);



    document.getElementById('cerrar').addEventListener('click', cerrarPokedex);
}

function formatoTipos(tipos) {

    console.log(tipos);

    let tiposSeparados = tipos.split(',');
    let typesFormatted;

    for (let tipo of tiposSeparados) {

        switch (tipo) {

            case "fire":
                console.log('entra aqui');
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

async function getData(endpoint) {

    let result = await fetch(endpoint);
    let data = await result.json();
    console.log('async ', data);
    return data;
}


function handleRight() {
    console.log('entra en right');
}
