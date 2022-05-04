let carusel = $('#carusel');
let antes = $('#btn-antes');
let despues = $('#btn-despues');

// Mover el ultimo elemento
$('#carusel section:last').insertBefore('#carusel section:first')

// Mostrar la primera con
carusel.css('margin-left', '-' + 100 + '%');

// cuando se haga click en el boton anterior
antes.on('click', function () {
    carusel.animate({
        marginLeft: 0
    }, 1000, function () {
        $('#carusel section:last').insertBefore('#carusel section:first')
        carusel.css('margin-left', '-' + 100 + '%');
    })
})

// cuando se haga click en el boton siguiente
despues.on('click', function () {
    carusel.animate({
        marginLeft: '-' + 200 + '%'
    }, 1000, function () {
        $('#carusel section:first').insertAfter('#carusel section:last')
        carusel.css('margin-left', '-' + 100 + '%');
    })
})