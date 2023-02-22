'use strict';


function handleClickCreate(event) {
    event.preventDefault();
    console.log(data)
    console.log('he hecho click')
    fetch('https://dev.adalab.es/api/card/',
        {
            method: 'POST',
            headers: {'content-type':'application/json',},
            body: JSON.stringify(data),
        })
        .then((response) => response.json()) 
        .then(data => {
            if ( data.success === false) {
                console.log(data)
                urltext.innerHTML = 'Debes rellenar todos los campos'
            } else {
                console.log(data)
                btnCreate.classList.add('hidden');
                urltext.innerHTML = data.cardURL;
                urlLink.href = data.cardURL;
                
           }
        });    
}

btnCreate.addEventListener('click', handleClickCreate);