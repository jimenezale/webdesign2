var actual=1;
$(document).on("ready",main);
function main(){
    var intervalo=setInterval("runcarrusel()",3000)
  }
  function runcarrusel(){
      if(actual==$(".images img").size())
      {
          actual=0;
      }
      $(".carrusel").animate({
          marginLeft:(-1*actual*$(".images img").eq(0).width())
      },700);
      actual++;
  }