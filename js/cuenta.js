function $(selector) {
    return document.querySelector(selector);
}
function muestraPerfil() {
    let fila;
    let cont = 1;
    switch (info.suscripcion) {
        case "Basico":
            $(".bienvenida").textContent = `Bienvenido ${info.nombre}`;
            break;
        case "Iniciado":
            $(".bienvenida").textContent = `Bienvenido iniciado/a ${info.nombre}`;
            break;
        case "Intermedio":
            $(".bienvenida").textContent = `Bienvenido intermedio/a ${info.nombre}`;
            break;
        case "Experto":
            $(".bienvenida").textContent = `Bienvenido experto/a ${info.nombre}`;
            break;
        case "Sibarita":
            $(".bienvenida").textContent = `Bienvenido sibarita ${info.nombre}`;
            break;
    }
    cursos.forEach((prod) => {
        if (info.suscripcion == prod.nivel) {
            const { id, nivel, nombre, precio, descripcion, img, direccion, duracion, horario } = prod;
            if (img != "") {
                if (cont%2==0) {
                    fila = document.createElement("div");
                    fila.classList.add(`info${cont}`);
                    fila.classList.add(`row`);
                    fila.classList.add(`justify-content-center`);
                    $(".info").appendChild(fila);
                    $(`info${cont}`.innerHTML) += `
                    <div class="col-6">
                        <div class="card">
                            <div class="row">
                                <h1 class="card-title">${nombre}</h1>
                                <div class="col-4">
                                    <img src="../images/cataVino.jpg" class="card-img-top" alt="...">
                                </div>
                                <div class="col-8">
                                    <p class="card-text">${descripcion}
                                    </p>
                                </div>
                            </div>
                            <div class="card-body">
                                <p class="card-text">Nivel: ${nivel}</p>
                                <p class="card-text">Duración: ${duracion}</p>
                                <p class="card-text>Horario: ${horario}</p>"
                                <p class="card-text">Precio: ${precio}</p>
                                <p class="card-text">Dircción: ${direccion}</p>
                                <a href="#" class="btn comprar${id} btn-primary">Añadir</a>
                            </div>
                        </div>
                    </div>
                    `
                    $(`#comprar${id}`).addEventListener('click', () => {
                        aniadeCurso(id);
                    })
                    cont++;
                }else{
                    $(`info${cont}`.innerHTML) += `
                    <div class="col-6">
                        <div class="card">
                            <div class="row">
                                <h1 class="card-title">${nombre}</h1>
                                <div class="col-4">
                                    <img src="../images/cataVino.jpg" class="card-img-top" alt="...">
                                </div>
                                <div class="col-8">
                                    <p class="card-text">${descripcion}
                                    </p>
                                </div>
                            </div>
                            <div class="card-body">
                                <p class="card-text">Nivel: ${nivel}</p>
                                <p class="card-text">Duración: ${duracion}</p>
                                <p class="card-text>Horario: ${horario}</p>"
                                <p class="card-text">Precio: ${precio}</p>
                                <p class="card-text">Dircción: ${direccion}</p>
                                <a href="#" class="btn comprar${id} btn-primary">Añadir</a>
                            </div>
                        </div>
                    </div>
                    `
                    $(`#comprar${id}`).addEventListener('click', () => {
                        aniadeCurso(id);
                    })
                }
                $(`#comprar${id}`).addEventListener('click', () => {
                    aniadeCurso(id);
                })
            } else {
                if (cont%2==0) {
                    fila = document.createElement("div");
                    fila.classList.add(`info${cont}`);
                    fila.classList.add(`row`);
                    fila.classList.add(`justify-content-center`);
                    $(".info").appendChild(fila);
                    $(`info${cont}`.innerHTML) += `
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
                                <p class="card-text">Nivel: ${nivel}</p>
                                <p class="card-text">Duración: ${duracion}</p>
                                <p class="card-text>Horario: ${horario}</p>"
                                <p class="card-text">Precio: ${precio}</p>
                                <p class="card-text">Dircción: ${direccion}</p>
                                <a href="#" class="btn comprar${id} btn-primary">Añadir</a>
                            </div>
                        </div>
                    </div>
                    `
                    $(`#comprar${id}`).addEventListener('click', () => {
                        aniadeCurso(id);
                    })
                    cont++;
                }else{
                    $(`info${cont}`.innerHTML) += `
                    <div class="col-6">
                        <div class="card">
                            <div class="row">
                                <h1 class="card-title">${nombre}</h1>>
                                <div class="col-12">
                                    <p class="card-text">${descripcion}
                                    </p>
                                </div>
                            </div>
                            <div class="card-body">
                                <p class="card-text">Nivel: ${nivel}</p>
                                <p class="card-text">Duración: ${duracion}</p>
                                <p class="card-text>Horario: ${horario}</p>"
                                <p class="card-text">Precio: ${precio}</p>
                                <p class="card-text">Dircción: ${direccion}</p>
                                <a href="#" class="btn comprar${id} btn-primary">Añadir</a>
                            </div>
                        </div>
                    </div>
                    `
                    $(`#comprar${id}`).addEventListener('click', () => {
                        aniadeCurso(id);
                    })
                }
            }
        }
    });
    if (info.suscripcion != "Basico") {
        paquetes.forEach((paq) => {
            const { id, nombre, precio, descripcion, img, direccion, duracion } = paq;
            if (img != "") {
                if (cont%2==0) {
                    fila = document.createElement("div");
                    fila.classList.add(`info${cont}`);
                    fila.classList.add(`row`);
                    fila.classList.add(`justify-content-center`);
                    $(".info").appendChild(fila);
                    $(`info${cont}`.innerHTML) += `
                    <div class="col-6">
                        <div class="card">
                            <div class="row">
                                <h1 class="card-title">${nombre}</h1>
                                <div class="col-4">
                                    <img src="../images/cataVino.jpg" class="card-img-top" alt="...">
                                </div>
                                <div class="col-8">
                                    <p class="card-text">${descripcion}
                                    </p>
                                </div>
                            </div>
                            <div class="card-body">
                                <p class="card-text">Nivel: ${nivel}</p>
                                <p class="card-text">Duración: ${duracion}</p>
                                <p class="card-text>Horario: ${horario}</p>"
                                <p class="card-text">Precio: ${precio}</p>
                                <p class="card-text">Dircción: ${direccion}</p>
                                <a href="#" class="btn comprar${id} btn-primary">Añadir</a>
                            </div>
                        </div>
                    </div>
                    `
                    $(`#comprar${id}`).addEventListener('click', () => {
                        aniadeCurso(id);
                    })
                    cont++;
                }else{
                    $(`info${cont}`.innerHTML) += `
                    <div class="col-6">
                        <div class="card">
                            <div class="row">
                                <h1 class="card-title">${nombre}</h1>
                                <div class="col-4">
                                    <img src="../images/cataVino.jpg" class="card-img-top" alt="...">
                                </div>
                                <div class="col-8">
                                    <p class="card-text">${descripcion}
                                    </p>
                                </div>
                            </div>
                            <div class="card-body">
                                <p class="card-text">Nivel: ${nivel}</p>
                                <p class="card-text">Duración: ${duracion}</p>
                                <p class="card-text>Horario: ${horario}</p>"
                                <p class="card-text">Precio: ${precio}</p>
                                <p class="card-text">Dircción: ${direccion}</p>
                                <a href="#" class="btn comprar${id} btn-primary">Añadir</a>
                            </div>
                        </div>
                    </div>
                    `
                    $(`#comprar${id}`).addEventListener('click', () => {
                        aniadeCurso(id);
                    })
                }
                $(`#comprar${id}`).addEventListener('click', () => {
                    aniadeCurso(id);
                })
            } else {
                if (cont%2==0) {
                    fila = document.createElement("div");
                    fila.classList.add(`info${cont}`);
                    fila.classList.add(`row`);
                    fila.classList.add(`justify-content-center`);
                    $(".info").appendChild(fila);
                    $(`info${cont}`.innerHTML) += `
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
                                <p class="card-text">Nivel: ${nivel}</p>
                                <p class="card-text">Duración: ${duracion}</p>
                                <p class="card-text>Horario: ${horario}</p>"
                                <p class="card-text">Precio: ${precio}</p>
                                <p class="card-text">Dircción: ${direccion}</p>
                                <a href="#" class="btn comprar${id} btn-primary">Añadir</a>
                            </div>
                        </div>
                    </div>
                    `
                    $(`#comprar${id}`).addEventListener('click', () => {
                        aniadeCurso(id);
                    })
                    cont++;
                }else{
                    $(`info${cont}`.innerHTML) += `
                    <div class="col-6">
                        <div class="card">
                            <div class="row">
                                <h1 class="card-title">${nombre}</h1>>
                                <div class="col-12">
                                    <p class="card-text">${descripcion}
                                    </p>
                                </div>
                            </div>
                            <div class="card-body">
                                <p class="card-text">Nivel: ${nivel}</p>
                                <p class="card-text">Duración: ${duracion}</p>
                                <p class="card-text>Horario: ${horario}</p>"
                                <p class="card-text">Precio: ${precio}</p>
                                <p class="card-text">Dircción: ${direccion}</p>
                                <a href="#" class="btn comprar${id} btn-primary">Añadir</a>
                            </div>
                        </div>
                    </div>
                    `
                    $(`#comprar${id}`).addEventListener('click', () => {
                        aniadeCurso(id);
                    })
                }
            }
        })
    }
}