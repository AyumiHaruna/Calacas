//----------------------------------------------
            //DOM VARIABLES
//----------------------------------------------
// "sede" Buttons
const divCenart = document.getElementById('cenart');
const divPinos = document.getElementById('pinos');
const divEcatepec = document.getElementById('ecatepec');
const divCentral = document.getElementById('central');

// "sede-selection-main" windows
const divSelMainCenart = document.getElementById('sede-cenart');
const divSelMainPinos = document.getElementById('sede-pinos');
const divSelMainEcatepec = document.getElementById('sede-ecatepec');
const divSelMainCentral = document.getElementById('sede-central');

// "sede-info" navigation buttons
const sedeInfo = document.getElementById('sede-info');
const sedePoster = document.getElementById('sede-poster');
const sedePrograma = document.getElementById('sede-programa');

//dynamic background
const dynamicBG = document.getElementById("dynamicBG");

//----------------------------------------------
            //HTML TEMPLATES
//----------------------------------------------
const posterCenart =    `<a href="img/calaveras/poster CENART 768x1024.jpg" target="_blank">
                            <img src="img/calaveras/Poster CENART 400x600.jpg" class="posterImage" alt="imagen de poster"/>
                        </a>`;
const programaCenart = `<div class="cartelera">
                            <div class="cart-sede">
                                Cartelera CENART
                                <div class="dwn-div">
                                    <a href="img/calaveras/programa.pdf" target="_blank">
                                        <img src="img/calaveras/dwnIco.png" alt="animacion de loader"> <br>
                                        Descargar cartelera
                                    </a>
                                </div>
                            </div>
                            <div class="actividad">
                                <div class="act-header">
                                    Nombre de la actividad CENART
                                </div>
                                <div class="act-body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Quisque aliquet hendrerit purus, volutpat feugiat mauris rhoncus fringilla. 
                                    Proin nec ligula viverra, pretium tortor non, pretium purus. 
                                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus non tortor euismod, 
                                    suscipit tellus nec, cursus dolor.
                                </div>
                            </div>
                        </div>`;
const posterPinos = `<a href="img/calaveras/poster Los Pinos 768x1024.jpg" target="_blank">
                        <img src="img/calaveras/Poster Los Pinos 400x600.jpg" class="posterImage" alt="imagen de poster"/>
                    </a>`;
const programaPinos = `<div class="cartelera">
                            <div class="cart-sede">
                                Cartelera Los pinos
                                <div class="dwn-div">
                                    <a href="img/calaveras/programa.pdf" target="_blank">
                                        <img src="img/calaveras/dwnIco.png" alt="animacion de loader"> <br>
                                        Descargar cartelera
                                    </a>
                                </div>
                            </div>
                            <div class="actividad">
                                <div class="act-header">
                                    Nombre de la actividad CENART
                                </div>
                                <div class="act-body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Quisque aliquet hendrerit purus, volutpat feugiat mauris rhoncus fringilla. 
                                    Proin nec ligula viverra, pretium tortor non, pretium purus. 
                                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus non tortor euismod, 
                                    suscipit tellus nec, cursus dolor.
                                </div>
                            </div>
                        </div>`;
const posterEcatepec = `<a href="img/calaveras/poster Ecatepec 768x1024.jpg" target="_blank">
                            <img src="img/calaveras/Poster Ecatepec 400x600.jpg" class="posterImage" alt="imagen de poster"/>
                        </a>`;
const programaEcatepec = `<div class="cartelera">
                            <div class="cart-sede">
                                Cartelera Ecatepec
                                <div class="dwn-div">
                                    <a href="img/calaveras/programa.pdf" target="_blank">
                                        <img src="img/calaveras/dwnIco.png" alt="animacion de loader"> <br>
                                        Descargar cartelera
                                    </a>
                                </div>
                            </div>
                            <div class="actividad">
                                <div class="act-header">
                                    Nombre de la actividad CENART
                                </div>
                                <div class="act-body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Quisque aliquet hendrerit purus, volutpat feugiat mauris rhoncus fringilla. 
                                    Proin nec ligula viverra, pretium tortor non, pretium purus. 
                                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus non tortor euismod, 
                                    suscipit tellus nec, cursus dolor.
                                </div>
                            </div>
                        </div>`;
const posterCentral = `<a href="img/calaveras/poster Central de Abastos 768x1024.jpg" target="_blank">
                            <img src="img/calaveras/Poster Central de Abastos 400x600.jpg" class="posterImage" alt="imagen de poster"/>
                        </a>`;
const programaCentral = `<div class="cartelera">
                            <div class="cart-sede">
                                Cartelera Central de Abastos
                                <div class="dwn-div">
                                    <a href="img/calaveras/programa.pdf" target="_blank">
                                        <img src="img/calaveras/dwnIco.png" alt="animacion de loader"> <br>
                                        Descargar cartelera
                                    </a>
                                </div>
                            </div>
                            <div class="actividad">
                                <div class="act-header">
                                    Nombre de la actividad CENART
                                </div>
                                <div class="act-body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Quisque aliquet hendrerit purus, volutpat feugiat mauris rhoncus fringilla. 
                                    Proin nec ligula viverra, pretium tortor non, pretium purus. 
                                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus non tortor euismod, 
                                    suscipit tellus nec, cursus dolor.
                                </div>
                            </div>

                            <div class="actividad">
                                <div class="act-header">
                                    Nombre de la actividad CENART
                                </div>
                                <div class="act-body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Quisque aliquet hendrerit purus, volutpat feugiat mauris rhoncus fringilla. 
                                    Proin nec ligula viverra, pretium tortor non, pretium purus. 
                                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus non tortor euismod, 
                                    suscipit tellus nec, cursus dolor.
                                </div>
                            </div>

                            <div class="actividad">
                                <div class="act-header">
                                    Nombre de la actividad CENART
                                </div>
                                <div class="act-body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Quisque aliquet hendrerit purus, volutpat feugiat mauris rhoncus fringilla. 
                                    Proin nec ligula viverra, pretium tortor non, pretium purus. 
                                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus non tortor euismod, 
                                    suscipit tellus nec, cursus dolor.
                                </div>
                            </div>

                            <div class="actividad">
                                <div class="act-header">
                                    Nombre de la actividad CENART
                                </div>
                                <div class="act-body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Quisque aliquet hendrerit purus, volutpat feugiat mauris rhoncus fringilla. 
                                    Proin nec ligula viverra, pretium tortor non, pretium purus. 
                                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus non tortor euismod, 
                                    suscipit tellus nec, cursus dolor.
                                </div>
                            </div>
                        </div>`;

//----------------------------------------------
            //DOM EVENT LISTENERS
//----------------------------------------------
//add eventLister for each "sede" button
[divCenart, divPinos, divEcatepec, divCentral].forEach( (div) => {
    div.addEventListener("click", () => {     
        toggleSelectorButton( div.children )
        toggleSedeGeneral( div.id );
        toggleDynamicBG( div.id );
        changeInfoWindow("sede-info");

        if(parseFloat(window.screen.availWidth) < 578){
            document.getElementById("selection-container").scrollIntoView();
        }
    })
})

//add eventListener for each "sede-info" button
var infoButtonArray = [sedeInfo, sedePoster, sedePrograma];
infoButtonArray.forEach( (button) => {
    button.addEventListener("click", (event) => {
        event.preventDefault();     //stop href action
        changeInfoWindow(button.id);     //change the infoWindow
    });
});

//----------------------------------------------
                //FUNCTIONS
//----------------------------------------------
//change border of selected button
function toggleSelectorButton( selButton ){
    //hide border form all buttons
    [divCenart, divPinos, divEcatepec, divCentral].forEach(function(div){
        div.children[0].classList.remove("active");
    })
    //set border on selected button
    selButton[0].classList.add("active");
}
//hide all .div-selection-main and show selected
function toggleSedeGeneral( id ){
    //hide all .div-selection-main (just removing "selected" class)
    [divSelMainCenart, divSelMainPinos, divSelMainEcatepec, divSelMainCentral].forEach(function(div){
        div.classList.remove("selected");
    })
    //add selected class to the selected section
    let selectedDiv = document.getElementById("sede-"+id);
    selectedDiv.classList.add("selected");
}
//change the color of dynamic background
function toggleDynamicBG( id ){
    dynamicBG.classList.remove("active", "cenartBG", "pinosBG", "ecatepecBG", "centralBG");
    setTimeout( () => dynamicBG.classList.add("active", id+"BG"), 50);
}
//change the info windows and button flag
function changeInfoWindow( id ){
    //delete active class from sede-info button
    infoButtonArray.forEach(function(element){
        element.classList.remove("active");
    });
    //set active to selected sede-info button
    document.getElementById(id).classList.add("active");
    
    //get selected "sede"
    var sedeSelected;
    [divSelMainCenart, divSelMainPinos, divSelMainEcatepec, divSelMainCentral].forEach( (sede) => {
        if(sede.classList.contains("selected")){
            sedeSelected = sede;
        }
    });

    //show or hide window, depends on selected info-button
    switch(id){
        case "sede-info":
                prepareInfoWindow( sedeSelected, "hide", id);
            break;

        case "sede-poster":
        case "sede-programa":
        case "sede-mapa":
                prepareInfoWindow( sedeSelected, "show", id);
            break;
    }


    function prepareInfoWindow(sede, action, button){
        //hide selection-main-title,   selection-main-description,     selection-main-pic,     selection-main-map
        sedeChilds = sede.getElementsByClassName("row");
        sedeChilds = Array.prototype.slice.call( sedeChilds )
        
        if(action === "show"){  //if want to show the hidden windows

        //     //load elements on the hidden-window
        //     await loadToHidden(sede.id, button);

            sedeChilds.forEach( (element) => {
                //hide all windows
                element.style.display = 'none';

                //if is "hidden-row" show the hidden window
                if(element.classList.contains("hidden-row")){
                    
                    //show loading gif window
                    element.style.display = 'flex';
                    element.children[1].style.display = 'none';
                    element.children[0].style.display = 'block';

                    // AWAIT load information
                    // element.children[1].style.display = 'block';    //borrar despues
                    loadToHidden( sede.id, element, button );

                    //hide loader show information
                    setTimeout(()=>{ 
                        //hideLoader
                        element.children[0].style.display = 'none';

                        //show information
                        element.children[1].style.display = 'block';
                    }, 200);
                }                
            });
        } else {   //if want to hide the hidden window
            //show all elements of the window
            sedeChilds.forEach( (element) => {
                element.style.display = 'flex';

                //hide the hidden window
                if(element.classList.contains("hidden-row")){
                    element.style.display = 'none';
                }
            });
        }




        function loadToHidden(id, sede, button ){
            var infoToPrint;
            switch(id){
                case "sede-cenart":
                        infoToPrint = ( button === "sede-poster" )? posterCenart : programaCenart;
                    break;
                case "sede-pinos":
                        infoToPrint = ( button === "sede-poster" )? posterPinos : programaPinos;
                    break;
                case "sede-ecatepec":
                        infoToPrint = ( button === "sede-poster" )? posterEcatepec : programaEcatepec;
                    break;
                case "sede-central":
                        infoToPrint = ( button === "sede-poster" )? posterCentral : programaCentral;
                    break;
            }            

            sede.children[1].innerHTML = infoToPrint

        }
    }
}




