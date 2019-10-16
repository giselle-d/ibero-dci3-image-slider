var control = 0;
var margen = 0;

function moverIzquierda(){
    if (control > -2){
        margen -= 640;
        document.getElementById("slide-wrapper").style.marginLeft=margen+ "px";
        control--;
    }else{
        control = 0;
    }
}

function moverDerecha(){
    if (control < 0){
        margen += 640;
        document.getElementById("slide-wrapper").style.marginLeft=margen+ "px";
        control++;
    }
}

function img1(){
    document.getElementById("slide-wrapper").style.marginLeft="0px";
    document.getElementById("dot1").classList.add("active");
    document.getElementById("dot2").classList.remove("active");
    document.getElementById("dot3").classList.remove("active");
    document.getElementById("derecha").classList.remove("slider-control");
}

function img2(){
    document.getElementById("slide-wrapper").style.marginLeft="-640px";
    document.getElementById("dot1").classList.remove("active");
    document.getElementById("dot2").classList.add("active");
    document.getElementById("dot3").classList.remove("active");
}

function img3(){
    document.getElementById("slide-wrapper").style.marginLeft="-1280px";
    document.getElementById("dot1").classList.remove("active");
    document.getElementById("dot2").classList.remove("active");
    document.getElementById("dot3").classList.add("active");
    document.getElementById("izquierda").classList.remove("slider-control");
}

function flecha(){
    var slide1 = document.getElementById("slide-wrapper").style.display="none";
    var imagen1 = document.getElementById("imagen1")
    if(imagen1 = 0){
        var slide1 = document.getElementById("slide-wrapper").style.display="none";
    }
}