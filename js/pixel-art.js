var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

var pixeles = [];
// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    indicador.style.backgroundColor = colorActual;
  })
);

let paleta = document.getElementById("paleta");
let grillaPixeles = document.getElementById("grilla-pixeles");

nombreColores.forEach(function(color){
  let newDiv = document.createElement("div");
  newDiv.addClass = "color-paleta";
  newDiv.style = "background-color:" + color;

  paleta.appendChild(newDiv);
});

function creacionDeGrilla(){
      let i = 0;
      while(i<=1750){
      let newDivPixel = document.createElement("div");
      grillaPixeles.appendChild(newDivPixel);
      i++;
      }
}
creacionDeGrilla();

let indicador = document.getElementById("indicador-de-color");
paleta.addEventListener("click", cambiarColor);

function cambiarColor(e){
  indicador.style.backgroundColor = e.target.style.backgroundColor;
}

grillaPixeles.addEventListener("click", pintarPixel);

function pintarPixel(e){
  e.target.style.backgroundColor = indicador.style.backgroundColor;
}

var mousePresionado = false;

grillaPixeles.addEventListener("mousedown", presionado);
grillaPixeles.addEventListener("mouseup", sinPresionar);
grillaPixeles.addEventListener("mouseover", delizar);

function presionado(e){
  mouseApretado = true;
}

function sinPresionar(e){
  mouseApretado = false;
}

function delizar(e){
  if (mouseApretado){
    pintarPixel(e);
  }
}

$("#borrar").click(function(){
  let $pixelBorrado = $("#grilla-pixeles div").animate({"background-color": "white"}, 2500);
});

$("#wonder").click(function(){
  cargarSuperheroe(wonder);
})

$("#flash").click(function(){
  cargarSuperheroe(flash);
})

$("#batman").click(function(){
  cargarSuperheroe(batman);
})

$("#invisible").click(function(){
  cargarSuperheroe(invisible);
})

$("#guardar").click(function(){
  guardarPixelArt();
})