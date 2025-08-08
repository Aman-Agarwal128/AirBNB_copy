// maptilersdk.config.apiKey = mapToken;

// const map = new maptilersdk.Map({
//     container: 'map',
//     style: maptilersdk.MapStyle.STREETS,
//     center: [-74.5, 40],
//     zoom: 9,
// });

// map.js

// Check if mapToken and coordinates are present
if (typeof mapToken !== "undefined" && typeof listingCoords !== "undefined") {
  const map = L.map("map").setView([listingCoords.lat, listingCoords.lng], 13);

  // Add MapTiler tiles
  L.tileLayer(`https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=${mapToken}`, {
    attribution: '&copy; <a href="https://www.maptiler.com/">MapTiler</a>',
    tileSize: 512,
    zoomOffset: -1
  }).addTo(map);

  // Add marker
  L.marker([listingCoords.lat, listingCoords.lng])
    .addTo(map)
    .bindPopup(listingTitle)
    .openPopup();
}
