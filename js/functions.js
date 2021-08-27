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
    load(`pages/${page}.html`,document.getElementById("pages"))
    $('.navbar-collapse').collapse('hide')
}