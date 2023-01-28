let contadorCuenta=sessionStorage.getItem("numCuentas")
let infoCuenta=JSON.parse(sessionStorage.getItem(`cuenta${contadorCuenta}`));
function $(selector){
    return document.querySelector(selector);
}
creaTicket();
function creaTicket(){
    $('.producto').textContent=infoCuenta.suscripcion;
    $('.cantidad').textContent=1;
    switch (infoCuenta.suscripcion){
        case 'Basico':
            $(`.precioUnidad`).textContent="00.00";
             $(`.total`).textContent="00.00";
        break;
        case 'Iniciado':
            $(`.precioUnidad`).textContent="30.00";
             $(`.total`).textContent="30.00";
        break;
        case 'Intermedio':
            $(`.precioUnidad`).textContent="50.00";
             $(`.total`).textContent="50.00";
        break;
        case 'Experto':
            $(`.precioUnidad`).textContent="90.00";
             $(`.total`).textContent="90.00";
        break;
        case 'Sibarita':
            $(`.precioUnidad`).textContent="120.00";
             $(`.total`).textContent="120.00";
        break;
    }
}
$('.tarjeta').addEventListener('keyup',()=>{
    validar_numTarjeta()
})
function validar_numTarjeta(){
    const TARJETA_REGEX=/^(\d\s?){15,16}$/;
    const numTarjtea=$('.tarjeta').value;
    if(!numTarjtea.match(TARJETA_REGEX)){
        $(".tarjeta").classList.remove("correcto");
        $(".tarjeta").classList.add("incorrecto");
        $(".errorTarjeta").classList.add("active");
    }else{
        $(".tarjeta").classList.remove("incorrecto");
        $(".errorTarjeta").classList.remove("active");
        $(".tarjeta").classList.add("correcto");
        infoCuenta.metodoPago.numTarjtea=numTarjtea;
    }
}
$('#mes').addEventListener('keyup',()=>{
    validar_mes()
})
function validar_mes(){
    const MES_REGEX=/^[+]?(0?[1-9]|1[0-2])$/;
    const mes=$('#mes').value;
    if(!mes.match(MES_REGEX)){
        $("#mes").classList.remove("correcto");
        $("#mes").classList.add("incorrecto");
        $(".errorMes").classList.add("active");
    }else{
        $("#mes").classList.remove("incorrecto");
        $(".errorMes").classList.remove("active");
        $("#mes").classList.add("correcto");
        infoCuenta.metodoPago.mesExp=mes;
    }
}
$('#anio').addEventListener('keyup',()=>{
    validar_anio()
})
function validar_anio(){
    const ANIO_REGEX=/^([0-9]{2})$/;
    const anio=$('#anio').value;
    if(!anio.match(ANIO_REGEX)){
        $("#anio").classList.remove("correcto");
        $("#anio").classList.add("incorrecto");
        $(".errorAnio").classList.add("active");
    }else{
        $("#anio").classList.remove("incorrecto");
        $(".errorAnio").classList.remove("active");
        $("#anio").classList.add("correcto");
        infoCuenta.metodoPago.anioExp=anio;
    }
}
$('.cvv').addEventListener('keyup',()=>{
    validar_cvv();
})
function validar_cvv(){
    const CVV_REGEX=/^[0-9]{3,4}$/;
    const numCVV=$('.cvv').value;
    if(!numCVV.match(CVV_REGEX)){
        $(".cvv").classList.remove("correcto");
        $(".cvv").classList.add("incorrecto");
        $(".errorCVV").classList.add("active");
    }else{
        $(".cvv").classList.remove("incorrecto");
        $(".errorCVV").classList.remove("active");
        $(".cvv").classList.add("correcto");
        infoCuenta.metodoPago.numCVV=numCVV;
    }
}
$(".aceptar").addEventListener('click',()=>{
    if(infoCuenta.metodoPago.numTarjtea!=""&&infoCuenta.metodoPago.mesExp!=""&&infoCuenta.metodoPago.anioExp!=""&&infoCuenta.metodoPago.numCVV!=""){
        sessionStorage.setItem(`cuenta${contadorCuenta}`,JSON.stringify(infoCuenta));
        contadorCuenta++;
        sessionStorage.setItem("numCuentas",`${contadorCuenta}`);
        location.href="cuenta.html";
    } 
})