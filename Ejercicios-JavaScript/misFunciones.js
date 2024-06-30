/**
 * conversion de unidades de metros, yardas, pies y pulgadas
 * @method cambiarUnidades
 * @param {strimg} id- el id de los metros, yardas, pies y pulgadas
 * @param {number} valor- el valor de los inputs de los metros, yardas, pies y pulgadas
 * @return
 */
function cambiarUnidades(id,valor){
    if(isNaN(valor)){
        alert("se ingreso un valor invalido");
       document.lasunidades.unid_metro.value = "";
        document.lasunidades.unid_pulgada.value = "";
        document.lasunidades.unid_pie.value = "";
        document.lasunidades.unid_yarda = "";
    }else if(id=="metro"){
        document.lasunidades.unid_pulgada.value = 39.3701*valor;
        document.lasunidades.unid_pie.value = 3.28084*valor;
        document.lasunidades.unid_yarda = 1.093561*valor;
    }else if(id=="pulgada"){
        document.lasunidades.unid_metro.value = 0.0254*valor;
        document.lasunidades.unid_pie.value = 0.0833333*valor;
        document.lasunidades.unid_yarda = 0.0277777666667*valor;
    }else if(id=="pie"){
        document.lasunidades.unid_metro.value = 0.30479987808036579366*valor;
        document.lasunidades.unid_pulgada.value = 11.999995200014401675*valor;
        document.lasunidades.unid_yarda = 0.33333320000040006503*valor;
    }else if(id=="yarda"){
        document.lasunidades.unid_metro.value = 0.9144*valor;
        document.lasunidades.unid_pulgada.value = 36*valor;
        document.lasunidades.unid_pie.value = 3*valor;
    }
}











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