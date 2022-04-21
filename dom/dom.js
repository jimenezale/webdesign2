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
//toggleClass
/*
$(document).ready(function(){
    $("#btn6").click(function(){
        $("p").toggleClass("par");
    });
});*/
//css
/*
$(document).ready(function(){
    $("#btn7").click(function(){
        alert("Background color ="+
        $("p").css("background-color"));
    });
})*/
//sobreponer
/*
$(document).ready(function(){
    $("#btn8").click(function(){
        $("p").css("background-color","yellow");
    });
})*/
//Dimenciones
//width() , heiight() and html()
/*
$(document).ready(function(){
    $("#btn9").click(function(){
        var txt=" ";
        txt += "Width de div1 es : "+$("#div1").width()+"<br>";
        txt += "Height de div1 es : "+$("#div1").height();
        $("#div1").html(txt);
    });
})
*/
//InnerWidth(),innerHeight()
/*
$(document).ready(function(){
    $("#btn9").click(function(){
        var txt=" ";
        txt += "Inner width de div1 es : "+$("#div1").innerWidth()+"<br>";
        txt += "Inner height de div1 es : "+$("#div1").innerHeight();
        $("#div1").html(txt);
    });
})*/
//outerWidth(), outerHeight()
/*
$(document).ready(function(){
    $("#btn9").click(function(){
        var txt=" ";
        txt += "Outer width de div1 es : "+$("#div1").outerWidth()+"<br>";
        txt += "Outer height de div1 es : "+$("#div1").outerHeight();
        $("#div1").html(txt);
    });
})*/
//