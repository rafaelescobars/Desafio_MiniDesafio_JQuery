//definir htmls
let ejercicio2=$('#ejercicio2');

//Cámbiame
let cajaClick=$('#cajaClick');
let cajaCambio=$('#cajaCambio');
$(cajaClick).click(function (e) { 
  e.preventDefault();
  cajaCambio.css({'height':cajaCambio.height()*4.5, 'background-color': 'grey'});
});

//Toogle menú
$(ejercicio2).ready(function () {
    $('button').click(function (e) { 
      e.preventDefault();
      $('ul').slideToggle('slow',);
    });
});

//mouseOver
let mouseOver=$('#mouseOver');
$(mouseOver).mouseover(function () { 
  $('li:even').addClass('bg-dark');
  $('li:odd').addClass('bg-info');
});
$(mouseOver).mouseleave(function () { 
  $('li:even').removeClass('bg-dark');
  $('li:odd').removeClass('bg-info');
});