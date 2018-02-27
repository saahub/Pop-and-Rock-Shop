const funkoPop = document.getElementById('funkoPop');
const info = document.getElementById('info');
let search;
let number;

funkoPop.addEventListener('click', function(event) {
  let evento = event.target;
  console.log(evento);
  const nombre = evento.getAttribute('id');
  const number = nombre.substring(4);
  search = number;
  addFunko();
});

function addFunko() {
  let modal = document.getElementById('modal');
  fetch(`https://api.mercadolibre.com/items/MLC4${search}/`)
    .then(function(response) {
      return response.json();
    })

    .then(function(data) {
      console.log(data);
      let html = `<div class="container">
      			<div class="row">
      				<div class="col-sm-6">
      					<img src="${data.pictures[0].url}" alt="">
      				</div>
      				<div class="col-sm-6">
      					<h1>${data.title}</h1>
                <button class="btn btn-primary producto"type="button">${data.price} CLP</button>
      				</div>
      			</div>
      		</div>`;
      info.innerHTML = html;
    });
};
