'use strict';

function Router(routes) {
    try {
        if (!routes) {
            throw 'error: routes param is mandatory';
        }
        this.constructor(routes);
        this.init();
    } catch (e) {
        console.error(e);   
    }
}

Router.prototype = {
    routes: undefined, // Es una matriz que contiene las Rutas de nuestra aplicación.
    rootElem: undefined, // Es el elemento raíz de nuestra aplicación. El lugar donde se renderizan otros HTML.
    // contiene cuatro funciones
    constructor: function (routes) { // Esta es solo una función constructora. Se ejecuta solo una vez en la creación de Router.
        this.routes = routes;
        this.rootElem = document.getElementById('app');
    },
    /* init crea un listener para hashchange establece un callback permite ejecutar la ruta predeterminada */
    init: function () {
        var r = this.routes;
        (function(scope, r) {
            window.addEventListener('hashchange', function (e) {
                scope.hasChanged(scope, r);
            });
        })(this, r);
        this.hasChanged(this, r);
    },
    /* Si la ubicación de la ventana cambia, entonces cargará la ruta activa correcta y llamará a otra función para cargar su HTML; si la ubicación de la ventana está vacía, cargará la ruta predeterminada.*/
    hasChanged: function(scope, r){
        if (window.location.hash.length > 0) {
            for (var i = 0, length = r.length; i < length; i++) {
                var route = r[i];
                if(route.isActiveRoute(window.location.hash.substr(1))) {
                    scope.goToRoute(route.htmlName);
                }
            }
        } else {
            for (var i = 0, length = r.length; i < length; i++) {
                var route = r[i];
                if(route.default) {
                    scope.goToRoute(route.htmlName);
                }
            }
        }
    },
    /* realiza la solicitus para obtener y cargar el html correcto*/
    goToRoute: function (htmlName) {
        (function(scope) { 
            var url = 'views/' + htmlName,
                xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    scope.rootElem.innerHTML = this.responseText;
                }
            };
            xhttp.open('GET', url, true);
            xhttp.send();
        })(this);
    }
};