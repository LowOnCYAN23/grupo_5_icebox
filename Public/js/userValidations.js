window.addEventListener("load", function () {
    const email = document.getElementById("email");
    
    email.addEventListener("input", function (event) {
        if (email.validity.typeMismatch) {
        email.setCustomValidity("email INVÁLIDO, UN FROMATO CORRECTO ES     micorreo@dominio.com   ");
        } else {
        email.setCustomValidity("");
        }
    });
})
