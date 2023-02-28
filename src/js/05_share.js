'use strict';
let urlCard = '';

function renderSectionShare() {
  let html = `
    <h2 class="js__h2">La tarjeta ha sido creada:</h2>
    <a class="js__link_card" href="${urlCard}">${urlCard}</a>
    <button class="js__twitter_button">
      <i class="fab fa-twitter"></i> Compartir en Twitter<a href=""></a>
    </button>
    <hr class="js__hr" />`;
  cardResult.innerHTML = html;
}

function handleClickCreate(event) {
  event.preventDefault();
  console.log(data);
  console.log('he hecho click');
  fetch('https://dev.adalab.es/api/card/', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success === false) {
        urltext.innerHTML = 'Debes rellenar todos los campos';
      } else {
        console.log(data);
        btnCreate.classList.add('hidden');
        urlCard = data.cardURL;
        renderSectionShare();
      }
      localStorage.setItem('saveCard', JSON.stringify(data));
    });
}

function renderLclStorage() {
  const SvCard = JSON.parse(localStorage.getItem(saveCard));
  renderSectionShare(SvCard);
  updatePreview(SvCard);
}
renderLclStorage();

btnCreate.addEventListener('click', handleClickCreate);
