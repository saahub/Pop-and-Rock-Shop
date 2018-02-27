const personajes = document.getElementById('personajes');
const info = document.getElementById('info');
let buscar;
let number;

personajes.addEventListener('click', function(event) {
  let evento = event.target;
  console.log(evento);
  const nombre = evento.getAttribute('id');
  const number = nombre.substring(4);
  buscar = number;
  addChar();
});

function addChar() {
  let modal = document.getElementById('modal');
  fetch(`https://api.mercadolibre.com/items/MLC4${buscar}/`)
    .then(function(response) {
      return response.json();
    })

    .then(function(data) {
      console.log(data);
      let html = `    <div>
    <img src="${data.pictures[0].url}" alt="">
    <h1>${data.title}</h1>
  </div>`;
      info.innerHTML = html;
    });
};
