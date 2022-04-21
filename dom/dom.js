//Manipulacion de DOM
//Insertar
//append(despues)
//
/*
$(document).ready(function(){
    $("#btn1").click(function()
    {
        $(".contenedor").append("Caja 5<br>");
    }
    );
    $("#btn2").click(function()
    {
        $("ol").append("<li>Texto siguiente</li>");
    }
    );
})*/
//Prepend(antes)
/*
$(document).ready(function(){
    $("#btn1").click(function()
    {
        $(".contenedor").prepend("Caja 0<br>");
    }
    );
    $("#btn2").click(function()
    {
        $("ol").prepend("<li>Texto anterior</li>");
    }
    );
})*/
//Before (antes)and After(despues)
/*
$(document).ready(function(){
    $("#btn1").click(function()
    {
        $(".contenedor").before("Caja 0<br>");
    }
    );
    $("#btn2").click(function()
    {
        $("ol").after("<li>Texto siguiente</li>");
    }
    );
})*/
//Remover o retirar
//Remove
/*
$(document).ready(function(){
    $("#btn3").click(function(){
        $(".contenido_borrar").remove();
    });
});*/
//Empty
/*
$(document).ready(function(){
    $("#btn3").click(function(){
        $(".contenido_borrar").empty();
    });
});*/
//filtrando elementos
/*
$(document).ready(function(){
    $("#btn3").click(function(){
        $("div").remove(".contenido_borrar2");
    });
});*/
//Manipulacion en CSS
//
/*
$(document).ready(function(){
    $("#btn4").click(function(){
        $("p").addClass("par");
    });
});*/
//removeclass
/*
$(document).ready(function(){
    $("#btn5").click(function(){
        $("p").removeClass("par");
    });
});*/