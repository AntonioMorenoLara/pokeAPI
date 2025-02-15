let showDataPokemon = [];
let pokemonTipos = [];
let incrementindex = 0;
let keyDataPokemon = 0;

window.onload = async function() {

    document.getElementById('left').addEventListener('click', handleLeft);
    document.getElementById('right').addEventListener('click', handleRight);

    // Data Pokemon 
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
    let urlWooper = new URL('https://pokeapi.co/api/v2/pokemon/wooper');
    let urlQuagsire = new URL('https://pokeapi.co/api/v2/pokemon/quagsire');
    let urlRiolu = new URL('https://pokeapi.co/api/v2/pokemon/riolu');
    let urlLucario = new URL('https://pokeapi.co/api/v2/pokemon/lucario');

    // Description Pokemon
    let urlDescChimchar = new URL('https://pokeapi.co/api/v2/pokemon-species/390');
    let urlDescMonferno = new URL('https://pokeapi.co/api/v2/pokemon-species/391');
    let urlDescInfernape = new URL('https://pokeapi.co/api/v2/pokemon-species/392');
    let urlDescStarly = new URL('https://pokeapi.co/api/v2/pokemon-species/396');
    let urlDescStaravia = new URL('https://pokeapi.co/api/v2/pokemon-species/397');
    let urlDescStaraptor = new URL('https://pokeapi.co/api/v2/pokemon-species/398');
    let urlDescShinx = new URL('https://pokeapi.co/api/v2/pokemon-species/403');
    let urlDescLuxio = new URL('https://pokeapi.co/api/v2/pokemon-species/404');
    let urlDescLuxray = new URL('https://pokeapi.co/api/v2/pokemon-species/405');
    let urlDescBudew = new URL('https://pokeapi.co/api/v2/pokemon-species/406');
    let urlDescRoselia = new URL('https://pokeapi.co/api/v2/pokemon-species/315');
    let urlDescRoserade = new URL('https://pokeapi.co/api/v2/pokemon-species/407');
    let urlDescWooper = new URL('https://pokeapi.co/api/v2/pokemon-species/194');
    let urlDescQuagsire = new URL('https://pokeapi.co/api/v2/pokemon-species/195');
    let urlDescRiolu = new URL('https://pokeapi.co/api/v2/pokemon-species/447');
    let urlDescLucario = new URL('https://pokeapi.co/api/v2/pokemon-species/448');

    let descripcionChimchar = await getData(urlDescChimchar);
    let descripcionMonferno = await getData(urlDescMonferno);
    let descripcionInfernape = await getData(urlDescInfernape);
    let descripcionStarly = await getData(urlDescStarly);
    let descripcionStaravia = await getData(urlDescStaravia);
    let descripcionStaraptor = await getData(urlDescStaraptor);
    let descripcionShinx = await getData(urlDescShinx);
    let descripcionLuxio = await getData(urlDescLuxio);
    let descripcionLuxray = await getData(urlDescLuxray);
    let descripcionBudew = await getData(urlDescBudew);
    let descripcionRoselia = await getData(urlDescRoselia);
    let descripcionRoserade = await getData(urlDescRoserade);
    let descripcionWooper = await getData(urlDescWooper);
    let descripcionQuagsire = await getData(urlDescQuagsire);
    let descripcionRiolu = await getData(urlDescRiolu);
    let descripcionLucario = await getData(urlDescLucario);


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

    let descData = [
        descripcionChimchar, descripcionMonferno, descripcionInfernape, descripcionStarly,
        descripcionStaravia, descripcionStaraptor, descripcionShinx, descripcionLuxio, descripcionLuxray, 
        descripcionBudew, descripcionRoselia, descripcionRoserade, descripcionWooper, descripcionQuagsire,
        descripcionRiolu, descripcionLucario
    ];

    console.log('descData', descData);

    let pokemonData = [dataChimchar, dataMonferno, dataInfernape, dataStarly, dataStaravia, 
        dataStarapator, dataShinx, dataLuxio, dataLuxray, dataBudew, dataRoselia, dataRoserade, 
        dataWooper, dataQuagsire, dataRiolu, dataLucario];

    for (let i = 0; i < pokemonData.length; i++) {


        let data = {};

        data.nombre = pokemonData[i].forms[0].name;
        data.imgFront = pokemonData[i].sprites.front_default;
        data.imgBack = pokemonData[i].sprites.back_default;
        data.altura = pokemonData[i].height;
        data.peso = pokemonData[i].weight;
        data.tipos = pokemonData[i].types;
        data.descripcion = descData[i].flavor_text_entries[39].flavor_text;

        //Texto no esta en castellano en la posicion 39, 
        if (descData[i].name == 'luxio') {
            data.descripcion = descData[i].flavor_text_entries[40].flavor_text;
        }

        if (descData[i].name == 'roselia') {
            data.descripcion = descData[i].flavor_text_entries[20].flavor_text;
        }
        
        showDataPokemon.push(data);
    }

    console.log('descripcion ',showDataPokemon[0].descripcion);

    document.getElementById('back').setAttribute('src',showDataPokemon[0].imgBack);
    document.getElementById('front').setAttribute('src',showDataPokemon[0].imgFront);
    document.getElementById('peso').innerHTML = parseFloat(showDataPokemon[0].peso) / 10 ;
    document.getElementById('altura').innerHTML = parseFloat(showDataPokemon[0].altura) / 10;
    document.getElementById('title_Pokemon').innerHTML = showDataPokemon[0].nombre.toUpperCase();
    document.getElementById('descripcion').innerHTML = showDataPokemon[0].descripcion;
    formatoTipos(showDataPokemon[0].tipos, showDataPokemon[0].nombre);


    document.getElementById('right').setAttribute('data-index','0');
    document.getElementById('right').setAttribute('data-pokemon',showDataPokemon[0].nombre);
    document.getElementById('left').setAttribute('class', 'visibilityHidden');
    document.getElementById('left').setAttribute('data-index', '0');

    document.getElementById('cerrar').addEventListener('click', cerrarPokedex);
}

function formatoTipos(tipos, pokemonName) {

    if (pokemonTipos) {

        for (let typeRemove of pokemonTipos) {
            
            typeRemove.remove();
        }
    }

    let typesFormatted = [];
    
    for (let i = 0; i < tipos.length; i++) {

        let type = tipos[i].type.name;

        switch (type) {

            case "fire":
                let brFuego = document.createElement('br');
                let spanFuego = document.createElement('span');
                let textoFuego = document.createTextNode(type);
                spanFuego.setAttribute('class','fire lineHeight');
                //spanFuego.setAttribute('id',pokemonName);
                spanFuego.appendChild(textoFuego);
                spanFuego.appendChild(brFuego);
                typesFormatted.push(spanFuego);
                break;

            case "water":
                let brAgua = document.createElement('br');
                let spanAgua = document.createElement('span');
                let textoAgua = document.createTextNode(type);
                spanAgua.setAttribute('class','water lineHeight');
                spanAgua.appendChild(textoAgua);
                spanAgua.appendChild(brAgua);
                typesFormatted.push(spanAgua);
                break;

            case "ground":
                let spanTierra = document.createElement('span');
                let textoTierra = document.createTextNode(type);
                spanTierra.setAttribute('class','ground');
                spanTierra.appendChild(textoTierra);
                typesFormatted.push(spanTierra);
                break;

            case "fighting":
                let brLucha = document.createElement('br');
                let spanLucha = document.createElement('span');
                let textoLucha = document.createTextNode(type);
                if (i === 0) {
                    spanLucha.setAttribute('class','fighting lineHeight');
                }
                else {
                    spanLucha.setAttribute('class','fighting');
                }
                
                spanLucha.appendChild(textoLucha);
                spanLucha.appendChild(brLucha);
                //typesFormatted = spanLucha;
                typesFormatted.push(spanLucha);
                break;

            case "flying":
                let spanVolad = document.createElement('span');
                let textoVolad = document.createTextNode(type);
                spanVolad.setAttribute('class','flying');
                spanVolad.appendChild(textoVolad);
                typesFormatted.push(spanVolad);
                break;
            
            case "grass":
                let brPlanta = document.createElement('br');
                let spanPlanta = document.createElement('span');
                let textoPlanta = document.createTextNode(type);
                spanPlanta.setAttribute('class','grass lineHeight');
                spanPlanta.appendChild(textoPlanta);
                spanPlanta.appendChild(brPlanta);
                typesFormatted.push(spanPlanta);
                break;
            
            case "poison":
                let spanVeneno = document.createElement('span');
                let textoVeneno = document.createTextNode(type);
                spanVeneno.setAttribute('class','poison');
                spanVeneno.appendChild(textoVeneno);
                typesFormatted.push(spanVeneno);
                break;

            case "electric":
                let spanElectrico = document.createElement('span');
                let textoElectrico = document.createTextNode(type);
                spanElectrico.setAttribute('class','electric lineHeight');
                spanElectrico.appendChild(textoElectrico);
                typesFormatted.push(spanElectrico);
                break;
            
            case "normal":
                let brNormal = document.createElement('br');
                let spanNormal = document.createElement('span');
                let textoNormal = document.createTextNode(type);
                spanNormal.setAttribute('class','normal lineHeight');
                spanNormal.appendChild(textoNormal);
                spanNormal.appendChild(brNormal);
                typesFormatted.push(spanNormal);
                break;
            case "steel":
                let brAcero = document.createElement('br');
                let spanAcero = document.createElement('span');
                let textoAcero = document.createTextNode(type);
                spanAcero.setAttribute('class','normal lineHeight');
                spanAcero.appendChild(textoAcero);
                spanAcero.appendChild(brAcero);
                typesFormatted.push(spanAcero);
                break;
        }
        document.getElementById('tipos').appendChild(typesFormatted[i]);

        /*if (incrementindex === 15) {
            document.getElementById('right').setAttribute('class', 'visibilityHidden');
        }*/
    }
    
    
    pokemonTipos = typesFormatted;
    
     //typesFormatted;

}

function cerrarPokedex() {
    
    document.getElementById('screen').setAttribute("class", "visibilityHidden");

    
        let abrirPokedex = document.createElement('button');
        abrirPokedex.setAttribute('id','abrirPokedex');
        abrirPokedex.setAttribute('class','abrirPokedex');
        abrirPokedex.addEventListener('click', handleAbrirPokedex);
        console.log(abrirPokedex);
        abrirPokedex.innerHTML = 'Abrir Pokedex';
        document.getElementById('abrirBoton').appendChild(abrirPokedex);
        document.getElementById('left').setAttribute('class','visibilityHidden');
    

    //console.log('class ', document.getElementById('abrirPokedex').getAttribute('class'));
    /*if (document.getElementById('abrirPokedex') && document.getElementById('abrirPokedex').getAttribute('class') === 'visibilityHidden') {
        console.log('entra aqui');
        document.getElementById('abrirPokedex').setAttribute('class', 'abrirBoton');
    }*/

    console.log(document.getElementById('displayClose'));
    console.log(document.getElementById('abrirPokedex'));
    
}

function handleAbrirPokedex (e) {

    console.log('keyDataPokemon ',keyDataPokemon);

    if (keyDataPokemon != 0) {
        document.getElementById('left').setAttribute('class','arrows_size flechaI');
    }

    // Si el boton de cerrar es visible, entonces se oculta el de abrir
    if (document.getElementById('screen').getAttribute && 
        document.getElementById('screen').getAttribute('class').includes('isVisble')) {

        document.getElementById('abrirBoton').setAttribute('class', 'visibilityHidden');
    }
    
    document.getElementById('screen').setAttribute("class", "isVisible color_blue height_screen grid_screen");
    //document.getElementById('abrirBoton').setAttribute("class", "visibilityHidden");
    document.getElementById('abrirPokedex').remove();

    console.log();
}


function handleLeft(e) {

    let index = parseInt(e.target.dataset.index);
    console.log('index',index);
    let lengthIndex = showDataPokemon.length-1;
    let decrementindex = index-1;
    keyDataPokemon = decrementindex;
    console.log('data decrement',showDataPokemon[decrementindex]);
    
    document.getElementById('back').setAttribute('src',showDataPokemon[decrementindex].imgBack);
    document.getElementById('front').setAttribute('src',showDataPokemon[decrementindex].imgFront);
    document.getElementById('peso').innerHTML = parseFloat(showDataPokemon[decrementindex].peso) / 10 ;
    document.getElementById('altura').innerHTML = parseFloat(showDataPokemon[decrementindex].altura) / 10;
    document.getElementById('title_Pokemon').innerHTML = showDataPokemon[decrementindex].nombre.toUpperCase();
    document.getElementById('descripcion').innerHTML = showDataPokemon[decrementindex].descripcion;
        
    let title_Pokemon = document.getElementById('title_Pokemon').innerHTML;
    formatoTipos(showDataPokemon[decrementindex].tipos, showDataPokemon[decrementindex].nombre);
        //showDataPokemon = dataPokemon[]

    document.getElementById('right').setAttribute('data-index', decrementindex);
    document.getElementById('left').setAttribute('data-index', decrementindex);
    document.getElementById('right').setAttribute('data-pokemon', showDataPokemon[decrementindex].nombre);

    if (decrementindex === 0) {
        document.getElementById('left').setAttribute('class', 'visibilityHidden');
    }
}

async function getData(endpoint) {

    let result = await fetch(endpoint);
    let data = await result.json();
    return data;
}


function handleRight(e) {

    document.getElementById('left').setAttribute('class','isVisible arrows_size flechaI');
    
    let index = parseInt(e.target.dataset.index);

    let lengthIndex = showDataPokemon.length-1;
    incrementindex = index+1;
    keyDataPokemon = incrementindex;
    
    document.getElementById('back').setAttribute('src',showDataPokemon[incrementindex].imgBack);
    document.getElementById('front').setAttribute('src',showDataPokemon[incrementindex].imgFront);
    document.getElementById('peso').innerHTML = parseFloat(showDataPokemon[incrementindex].peso) / 10 ;
    document.getElementById('altura').innerHTML = parseFloat(showDataPokemon[incrementindex].altura) / 10;
    document.getElementById('title_Pokemon').innerHTML = showDataPokemon[incrementindex].nombre.toUpperCase();
    document.getElementById('descripcion').innerHTML = showDataPokemon[incrementindex].descripcion;
        
    let title_Pokemon = document.getElementById('title_Pokemon').innerHTML;
    formatoTipos(showDataPokemon[incrementindex].tipos, showDataPokemon[incrementindex].nombre);
        //showDataPokemon = dataPokemon[]

    if (incrementindex === 15) {
        document.getElementById('right').setAttribute('class', 'visibilityHidden');
    }
    
    document.getElementById('right').setAttribute('data-index', incrementindex);
    document.getElementById('left').setAttribute('data-index', incrementindex);
    document.getElementById('right').setAttribute('data-pokemon', showDataPokemon[incrementindex].nombre);
}

function getDescription(urlEndpoint) {

}
