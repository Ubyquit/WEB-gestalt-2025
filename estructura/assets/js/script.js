fetch("./assets/partials/nav.html")
    .then((respuesta) => respuesta.text())
    .then((html) => {
        document.getElementById("nav").innerHTML = html;
    })
    .catch((error) => console.error(error));
