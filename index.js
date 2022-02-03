const API_URL = "https://jsonplaceholder.typicode.com";

const HTMLResponse = document.querySelector("#app");
const ul = document.createDocumentFragment('ul');


fetch(`${API_URL}/users`)
    .then((response) => response.json())
    .then((users) => {
        users.forEach(user => {
            let elem = document.createElement('li');
            elem.appendChild(
                document.createTextNode(`${user.name} Correo: ${user.email}`)
            );
            ul.appendChild(elem)
        });
        HTMLResponse.appendChild(ul);
    });