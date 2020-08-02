/*let XMlHTTPRequest = require('../node_modules/xmlhttprequest').XMLHttpRequest;*/


//Definimos la api
let API = "https://rickandmortyapi.com/api/character/"

const fetchData = (url_api, callback) => {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", url_api, true);
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4) {
        if(xhttp.status === 200) {
          callback(null, JSON.parse(xhttp.responseText));
        } else {
          callback(new Error("Error"), null);
        }
      }
    };
    xhttp.send();
  };

//hacer petición a la API


fetchData(API, (error1, data1) =>{
    //crear y obtener la primera info
    if (error1) return console.log(error1)
    //petición al primer personaje de la API
    fetchData(API + data1.results[0].id), (error2, data2) =>{
        if (error2) return console.error(error2)
        fetchData(data2.origin.url,  (error3, data3)=>{
            if (error3) return console.error(error3)
            console.log(data1.info.count)
            console.log(data2.name)
            console.log(data3.dimension)
        })
    }

})

