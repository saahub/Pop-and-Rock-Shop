/*
*Esta secuencia de comandos está ejecutando una función de inicio
*que crea una instancia del enrutador y proporciona dos rutas,
*configurando el inicio como el predeterminado.
*/

'use strict';

(function () {
    function init() {
        var router = new Router([
            new Route('home', 'home.html', true),
            new Route('about', 'about.html'),
            new Route('search', 'search.html'),
            new Route('paypal', 'paypal.html')
        ]);
    }
    init();
}());

$(document).ready(function(){
  $(".dropdown").hover(
    function() {
      $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("400");
      $(this).toggleClass('open');
      },
    function() {
      $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("400");
      $(this).toggleClass('open');
    }
  );
});