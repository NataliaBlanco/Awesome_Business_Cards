'use strict';

console.log('>> Ready :)');

function updatePreview() {
  if (data.name === '') {
    previewName.innerHTML = 'Nombre Apellidos';
  } else {
    previewName.innerHTML = data.name;
  }
  previewMail.href = `mailto:${data.email}`;
  if (data.job === '') {
    previewJob.innerHTML = 'Front-end developer';
  } else {
    previewJob.innerHTML = data.job;
  }
  previewPhone.href = `tel:${data.phone}`;
  previewLinkedin.href = `${data.linkedin}`;
  previewGithub.href = `${data.github}`;
}

/* function handleInputName(event) {
  data.name = inputName.value;
  if (data.name === '') {
    previewName.innerHTML = 'Nombre Apellidos';
  } else {
    previewName.innerHTML = data.name;
  }
}
 */
/* function handleInputMail(event) {
  data.email = inputMail.value;
  previewMail.href = `mailto:${data.email}`;
}
console.log('hola'); */

/* function handleInputJob(event) {
  data.job = inputJob.value;
  if (data.job === '') {
    previewJob.innerHTML = 'Front-end developer';
  } else {
    previewJob.innerHTML = data.job;
  }

} */

/* function handleInputPhone(event) {
  data.phone = inputPhone.value;
  previewPhone.href = `tel:${data.phone}`;
}
function handleInputLinkedin(event) {
  data.Linkedin = inputLinkedin.value;
  previewLinkedin.href = `${data.Linkedin}`;
} */

function handleInputForm(event) {
  data[event.target.name] = event.target.value;
  updatePreview();
}

const allInputsList = document.querySelectorAll('.js_input');

for (let i = 0; i < allInputsList.length; i++) {
  allInputsList[i].addEventListener('input', handleInputForm);
}

/* allInputsList.addEventListener('input', handleInputForm); */

/* inputName.addEventListener('input', handleInputName);
inputMail.addEventListener('input', handleInputMail);
inputJob.addEventListener('input', handleInputJob);
inputPhone.addEventListener('input', handleInputPhone);
inputLinkedin.addEventListener('input', handleInputLinkedin);
 */
