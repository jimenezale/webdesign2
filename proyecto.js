var actual=1;
$(document).on("ready",main);
function main(){
    var intervalo=setInterval("runcarrusel()",3000)
  }
  function runcarrusel(){
      if(actual==$(".carrusel images").size())
      {
          actual=0;
      }
      $(".carrusel").animate({
          marginLeft:(-1*actual*$(".carrusel image").eq(0).width())
      },700);
      actual++;
  }