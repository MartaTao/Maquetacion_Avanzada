let contadorCuenta=sessionStorage.getItem("numCuentas")
let infoCuenta=JSON.parse(sessionStorage.getItem(`cuenta${contadorCuenta}`));
console.log(`cuenta${contadorCuenta}`)
console.log(infoCuenta);
elijePaquete();
function elijePaquete(){
    let paquetes = document.getElementsByClassName("comprar");
    let i=0;
    for(;i<paquetes.length;i++){
        paquetes[i].addEventListener('click',function(){
            infoCuenta.suscripcion=this.id;
            sessionStorage.setItem(`cuenta${contadorCuenta}`,JSON.stringify(infoCuenta));
            location.href="compra.html";
        })
    }
    
}