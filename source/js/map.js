

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
L.marker([55.816826, 37.637276], {icon: desktopIcon}).addTo(map);
// var tabletIcon = L.icon({
//   iconUrl: '../img/map/pin_filled.svg',
//   iconSize:     [42, 42], // size of the icon
//   iconAnchor:   [25, 45], // point of the icon which will correspond to marker's location
// });

// var mobileIcon = L.icon({
//   iconUrl: '../img/map/pin_filled.svg',
//   iconSize:     [42, 42], // size of the icon
//   iconAnchor:   [25, 45], // point of the icon which will correspond to marker's location
// });



// function iconMode() {
//   let mobile = window.matchMedia('(min-width: 0px) and (max-width: 769px)');
//   let tablet = window.matchMedia('(min-width: 768px) and (max-width: 1199px)');
//   let desktop = window.matchMedia('(min-width: 1200px)');
//   var marker = desktopIcon;
//   L.marker([55.816826, 37.637276], {icon: marker}).addTo(map);

//       if(desktop.matches) {
//         marker.setIcon(desktopIcon);
//       }

//       else if(tablet.matches) {
//         marker.setIcon(tabletIcon);
//     }

//     // Disable (for desktop)
//     else if(mobile.matches ) {
//       marker.setIcon(mobileIcon);
//     }
// }

// window.addEventListener('load', () => {
//   iconMode();
// });

// window.addEventListener('resize', () => {
//     iconMode();
// });

};


export default displayMap;
