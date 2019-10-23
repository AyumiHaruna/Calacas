//----------------------------------------------
            //DOM ELEMENTS
//----------------------------------------------
// "sede" buttons
const btnCenart = document.getElementById('btn-cenart');
const btnPinos = document.getElementById('btn-pinos');
const btnEcatepec = document.getElementById('btn-ecatepec');
const btnCentral = document.getElementById('btn-central');
const arrayBtnSedes = [btnCenart, btnPinos, btnEcatepec, btnCentral]

// "action" buttons
const actionBtnGeneral = document.getElementById('action-general');
const actionBtnVideos = document.getElementById('action-videos');
const actionBtnProgra = document.getElementById('action-progra');
const arrayBtnAction = [actionBtnGeneral, actionBtnVideos, actionBtnProgra]

// main-info window
const infoWindow = document.getElementById('info-window');

// flags
sedeSelected = "cenart"

function distance(lon1, lat1, lon2, lat2) {
    
    let R = 6371; // Radio de la tierra en km
    let dLat = (lat2-lat1).toRad();  // Javascript metodos
    let dLon = (lon2-lon1).toRad(); 
    let a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) * 
            Math.sin(dLon/2) * Math.sin(dLon/2); 
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    let d = R * c; // Distancia en km
    return d;
}
  
if (typeof(Number.prototype.toRad) === "undefined") {
    Number.prototype.toRad = function() {
      return this * Math.PI / 180;
    }
}
  
  navigator.geolocation.getCurrentPosition(function(pos) {
    //   CENART
      let cnaLat= 19.356584
      let cnaLon =-99.1420677
    //   Los Pinos
      let pinoLat=19.4156636
      let pinoLon=-99.1934009
    //   Central de abasto
      let caLat=19.3740039
      let caLon= -99.0952915
    //   Ecatepec
      let ecLat=19.548244
      let ecLon=-99.0406098
    if(
        distance(pos.coords.longitude, pos.coords.latitude, cnaLon, cnaLat)
        <
        distance(pos.coords.longitude, pos.coords.latitude, pinoLon, pinoLat) 
        &&
        distance(pos.coords.longitude, pos.coords.latitude, cnaLon, cnaLat)
        <
        distance(pos.coords.longitude, pos.coords.latitude, caLon, caLat)
        &&
        distance(pos.coords.longitude, pos.coords.latitude, cnaLon, cnaLat)
        <
        distance(pos.coords.longitude, pos.coords.latitude, ecLon, ecLat)
    ){  
       
        console.log("Estas cerca del Cenart",)
    }else if(
        distance(pos.coords.longitude, pos.coords.latitude, pinoLon, pinoLat)
        <
        distance(pos.coords.longitude, pos.coords.latitude, cnaLon, cnaLat)
        &&
        distance(pos.coords.longitude, pos.coords.latitude, pinoLon, pinoLat)
        <
        distance(pos.coords.longitude, pos.coords.latitude, caLon, caLat)
        &&
        distance(pos.coords.longitude, pos.coords.latitude, pinoLon, pinoLat)
        <
        distance(pos.coords.longitude, pos.coords.latitude, ecLon, ecLat)
    ){
        
        console.log("Estas cerca de los Pinos")
    }else if(
        distance(pos.coords.longitude, pos.coords.latitude, caLon, caLat)
        <
        distance(pos.coords.longitude, pos.coords.latitude, cnaLon, cnaLat)
        &&
        distance(pos.coords.longitude, pos.coords.latitude, caLon, caLat)
        <
        distance(pos.coords.longitude, pos.coords.latitude, pinoLon, pinoLat)
        &&
        distance(pos.coords.longitude, pos.coords.latitude, caLon, caLat)
        <
        distance(pos.coords.longitude, pos.coords.latitude, ecLon, ecLat)
    ){
        console.log("estas cerca de la central de abastos")
    }else if(
        distance(pos.coords.longitude, pos.coords.latitude, ecLon, ecLat)
        <
        distance(pos.coords.longitude, pos.coords.latitude, cnaLon, cnaLat)
        &&
        distance(pos.coords.longitude, pos.coords.latitude, ecLon, ecLat)
        <
        distance(pos.coords.longitude, pos.coords.latitude, pinoLon, pinoLat)
        &&
        distance(pos.coords.longitude, pos.coords.latitude, ecLon, ecLat)
        <
        distance(pos.coords.longitude, pos.coords.latitude, caLon, caLat)
    ){
        console.log("Estas cerca de Ecatepec")
    }
    
});

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
    toggleSedeButton();
    toggleDynamicBG();
    toggleActBtn('action-progra');
    drawInfo('action-progra');

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
        toggleSedeButton();
        toggleDynamicBG();
        toggleActBtn('action-progra');
        drawInfo('action-progra');
        actionBtnGeneral.scrollIntoView();
    });
});

//add eventListener to "action" buttons
arrayBtnAction.forEach( (elm) => {
    elm.addEventListener("click", () => {
        toggleActBtn( elm.id );
        drawInfo( elm.id );
        // document.querySelector('.sedeTitle').scrollIntoView();
    });
});

window.addEventListener('scroll', () => {
        calacasLogo.style.opacity = (mainInfoHeight - document.documentElement.scrollTop) / mainInfoHeight;
})



//----------------------------------------------
                //FUNCTIONS
//----------------------------------------------
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
            <span class="subtitle">(Información General)</span>
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
            </div>
        </div>
        `;

        return toPrint;
        
    }

    //draw general info
    function drawVideos(){
        
        var toPrint;
        var data = cartelera[sedeSelected];
        
        toPrint = `
        <div class="sedeTitle">
            ${data.sede}  <br>
            <span class="subtitle">(Videos)</span>
        </div>
        <div class="row justify-content-md-center infoBlock">`;


            for( var key in data.videos){
                
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
                        <div class="row">`;

                for( var elm in data.actividades[actividad]){
                    
                    toPrint += `
                        <div class="col-12 col-md-6 col-lg-4 act-content">
                            <div class="actividad">
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
        // console.log(elmGrow.clientHeight);
        if (elmGrow.clientHeight != 0) {
            elmGrow.style.height = 0;
        } else {
            var wrapper = elmGrow.firstElementChild;
            elmGrow.style.height = wrapper.clientHeight + "px";
        }
    }





