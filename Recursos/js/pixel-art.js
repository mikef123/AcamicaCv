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

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');
var paleta = document.getElementById('paleta');
var grilla = document.getElementById('grilla-pixeles');
var seleccion = document.getElementById('indicador-de-color');
var borrar = document.getElementById('borrar');
var imagenes = document.getElementsByClassName('imgs');

// Variables
var seleccionado = false;


/// eventos
colorPersonalizado.addEventListener('change', 
  (function() {
    debugger
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    seleccion.style.backgroundColor = colorActual;


  })
);

paleta.addEventListener('click', modificarColor);
 grilla.addEventListener('mousedown', () => {  seleccionado = true; });
grilla.addEventListener('mouseover', rellenarGrilla);
grilla.addEventListener('mouseup', ()=> {  seleccionado = false;});

// recorre los colores y rellena la paleta de colores.
function recorrerColores()
{
  for (let index = 0; index < nombreColores.length; index++) {
    const element = nombreColores[index];
    var div = document.createElement('div');
    div.className = "color-paleta";
    div.style.backgroundColor = element;
    paleta.appendChild(div);
  }
}

// Llena la grilla con los pixeles.
function llenarGrilla () {
  for (let index = 0; index < 1750; index++) {
    const div = document.createElement('div');
    grilla.appendChild(div);
  }
}

//Llamamiento de la función.
recorrerColores();
llenarGrilla ();

// Modifica el color seleccionado.
function modificarColor (e) {
  seleccion.style.backgroundColor = e.target.style.backgroundColor;
}

// Modifica el color seleccionado en la grilla.
function rellenarGrilla (e) {
  if(seleccionado) {
    var seleccion = document.getElementById('indicador-de-color');
    e.target.style.backgroundColor = seleccion.style.backgroundColor;
  }
}

//Realizar el borrado con animación
borrar.addEventListener('click', () => {
  $(grilla).children('div').animate({"backgroundColor":"white"}, 2000);
});

// Seleccionar imagen a cargar
imagenes.addEventListener('click', seleccionarImagen);



function seleccionarImagen (e) {
  debugger
}

