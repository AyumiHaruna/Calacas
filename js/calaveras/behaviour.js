//----------------------------------------------
            //DOM VARIABLES
//----------------------------------------------
// "sede" Buttons
const divCenart = document.getElementById('cenart');
const divPinos = document.getElementById('pinos');
const divEcatepec = document.getElementById('ecatepec');
const divCentral = document.getElementById('central');

// "sede-selection-main" windows
const divSelMainPoster = document.getElementById('sede-poster');
const divSelMainCenart = document.getElementById('sede-cenart');
const divSelMainPinos = document.getElementById('sede-pinos');
const divSelMainEcatepec = document.getElementById('sede-ecatepec');
const divSelMainCentral = document.getElementById('sede-central');

// "sede-info" navigation buttons
const subMenu = document.getElementById("sub-menu");
const sedeInicio = document.getElementById('sede-inicio');
const sedeInfo = document.getElementById('sede-info');
const sedePoster = document.getElementById('sede-subposter');
const sedePrograma = document.getElementById('sede-programa');
var infoButtonArray = [sedeInicio, sedeInfo, sedePoster, sedePrograma];

//dynamic background
const dynamicBG = document.getElementById("dynamicBG");

//last 'sede' selected
var lastSedeSelected;

//----------------------------------------------
            //HTML TEMPLATES
//----------------------------------------------


//----------------------------------------------
            //DOM EVENT LISTENERS
//----------------------------------------------
//add eventLister for each "sede" button
[divCenart, divPinos, divEcatepec, divCentral].forEach( (div) => {
    div.addEventListener("click", () => {     
        lastSedeSelected = div.id;
        toggleSelectorButton( lastSedeSelected );
        toggleSedeGeneral( lastSedeSelected );
        toggleDynamicBG( lastSedeSelected );
        changeSubMenu( lastSedeSelected );
        changeInfoWindow("sede-info");
        if(parseFloat(window.screen.availWidth) < 578){
            document.getElementById("selection-container").scrollIntoView();
        }
    })
})

//add eventListener for each "sede-info" button
infoButtonArray.forEach( (button) => {
    button.addEventListener("click", (event) => {
        if(button.id !== "sede-inicio"){
            
            toggleSedeGeneral( lastSedeSelected );
            toggleDynamicBG( lastSedeSelected );
            changeSubMenu( lastSedeSelected );            

        } else {

            toggleSedeGeneral( "poster" );
            toggleDynamicBG( "poster" );
            changeSubMenu( "main" );
            
        }   
        
        changeInfoWindow(button.id);
    });
});

//----------------------------------------------
                //FUNCTIONS
//----------------------------------------------
//change border of sede selected button
function toggleSelectorButton( selButton ){
        //get selected button with the id
        selButtonChildren = document.getElementById(selButton).children[0];
        //hide border form all buttons
        [divCenart, divPinos, divEcatepec, divCentral].forEach( (div) => {
            div.children[0].classList.remove("active");
        }); 
        selButtonChildren.classList.add("active");
}
//hide all .div-selection-main and show selected
function toggleSedeGeneral( id ){
    //hide all .div-selection-main (just removing "selected" class)
    [divSelMainPoster, divSelMainCenart, divSelMainPinos, divSelMainEcatepec, divSelMainCentral].forEach(function(div){
        div.classList.remove("selected");
    });
    //add selected class to the selected section
    selectedDiv = document.getElementById("sede-"+id);
    selectedDiv.classList.add("selected"); 
}
//change the color of dynamic background
function toggleDynamicBG( id ){
    dynamicBG.classList.remove("active", "posterBG", "cenartBG", "pinosBG", "ecatepecBG", "centralBG");
    setTimeout( () => dynamicBG.classList.add("active", id+"BG"), 50);
}
//change colors and enable submenu 
function changeSubMenu( id ){
    //change border color
    subMenu.classList.remove("menuMain", "menuCenart", "menuPinos", "menuEcatepec", "menuCentral")
    var newClass = id.charAt(0).toUpperCase() + id.slice(1);
    subMenu.classList.add("menu" + newClass);

    //lock / unlock buttons
    if( id != "main"){ 
        //unlock sub menú buttons
        [sedeInicio, sedeInfo, sedePoster, sedePrograma].forEach( ( element ) => {
            element.classList.remove("avoid-clicks");
        });
    }
}
//change the info windows and button flag
function changeInfoWindow( id ){
    //delete active class from sub-menu buttons
    infoButtonArray.forEach(function(element){
        element.classList.remove("active");
    });
    //set active to selected sub-menu button
    document.getElementById(id).classList.add("active");
    
    //get selected "sede"
    var sedeSelected;
    sedeSelected = document.getElementById("sede-"+lastSedeSelected);

    //show or hide window, depends on selected info-button
    switch(id){
        
        case "sede-info":
                prepareInfoWindow( sedeSelected, "hide", id);
            break;

        case "sede-subposter":
        case "sede-programa":
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
            //get sede name
            id = id.replace("sede-", "");

            //get data for this sede name
            sedeData = infoCarteleras[id];

            var infoToPrint = "";

            if(button === "sede-subposter"){
                //print the posterLowRes
                infoToPrint = `
                    <a href="${sedeData.posterHight}" target="_blank">
                        <img src="${sedeData.posterLow}" class="posterImage" alt="poster de ${sedeData.sede}"/>
                    </a>`;
            } else {
                //print cartelera
                infoToPrint += `
                <div class="cartelera">
                    <div class="cart-sede">
                        Cartelera - ${sedeData.sede}

                        <div class="dwn-div">
                            <a href="${sedeData.programa}" target="_blank">
                                <img src="img/calaveras/dwnIco.png" alt="boton desacargar cartelera"> <br>
                                Descargar cartelera
                            </a>
                        </div>
                    </div>`;

                for( var actividad in sedeData.actividades){
                    infoToPrint += `
                        <div class="btn-collapsible" data-target="${id}-${actividad}" onClick="toggleCartTab(this)">
                            ${actividad}
                        </div>`;
                                
                    infoToPrint += `<div class="content" id="${id}-${actividad}">`;
                    
                    for( var elm in sedeData.actividades[actividad]){
                        infoToPrint += `
                            <div class="actividad">
                                <div class="act-header">
                                    ${sedeData.actividades[actividad][elm]["nombre"]}
                                </div>
                                <div class="act-body">
                                    ${sedeData.actividades[actividad][elm]["descripción"]}  <br>  
                                    <span class="area">
                                        ${sedeData.actividades[actividad][elm]["area"]} <br>
                                    </span>                                    
                                    <span class="fecha">
                                        ${sedeData.actividades[actividad][elm]["fecha"]} 
                                        ${sedeData.actividades[actividad][elm]["hora"]}
                                    </span>
                                    
                                </div>
                            </div>
                        `;
                    }

                    infoToPrint += `</div>`;
                }
                infoToPrint += `</div>`;
            }
            sede.children[1].innerHTML = infoToPrint; 
        }
    }
}
//toggle cartelera info tab
function toggleCartTab( elm ){
    elm.classList.toggle("active");
    document.getElementById(elm.dataset.target).classList.toggle("active");
}
//show 'cartelera' from 'informacion' menu
function showCartSelected( elm ){
    changeInfoWindow( "sede-programa" );
    var trigger = document.querySelectorAll(`[data-target="${elm.dataset.sede}-${elm.innerHTML}"]`);
    var trigger = trigger[0];
    toggleCartTab( trigger );
}

