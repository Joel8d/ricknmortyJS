/* let XMlHTTPRequest = require('../node_modules/xmlhttprequest').XMLHttpRequest; */



let API = "https://rickandmortyapi.com/api/character/",
contenedor_callback = document.getElementById("contenedor_callback");
const elementos_seccion = 20;

function fetchData(url_api, callback){
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, true);
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4) {
        if(xhttp.status === 200) {
            callback(null, JSON.parse(xhttp.responseText));
        } else {
            callback(new Error("Error"), null);
        }
      }
    }
    xhttp.send();
  }



    fetchData(API, (error1, data1) =>{            
        if (error1) return console.log(error1)
        data1.results.map(personajes => {

        })
        for(var i=0; i < elementos_seccion; i++){
            const card = document.createElement("article");
        card.innerHTML = 
        `
        <div class="contenedor_tarjeta">
            <div class="contenedor_imagen">
                <a>
                    <img src="${data1.results[i].image}">
                </a>
            </div>
            <div class="contenedor_descripcion">
                <h2>${data1.results[i].name}</h2>
                <p>${data1.results[i].species}</p>
                <p>${data1.results[i].location.name}</p>
            </div>
        </div>
        `

        contenedor_callback.appendChild(card);

        }

        
    })

