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

function showColors(event) {
  let pallete = event.target.value;
  console.log(event.target.value);
  if (pallete === '2') {
    previewPallete.classList.remove('palette1');
    previewPallete.classList.remove('palette3');
    previewPallete.classList.add('palette2');
  } else if (pallete === '3') {
    previewPallete.classList.remove('palette1');
    previewPallete.classList.remove('palette2');
    previewPallete.classList.add('palette3');
  } else {
    previewPallete.classList.remove('palette3');
    previewPallete.classList.remove('palette2');
    previewPallete.classList.add('palette1');
  }
}

function resetData() {
  console.log('funciona');
  data.name ='Nombre Apellidos';
  previewMail.href = `mailto:${data.email}`;
  previewJob.innerHTML = 'Front-end developer';
  previewPhone.href = `tel:${data.phone}`;
  previewLinkedin.href = `${data.linkedin}`;
  previewGithub.href = `${data.github}`;
   
  }

  

function handleInputForm(event) {
  data[event.target.name] = event.target.value;
  updatePreview();
}

const allInputsList = document.querySelectorAll('.js_input');

for (let i = 0; i < allInputsList.length; i++) {
  allInputsList[i].addEventListener('input', handleInputForm);
}
radioPallete.addEventListener('click', showColors);

resetButton.addEventListener('click', resetData);

/* allInputsList.addEventListener('input', handleInputForm); */

/* inputName.addEventListener('input', handleInputName);
inputMail.addEventListener('input', handleInputMail);
inputJob.addEventListener('input', handleInputJob);
inputPhone.addEventListener('input', handleInputPhone);
inputLinkedin.addEventListener('input', handleInputLinkedin);
 */
