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