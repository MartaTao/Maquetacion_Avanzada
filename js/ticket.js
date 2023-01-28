let carrito = JSON.parse(sessionStorage.getItem('carrito')) || [];
function $(selector){
    return document.querySelector(selector);
}
muestraTicket();
function muestraTicket(){
    let fila;
    let num=1;
    carrito.forEach((prod)=>{
        const {nombre,duracion,direccion}=prod;
        fila=document.createElement("div");
            fila.classList.add(`curso${num}`);
            fila.classList.add(`row`);
            $(".cursos").appendChild(fila);
            $(`.curso${num}`).innerHTML+=`<div class="col-4"><p>${nombre}</p></div><div class="col-4"><p>${duracion}</p></div><div class="col-4"><p>${direccion}</p></div><p>****************************</p>`
    })   
}
$('.volver').addEventListener('click',()=>{
    location.href="cuenta.html";
carrito.length=[];
sessionStorage.setItem("carrito", JSON.stringify(carrito));
});

