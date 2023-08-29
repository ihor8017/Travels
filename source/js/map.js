

const picture = document.querySelector('.contacts__map-container picture');
picture.style.display = 'none';

const displayMap = () => {
  var map = L.map('map').setView([55.824475, 37.615238], 13);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var desktopIcon = L.icon({
  iconUrl: '../img/map/pin_filled.svg',
  iconSize:     [48, 48], // size of the icon
  iconAnchor:   [25, 45], // point of the icon which will correspond to marker's location
});
var layer = L.marker([55.816826, 37.637276], {icon: desktopIcon}).addTo(map);

var tabletIcon = L.icon({
  iconUrl: '../img/map/pin_filled.svg',
  iconSize:     [42, 42], // size of the icon
  iconAnchor:   [21, 37], // point of the icon which will correspond to marker's location
});

var mobileIcon = L.icon({
  iconUrl: '../img/map/pin_filled.svg',
  iconSize:     [28, 28], // size of the icon
  iconAnchor:   [16, 25], // point of the icon which will correspond to marker's location
});



function iconMode() {
  let mobile = window.matchMedia('(min-width: 0px) and (max-width: 769px)');
  let tablet = window.matchMedia('(min-width: 768px) and (max-width: 1199px)');
  let desktop = window.matchMedia('(min-width: 1200px)');


      if(desktop.matches) {
        layer.remove();
        layer = L.marker([55.816826, 37.637276], {icon: desktopIcon}).addTo(map);
      }

      else if(tablet.matches) {
        layer.remove();
        layer = L.marker([55.816826, 37.637276], {icon: tabletIcon}).addTo(map);
    }

    // Disable (for desktop)
    else if(mobile.matches ) {
      layer.remove();
      layer = L.marker([55.816826, 37.637276], {icon: mobileIcon}).addTo(map);
    }
}

window.addEventListener('load', () => {
  iconMode();
});

window.addEventListener('resize', () => {
    iconMode();
});

};


export default displayMap;
