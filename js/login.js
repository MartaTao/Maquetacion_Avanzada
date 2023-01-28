function $(selector){
    return document.querySelector(selector);
}
$('.login').addEventListener('click',()=>{
    const correo=$(".correo").value;
    const pass=$(".password").value;
    let totalCuentas=sessionStorage.getItem("numCuentas");
    if(totalCuentas>0){
        let i=0;
        let cuentaEncontrada=false;
        for(;i<totalCuentas;i++){
            info = JSON.parse(sessionStorage.getItem(`cuenta${i}`));
            if(correo==info.correo){
                cuentaEncontrada=true;
            }
        }
        if(cuentaEncontrada){
            if(pass!=info.contraseña){
                $(".errSesion").classList.add("active");
                $(".cuentaNoExist").classList.remove("active");
            }else{
                location.href="cuenta.html";
            }  
        }else{
            $(".errSesion").classList.remove("active");
            $(".cuentaNoExist").classList.add("active");
        }
    }else{
        $(".cuentaNoExist").textContent="No hay ninguna cuenta creada actualmente";
        $(".cuentaNoExist").classList.add("active");
    }
    
});