// Simulando los productos desde un archivo como producto.js
const data = [
    { id: 1, titulo: "Cepillo de Bambú", imagen: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR4UR3trO6PWcQ7NbkE-Vx9XjtxgRRR_u2e9CtNkbzgMdhCx6vAT2ej7eytQX1yvmJia3qspmmTQoW9pYiqmqP74h1s1aDDA_Dnza_RoD0mza0b675TKQeNQA&usqp=CAE", descripcion: "Un cepillo de dientes biodegradable hecho de bambú." },
    { id: 2, titulo: "Bolsa Reutilizable", imagen: "https://hebmx.vtexassets.com/arquivos/ids/709660-800-800?v=638497992343770000&width=800&height=800&aspect=true", descripcion: "Bolsa ecológica de algodón orgánico." },
    { id: 3, titulo: "Botella de Agua de Acero", imagen: "https://m.media-amazon.com/images/I/71hL6s7mggL.jpg", descripcion: "Botella libre de plásticos, reutilizable y resistente." },
    { id: 4, titulo: "Cubiertos de Madera", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpu5q-h2dFwDAddouuihGWMlFeNk5WCmjnXg&s", descripcion: "Set de cubiertos hechos de madera sostenible." },
    { id: 5, titulo: "Pajilla de Acero", imagen: "https://th.bing.com/th/id/R.51e53e7e3e8a15d68f0446a71e7bd1d0?rik=vcluOhhXtEi2rA&pid=ImgRaw&r=0", descripcion: "Pajilla reutilizable para reducir el consumo de plásticos." }
];

// Obtener el número de producto de la URL
const params = new URLSearchParams(window.location.search);
const productId = params.get('prod');  // 'prod' es el parámetro en la URL, ej: ?prod=1

// Filtrar el producto según el ID de la URL
const productoSeleccionado = data.find(producto => producto.id == productId);

// Seleccionar el contenedor donde se mostrará el producto
const section = document.querySelector("#product-list");

// Si se encuentra el producto correspondiente, lo mostramos
if (productoSeleccionado) {
    section.innerHTML = `
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
                <img src="${productoSeleccionado.imagen}" class="card-img-top" alt="${productoSeleccionado.titulo}">
                <div class="card-body">
                    <h5 class="card-title text-success">${productoSeleccionado.titulo}</h5>
                    <p class="card-text">${productoSeleccionado.descripcion}</p>
                    <a href="#" class="btn btn-success">Comprar</a>
                </div>
            </div>
        </div>`;
} else {
    section.innerHTML = "<p>Producto no encontrado.</p>";
}

// Enlace en el listado principal de la Home para cada producto con ?prod=${producto.id}
let productoHTML = data.map(producto => `
    <div class="col-md-4">
        <div class="card mb-4 shadow-sm">
            <img src="${producto.imagen}" class="card-img-top" alt="${producto.titulo}">
            <div class="card-body">
                <h5 class="card-title text-success">${producto.titulo}</h5>
                <p class="card-text">${producto.descripcion}</p>
                <a href="detalle.html?prod=${producto.id}" class="btn btn-success">Ver más</a>
            </div>
        </div>
    </div>`).join("");

// Asignar el HTML generado a la sección correspondiente en la Home
section.innerHTML = productoHTML;
