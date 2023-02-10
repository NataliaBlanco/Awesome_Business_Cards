'use strict';

console.log('>> Ready :)');
//funciones

closeAllSections();
openDesignSection();

function closeAllSections() {
  designContent.classList.add('collapse');
  fillContent.classList.add('collapse');
  shareContent.classList.add('collapse');
  arrowDesign.classList.remove('arrow-collapsed');
  arrowFill.classList.remove('arrow-collapsed');
  arrowShare.classList.remove('arrow-collapsed');

  console.log('hola');
}
function openDesignSection() {
  designContent.classList.remove('collapse');
  
}

function handleClickDesign(event) {
  closeAllSections();
  openDesignSection();
  arrowDesign.classList.add('arrow-collapsed');
 
}

function openFillSection() {
  fillContent.classList.remove('collapse');
  
}

function handleClickFill(event) {
  closeAllSections();
  openFillSection();
  arrowFill.classList.add('arrow-collapsed');
}

function openShareSection() {
  shareContent.classList.remove('collapse');
  
}

function handleClickShare(event) {
  closeAllSections();
  openShareSection();
  arrowShare.classList.add('arrow-collapsed');
}

//evento

designLeyend.addEventListener('click', handleClickDesign);

fillLeyend.addEventListener('click', handleClickFill);

shareLeyend.addEventListener('click', handleClickShare);