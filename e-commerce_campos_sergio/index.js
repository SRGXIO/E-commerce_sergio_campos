const h1 = document.querySelector("h1");
const section = document.querySelector("section");

h1.innerText = "Productos";

let array = [];

for (let i = 1; i < 10; i++) {
    array.push(`<div class="card-group">
                    <div class="card">
                        <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-body-secondary">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>`);
}

section.innerHTML = array.join("");