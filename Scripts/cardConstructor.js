
export const cardConstructor = (personajes) => {
    const card = document.createElement("article")
    card.classList.add("card");
    card.innerHTML = 
    `
    <div class="contenedor_tarjeta">
        <div class="contenedor_imagen">
            <a>
                <img src="${personajes.image}">
            </a>
        </div>
        <div class="contenedor_descripcion">
            <h2>${personajes.name}</h2>
            <p>${personajes.species}</p>
            <p>${personajes.location.name}</p>
        </div>
    </div>
    `
    return card
}