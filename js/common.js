//this code is from https://gist.github.com/mpetroff/4666657beeb85754611f */
//toggle menu without jquery
// Obtiene ubicación del usuario

// Ubicacion usuario
function distance(lon1, lat1, lon2, lat2) {
    let R = 6371; // Radius of the earth in km
    let dLat = (lat2-lat1).toRad();  // Javascript functions in radians
    let dLon = (lon2-lon1).toRad(); 
    let a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) * 
            Math.sin(dLon/2) * Math.sin(dLon/2); 
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    let d = R * c; // Distance in km
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
      let ecLat=19.5720072
      let ecLon=-99.1172226

    console.log(pos.coords.longitude); 
    console.log(
      distance(pos.coords.longitude, pos.coords.latitude, cnaLon, cnaLat),
      distance(pos.coords.longitude, pos.coords.latitude, pinoLon, pinoLat),
      distance(pos.coords.longitude, pos.coords.latitude, caLon, caLat),
      distance(pos.coords.longitude, pos.coords.latitude, ecLon, ecLat)
    ); 
  });





let collapseElements = document.querySelectorAll('[data-toggle="collapse"]');
const CLASS_SHOW = 'show';
const CLASS_COLLAPSE = 'collapse';
const CLASS_COLLAPSING = 'collapsing';
const CLASS_COLLAPSED = 'collapsed';
const ANIMATION_TIME = 350; // 0.35s

function handleCollapseElementClick(e) {
    let el = e.currentTarget;
    let collapseTargetId = el.dataset.target || el.href || null;
    if (collapseTargetId) {
        let targetEl = document.querySelector(collapseTargetId);
        let isShown = targetEl.classList.contains(CLASS_SHOW) || targetEl.classList.contains(CLASS_COLLAPSING);
        if(!isShown) {
            targetEl.classList.remove(CLASS_COLLAPSE);
            targetEl.classList.add(CLASS_COLLAPSING);
            targetEl.style.height = 0;
            targetEl.classList.remove(CLASS_COLLAPSED);
            setTimeout(() => {
                targetEl.classList.remove(CLASS_COLLAPSING);
                targetEl.classList.add(CLASS_COLLAPSE, CLASS_SHOW);
                targetEl.style.height = '';
            }, ANIMATION_TIME);
            targetEl.style.height = `${targetEl.scrollHeight}px`;
        } else {
            targetEl.style.height = `${targetEl.getBoundingClientRect().height}px`;
            targetEl.offsetHeight; // force reflow
            targetEl.classList.add(CLASS_COLLAPSING);
            targetEl.classList.remove(CLASS_COLLAPSE, CLASS_SHOW);
            targetEl.style.height = '';
            setTimeout(() => {
                targetEl.classList.remove(CLASS_COLLAPSING);
                targetEl.classList.add(CLASS_COLLAPSE);
            }, ANIMATION_TIME);
        }
    }
}

collapseElements.forEach((el) => {
    el.addEventListener('click', handleCollapseElementClick);
});