const guardarStockLS = () =>{
    localStorage.setItem('stock', JSON.stringify(stock));
};

const recuperarStockLS = () => {
    stock = JSON.parse(localStorage.getItem('stock'));
    return stock;
};

const renderItems = () => {
    const contenedor = document.getElementById("itemContainer");
    stock.forEach(producto => {
        const div = document.createElement('div');
        div.innerHTML = ''//saqué el +antes del igual de la linea siguiente
        div.innerHTML += `
            <div class="card product__container" style="width: 14rem;">
                <img src=".${producto.img}" class="card-img-top product__image" alt="${producto.desc}">
                <img src="./public/images/carrito_agregar.png" id="${producto.id}" value="${producto.id}" class="cart-prod agregar" alt="Agregar al acarrito" width=40px>
                <div class="card-content">
                    <h5 class="card-title">${producto.prod}</h5>
                    <p>${producto.desc}</p>
                    <p>Peso: ${producto.peso} Kg</p>
                    <p>$${producto.precio}</p>
                </div>
            </div>
            `
        contenedor.appendChild(div);    
    })
};

const ordenarProductosMayor = () => {
    const stockMayor = stock.sort((a, b) => b.precio - a.precio)    
    guardarStockLS();
    renderItems();
    location.reload();
    console.log('ordenado x mayor precio', stock);
};
const ordenMayor  = document.getElementById('xMayorPrecio');
ordenMayor.addEventListener("click", () => {
    ordenarProductosMayor();
});

const ordenarProductosCodigo = () => {
    stock.sort((a, b) => a.id - b.id)
    guardarStockLS();
    renderItems();
    location.reload();
    console.log('ordenado x código', stock);
};
const ordenCodigo  = document.getElementById('xCodigo');
ordenCodigo.addEventListener("click", () => {
    ordenarProductosCodigo();
});

const ordenarProductosMenor = () => {
    const stockMenor = stock.sort((a, b) => a.precio - b.precio)
    guardarStockLS();
    renderItems();
    location.reload();
    console.log('ordenado x menor precio', stock);
};
const ordenMenor  = document.getElementById('xMenorPrecio');
ordenMenor.addEventListener("click", () => {
    ordenarProductosMenor();
});