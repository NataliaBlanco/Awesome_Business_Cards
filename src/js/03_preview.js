'use strict';

console.log('>> Ready :)');

function handleInputName(event) {
  data.name = inputName.value;
  if (data.name === '') {
    previewName.innerHTML = 'Nombre Apellidos';
  } else {
    previewName.innerHTML = data.name;
  }
  console.log('hola');
}

function handleInputMail(event) {
  data.email = inputMail.value;
  previewMail.href = `mailto:${data.email}`;
}
console.log('hola');

function handleInputJob(event) {
  data.job = inputJob.value;
  if (data.job === '') {
    previewJob.innerHTML = 'Front-end developer';
  } else {
    previewJob.innerHTML = data.job;
  }
  console.log('hola');
}

function handleInputPhone(event) {
  data.phone = inputPhone.value;
  previewPhone.href = `tel:${data.phone}`;
}
function handleInputLinkedin(event) {
  data.Linkedin = inputLinkedin.value;
  previewLinkedin.href = `${data.Linkedin}`;
}

inputName.addEventListener('input', handleInputName);
inputMail.addEventListener('input', handleInputMail);
inputJob.addEventListener('input', handleInputJob);
inputPhone.addEventListener('input', handleInputPhone);
inputLinkedin.addEventListener('input', handleInputLinkedin);
