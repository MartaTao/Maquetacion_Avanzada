let infoCuenta={
    nombre:"",
    apellidos:"",
    correo: "",
    contraseña: "",
    movil: "",
    observaciones:"",
    suscripcion:"",
    metodoPago:{
        numTarjtea:"",
        mesExp:"",
        anioExp:"",
        numCVV:"",
    }
}
function $(selector){
    return document.querySelector(selector);
}
$('.correo').addEventListener('keyup',()=>{
    validar_correo();
})
function validar_correo(){
    var email = $(".correo").value;
    var CORREO_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if( !email.match(CORREO_REGEX)){
        $(".correo").classList.remove("correcto");
        $(".correo").classList.add("incorrecto");
        $(".errorCorreo").textContent="El correo introducido no es válido"
        $(".errorCorreo").classList.add("active");
    }else{
        $(".correo").classList.remove("correcto");
            $(".errorCorreo").textContent="El correo introducido ya existe"
            $(".errorCorreo").classList.add("active");
        infoCuenta.correo=email;
       /* let totalCorreos=parseInt(sessionStorage.getItem("numCuentas"));
        let i=0;
        let correoExiste=false;
        for(;i<totalCorreos;i++ ){
            info = JSON.parse(sessionStorage.getItem(`cuenta${i}`));
            if(email==info.correo){
                correoExiste=true;
            }
        }
        if(!correoExiste){
            $(".correo").classList.remove("incorrecto");
            $(".errorCorreo").classList.remove("active");
            $("#email").classList.add("correcto");
            infoCuenta.correo=email;
        }else{
            $(".correo").classList.remove("correcto");
            $(".errorCorreo").textContent="El correo introducido ya existe"
            $(".errorCorreo").classList.add("active");
            $(".correo").classList.add("incorrecto");
        }*/
    }
}
$('.movil').addEventListener('keyup',()=>{
    validar_movil()
})
function validar_movil(){
    var numtel = document.getElementById("movil").value;
    var MOVIL_REGEX= /^\d{9}|\d{3} \d{3} \d{3}|\d{3} \d{2} \d{2} \d{2}/;
    if(!numtel.match(MOVIL_REGEX)){
        $("#movil").classList.remove("correcto");
        $("#movil").classList.add("incorrecto");
        $(".errorMovil").classList.add("active");
    }else{
        $("#movil").classList.remove("incorrecto");
        $(".errorMovil").classList.remove("active");
        $("#movil").classList.add("correcto");
        infoCuenta.movil=numtel;
    }
}
$('.nombre').addEventListener('keyup',()=>{
    validar_nombre()
})
function validar_nombre(){
    let NOMBRE_REGEX=/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
    let nombre=$(".nombre").value;
    if(!nombre.match(NOMBRE_REGEX)){
        $(".nombre").classList.remove("correcto");
        $(".nombre").classList.add("incorrecto");
        $(".errorNombre").classList.add("active");
    }else{
        $(".nombre").classList.remove("incorrecto");
        $(".errorNombre").classList.remove("active");
        $(".nombre").classList.add("correcto");
        infoCuenta.nombre=nombre;
    }
}
$('.apellidos').addEventListener('keyup',()=>{
    validar_apellidos()
})
function validar_apellidos(){
    let APELLIDOS_REGEX=/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
    let apellidos=$(".apellidos").value;
    if(!apellidos.match(APELLIDOS_REGEX)){
        $(".apellidos").classList.remove("correcto");
        $(".apellidos").classList.add("incorrecto");
        $(".errorApellidos").classList.add("active");
    }else{
        $(".apellidos").classList.remove("incorrecto");
        $(".errorApellidos").classList.remove("active");
        $(".apellidos").classList.add("correcto");
        infoCuenta.apellidos=apellidos;
    }
}
$('.password').addEventListener('keyup',()=>{
    validar_password()
})
function validar_password(){
    let PASSWORD_REGEX= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/;
    let password=$(".password").value;
    if(!password.match(PASSWORD_REGEX)){
        $(".password").classList.remove("correcto");
        $(".password").classList.add("incorrecto");
        $(".errorCon").classList.add("active");
    }else{
        $(".password").classList.remove("incorrecto");
        $(".errorCon").classList.remove("active");
        $(".password").classList.add("correcto");
        infoCuenta.contraseña=password;
    }
}
$('#registrarse').addEventListener('click',()=>{
    if(infoCuenta.nombre !="" && infoCuenta.apellidos!="" && infoCuenta.correo!="" && infoCuenta.contraseña!="" && infoCuenta.movil!=""){
        console.log('ok');
    }
});