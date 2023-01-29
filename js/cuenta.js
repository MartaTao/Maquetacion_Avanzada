let contadorCuenta = sessionStorage.getItem("numCuentas")
let infoCuenta = JSON.parse(sessionStorage.getItem(`cuenta${contadorCuenta - 1}`));
let carrito=[];
document.addEventListener('DOMContentLoaded', () => {
    if (sessionStorage.getItem('carrito')) {
        carrito = JSON.parse(sessionStorage.getItem('carrito')) || [];
        actualizarCarrito()
    }
})
function $(selector) {
    return document.querySelector(selector);
}
muestraPerfil();
function muestraPerfil() {
    let cont = 2;
    let contS = 2;
    let fila;
    switch (infoCuenta.suscripcion) {
        case "Basico":
            $(".bienvenida").textContent = `Bienvenido ${infoCuenta.nombre}`;
            break;
        case "Iniciado":
            $(".bienvenida").textContent = `Bienvenido iniciado/a ${infoCuenta.nombre}`;
            break;
        case "Intermedio":
            $(".bienvenida").textContent = `Bienvenido intermedio/a ${infoCuenta.nombre}`;
            break;
        case "Experto":
            $(".bienvenida").textContent = `Bienvenido experto/a ${infoCuenta.nombre}`;
            break;
        case "Sibarita":
            $(".bienvenida").textContent = `Bienvenido sibarita ${infoCuenta.nombre}`;
            break;
    }
    cursos.forEach((prod) => {
        if (infoCuenta.suscripcion == prod.nivel) {
            const { id, nivel, nombre, precio, descripcion, img, direccion, duracion, horario } = prod;
            if (cont % 2 == 0 ) {
              if(img != ""){
                fila = document.createElement("div");
                fila.classList.add(`info${cont}`);
                fila.classList.add(`row`);
                fila.classList.add(`justify-content-center`);
                $(".info").appendChild(fila);
                $(`.info${cont}`).innerHTML += `
                <div class="col-lg-6 col-sm-12 col-md-12">
                    <div class="card">
                        <div class="row">
                            <h1 class="card-title">${nombre}</h1>
                            <div class="col-lg-4 col-sm-5 col-md-6">
                                <img src="${img}" class="card-img-top" alt="...">
                            </div>
                            <div class="col-lg-8 col-sm-7 col-md-6">
                                <p class="card-text">${descripcion}
                                </p>
                            </div>
                        </div>
                        <div class="card-body">
                            <p class="card-text">Nivel: ${nivel}</p>
                            <p class="card-text">Duración: ${duracion}</p>
                            <p class="card-text">Horario: ${horario}</p>
                            <p class="card-text">Precio: ${precio}</p>
                            <p class="card-text">Dircción: ${direccion}</p>
                            <a  class="btn comprar${id} btn-primary">Añadir</a>
                        </div>
                    </div>
                </div>
                `
                $(`.comprar${id}`).addEventListener('click', () => {
                    aniadeCurso(id);
                })
                cont++;
              }else{
                fila = document.createElement("div");
                fila.classList.add(`info${cont}`);
                fila.classList.add(`row`);
                fila.classList.add(`justify-content-center`);
                $(".info").appendChild(fila);
                $(`.info${cont}`).innerHTML += `
                <div class="col-6 col-sm-12 col-md-12">
                    <div class="card">
                        <div class="row">
                            <h1 class="card-title">${nombre}</h1>
                            <div class="col-12">
                                <p class="card-text">${descripcion}
                                </p>
                            </div>
                        </div>
                        <div class="card-body">
                            <p class="card-text">Nivel: ${nivel}</p>
                            <p class="card-text">Duración: ${duracion}</p>
                            <p class="card-text">Horario: ${horario}</p>
                            <p class="card-text">Precio: ${precio}</p>
                            <p class="card-text">Dircción: ${direccion}</p>
                            <a  class="btn comprar${id} btn-primary">Añadir</a>
                        </div>
                    </div>
                </div>
                `
                $(`.comprar${id}`).addEventListener('click', () => {
                    aniadeCurso(id);
                })
                cont++;
              }
            } else {
                if (img == "") {
                    fila = document.createElement("div");
                    fila.classList.add(`info${cont}`);
                    fila.classList.add(`col-lg-6`);
                    fila.classList.add('col-sm-12');
                    fila.classList.add('col-md-12');
                    $(`.info${cont - 1}`).appendChild(fila);
                    $(`.info${cont}`).innerHTML += `
                    <div class="card">
                        <div class="row">
                            <h1 class="card-title">${nombre}</h1>
                            <div class="col-12">
                                <p class="card-text">${descripcion}
                                </p>
                            </div>
                        </div>
                        <div class="card-body">
                            <p class="card-text">Nivel: ${nivel}</p>
                            <p class="card-text">Duración: ${duracion}</p>
                            <p class="card-text">Horario: ${horario}</p>
                            <p class="card-text">Precio: ${precio}</p>
                            <p class="card-text">Dircción: ${direccion}</p>
                            <a  class="btn comprar${id} btn-primary">Añadir</a>
                        </div>
                    </div>
                `
                    $(`.comprar${id}`).addEventListener('click', () => {
                        aniadeCurso(id);
                    })
                    cont++;
                } else {
                    fila = document.createElement("div");
                    fila.classList.add(`col-lg-6`);
                    fila.classList.add('col-sm-12');
                    fila.classList.add('col-md-12')
                    $(`.info${cont - 1}`).appendChild(fila);
                    $(`.info${cont}`).innerHTML += `
                    <div class="card">
                        <div class="row">
                            <h1 class="card-title">${nombre}</h1>
                            <div class="col-lg-4 col-sm-5 col-md-6">
                                <img src="${img}" class="card-img-top" alt="...">
                            </div>
                            <div class="col-lg-8 col-sm-7 col-md-6">
                                <p class="card-text">${descripcion}
                                </p>
                            </div>
                        </div>
                        <div class="card-body">
                            <p class="card-text">Nivel: ${nivel}</p>
                            <p class="card-text">Duración: ${duracion}</p>
                            <p class="card-text">Horario: ${horario}</p>
                            <p class="card-text">Precio: ${precio}</p>
                            <p class="card-text">Dircción: ${direccion}</p>
                            <a  class="btn comprar${id} btn-primary">Añadir</a>
                        </div>
                    </div>
                `
                    $(`.comprar${id}`).addEventListener('click', () => {
                        aniadeCurso(id);
                    })
                    cont++;
                }
            }
        }

    });

    if (infoCuenta.suscripcion != "Basico") {
        paquetes.forEach((paq) => {
            const { id, nombre, precio, descripcion, img, direccion, duracion, horario } = paq;
            if (contS % 2 == 0) {
                if (img != "") {
                    fila = document.createElement("div");
                    fila.classList.add(`infoS${contS}`);
                    fila.classList.add(`row`);
                    fila.classList.add(`justify-content-center`);
                    $(".info").appendChild(fila);
                    $(`.infoS${contS}`).innerHTML += `
                <div class="col-6">
                    <div class="card">
                        <div class="row">
                            <h1 class="card-title">${nombre}</h1>
                            <div class="col-4">
                                <img src="${img}" class="card-img-top" alt="...">
                            </div>
                            <div class="col-8">
                                <p class="card-text">${descripcion}
                                </p>
                            </div>
                        </div>
                        <div class="card-body">
                            <p class="card-text">Duración: ${duracion}</p>
                            <p class="card-text">Horario: ${horario}</p>
                            <p class="card-text">Precio: ${precio}</p>
                            <p class="card-text">Dircción: ${direccion}</p>
                            <a  class="btn comprar${id} btn-primary">Añadir</a>
                        </div>
                    </div>
                </div>
                `
                    $(`.comprar${id}`).addEventListener('click', () => {
                        aniadePaquete(id);
                    })
                    contS++;
                } else {
                    fila = document.createElement("div");
                    fila.classList.add(`infoS${contS}`);
                    fila.classList.add(`row`);
                    fila.classList.add(`justify-content-center`);
                    $(".info").appendChild(fila);
                    $(`.infoS${contS}`).innerHTML += `
                <div class="col-6">
                    <div class="card">
                        <div class="row">
                            <h1 class="card-title">${nombre}</h1>
                            <div class="col-12">
                                <p class="card-text">${descripcion}
                                </p>
                            </div>
                        </div>
                        <div class="card-body">
                            <p class="card-text">Duración: ${duracion}</p>
                            <p class="card-text">Horario: ${horario}</p>
                            <p class="card-text">Precio: ${precio}</p>
                            <p class="card-text">Dircción: ${direccion}</p>
                            <a  class="btn comprar${id} btn-primary">Añadir</a>
                        </div>
                    </div>
                </div>
                `
                    $(`.comprar${id}`).addEventListener('click', () => {
                        aniadePaquete(id);
                    })
                    contS++;
                }

            } else {
                if (img == "") {
                    fila = document.createElement("div");
                    fila.classList.add(`infoS${contS}`);
                    fila.classList.add(`col-6`);
                    $(`.infoS${contS - 1}`).appendChild(fila);
                    $(`.infoS${contS}`).innerHTML += `
                    <div class="card">
                        <div class="row">
                            <h1 class="card-title">${nombre}</h1>
                            <div class="col-12">
                                <p class="card-text">${descripcion}
                                </p>
                            </div>
                        </div>
                        <div class="card-body">
                            <p class="card-text">Duración: ${duracion}</p>
                            <p class="card-text">Horario: ${horario}</p>
                            <p class="card-text">Precio: ${precio}</p>
                            <p class="card-text">Dircción: ${direccion}</p>
                            <a  class="btn comprar${id} btn-primary">Añadir</a>
                        </div>
                    </div>
                `
                    $(`.comprar${id}`).addEventListener('click', () => {
                        aniadePaquete(id);
                    })
                    contS++;
                } else {
                    fila = document.createElement("div");
                    fila.classList.add(`col-6`);
                    $(`.infoS${contS - 1}`).appendChild(fila);
                    $(`.infoS${contS}`).innerHTML += `
                    <div class="card">
                        <div class="row">
                            <h1 class="card-title">${nombre}</h1>
                            <div class="col-4">
                                <img src="${img}" class="card-img-top" alt="...">
                            </div>
                            <div class="col-8">
                                <p class="card-text">${descripcion}
                                </p>
                            </div>
                        </div>
                        <div class="card-body">
                            <p class="card-text">Duración: ${duracion}</p>
                            <p class="card-text">Horario: ${horario}</p>
                            <p class="card-text">Precio: ${precio}</p>
                            <p class="card-text">Dircción: ${direccion}</p>
                            <a  class="btn comprar${id} btn-primary">Añadir</a>
                        </div>
                    </div>
                `
                    $(`.comprar${id}`).addEventListener('click', () => {
                        aniadePaquete(id);
                    })
                    contS++;
                }
            }
        })
    }
}
const aniadeCurso =(id)=>{
    const existe = carrito.some(producto=>producto.id==id);
    if(existe){
        const prod = carrito.map(prod=>{
            if(prod.id==id){
                prod.cantidad++;
            }
        })
    }else{
        const item = cursos.find((producto)=>producto.id==id);
        carrito.push(item)
    }
    actualizarCarrito();
}
const aniadePaquete =(id)=>{
    const existe = carrito.some(producto=>producto.id==id);
    if(existe){
        const prod = carrito.map(prod=>{
            if(prod.id==id){
                prod.cantidad++;
            }
        })
    }else{
        const item = paquetes.find((producto)=>producto.id==id);
        carrito.push(item)
    }
    actualizarCarrito();
}
function actualizarCarrito(){
    $(".contenido").innerHTML="";
    carrito.forEach((prod)=>{
        const {nombre,precio,cantidad}=prod;
        $(".contenido").innerHTML+=`
        <div class="producto">
            <p>Producto: ${nombre}</p>
            <p>Precio: ${precio}€</p>
            <p>Cantidad :${cantidad}</p>
            <div class="btn btn-danger eliminar" id="eliminarProducto${prod.id}">Eliminar</div>
        </div>`;
        const boton= document.getElementById(`eliminarProducto${prod.id}`);
        boton.addEventListener('click',()=>{
            eliminarProducto(prod.id);
        })
    })
    $("#contadorCarrito").textContent=`🛒${carrito.length}`;
    $(".total").textContent=`Total: ${carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)}€`;
    guardarStorage();
}
function eliminarProducto(id){
    const juegoId = id;
    carrito = carrito.filter((juego) => juego.id !== juegoId);
    actualizarCarrito();
}
$(".vaciar").addEventListener('click',()=>{
    carrito.length=[];
    actualizarCarrito();
})
function guardarStorage() {
    sessionStorage.setItem("carrito", JSON.stringify(carrito));
}