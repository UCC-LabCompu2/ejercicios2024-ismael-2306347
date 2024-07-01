/**
 * conversion de unidades de metros, yardas, pies y pulgadas
 * @method cambiarUnidades
 * @param {strimg} id- el id de los metros, yardas, pies y pulgadas
 * @param {number} valor- el valor de los inputs de los metros, yardas, pies y pulgadas
 * @return
 */

function cambiarUnidades(id, valor){
    var metro, pulgada, pie, yarda;
    if(valor.includes(",")){
        valor = valor.remplace(",", ".")
    }
    if(isNaN(valor)){
        alert("se ingreso un valor invalido"+id);
       metro = "";
        pulgada= "";
        pie= "";
        yarda = "";
    }else if(id=="metro"){
        metro = valor;
        pulgada = math.round( 39.3701*valor);
        pie= math.round( 3.28084*valor);
        yarda =math.round(1.093561*valor);
    }else if(id=="pulgada"){
        pulgada = valor;
        metro = 0.0254*valor;
       pie = 0.0833333*valor;
        yarda = 0.0277777666667*valor;
    }else if(id=="pie"){
        pie = valor;
        metro = 0.30479987808036579366*valor;
        pulgada = 11.999995200014401675*valor;
        yarda = 0.33333320000040006503*valor;
    }else if(id=="yarda"){
        yarda = valor;
        metro = 0.9144*valor;
        pulgada = 36*valor;
       pie = 3*valor;
    }
    document.lasunidades.unid_metro.value =math.round(metro*100)/100;
    document.lasunidades.unid_pulgada.value = math.round(pulgada*100)/100;
    document.lasunidades.unid_pie.value = math.round(pie*100)/100;
    document.lasunidades.unid_yarda.value = math.round(yarda*100)/100;

}
function convertirgr(id){
 var grad, rad;
 if(id=="grados"){
     grad = document.getElementById("grados").value;
     rad = (grad*Math.PI)/180;
 }else if(id=="radianes"){
     rad = document.getElementById("radianes").value;
     grad = (rad*180)/Math.PI;
 }
 document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;
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
function mostrar_ocultar(valorMO){
    if(valorMO=="val_mostrar"){
        document.getElementById("divMO").style.display = 'block';
    }else if(valorMO=="val_ocular"){
        document.getElementById("divMO").style.display = 'none';
    }
}
function calcularsuma(){
    var num1,num2;
    num1=number(document.getElementById("sum_num1")[0].value);
    num2=number(document.getElementById("sum_num2")[0].value);
    document.getElementById("sum_total")[0].innerHTML=num1+num2;
}
function calcularresta(){
    var num1,num2;
    num1=number(document.getElementById("res_num1")[0].value);
    num2=number(document.getElementById("res_num2")[0].value);
    document.getElementById("res_total")[0].innerHTML=num1-num2;
}
function calcularproducto(){
    var num1,num2;
    num1=number(document.getElementById("mul_num1")[0].value);
    num2=number(document.getElementById("mul_num2")[0].value);
    document.getElementById("mul_total")[0].innerHTML=num1*num2;
}
function calculardiv(){
    var num1,num2;
    num1=number(document.getElementById("div_num1")[0].value);
    num2=number(document.getElementById("div_num2")[0].value);
    document.getElementById("div_total")[0].innerHTML=num1/num2;
}