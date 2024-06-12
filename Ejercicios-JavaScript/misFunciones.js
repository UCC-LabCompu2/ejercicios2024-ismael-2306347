/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */

function dibujarCirculoCuadrado(){
    const canvas=document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    const anchoMax = canvas.weight;
    const alturaMax =canvas.height;
    const lado= 200;
    const margen = 10;

    ctx.fillStyle= "#338899";
    ctx.fillRect(margen,alturaMax-lado-margen,lado,lado);

    ctx.arc(anchoMax/2, alturaMax/2, lado/2, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();
}
function cargarEventListener(){
    document.getElementById("myCanvas").addEventListener("mousemove", dibujar);
}
var bardera;
function dibujar(event){
    const canvas = document.getElementById("myCanvas");
    const ctx =canvas.getContext("2d");

    let posX = event.clientX;
    let posY = event.clientY;
    console.log(posX, posY);
    ctx.fillRect(posX,posY,5,5);

    canvas.onmousemove = function (){bandera=true};
    canvas.onmouseup = function (){bardera=false};
    if(bandera){
        ctx.fillRect(posX, posY,5,5);
    }
}
function borrarCanvas(){
     const canvas = document.getElementById("myCanvas");
     canvas.width= canvas.width;
}

function dibujarCuadriculado(){
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    const paso = 20;
    const anchoMax = canvas.width;
    const alturaMax= canvas.height;
    ctx.strokeStyle= "#7e7e7e"
    //lineas horizantales

    for (let i =paso;i<alturaMax;) {

        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(anchoMax, i);
        ctx.stroke();
        ctx.closePath();

        
        i += paso;
    }
    //lineas verticales
    for (let i =paso;i<anchoMax;) {

        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, alturaMax);
        ctx.stroke();
        ctx.closePath();
        i += paso;
    }
}