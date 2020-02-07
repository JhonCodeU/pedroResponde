var rem = "";
var t = "";
var i = 0;

var peticion = "Pedro por favor responde esta pregunta"

function initLogic(e) {
     //console.log(e.key);
    e.preventDefault(); //detiene la accion por omision
    e.stopPropagation(); //detiene la propagacion del evento
    rem = rem + e.key; //obteniendo el texto oculto
    t = t + peticion.charAt(i); //esta concatenando la peticion
    $(e.target).val("" + t + ""); //y aca mostrando la peticion
    i++; //avanza por la peticion
}


/**
*
*/
function encontrarPunto(initial_pos){
    var res = -1;
    for (var w = initial_pos; w < rem.length; w++) { //recorre el texto oculto busca el primer punto
        if (rem.charAt(w) == '.') { //compara el if con cada posicion
            res = w; //iguala pos1 a el primer punto
            break; // sale del for
        }
    }
    return res;
}

/**
* Esta funcion .....  
* @function pregunta;
* @param {String} nom; askdfjlaksjdfljañsldfj
*/
function preguntar() {
    var almacenar = ""; //va a almacenar el texto de punto a punto
    var pos1 = encontrarPunto(0); //se almacena el primer punto
    var pos2 = encontrarPunto(pos1+1); //se almacena el segundo punto
    bandera = 0;

    for (var q = pos1 + 1; q < pos2; q++) {
        almacenar = almacenar + rem.charAt(q); //junta lo que hay dentro de pos1 y pos2 
    }
    //console.log(pos1);
    //console.log(pos2);
    //console.log(re);
    //console.log(almacenar);

    if (!(pos1 == -1 || pos2 == -1)) {
        const nameCapitalized = almacenar.charAt(0).toUpperCase() + almacenar.slice(1)//transforma la primera letra a mayuscula
        respuesta.innerHTML = nameCapitalized; //retorna la respuesta al usuario
    } else {
        respuesta.innerHTML = "Ups! No entendi, repite la pregunta";
    }

}