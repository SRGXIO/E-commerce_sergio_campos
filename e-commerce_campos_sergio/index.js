const section = document.querySelector("#product-list");

let productos = [
    { titulo: "Cepillo de Bambú", imagen: "https://mx.todomoda.com/media/catalog/product/7/6/76583001_3_1_20211228120530.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=841&width=657&canvas=657:841", descripcion: "Un cepillo de dientes biodegradable hecho de bambú." },
    { titulo: "Bolsa Reutilizable", imagen: "https://hebmx.vtexassets.com/arquivos/ids/709660-800-800?v=638497992343770000&width=800&height=800&aspect=true", descripcion: "Bolsa ecológica de algodón orgánico." },
    { titulo: "Botella de Agua de Acero", imagen: "https://example.com/product3.jpg", descripcion: "Botella libre de plásticos, reutilizable y resistente." },
    { titulo: "Cubiertos de Madera", imagen: "https://example.com/product4.jpg", descripcion: "Set de cubiertos hechos de madera sostenible." },
    { titulo: "Pajilla de Acero", imagen: "https://example.com/product5.jpg", descripcion: "Pajilla reutilizable para reducir el consumo de plásticos." }
];

let productoHTML = productos.map(producto => `
    <div class="col-md-4">
        <div class="card mb-4 shadow-sm">
            <img src="${producto.imagen}" class="card-img-top" alt="${producto.titulo}">
            <div class="card-body">
                <h5 class="card-title text-success">${producto.titulo}</h5>
                <p class="card-text">${producto.descripcion}</p>
                <a href="#" class="btn btn-success">Comprar</a>
            </div>
        </div>
    </div>`).join("");

section.innerHTML = productoHTML;
