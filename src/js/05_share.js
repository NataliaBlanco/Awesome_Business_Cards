'use strict';


function handleClickCreate(event) {
    event.preventDefault();
    console.log(data)
    console.log('he hecho click')
    fetch('https://dev.adalab.es/api/card/',
        {
            method: 'POST',
            headers: {'content-type':'aplication/json',},
            body: JSON.stringify(data),
        })
        .then((response) => response.json()) 
        .then(data => {
            if ( data.success === false) {
                console.log(data)
            } else {
                console.log(data)
                //direccion y twitter
           }
        });    
}

btnCreate.addEventListener('click', handleClickCreate);