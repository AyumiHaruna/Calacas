/*  DOM Elements  */
const ageBtnList = document.querySelectorAll('.age-btn');
const ageBackground = document.querySelector('.age-background');

const collapsibleBtnTrigger = document.getElementById('collapsibleBtnTrigger');
const collapsibleBtnBlock = document.getElementById('collapsibleBtnBlock');
const collapsibleBtnImg = document.getElementById('collapsibleBtnImg');

/*  Another Vars  */
var isBgMoving = null;

const toogleBtnUpUrl = 'img/dropMenuBtnUp.png';
const toogleBtnDownUrl = 'img/dropMenuBtnDown.png';



/*  AGE BLOCK FUNCTIONS  */
//click on age-button
function ageBtnClicked( btnId ){
   
    turnOffAllAgeBtns();
    turnOnSelectedBtn( btnId );

    function turnOnSelectedBtn( btnId ){
        let selectedBtn = document.getElementById(btnId);
        let btnClass = selectedBtn.dataset.age_class;
        let btnStatus = selectedBtn.dataset.status; 

        if(btnStatus === "0"){
            btnStatus = 1;
        } else {
            btnStatus = 0;
        }
    
        selectedBtn.setAttribute('src', 'img/'+btnClass+'Btn'+btnStatus+'.png');
    };

    function turnOffAllAgeBtns(){
        ageBtnList.forEach(element => {
            element.setAttribute('src', 'img/'+element.dataset.age_class+'Btn0.png');
        });
    }
}

//hover on age-button
async function ageBtnInOut( btnId, action ){

    await resolveFadeOut();
    changeBg(btnId, action);        
    await resolveFadeIn();

    if(action === 'in'){
        scrollBackground();
    } else if(action ==='out') {
        stopScrollingBackground();
    }

   
    function resolveFadeOut(){
        return new Promise( resolve => {
            ageBackground.style.opacity = 1;

            fadeOut();

            function fadeOut(){
                ageBackground.style.opacity -= 0.1
                if( ageBackground.style.opacity > 0 ){
                    setTimeout( fadeOut,  20 )       
                } else {
                    resolve();
                }
            }      
        });
    }
    
    function resolveFadeIn(){
        return new Promise( resolve => {
            ageBackground.style.opacity = 0;

            fadeIn();

            function fadeIn(){
                ageBackground.style.opacity = parseFloat(ageBackground.style.opacity) + 0.1;
                if( ageBackground.style.opacity < 1 ){
                    setTimeout( fadeIn,  20 )       
                } else {
                    resolve();
                }
            }  
        });
    }

    //change Background image source
    function changeBg(btnId, action){
        let bgUrl = 'img/';
        if(action === 'in'){
            switch(btnId){
                case 'btnInfancia1':
                        bgUrl = bgUrl+'dotGreen.jpg';
                    break;
                case 'btnInfancia2':
                        bgUrl = bgUrl+'dotOrange.jpg';
                    break;
                case 'btnInfancia3':
                        bgUrl = bgUrl+'dotRed.jpg';
                    break;
            }    
        } else {
            bgUrl = bgUrl+'dotNormal.jpg'
        }        
        ageBackground.style.backgroundImage = "url('"+bgUrl+"')";        
    }
}

//start scrolling the background
function scrollBackground (){
    if(isBgMoving === null){
        var x = 0;
        isBgMoving = setInterval( () => {
            x+=1;
            ageBackground.style.backgroundPositionX = x+'px';
        }, 80);
    }
}
//stop scrilling the background
function stopScrollingBackground (){    
    clearInterval( isBgMoving );
    isBgMoving = null;
}



/*  COLLAPSIBLE BLOCK FUNCTIONS  */
//show/hide collapsible div
collapsibleBtnTrigger.addEventListener("click", function(){

   if( collapsibleBtnBlock.classList.contains('inactive') ){
        collapsibleBtnBlock.classList.remove('inactive');
        collapsibleBtnBlock.classList.add('active');    
        collapsibleBtnImg.setAttribute('src', toogleBtnUpUrl);
   } else if( collapsibleBtnBlock.classList.contains('active') ){ 
        collapsibleBtnBlock.classList.remove('active');
        collapsibleBtnBlock.classList.add('inactive');
        collapsibleBtnImg.setAttribute('src', toogleBtnDownUrl);
   }
    
});