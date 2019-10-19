var accInfo = document.getElementById("acc-sedes-info");

printInfo();




//print cartelera info
function printInfo(){
    console.log(cartelera);
    var toPrint = ``;

    for( var i=0; i<(Object.keys(cartelera)).length; i++ ){
        let sede = Object.keys(cartelera)[i];
        toPrint += `
            <div class="row">
                <div class="col-10 offset-1 acc-info-block">
                    <div class="row">
                        <div class="col-4 acc-title" tabindex="0">
                            <a name="datos ${sede}">
                                ${cartelera[sede]["sede"]}
                            </a> <br>
                            <a href="${cartelera[sede]["webLink"]}" class="link sub" target="_blank">
                                ${cartelera[sede]["webLink"]}
                            </a>
                        </div>
                        <div class="col-8 acc-direccion" tabindex="0">
                            Dirección: <br>
                            <a href="${cartelera[sede]["mapLink"]}" class="link" target="_blank">
                                ${cartelera[sede]["direccion"]}
                            </a>
                        </div>
                        <div class="col-12 acc-horario" tabindex="0">
                            Horarios: ${cartelera[sede]["horarios"]} <br> 
                            <a href="${cartelera[sede]["programa"]}" class="link" target="_blank">
                                Descarga la programación completa del evento
                            </a>
                        </div>
        `;

                for( var j=0; j<(Object.keys(cartelera[sede]["actividades"])).length; j++){
                    let actividad = Object.keys( cartelera[sede]["actividades"])[j];
                    var isOdd = j % 2;
                    
                    if(isOdd){
                        toPrint += `
                            <div class="col-12 acc-actividad-header odd" tabindex="0">
                                ${actividad}
                                <div><img src="img/calaveras/calavera_${j}.png" alt="logo de ${actividad}"/></div>
                            </div>
                        `;
                    } else {
                        toPrint += `
                            <div class="col-12 acc-actividad-header even" tabindex="0">
                                ${actividad}
                                <div><img src="img/calaveras/calavera_${j}.png" alt="logo de ${actividad}"/></div>
                            </div>
                        `;
                    }

                    for(var k=1; k<=( Object.keys(cartelera[sede]["actividades"][actividad] )).length; k++){
                        toPrint += `
                        <div class="col-12 col-md-6 col-lg-4 act-content" tabindex="0">
                            <div class="actividad">
                                <div class="act-nombre">
                                    ${cartelera[sede]["actividades"][actividad][k]["nombre"]}
                                </div>               
                                <div class="act-descripcion">
                                    ${cartelera[sede]["actividades"][actividad][k]["descripcion"]}
                                </div>                                
                                <div class="act-delegacion">
                                    ${cartelera[sede]["actividades"][actividad][k]["delegacion"]}
                                </div>                                
                                <div class="act-tallerista">`
                                    if( cartelera[sede]["actividades"][actividad][k]["tallerista"] != "" ){
                                        toPrint += `Elenco: <span>${cartelera[sede]["actividades"][actividad][k]["tallerista"]}</span>`;
                                    }
                                    
                        toPrint +=  `</div>               
                                    <div class="act-sinopsis">
                                        ${cartelera[sede]["actividades"][actividad][k]["sinopsis"]} 
                                    </div>
                                    <div class="act-area">
                                        Área: <span>${cartelera[sede]["actividades"][actividad][k]["area"]}</span>
                                    </div>
                                    <div class="act-horario">
                                        Horario(s): <span>${cartelera[sede]["actividades"][actividad][k]["horario"]}</span>
                                    </div>
                                    <div class="act-publico">
                                        Para ${cartelera[sede]["actividades"][actividad][k]["publico"]}
                                    </div>
                                    <div class="act-obs">
                                        ${cartelera[sede]["actividades"][actividad][k]["observaciones"]}
                                    </div>
                                    
                                    <div class="act-hr">
                                        <hr>
                                    </div>
                                </div>
                                
                            </div>
                        `;
                    }
                }

            toPrint += `    
                    </div>
                </div>
            </div>
        `;
    }

    accInfo.innerHTML = toPrint;
}