'use strict'; //Este javascript proporcionará un constructor para nuestras Rutas.

function Route(name, htmlName, defaultRoute) {
    try {
        if(!name || !htmlName) {
            throw 'error: name and htmlName params are mandatories';
        }
        this.constructor(name, htmlName, defaultRoute);
    } catch (e) {
        console.error(e);
    }
}
// contiene tres parametros 
Route.prototype = {
    name: undefined, //nombre de la ruta verifica si esta activa
    htmlName: undefined, //nombre del HTML que se carga con la ruta
    default: undefined, //es cierto si la ruta corresponde
    constructor: function (name, htmlName, defaultRoute) {
        this.name = name;
        this.htmlName = htmlName;
        this.default = defaultRoute;
    },
    isActiveRoute: function (hashedPath) {
        return hashedPath.replace('#', '') === this.name; 
    }
}