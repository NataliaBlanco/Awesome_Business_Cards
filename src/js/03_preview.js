'use strict';

console.log('>> Ready :)');

function handleInputName(event) {
  const nameWritten = inputName.value;
  if (nameWritten === '') {
    previewName.innerHTML = 'Nombre Apellidos';
  } else {
    previewName.innerHTML = nameWritten;
  }
  console.log('hola');
}

function handleInputMail(event) {
  const mailWritten = inputMail.value;
  previewMail.href = `mailto:${mailWritten}`;
}
console.log('hola');

inputName.addEventListener('input', handleInputName);
inputMail.addEventListener('input', handleInputMail);
