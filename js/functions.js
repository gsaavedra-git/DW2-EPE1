//establece pagina inicial (inicio)
document.addEventListener("DOMContentLoaded", function(event) {
    load("pages/inicio.html",document.getElementById("pages"));
})
//carga páginas en un elemento div
function load(url, element)
{
    req = new XMLHttpRequest();
    req.open("GET", url, false);
    req.send(null);    
    element.innerHTML = req.responseText; 
}
//mecanica de paginación
function redirect(page) {    
    if(page === 'inicio'){
        load("pages/inicio.html",document.getElementById("pages"));
        $('.navbar-collapse').collapse('hide')
    }
    else if (page === 'destinos'){
        load("pages/destinos.html",document.getElementById("pages"));
        $('.navbar-collapse').collapse('hide')
    }
}