import config from "./mapboxKey.js";

mapboxgl.accessToken = config.apiKey;

function userCurrentPosition(){
navigator.geolocation.getCurrentPosition(successLocation, errorLocation,{
    enableHighAccuracy: true
})

function successLocation(position){
    setupMap([position.coords.longitude, position.coords.latitude], 12);
}
function errorLocation(){
    setupMap([78.9629, 20.5937], 4)
    alert("Enable this location to see current position")
}
}

function setupMap(center, zoom){
    const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12',
    center: center, 
    zoom: zoom,
});
const nav = new mapboxgl.NavigationControl()
map.addControl(nav)

map.addControl(
    new MapboxDirections({
        accessToken: mapboxgl.accessToken
    }),
    'top-left'
);
}
userCurrentPosition()

document.querySelector("#userCurrentPosition").addEventListener("click", userCurrentPosition)