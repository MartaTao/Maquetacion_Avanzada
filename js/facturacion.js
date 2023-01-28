
let contadorCuenta=sessionStorage.getItem("numCuentas")
let infoCuenta=JSON.parse(sessionStorage.getItem(`cuenta${contadorCuenta-1}`));
let carrito = JSON.parse(sessionStorage.getItem('carrito')) || [];
function $(selector){
    return document.querySelector(selector);
}
procesarPedido();
function procesarPedido(){
    let fila;
    carrito.forEach((prod)=>{
        const {nombre,precio,cantidad}=prod;
        fila=document.createElement("div");
        fila.classList.add("row")
        fila.innerHTML+=`
        <div class="col-4">${nombre}</div>
        <div class="col-4">${precio}</div>
        <div class="col-4">${cantidad}</div>
        `
        $(".factura").appendChild(fila);
    })
    fila=document.createElement("p");
    fila.innerHTML+=`****************************`
    $(".factura").appendChild(fila);
    fila=document.createElement("div");
    fila.classList.add("row")
    fila.innerHTML+=`
    <div class="col-4">Total a pagar:</div>
    <div class="col-4"></div>
    <div class="col-4">${carrito.reduce((acc,prod)=>acc+prod.cantidad*prod.precio,0)}</div>
    `
    $(".factura").appendChild(fila);
    $(".tarjeta").value=infoCuenta.metodoPago.numTarjtea;
    $(".mes").value=infoCuenta.metodoPago.mesExp;
    $(".anio").value=infoCuenta.metodoPago.anioExp;
    $(".cvv").value=infoCuenta.metodoPago.numCVV;
}
$(".finalizar").addEventListener('click',()=>{
    Email.send({
        SecureToken:"85779b15-3446-4df6-9b61-f5811d19f78a",
        To:`${info.correo}`,
        From:"martataofernandez.19@campuscamara.es",
        Subject:"Estado de la compra",
        Body:`Sr/a ${info.nombre},
        Le infromamos que su compra ha sido realizada exitosamente.
        Un cordial saludo,
        Marta`
    })
});