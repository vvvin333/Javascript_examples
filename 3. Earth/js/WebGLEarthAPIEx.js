var earth;
const homeLatitude = 46.60616;
const homeLongitude = 30.96027;
const homeZoom = 16;
var zoomDelta = 2;

function initialize() {
    var options = {
        atmosphere: true,
        center: [0, 0],
        zoom: 0
    };
    earth = new WE.map('earth_div', options);
  
    WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(earth);

}

function goHome() {
   earth.setZoom(homeZoom);
   earth.setView([homeLatitude,homeLongitude]);
}

function showCoords() {
   alert(earth.getCenter());
}

//optional
function zoomIn() {
   earth.zoomIn(zoomDelta);
}

function zoomOut() {
   earth.zoomOut(zoomDelta);
}

function getZoom() {
   alert(earth.getZoom());
}
