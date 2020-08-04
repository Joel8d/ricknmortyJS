/* let XMlHTTPRequest = require('../node_modules/xmlhttprequest').XMLHttpRequest; */

import { fetchData } from "./fetchData.js"
import { cardConstructor } from "./cardConstructor.js"
import { fetchDataPromise } from "./fetchDataPromise.js"


const API = "https://rickandmortyapi.com/api/character/",
contenedor_callback = document.getElementById("contenedor_callback"), 
contenedor_promise = document.getElementById("contenedor_promise"), 
contenedor_asyncawait = document.getElementById("contenedor_asyncawait");

  //Pasar la pagina 2 del API
  //`${API}?page=2`

    //Callbacks
    fetchData(API, (error1, data1) => {            
        if (error1) return console.log(error1)
        data1.results.map(personajes => {
            const card = cardConstructor(personajes)
            contenedor_callback.appendChild(card)
        })
    })

    //Promises
    fetchDataPromise(`${API}?page=2`)
        .then(data => {
            data.results.map(personajes => {
            const card = cardConstructor(personajes)
            contenedor_promise.appendChild(card)

        })
        
    })

//AsyncAwait
 async function asyncFunction(){
        try{
            const data = await fetchDataPromise(`${API}?page=3`)
            data.results.map(personajes => {
                const card = cardConstructor(personajes)
                contenedor_asyncawait.appendChild(card)
            })
        }catch(error){
            console.error(error);
    
        }
    }

    asyncFunction()




