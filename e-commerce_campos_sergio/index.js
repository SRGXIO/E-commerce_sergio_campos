document.addEventListener("DOMContentLoaded", function () {
    const section = document.querySelector("#product-list");

    let productos = [
        { titulo: "Cepillo de Bambú", imagen: "https://mx.todomoda.com/media/catalog/product/7/6/76583001_3_1_20211228120530.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=841&width=657&canvas=657:841", descripcion: "Un cepillo de dientes biodegradable hecho de bambú." },
        { titulo: "Bolsa Reutilizable", imagen: "https://hebmx.vtexassets.com/arquivos/ids/709660-800-800?v=638497992343770000&width=800&height=800&aspect=true", descripcion: "Bolsa ecológica de algodón orgánico." },
        { titulo: "Botella de Agua de Acero", imagen: "https://m.media-amazon.com/images/I/71hL6s7mggL.jpg", descripcion: "Botella libre de plásticos, reutilizable y resistente." },
        { titulo: "Cubiertos de Madera", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpu5q-h2dFwDAddouuihGWMlFeNk5WCmjnXg&s", descripcion: "Set de cubiertos hechos de madera sostenible." },
        { titulo: "Pajilla de Acero", imagen: "https://http2.mlstatic.com/D_NQ_NP_766683-MLM48332905960_112021-O.webp", descripcion: "Pajilla reutilizable para reducir el consumo de plásticos." }
    ];

    let productoHTML = "";

    // Solo mostrar las primeras 4 tarjetas
    for (let i = 0; i < 4; i++) {
        productoHTML += `
            <div class="col-md-3">
                <div class="card mb-4 shadow-sm">
                    <img src="${productos[i].imagen}" class="card-img-top" alt="${productos[i].titulo}">
                    <div class="card-body">
                        <h5 class="card-title text-success">${productos[i].titulo}</h5>
                        <p class="card-text">${productos[i].descripcion}</p>
                        <a href="#" class="btn btn-success">Comprar</a>
                    </div>
                </div>
            </div>`;
    }

    // Inserta el HTML generado en la sección del producto
    section.innerHTML = productoHTML;
});
