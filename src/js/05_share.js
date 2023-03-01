'use strict';
let urlCard = '';

function renderSectionShare() {
  let html = `
    <h2 class="js__h2">La tarjeta ha sido creada:</h2>
    <a class="js__link_card" href="${urlCard}" target="_blank">${urlCard}</a>
   <button class="js__twitter_button">
   <i class="fab fa-twitter"></i>
   <a class="url-link-twitter" href="https://twitter.com/intent/tweet?text=This%20is%20my%20bussiness%20card:&url=${urlCard}" target="_blank"> Compartir en Twitter</a>
    </button>
    <hr class="js__hr" />`;
  cardResult.innerHTML = html;
}

function handleClickCreate(event) {
  event.preventDefault();
  console.log('he hecho click');
  fetch('https://dev.adalab.es/api/card/', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success === false) {
        console.log('error');
        console.log(data);
      } else {
        btnCreate.classList.add('hidden');
        urlCard = data.cardURL;
        renderSectionShare();
      }
      
    });
    localStorage.setItem('saveData', JSON.stringify(data));
    
}
//localStorage.setItem('saveData', JSON.stringify(data));

/*function renderLCLStorage() {
  const SvCard = JSON.parse(localStorage.getItem(saveData));
  renderSectionShare(SvCard);
    console.log(SvCard);
  }*/


btnCreate.addEventListener('click', handleClickCreate);
