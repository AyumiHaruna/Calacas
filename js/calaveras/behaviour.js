//----------------------------------------------
            //DOM ELEMENTS
//----------------------------------------------
// "sede" buttons
const btnCenart = document.getElementById('btn-cenart');
const btnPinos = document.getElementById('btn-pinos');
const btnEcatepec = document.getElementById('btn-ecatepec');
const btnCentral = document.getElementById('btn-central');
const arrayBtnSedes = [btnCenart, btnPinos, btnEcatepec, btnCentral]
const sedeBtnsYTop = btnCenart.getBoundingClientRect().top;

// "action" buttons
const actionBtnGeneral = document.getElementById('action-general');
const actionBtnVideos = document.getElementById('action-videos');
const actionBtnProgra = document.getElementById('action-progra');
const arrayBtnAction = [actionBtnGeneral, actionBtnVideos, actionBtnProgra]

const upBtn = document.getElementById('upBtn')

// main-info window
const infoWindow = document.getElementById('info-window');

// flags
var sedeSelected = 'cenart';

//parallax background
const parallax1 = document.getElementsByClassName('bgParallax1');
const parallax2 = document.getElementsByClassName('bgParallax2');
const parallax3 = document.getElementsByClassName('bgParallax3');

//elements to fix mainLogo on scroll
const calacasLogo = document.getElementById("calacasLogo");
const mainInfoWindow = document.getElementById('main-info');
const mainInfoHeight = mainInfoWindow.offsetHeight;
const mainInfoYTop = mainInfoWindow.getBoundingClientRect().top;


//----------------------------------------------
            //INITIAL STATE
//----------------------------------------------   
    calacasLogo.style.opacity = (mainInfoHeight - document.documentElement.scrollTop) / mainInfoHeight;
    executeChange();

//----------------------------------------------
            //PARALLAX BACKGROUND
//----------------------------------------------
new simpleParallax(parallax1, {
    orientation: 'down',
    scale: 1.5,
    transition: 'ease-out',
});
new simpleParallax(parallax2, {
    scale: 1.5
});
new simpleParallax(parallax3, {
    orientation: 'down',
    scale: 1.2,
});

//----------------------------------------------
            //DOM EVENT LISTENERS
//----------------------------------------------
//add eventListener to "sede" buttons 
arrayBtnSedes.forEach( (div) => {
    div.addEventListener("click", () => {
        sedeSelected = (div.id).replace('btn-', '');
        executeChange();
        actionBtnGeneral.scrollIntoView();
    });
});

//add eventListener to "action" buttons
arrayBtnAction.forEach( (elm) => {
    elm.addEventListener("click", () => {
        toggleActBtn( elm.id );
        drawInfo( elm.id );
    });
});

window.addEventListener('scroll', () => {
        calacasLogo.style.opacity = (mainInfoHeight - document.documentElement.scrollTop) / mainInfoHeight;

        if(document.documentElement.scrollTop >= 200){
            if( !upBtn.parentElement.classList.contains("shown") ){
                upBtn.parentElement.classList.add("shown");
            }
        } else {
            if( upBtn.parentElement.classList.contains("shown") ){
                upBtn.parentElement.classList.remove("shown");
            }
        }
})

upBtn.addEventListener("click", () => {
    window.scrollTo(0,0);
})


//----------------------------------------------
                //FUNCTIONS
//----------------------------------------------
//execute change of "sede"
function executeChange(){
    toggleSedeButton();
    toggleDynamicBG();
    toggleActBtn('action-progra');
    drawInfo('action-progra');
}

//change border of sede selected button
function toggleSedeButton(){
    var button = document.getElementById( 'btn-'+sedeSelected );
    //hide border form all buttons
    arrayBtnSedes.forEach( (div) => {
        div.parentElement.classList.remove("active");
    }); 

    button.parentElement.classList.add("active");
}

//change the color of dynamic background
function toggleDynamicBG(){
    dynamicBG.classList.remove("cenart", "pinos", "ecatepec", "central");
    setTimeout( () => dynamicBG.classList.add(sedeSelected), 50);
}

//toggle action button
function toggleActBtn(action){
    //delete active from all buttons
    arrayBtnAction.forEach( (elm) => {
        elm.parentElement.classList.remove('active');
    });
    //set active selected button
    document.getElementById( action ).parentElement.classList.add('active');
}

//draw info from selected sede
function drawInfo(action){
    switch( action ){
        case 'action-general':
                toPrint = drawGeneral();
            break;
        case 'action-videos':
                toPrint = drawVideos();
            break;
        case 'action-progra':
                toPrint = drawProgra();
            break;
    }

    infoWindow.innerHTML = toPrint
}

    //draw general info
    function drawGeneral(){
        
        var toPrint;
        var data = cartelera[sedeSelected];
        
        toPrint = `
        <div class="sedeTitle">
            ${data.sede}  <br>
            <span class="subtitle">(Recomendaciones)</span>
        </div>
        <div class="row infoBlock">
            <div class="col-lg-6 text-center mainInfoContainer">
                <p>Sábado 2 de Noviembre <br>
                ${data.horarios} <br></p>
                
                <p>Ubicado en: <br>
                    <a href="${data.mapLink}" target="_blank">
                        ${data.direccion}
                    </a>
                </p>

                <p>
                    <a href="${data.webLink}" target="_blank">
                        ${data.webLink}
                    </a>
                </p>

                <p><span>Entrada Libre</span></p>
            </div>
            <div class="col-lg-6 text-center mainMapContainer">
                <a href="${data.mapLink}" target="_blank">
                    <img src="${data.mapOverview}" alt="mapa ${data.sede}" />
                </a>
            </div>
            <div class="col-12 separator">
                <hr>
                <b>Recomendaciones</b>
                <ul>
                    <li>Trae calzado y ropa cómodos, ¡hay mucha feria por recorrer!</li>
                    <li>La programación de las cuatro sedes está sujeta a cambios sin previo aviso. Te recomendamos consultar el programa general cuidadosamente. Recuerda que el cupo en algunas actividades es limitado. Llega con anticipación, revisa y elige aquellas actividades en las que el niño o niña puedan participar, y espera ordenadamente. Si no lograron entrar a alguna actividad, pueden esperar la siguiente sesión, para saberlo, consulta el programa de mano para saber la duración de cada evento.</li>
                    <li>En todas las sedes, recomendamos que los niños y niñas se mantengan siempre bajo la supervisión de un adulto.</li>
                    <li>Lleva gorra o sombreros para cubrirte del sol. En todas las sedes, excepto en el Complejo Cultural Los Pinos, es posible entrar con paraguas o sombrillas.</li>
                    <li>Puedes usar carriolas en todas las sedes, pero en el Centro Cultural Los Pinos, se recomienda no usarla sobre las áreas verdes ni en los espacios que tengan duela. Sigue las indicaciones del personal de seguridad y de los guías sobre el modo y lugar para estacionarlas afuera de las carpas de actividades. </li>
                    <li>Trae tu agua embotellada y alimentos para los bebés o niños más pequeños, según la sede: En Jardines de Morelos, en Ecatepec y Central de Abasto sí se permite el ingreso de alimentos, pero en el Complejo Cultural Los Pinos no se permite consumir alimentos en interiores, tales como la Cabaña o la Sala de lectura, mientras que sólo en el CENART habrá puestos de venta de comida para los visitantes.</li>
                    <li>Te recomendamos llegar en metro al Centro Cultural Los Pinos, bajando en la estación Constituyentes y caminando hacia la puerta 3, sobre la av. Molino del Rey, hasta llegar a la reja verde, ya que no hay estacionamiento abierto al público.</li>
                    <li>En el CENART existe un estacionamiento con cupo limitado, ¡toma tus precauciones y llega temprano! El ingreso es sobre Av. Churubusco. </li>
                    <li>Para llegar a la Central de Abasto puedes tomar un camión en la estación de metro Aculco, que dice “Churubusco, Central de Abasto”. </li>
                    <li>En la sede de Jardines de Morelos, en Ecatepec, es recomendable llegar a pie a la zona del deportivo desde la estación 1ro de mayo de la línea 2 del Mexibus, que corre de Las Américas a Lechería.</li>
                    <li>Sigue las indicaciones de las personas auxiliares (identificados por la playera de ALAS y RAÍCES y el gafete). Si tienes alguna duda o necesitas ayuda, ellos están para orientarte y auxiliarte.</li>
                    <li>Todas las sedes son espacios libres de basura y de basureros. Cada persona deberá hacerse cargo de los residuos que genere, solos o en familia. Agradecemos su colaboración para conservar estos espacios limpios, pues son patrimonio de todos.</li>
                </ul>
            </div>
        </div>
        `;

        return toPrint;
        
    }

    //draw general info
    function drawVideos(){
        
        var toPrint;
        var data = resources;
        
        toPrint = `
        <div class="sedeTitle">
            Live Stream
        </div>
        <div class="row justify-content-md-center infoBlock">`;

            for( var key in data["videos"]){
                
                if( key === "1"){
                    toPrint += `
                        <div class="col-12">
                            <div class="row justify-content-center">
                                <div class="col-sm-6 text-center vidContainer">
                                    <a href="${data.videos[key]['url']}" target="_blank">
                                        <img src="img/calaveras/videoThumbnail.jpg" class="youThumb" alt="video feria de las calacas"/>
                                        <div>${data.videos[key]['nombre']}</div>
                                    </a>                        
                                    <img src="img/calaveras/yTube.png" class="youPlay" alt="boton play" />
                                </div>
                            </div>
                        </div>
                        
                    `;
                } else {
                    var urlId = (data.videos[key]['url']).replace("https://www.youtube.com/watch?v=", "");
                    toPrint += `
                        <div class="col-sm-4 text-center vidContainer">
                            <a href="${data.videos[key]['url']}" target="_blank">
                                <img src="https://img.youtube.com/vi/${urlId}/mqdefault.jpg" class="youThumb" alt="youtube video"/>
                                <div>${data.videos[key]['nombre']}</div>
                            </a>                        
                            <img src="img/calaveras/yTube.png" class="youPlay" alt="boton play" />                        
                        </div>
                    `;
                }
            }
        
            
                
        toPrint += `       
            <div class="col-12 separator">
                <hr>
            </div>
        </div>
        `;

        return toPrint;
        
    }

    //draw programación info
    function drawProgra(){
        var toPrint;
        var data = cartelera[sedeSelected];
        
        toPrint = `
        <div class="sedeTitle">
            ${data.sede}  <br>
            <span class="subtitle">(Programación del evento)</span>
        </div>
        <div class="row infoBlock">
            <div class="col-12 dwnBlock">
                <a href="${data.programa}" target="_bank">
                    <img src="img/calaveras/dwnIco.png" alt"boton descarga de programación"/> <br>
                    Descarga la programación completa
                </a>
            </div>`;

            for(var i=0; i<(Object.keys(data.actividades)).length; i++ ){

                var actividad = Object.keys(data.actividades)[i];
                var isOdd = i % 2;
                
                if( isOdd === 0){
                    toPrint += `
                    <div class="col-12 collapsible odd" data-target="${actividad}" onClick="growDiv(this)">
                        <img src="img/calaveras/calavera_${i}.png" />
                        ${actividad}                   
                    </div>`;
                } else {
                    toPrint += `
                    <div class="col-12 collapsible even" data-target="${actividad}" onClick="growDiv(this)">
                        ${actividad}
                        <div><img src="img/calaveras/calavera_${i}.png" /></div>
                    </div>`;
                }
                
                toPrint += `
                    <div class="col-12 coll-container" id="${actividad}">
                        <div class="card-columns">`;

                for( var elm in data.actividades[actividad]){
                    
                    toPrint += `
                        <div class="card act-content">
                            <div class="card-body actividad">
                                <div class="act-nombre">
                                    ${data.actividades[actividad][elm]["nombre"]}
                                </div>               
                                <div class="act-descripcion">
                                    ${data.actividades[actividad][elm]["descripcion"]}
                                </div>                                
                                <div class="act-delegacion">
                                    ${data.actividades[actividad][elm]["delegacion"]}
                                </div>                                
                                <div class="act-tallerista">`
                                    if( data.actividades[actividad][elm]["tallerista"] != "" ){
                                        toPrint += `Elenco: <span>${data.actividades[actividad][elm]["tallerista"]}</span>`;
                                    }
                                    
                    toPrint +=  `</div>               
                                <div class="act-sinopsis text-justify">
                                    ${data.actividades[actividad][elm]["sinopsis"]} 
                                </div>
                                <div class="act-area">
                                    Área: <span>${data.actividades[actividad][elm]["area"]}</span>
                                </div>
                                <div class="act-horario">
                                    Horario(s): <span>${data.actividades[actividad][elm]["horario"]}</span>
                                </div>
                                <div class="act-publico">
                                    Para ${data.actividades[actividad][elm]["publico"]}
                                </div>
                                <div class="act-obs">
                                    ${data.actividades[actividad][elm]["observaciones"]}
                                </div>
                                
                                <div class="act-hr">
                                    <hr>
                                </div>
                            </div>
                            
                        </div>
                    `;
                }

                toPrint += `
                        </div>
                    </div>`;
            }

        toPrint += `
        </div>`;

        return toPrint;
    }

    //animate div growth
    function growDiv(elm) {
        elm.classList.toggle('active');

        var elmGrow = document.getElementById(elm.dataset.target);
        if (elmGrow.clientHeight != 0) {
            elmGrow.style.height = 0;
        } else {
            var wrapper = elmGrow.firstElementChild;
            elmGrow.style.height = wrapper.clientHeight + "px";
        }
    }





