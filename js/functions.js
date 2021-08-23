$("ul.nav.navbar-nav li a").click(function() {    
    if(this.id === 'inicio'){
        /* this.parent('li').toggle('active'); */
        $("#pages").load("pages/inicio.html");
    }
    else if (this.id === 'destinos'){
        /* this.parent('li').toggle('active'); */
        $("#pages").load("pages/destinos.html");
    }
});